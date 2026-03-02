const features = [
    {
        icon: 'fas fa-bed',
        title: '3 Habitaciones',
        desc: 'Una con cama matrimonial y dos con camas individuales (2 c/u).',
        delay: 100,
    },
    {
        icon: 'fas fa-utensils',
        title: 'Totalmente Equipada',
        desc: '2 baños completos, cocina con todo lo necesario y comedor amplio.',
        delay: 200,
    },
    {
        icon: 'fas fa-mountain',
        title: 'Deck con Vista',
        desc: 'Disfrutá de una hermosa vista a los cerros desde el deck privado.',
        delay: 300,
    },
    {
        icon: 'fas fa-tv',
        title: 'Entretenimiento',
        desc: 'Garage, asador portátil y Direct TV para tu entretenimiento.',
        delay: 400,
    },
]

const conditions = [
    { icon: 'fas fa-clock', label: 'Mínimo 3 días de alquiler' },
    { icon: 'fas fa-check-circle', label: 'Se reserva con seña' },
    { icon: 'fas fa-paw', label: 'Pet Friendly' },
]

export default function Features() {
    return (
        <section id="caracteristicas" style={{ padding: '8rem 1.5rem', position: 'relative', overflow: 'hidden', background: '#050505' }}>
            <div style={{ position: 'absolute', top: '5rem', right: 0, width: '24rem', height: '24rem', background: 'rgba(176,141,32,0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />
            <div style={{ position: 'absolute', bottom: '5rem', left: 0, width: '24rem', height: '24rem', background: 'rgba(30,58,138,0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />

            <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span style={{ color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: 600 }}>Comodidades</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
                        Todo lo que necesitás
                    </h2>
                    <div style={{ width: '6rem', height: '0.25rem', background: '#C5A028', margin: '0 auto', borderRadius: '9999px' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {features.map(({ icon, title, desc, delay }) => (
                        <div
                            key={title}
                            className="glass-card"
                            data-aos="fade-up"
                            data-aos-delay={delay}
                            style={{ padding: '2rem', borderRadius: '1rem', textAlign: 'center', transition: 'transform 0.3s' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ width: '4rem', height: '4rem', background: 'rgba(212,175,55,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                <i className={icon} style={{ fontSize: '1.5rem', color: '#D4AF37' }} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                            <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }} data-aos="fade-up">
                    <div className="glass-card" style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(197,160,40,0.2)' }}>
                        {conditions.map(({ icon, label }, idx) => (
                            <>
                                {idx > 0 && <div key={`sep${idx}`} style={{ width: '1px', background: 'rgba(255,255,255,0.1)', alignSelf: 'stretch' }} />}
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D4AF37', fontWeight: 600 }}>
                                    <i className={icon} style={{ fontSize: '1.5rem' }} />
                                    <span>{label}</span>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
