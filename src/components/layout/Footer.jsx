export default function Footer() {
    return (
        <footer style={{ background: '#000', padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#D4AF37', marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>LA PROHIBIDA</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Tafí del Valle, Tucumán</p>
                </div>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    {[
                        { href: '#', icon: 'fab fa-instagram' },
                        { href: '#', icon: 'fab fa-facebook' },
                        { href: 'https://wa.me/5493816789468', icon: 'fab fa-whatsapp' },
                    ].map(({ href, icon }) => (
                        <a key={icon} href={href} style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s', fontSize: '1.5rem' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                            onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                            <i className={icon} />
                        </a>
                    ))}
                </div>

                <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
