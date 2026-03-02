import { useState, useEffect, useRef } from 'react'

const SLIDES = [
    '/fotos/WhatsApp Image 2024-11-30 at 22.34.46.jpeg',
    '/fotos/WhatsApp Image 2025-12-08 at 11.27.07 (1).jpeg',
    '/fotos/WhatsApp Image 2025-12-08 at 11.27.07 (2).jpeg',
    '/fotos/WhatsApp Image 2025-12-08 at 11.27.07 (3).jpeg',
    '/fotos/WhatsApp Image 2026-01-08 at 18.33.41.jpeg',
    '/fotos/WhatsApp Image 2025-12-08 at 11.27.09.jpeg',
    '/fotos/WhatsApp Image 2025-12-08 at 11.28.06.jpeg',
    '/fotos/WhatsApp Image 2025-12-08 at 11.28.27.jpeg',
    '/fotos/WhatsApp Image 2025-12-08 at 11.29.09.jpeg',
    '/fotos/WhatsApp Image 2025-12-16 at 15.06.14.jpeg',
    '/fotos/WhatsApp Image 2025-12-16 at 15.06.16.jpeg',
]

export default function Gallery() {
    const [current, setCurrent] = useState(0)
    const intervalRef = useRef(null)

    const startAuto = () => {
        intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 5000)
    }

    useEffect(() => {
        startAuto()
        return () => clearInterval(intervalRef.current)
    }, [])

    const move = (dir) => {
        setCurrent(c => (c + dir + SLIDES.length) % SLIDES.length)
    }

    const pause = () => clearInterval(intervalRef.current)
    const resume = () => startAuto()

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'ArrowLeft') move(-1)
            if (e.key === 'ArrowRight') move(1)
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    return (
        <section id="galeria" style={{ padding: '5rem 1rem', background: '#0a0a0a' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', padding: '0 1rem' }} data-aos="fade-right">
                    <div>
                        <span style={{ color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: 600 }}>Nuestra Galería</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: '0.5rem', fontFamily: "'Playfair Display', serif" }}>Explorá cada rincón</h2>
                    </div>
                    <p style={{ color: '#9ca3af', maxWidth: '24rem', textAlign: 'right' }}>
                        Deslizá para descubrir la magia de La Prohibida. <br />
                        <span style={{ color: '#D4AF37' }}>11 fotos disponibles</span>
                    </p>
                </div>

                <div
                    className="carousel-container"
                    data-aos="zoom-in" data-aos-duration="1200"
                    onMouseEnter={pause}
                    onMouseLeave={resume}
                >
                    <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {SLIDES.map((src, i) => (
                            <div key={src} className={`carousel-slide ${i === current ? 'active' : ''}`}>
                                <img src={src} alt={`Foto ${i + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn prev" onClick={() => move(-1)} aria-label="Anterior">
                        <i className="fas fa-chevron-left" />
                    </button>
                    <button className="carousel-btn next" onClick={() => move(1)} aria-label="Siguiente">
                        <i className="fas fa-chevron-right" />
                    </button>

                    <div className="carousel-indicators">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                className={`indicator ${i === current ? 'active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Ir a foto ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
