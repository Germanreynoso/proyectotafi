export default function Header() {
    return (
        <header style={{
            position: 'fixed', width: '100%', top: 0, zIndex: 50,
            transition: 'all 0.3s',
            background: 'rgba(5,5,5,0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="max-w-7xl mx-auto px-6" style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className="text-gradient-gold" style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Playfair Display', serif" }}>
                    LA PROHIBIDA
                </h1>
                <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }} className="desktop-nav">
                    <a href="#inicio" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = '#D4AF37'}
                        onMouseLeave={e => e.target.style.color = '#d1d5db'}>Inicio</a>
                    <a href="#caracteristicas" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = '#D4AF37'}
                        onMouseLeave={e => e.target.style.color = '#d1d5db'}>Experiencia</a>
                    <a href="#galeria" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = '#D4AF37'}
                        onMouseLeave={e => e.target.style.color = '#d1d5db'}>Galería</a>
                    <a href="#bar" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = '#D4AF37'}
                        onMouseLeave={e => e.target.style.color = '#d1d5db'}>Bar</a>
                    <a href="#ubicacion" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.target.style.color = '#D4AF37'}
                        onMouseLeave={e => e.target.style.color = '#d1d5db'}>Ubicación</a>
                    <a href="#contacto" style={{
                        color: '#D4AF37', border: '1px solid #D4AF37',
                        padding: '0.5rem 1.5rem', borderRadius: '9999px',
                        textDecoration: 'none', transition: 'all 0.3s'
                    }}
                        onMouseEnter={e => { e.target.style.background = '#D4AF37'; e.target.style.color = '#000'; }}
                        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#D4AF37'; }}>
                        Reservar
                    </a>
                </nav>
            </div>
        </header>
    )
}
