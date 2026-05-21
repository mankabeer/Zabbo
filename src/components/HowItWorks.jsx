import useScrollReveal from '../hooks/useScrollReveal'

const products = [
  {
    number: '01 — Branches',
    title: 'The Branch',
    body: 'A brand becomes a branch when it commits to hosting sessions on a recurring basis. A bookstore, a café, a brewery, a telecom showroom, a pharmacy. Each branch hosts sessions during announced operating hours. A branch opening is a public event.',
    tag: 'Venue · Expertise · Audience',
  },
  {
    number: '02 — Members',
    title: 'The Account Holder',
    body: 'Members open an account, receive a passbook, and attend sessions across branches. Showing up is the minimum deposit. What they take home — a skill, a question, a contact — is the withdrawal.',
    tag: 'Passbook · Balance · Deposits',
  },
  {
    number: '03 — Formats',
    title: 'Banking Products',
    body: 'Session formats co-designed by branches and the Bank. A Savings Account is a single ninety-minute session. A Fixed Deposit is a multi-week deep dive. A Current Account is a recurring drop-in. The format matches the subject.',
    tag: 'Savings · Fixed · Current',
  },
]

export default function HowItWorks() {
  const headerRef = useScrollReveal()

  return (
    <section className="how-section" id="how-it-works">
      <div className="section-wrap">
        <div ref={headerRef} className="how-header reveal">
          <span className="label">How it works</span>
          <h2 className="how-title">The operating structure</h2>
        </div>

        <div className="how-grid">
          {products.map((p, i) => (
            <HowCard key={p.number} {...p} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowCard({ number, title, body, tag, delay }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`how-card reveal reveal-delay-${delay + 1}`}>
      <div className="how-card-number">{number}</div>
      <h3 className="how-card-title">{title}</h3>
      <p className="how-card-body">{body}</p>
      <span className="how-card-tag">{tag}</span>
    </div>
  )
}
