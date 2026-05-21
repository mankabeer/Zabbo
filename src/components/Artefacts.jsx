import useScrollReveal from '../hooks/useScrollReveal'

const items = [
  {
    icon: 'Artefact · 001',
    name: 'Passbook',
    desc: 'Physical or digital. Stamped at each session. Your record of deposits made.',
  },
  {
    icon: 'Artefact · 002',
    name: 'Deposit Slip',
    desc: 'The sign-in sheet at a session. Designed to look like one.',
  },
  {
    icon: 'Artefact · 003',
    name: 'Ledger',
    desc: 'A one-paragraph public record published after every session. What happened, in brief.',
  },
  {
    icon: 'Artefact · 004',
    name: 'Statement',
    desc: 'A periodic update to members. Sessions attended, branches visited, what\'s next.',
  },
  {
    icon: 'Artefact · 005',
    name: 'Branch Signage',
    desc: '"This is a Bank of Curiosity branch." A small plaque at the partner venue.',
  },
  {
    icon: 'Artefact · 006',
    name: 'Rubber Stamp',
    desc: 'Circular. "Bank of Curiosity — Deposited — [Date]." Used on passbooks and deposit slips.',
  },
]

export default function Artefacts() {
  const headerRef = useScrollReveal()

  return (
    <section className="artefacts-section" id="artefacts">
      <div className="artefacts-inner">
        <div ref={headerRef} className="artefacts-header reveal">
          <span className="label">Artefacts</span>
          <h2 className="artefacts-title">The physical record</h2>
        </div>

        <div className="artefacts-grid">
          {items.map((item, i) => (
            <Artefact key={item.name} {...item} delay={i % 3 + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Artefact({ icon, name, desc, delay }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`artefact reveal reveal-delay-${delay}`}>
      <div className="artefact-icon">{icon}</div>
      <div className="artefact-name">{name}</div>
      <p className="artefact-desc">{desc}</p>
    </div>
  )
}
