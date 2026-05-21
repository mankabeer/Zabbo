import useScrollReveal from '../hooks/useScrollReveal'

export default function WhatItIs() {
  const headRef = useScrollReveal()
  const bodyRef = useScrollReveal()

  return (
    <section className="what-section" id="what-it-is">
      <div className="what-inner">
        <div ref={headRef} className="reveal">
          <span className="label">What it is</span>
          <h2 className="what-heading" style={{ marginTop: '0.75rem' }}>
            The everyday things<br />you use were<br /><em>designed by someone.</em>
          </h2>
          <div className="institution-badge">
            An institution
          </div>
        </div>

        <div ref={bodyRef} className="what-body reveal reveal-delay-2">
          <p>
            Bank of Curiosity is a membership network built around a single insight: the everyday things you use —
            your phone plan, your supermarket aisle, your salary slip, your medicine strip — were designed by someone.
            Designed carefully, often brilliantly, and <strong>almost never explained to you.</strong>
          </p>
          <p>
            The Bank exists to close that gap. Brands host sessions at their venues.
            Curious citizens show up. And in ninety minutes, something you interact with
            daily becomes something you understand.
          </p>
          <p>
            It is not an events company. It is not a community platform.
            It is an institution — one that treats <strong>curiosity as a civic resource worth investing in.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
