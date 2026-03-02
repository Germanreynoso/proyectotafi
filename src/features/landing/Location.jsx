export default function Location() {
    return (
        <section id="ubicacion" style={{ padding: '8rem 1.5rem', background: '#050505', position: 'relative' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <div data-aos="fade-right">
                    <span style={{ color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: 600 }}>Ubicación Privilegiada</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
                        La Ovejería
                    </h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                        Nuestra casa se encuentra en <strong>La Ovejería, a solo 5 km de La Villa</strong>.
                        Una ubicación estratégica que te ofrece privacidad absoluta sin alejarte de los puntos de interés.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                        {[
                            { icon: 'fas fa-map-pin', text: 'Tafí del Valle, Tucumán, Argentina' },
                            { icon: 'fas fa-mountain', text: 'Vistas panorámicas a los cerros' },
                        ].map(({ icon, text }) => (
                            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#9ca3af' }}>
                                <i className={icon} style={{ color: '#D4AF37', width: '1.5rem' }} />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://www.google.com/maps/place/Caba%C3%B1a+de+Lucas"
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#D4AF37', fontWeight: 600, textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = '#D4AF37'}
                    >
                        VER EN GOOGLE MAPS <i className="fas fa-arrow-right" />
                    </a>
                </div>

                <div style={{ position: 'relative' }} data-aos="fade-left">
                    <div style={{ position: 'absolute', inset: '-1rem', background: 'rgba(197,160,40,0.2)', borderRadius: '1rem', filter: 'blur(8px)' }} />
                    <iframe
                        title="Mapa La Prohibida"
                        style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', filter: 'grayscale(100%)', transition: 'filter 0.5s' }}
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8362847267847!2d-65.7529971!3d-26.8581366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942223001da2eb8b%3A0xa4803e6474139b91!2sCaba%C3%B1a%20de%20Lucas!5e0!3m2!1ses!2sar!4v1234567890"
                        onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                        onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                    />
                </div>
            </div>
        </section>
    )
}
