export default function Contact() {
    return (
        <section id="contacto" style={{ padding: '8rem 1.5rem', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: "url('/fotos/WhatsApp Image 2024-11-30 at 22.34.46.jpeg')",
                backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2
            }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #050505, rgba(5,5,5,0.8), transparent)' }} />

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }} data-aos="fade-up">
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, marginBottom: '2rem', fontFamily: "'Playfair Display', serif" }}>
                    ¿Listo para tu escapada?
                </h2>
                <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '3rem', maxWidth: '42rem', margin: '0 auto 3rem' }}>
                    Reservá tu estadía hoy mismo y asegurá tus días de descanso en el paraíso.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                    <a
                        href="https://wa.me/5493816789468"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            background: '#25D366', color: '#fff', fontWeight: 700,
                            padding: '1.25rem 2.5rem', borderRadius: '9999px',
                            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem',
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 15px rgba(37,211,102,0.3)'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#20bd5a'; e.currentTarget.style.transform = 'scale(1.05)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'scale(1)' }}
                    >
                        <i className="fab fa-whatsapp" style={{ fontSize: '1.875rem' }} />
                        <div style={{ textAlign: 'left' }}>
                            <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 400, opacity: 0.9 }}>Escribinos al</span>
                            <span style={{ fontSize: '1.125rem' }}>WhatsApp</span>
                        </div>
                    </a>

                    <a
                        href="tel:3816789468"
                        style={{
                            background: '#fff', color: '#000', fontWeight: 700,
                            padding: '1.25rem 2.5rem', borderRadius: '9999px',
                            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.transform = 'scale(1.05)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'scale(1)' }}
                    >
                        <i className="fas fa-phone" style={{ fontSize: '1.5rem', color: '#B08D20' }} />
                        <div style={{ textAlign: 'left' }}>
                            <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 400, opacity: 0.7 }}>Llamanos al</span>
                            <span style={{ fontSize: '1.125rem' }}>381 678-9468</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
