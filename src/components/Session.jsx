import useScrollReveal from '../hooks/useScrollReveal'

const topics = [
  'How supermarket shelves are rented, not arranged',
  'How restaurant menus engineer your order',
  'How your salary structure is split to benefit the employer',
  'How elevator algorithms decide who waits',
  'How traffic signal timing encodes who the road is for',
]

export default function Session() {
  const headerRef = useScrollReveal()
  const leftRef = useScrollReveal()
  const slipRef = useScrollReveal()

  return (
    <section className="session-section" id="sessions">
      <div className="session-inner">
        <div ref={headerRef} className="session-header reveal">
          <span className="label">What a session looks like</span>
          <h2 className="session-title">Ninety minutes. One object. One insider.</h2>
        </div>

        <div className="session-columns">
          <div ref={leftRef} className="reveal">
            <div className="session-intro">
              <p>
                Every session follows the same promise: one everyday object, one insider
                who helped design it, ninety minutes, and you leave seeing something
                you couldn't see before.
              </p>
              <p>
                The topics live in the gap between universal use and invisible design.
                No preparation required. Bring your own questions.
              </p>
            </div>

            <div className="session-topics">
              <div className="session-topics-label">
                <span className="label">Sample deposits</span>
              </div>
              <ul className="topic-list">
                {topics.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div ref={slipRef} className="reveal reveal-delay-2">
            <div className="slip">
              <p className="slip-title">Session · Savings Account</p>
              <div className="slip-row">
                <span className="slip-key">Branch</span>
                <span className="slip-val">Blue Tokai, Koregaon Park</span>
              </div>
              <div className="slip-row">
                <span className="slip-key">Hours</span>
                <span className="slip-val">7:00 – 8:30 PM, Thursday</span>
              </div>
              <div className="slip-row">
                <span className="slip-key">Format</span>
                <span className="slip-val">Savings Account</span>
              </div>
              <div className="slip-row">
                <span className="slip-key">Subject</span>
                <span className="slip-val">How your phone plan was designed to make you pick the ₹299 one</span>
              </div>
              <div className="slip-row">
                <span className="slip-key">Teller</span>
                <span className="slip-val">Former Airtel product manager</span>
              </div>
              <div className="slip-row">
                <span className="slip-key">Preparation</span>
                <span className="slip-val">None required</span>
              </div>
              <div className="slip-stamp">
                <span>Bank of</span>
                <span>Curiosity</span>
                <span>Deposited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
