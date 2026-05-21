export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-mark">Bank of Curiosity</div>
          <p className="footer-tagline">
            An institution for people who suspect the world was designed more carefully
            than anyone told them — and who'd like ninety minutes to find out how.
          </p>
        </div>
        <div className="footer-meta">
          <div>Brand strategy by</div>
          <div><a href="mailto:taxi@company.com">Preposition Studio</a></div>
          <div style={{ marginTop: '1rem', color: 'var(--rule)', userSelect: 'none' }}>──────────</div>
          <div style={{ marginTop: '0.5rem' }}>April 2026</div>
          <div>Pune, India</div>
        </div>
      </div>
    </footer>
  )
}
