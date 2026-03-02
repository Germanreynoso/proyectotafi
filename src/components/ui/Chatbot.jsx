import { useState, useRef, useEffect } from 'react'

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY

const SYSTEM_PROMPT = `
  Eres un asistente amable y servicial para "La Prohibida", una exclusiva casa de alquiler temporario en Tafí del Valle, Tucumán.
  Tu objetivo es ayudar a los visitantes con información sobre la casa, servicios y reservas.
  
  Información clave sobre La Prohibida:
  - Ubicación: La Ovejería, Tafí del Valle, Tucumán (a 5 km de La Villa). Vistas panorámicas a los cerros.
  - Habitaciones: 3 habitaciones (una con cama matrimonial y dos con dos camas individuales cada una).
  - Comodidades: 2 baños completos, cocina totalmente equipada, comedor amplio, garage, asador portátil, Direct TV y deck privado con vista. NO cuenta con Wi-Fi ni internet (ideal para desconectarse).
  - Servicios Plus: Garage, asador portátil y entretenimiento por Direct TV.
  - Condiciones: Mínimo 3 días de alquiler. Las reservas se realizan con una seña previa. Se aceptan mascotas (Pet Friendly).
  - Contacto Principal: Cel/WhatsApp +54 9 381 678-9468.
  - Bar Recomendado: Ofrecemos recomendaciones de un bar local de Pizzas y Bebidas (+54 9 381 413-1225).
  - Estilo: Moderno, confortable, tranquilo y exclusivo.
  
  Instrucciones:
  - Responde siempre en español de forma cordial y profesional.
  - Si no conoces un dato específico, invita al usuario a contactarse por WhatsApp al +54 9 381 678-9468.
  - Mantén las respuestas concisas y útiles.
  - No inventes precios, ya que varían por temporada. Sugiere consultar directamente.
  - IMPORTANTE: Si preguntan por internet o Wi-Fi, aclara explícitamente que NO dispone de ese servicio.
`

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([{ role: 'bot', text: 'Hola! Soy el asistente virtual de La Prohibida. ¿En qué puedo ayudarte hoy?' }])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)
    const historyRef = useRef([{ role: 'system', content: SYSTEM_PROMPT }])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isTyping])

    const sendMessage = async (e) => {
        e.preventDefault()
        const text = input.trim()
        if (!text) return

        setInput('')
        setMessages(prev => [...prev, { role: 'user', text }])
        historyRef.current.push({ role: 'user', content: text })
        setIsTyping(true)

        try {
            const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: historyRef.current,
                    temperature: 0.7,
                    max_tokens: 500,
                }),
            })

            const data = await res.json()
            const botReply = data.choices?.[0]?.message?.content ?? 'Lo siento, tuve un problema. ¿Podrías intentar de nuevo?'
            historyRef.current.push({ role: 'assistant', content: botReply })
            setMessages(prev => [...prev, { role: 'bot', text: botReply }])
        } catch {
            setMessages(prev => [...prev, { role: 'bot', text: 'Lo siento, hay un problema de conexión. Por favor, intenta más tarde.' }])
        } finally {
            setIsTyping(false)
        }
    }

    return (
        <div id="chatbot-widget">
            {isOpen && (
                <div id="chatbot-window">
                    <div id="chatbot-header">
                        <div className="status-dot" />
                        <h3>Asistente La Prohibida</h3>
                    </div>

                    <div id="chatbot-messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`message ${msg.role}`}>{msg.text}</div>
                        ))}
                        {isTyping && (
                            <div className="typing-indicator">
                                <div className="dot" /><div className="dot" /><div className="dot" />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form id="chatbot-input-container" onSubmit={sendMessage}>
                        <input
                            id="chatbot-input"
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            autoComplete="off"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button type="submit" id="chatbot-send">
                            <i className="fas fa-paper-plane" />
                        </button>
                    </form>
                </div>
            )}

            <div id="chatbot-button" onClick={() => setIsOpen(o => !o)} role="button" aria-label="Abrir chat">
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`} />
            </div>
        </div>
    )
}
