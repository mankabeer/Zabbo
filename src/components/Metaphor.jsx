import useScrollReveal from '../hooks/useScrollReveal'

const vocab = [
  { from: 'Register',       to: 'Open an account' },
  { from: 'Partner',        to: 'Become a branch' },
  { from: 'Launch event',   to: 'Opening hours' },
  { from: 'Attendance',     to: 'Balance' },
  { from: 'Referral',       to: 'Transfer' },
  { from: 'Archive',        to: 'The Vault' },
  { from: 'Lapsed member',  to: 'NPA' },
  { from: 'Newsletter',     to: 'Statement' },
]

const banned = ['community', 'activation', 'curation', 'ecosystem', 'content']

export default function Metaphor() {
  const headerRef = useScrollReveal()
  const pullRef = useScrollReveal()
  const bodyRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="metaphor-section" id="the-metaphor">
      <div className="metaphor-inner">
        <div ref={headerRef} className="metaphor-header reveal">
          <span className="label">The metaphor</span>
          <h2 className="metaphor-title">The banking language is not decoration.</h2>
        </div>

        <p ref={pullRef} className="metaphor-pull reveal reveal-delay-1">
          "It is the operating system."
        </p>

        <p ref={bodyRef} className="metaphor-body reveal reveal-delay-2">
          Members don't "register" — they open accounts. Venues don't "partner" — they become branches.
          Events don't "launch" — they observe operating hours. Participation history is a balance.
          Referrals are transfers. The archive is the vault. Dormant members are NPAs.
        </p>

        <p className="metaphor-body reveal reveal-delay-3" ref={useScrollReveal()}>
          This discipline serves two purposes. First, it makes the brand instantly memorable and
          structurally coherent — every touchpoint has a name that belongs to the same world.
          Second, it replaces the exhausted vocabulary of startup culture.
        </p>

        <div ref={gridRef} className="vocab-grid reveal reveal-delay-2">
          {vocab.map(v => (
            <div className="vocab-item" key={v.from}>
              <div className="vocab-from">{v.from}</div>
              <div className="vocab-arrow">↓</div>
              <div className="vocab-to">{v.to}</div>
            </div>
          ))}
        </div>

        <div className="never-say reveal reveal-delay-3" ref={useScrollReveal()}>
          <span className="never-label">Never say</span>
          <div className="never-words">
            {banned.map(w => (
              <span className="never-word" key={w}>{w}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
