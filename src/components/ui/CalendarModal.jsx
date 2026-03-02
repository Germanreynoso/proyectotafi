import { useState } from 'react'

const AVAILABLE_DAYS = [1, 2, 3, 4] // Lunes a Jueves (0=Dom)

function generateCalendarDays() {
    const year = 2026, month = 1
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth, year, month }
}

export default function CalendarModal({ isOpen, onClose }) {
    const [selected, setSelected] = useState([])
    const { firstDay, daysInMonth, year, month } = generateCalendarDays()
    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

    const toggleDate = (day) => {
        setSelected(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day])
    }

    const sendReservation = () => {
        if (selected.length === 0) { alert('Por favor seleccioná al menos una fecha.'); return }
        const datesStr = [...selected].sort((a, b) => a - b).join(', ')
        const msg = `Hola, me gustaría reservar para los días: ${datesStr} de febrero de 2026.`
        window.open(`https://wa.me/5493816789468?text=${encodeURIComponent(msg)}`, '_blank')
        onClose()
        setSelected([])
    }

    if (!isOpen) return null

    const emptyCells = Array.from({ length: firstDay }, (_, i) => <div key={`e${i}`} />)
    const dayCells = Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1
        const dow = new Date(year, month, day).getDay()
        const available = AVAILABLE_DAYS.includes(dow)
        const isSelected = selected.includes(day)
        return (
            <div
                key={day}
                className={`calendar-day ${available ? (isSelected ? 'selected' : 'available') : 'unavailable'}`}
                onClick={() => available && toggleDate(day)}
            >
                {day}
            </div>
        )
    })

    return (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '1rem', maxWidth: '32rem', width: '100%', margin: '0 1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#D4AF37', fontFamily: "'Playfair Display', serif" }}>
                        Fechas Disponibles — Febrero 2026
                    </h3>
                    <button onClick={onClose} style={{ color: '#9ca3af', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div className="calendar-header">Febrero 2026</div>
                    <div className="calendar-grid">
                        {daysOfWeek.map(d => <div key={d} className="calendar-day calendar-header" style={{ fontSize: '0.75rem' }}>{d}</div>)}
                        {emptyCells}
                        {dayCells}
                    </div>
                </div>

                <div style={{ marginTop: '1rem', textAlign: 'left' }}>
                    <p style={{ color: '#d1d5db' }}>Fechas seleccionadas:</p>
                    <ul style={{ color: '#D4AF37', paddingLeft: '1rem' }}>
                        {[...selected].sort((a, b) => a - b).map(d => <li key={d}>{d} de febrero</li>)}
                    </ul>
                </div>

                <button onClick={sendReservation} style={{
                    marginTop: '1rem', padding: '0.5rem 1.5rem',
                    background: '#C5A028', color: '#000',
                    borderRadius: '9999px', border: 'none',
                    cursor: 'pointer', fontWeight: 600, transition: 'background 0.3s'
                }}
                    onMouseEnter={e => e.currentTarget.style.background = '#B08D20'}
                    onMouseLeave={e => e.currentTarget.style.background = '#C5A028'}>
                    Reservar Seleccionados
                </button>
            </div>
        </div>
    )
}
