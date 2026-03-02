export default function Hero({ onOpenModal }) {
    return (
        <section
            id="inicio"
            className="hero-section"
            style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: "url('/fotos/WhatsApp Image 2024-11-30 at 22.34.46.jpeg')",
            }}
        >
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5), #050505)'
            }} />

            <div style={{
                position: 'relative', zIndex: 10,
                textAlign: 'center', padding: '0 1rem',
                maxWidth: '64rem', margin: '0 auto'
            }} data-aos="fade-up" data-aos-duration="1000">
                <p style={{
                    color: '#D4AF37', letterSpacing: '0.3em',
                    textTransform: 'uppercase', marginBottom: '1rem',
                    fontSize: '0.875rem', fontWeight: 600
                }}>Tafí del Valle, Tucumán</p>

                <h2 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 700, marginBottom: '2rem',
                    lineHeight: 1.2, color: '#fff', fontFamily: "'Playfair Display', serif"
                }}>
                    Descubrí tu <br />
                    <span className="text-gradient-gold" style={{ fontStyle: 'italic' }}>Refugio Exclusivo</span>
                </h2>

                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: '3rem', color: '#d1d5db', fontWeight: 300, maxWidth: '42rem', margin: '0 auto 3rem' }}>
                    Donde la naturaleza se encuentra con el confort absoluto. Una experiencia inolvidable te espera.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
                    <a href="#contacto" style={{
                        position: 'relative',
                        padding: '1rem 2rem',
                        background: '#C5A028', color: '#000',
                        fontWeight: 700, borderRadius: '9999px',
                        textDecoration: 'none',
                        boxShadow: '0 0 20px rgba(212,175,55,0.3)',
                        transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem'
                    }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(212,175,55,0.6)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,55,0.3)'}>
                        RESERVAR AHORA <i className="fas fa-arrow-right" />
                    </a>

                    <button onClick={onOpenModal} style={{
                        padding: '1rem 2rem',
                        border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
                        borderRadius: '9999px', background: 'transparent',
                        backdropFilter: 'blur(4px)', cursor: 'pointer',
                        transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem'
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <i className="fas fa-calendar" /> Fechas Disponibles
                    </button>

                    <a href="https://wa.me/5493816789468" target="_blank" rel="noreferrer" style={{
                        padding: '1rem 2rem',
                        border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
                        borderRadius: '9999px', textDecoration: 'none',
                        backdropFilter: 'blur(4px)',
                        transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem'
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <i className="fab fa-whatsapp" /> Consultar
                    </a>
                </div>
            </div>

            <div style={{
                position: 'absolute', bottom: '2.5rem', left: '50%',
                transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)'
            }} className="animate-bounce">
                <i className="fas fa-chevron-down" style={{ fontSize: '1.5rem' }} />
            </div>
        </section>
    )
}
