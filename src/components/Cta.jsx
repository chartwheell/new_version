import { CONTACT } from '../data/site'

export default function Cta() {
  return (
    <>
      <section className="cta" id="contact">
        <div className="cta-orb" />
        <div>
          <div className="kicker">05 / What&apos;s next</div>
          <h2>
            Let&apos;s build
            <br />
            what&apos;s <span>next.</span>
          </h2>
          <a className="btn primary" href={`mailto:${CONTACT.email}`}>
            Start a conversation ↗
          </a>
        </div>
      </section>

      <footer>
        <b>CHARTWHEEL</b>
        <span>
          {CONTACT.tagline} · © {CONTACT.year} {CONTACT.company}
        </span>
      </footer>
    </>
  )
}
