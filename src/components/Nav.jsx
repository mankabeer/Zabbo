import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-monogram">
        B∴C
        <span>Bank of Curiosity</span>
      </div>
      <ul className="nav-links">
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#sessions">Sessions</a></li>
        <li><a href="#branches">For branches</a></li>
        <li><a href="#open-account">Open an account</a></li>
      </ul>
    </nav>
  )
}
