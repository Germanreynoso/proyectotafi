
(function () {
    // --- Configuration ---
    // API key moved to .env (VITE_GROQ_API_KEY) - this file is legacy, see src/components/ui/Chatbot.jsx
    const GROQ_API_KEY = "";
    const SYSTEM_PROMPT = `
        Eres un asistente amable y servicial para "La Prohibida", una exclusiva casa de alquiler temporario en Tafí del Valle, Tucumán.
        Tu objetivo es ayudar a los visitantes con información sobre la casa, servicios y reservas.
        
        Información clave sobre La Prohibida:
        - Ubicación: La Ovejería, Tafí del Valle, Tucumán (a 5 km de La Villa). Vistas panorámicas a los cerros.
        - Habitaciones: 3 habitaciones (una con cama matrimonial y dos con dos camas individuales cada una).
        - Comodidades: 2 baños completos, cocina totalmente equipada, comedor amplio, garage, asador portátil, Direct TV y deck privado con vista. NO cuenta con Wi-Fi ni internet (ideal para desconectarse).
        - Servicios Plus: Cuenta con Garage, asador portátil y entretenimiento por Direct TV.
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
    `;

    // --- Inject Styles ---
    const styles = `
        #chatbot-widget {
            position: fixed;
            bottom: 40px;
            right: 40px;
            z-index: 1000;
            font-family: 'Poppins', sans-serif;
        }

        #chatbot-button {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #D4AF37 0%, #C5A028 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 2px solid rgba(255,255,255,0.1);
        }

        #chatbot-button:hover {
            transform: scale(1.1) rotate(5deg);
        }

        #chatbot-button i {
            font-size: 30px;
            color: #050505;
        }

        #chatbot-window {
            position: absolute;
            bottom: 85px;
            right: 0;
            width: 350px;
            height: 500px;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 24px;
            display: none;
            flex-direction: column;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        #chatbot-header {
            padding: 20px;
            background: linear-gradient(to right, rgba(212, 175, 55, 0.1), transparent);
            border-bottom: 1px solid rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            gap: 12px;
        }

        #chatbot-header .status-dot {
            width: 8px;
            height: 8px;
            background: #25D366;
            border-radius: 50%;
            box-shadow: 0 0 10px #25D366;
        }

        #chatbot-header h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: #D4AF37;
            font-family: 'Playfair Display', serif;
        }

        #chatbot-messages {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            scrollbar-width: thin;
            scrollbar-color: #333 transparent;
        }

        #chatbot-messages::-webkit-scrollbar {
            width: 4px;
        }

        #chatbot-messages::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 10px;
        }

        .message {
            max-width: 85%;
            padding: 12px 16px;
            border-radius: 18px;
            font-size: 14px;
            line-height: 1.5;
            position: relative;
        }

        .message.bot {
            align-self: flex-start;
            background: rgba(255, 255, 255, 0.05);
            color: #f5f5f5;
            border-bottom-left-radius: 4px;
            border: 1px solid rgba(255,255,255,0.03);
        }

        .message.user {
            align-self: flex-end;
            background: #D4AF37;
            color: #000;
            border-bottom-right-radius: 4px;
            font-weight: 500;
        }

        #chatbot-input-container {
            padding: 20px;
            border-top: 1px solid rgba(255,255,255,0.05);
            display: flex;
            gap: 10px;
        }

        #chatbot-input {
            flex: 1;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 10px 15px;
            color: #fff;
            font-size: 14px;
            outline: none;
            transition: border-color 0.3s;
        }

        #chatbot-input:focus {
            border-color: #D4AF37;
        }

        #chatbot-send {
            background: #D4AF37;
            color: #000;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }

        #chatbot-send:hover {
            transform: scale(1.05);
            background: #F2D06B;
        }

        .typing-indicator {
            padding: 12px 16px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 18px;
            align-self: flex-start;
            display: flex;
            gap: 4px;
        }

        .dot {
            width: 4px;
            height: 4px;
            background: #888;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
        }

        .dot:nth-child(1) { animation-delay: -0.32s; }
        .dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1.0); }
        }

        @media (max-width: 480px) {
            #chatbot-window {
                width: 90vw;
                right: -20px;
                height: 70vh;
            }
            #chatbot-widget {
                right: 20px;
                bottom: 20px;
            }
        }
    `;

    // --- Inject HTML ---
    const widgetHTML = `
        <div id="chatbot-widget">
            <div id="chatbot-window">
                <div id="chatbot-header">
                    <div class="status-dot"></div>
                    <h3>Asistente La Prohibida</h3>
                </div>
                <div id="chatbot-messages">
                    <div class="message bot">Hola! Soy el asistente virtual de La Prohibida. En qué puedo ayudarte hoy?</div>
                </div>
                <form id="chatbot-input-container">
                    <input type="text" id="chatbot-input" placeholder="Escribe tu mensaje..." autocomplete="off">
                    <button type="submit" id="chatbot-send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
            <div id="chatbot-button">
                <i class="fas fa-comment-dots"></i>
            </div>
        </div>
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    const container = document.createElement('div');
    container.innerHTML = widgetHTML;
    document.body.appendChild(container);

    // --- Logic ---
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('chatbot-button');
        const win = document.getElementById('chatbot-window');
        const form = document.getElementById('chatbot-input-container');
        const input = document.getElementById('chatbot-input');
        const messagesContainer = document.getElementById('chatbot-messages');

        if (!btn || !win || !form) {
            console.error("Chatbot elements not found");
            return;
        }

        let history = [{ role: "system", content: SYSTEM_PROMPT }];

        btn.onclick = () => {
            const isOpen = win.style.display === 'flex';
            win.style.display = isOpen ? 'none' : 'flex';
            if (!isOpen) input.focus();
        };

        function addMessage(text, role) {
            const msg = document.createElement('div');
            msg.className = `message ${role}`;
            msg.textContent = text;
            messagesContainer.appendChild(msg);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            history.push({ role: role === 'bot' ? 'assistant' : 'user', content: text });
        }

        function showTyping() {
            const typing = document.createElement('div');
            typing.className = 'typing-indicator';
            typing.id = 'typing-indicator';
            typing.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
            messagesContainer.appendChild(typing);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function hideTyping() {
            const typing = document.getElementById('typing-indicator');
            if (typing) typing.remove();
        }

        form.onsubmit = async (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;

            input.value = '';
            addMessage(text, 'user');
            showTyping();

            try {
                const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${GROQ_API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: "llama-3.3-70b-versatile",
                        messages: history,
                        temperature: 0.7,
                        max_tokens: 500
                    })
                });

                const data = await response.json();
                hideTyping();

                if (data.choices && data.choices[0]) {
                    const botReply = data.choices[0].message.content;
                    addMessage(botReply, 'bot');
                } else {
                    addMessage("Lo siento, tuve un problema al procesar tu mensaje. ¿Podrías intentar de nuevo?", 'bot');
                }
            } catch (error) {
                console.error("Error calling Groq:", error);
                hideTyping();
                addMessage("Lo siento, hay un problema de conexión. Por favor, intenta más tarde.", 'bot');
            }
        };
    });
})();
