import useScrollReveal from '../hooks/useScrollReveal'

export default function Membership() {
  const branchRef = useScrollReveal()
  const memberRef = useScrollReveal()

  return (
    <section className="membership-section" id="branches">
      <div className="membership-inner">
        <div ref={branchRef} className="reveal">
          <span className="label">For branches</span>
          <h2 className="membership-col-title">Become a branch.</h2>
          <p className="membership-body">
            A brand becomes a branch when it commits to hosting sessions on a recurring basis.
            In return, it receives a curated, engaged audience that arrives not to be sold to,
            but to be surprised. The branch is a host, not a sponsor. Its name is on the door
            and its expertise is in the room.
          </p>
          <p className="membership-body">
            A café branch might host a session on how coffee is graded before it reaches the menu.
            A pharmacy branch might host a session on how medicine strips are designed.
            The brand's own knowledge becomes the session — and the audience sees the brand
            differently afterward.
          </p>
          <p className="membership-body">
            Branch openings are announced publicly. A small plaque or standee marks the venue.
            The relationship is ongoing, not transactional.
          </p>
          <a href="mailto:taxi@company.com" className="membership-cta">
            Apply to open a branch
            <span className="arrow">→</span>
          </a>
        </div>

        <div className="membership-divider" />

        <div ref={memberRef} className="reveal reveal-delay-2" id="open-account">
          <span className="label">For account holders</span>
          <h2 className="membership-col-title">Open an account.</h2>
          <p className="membership-body">
            Opening an account is simple. There is no fee, no minimum balance, no obligation.
            What you get is access: a calendar of sessions across branches, a passbook that
            records your deposits, and periodic statements summarising where you've been
            and what's coming.
          </p>
          <p className="membership-body">
            What compounds is not points or perks. It is the thing curiosity actually produces
            when sustained: depth. Relationships with people who show up. Familiarity with
            how the designed world works. An instinct for asking better questions.
          </p>
          <a href="#open-account" className="membership-cta">
            Open an account
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
