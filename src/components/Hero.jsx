export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow reveal" style={{ animationDelay: '0.1s' }}>
        <span className="label">Est. 2026 · Pune</span>
      </div>

      <h1 className="hero-title reveal" style={{ transitionDelay: '0.15s' }}>
        Bank of<br /><em>Curiosity</em>
      </h1>

      <hr className="hero-rule reveal" style={{ transitionDelay: '0.3s' }} />

      <p className="hero-sub reveal" style={{ transitionDelay: '0.4s' }}>
        An institution for people who suspect the world<br />
        was designed more carefully than anyone told them
      </p>

      <div className="hero-stamp">
        <div className="stamp-inner">
          <span className="stamp-main">Bank of</span>
          <span className="stamp-main">Curiosity</span>
          <span>— Deposited —</span>
          <span>2026</span>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
