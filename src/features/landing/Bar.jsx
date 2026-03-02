export default function Bar() {
    return (
        <section id="bar" style={{ padding: '8rem 1.5rem', background: '#0a0a0a', position: 'relative' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }} data-aos="fade-up">
                <div style={{ marginBottom: '2rem' }}>
                    <img
                        src="/fotos/LOGO.png"
                        alt="Logo del Bar"
                        style={{ width: '8rem', height: '8rem', margin: '0 auto', borderRadius: '50%', objectFit: 'cover', border: '4px solid #D4AF37', display: 'block' }}
                    />
                </div>
                <span style={{ color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: 600 }}>Bar Recomendado</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
                    Pizzas y Bebidas
                </h2>
                <p style={{ color: '#d1d5db', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
                    Visita este bar, donde podrás disfrutar de ricas pizzas y una gran variedad de bebidas en un ambiente relajado.
                </p>
                <a
                    href="https://wa.me/5493814131225?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20las%20pizzas%20y%20las%20bebidas%20del%20bar"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        padding: '1rem 2rem', background: '#C5A028', color: '#000',
                        fontWeight: 700, borderRadius: '9999px', textDecoration: 'none',
                        transition: 'background 0.3s', display: 'inline-block'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#B08D20'}
                    onMouseLeave={e => e.currentTarget.style.background = '#C5A028'}
                >
                    Consultar
                </a>
            </div>
        </section>
    )
}
