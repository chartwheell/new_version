import { labCards } from '../data/site'
import { SignalMapArt, StoryArt } from '../art/sectionArt'
import Reveal from './Reveal'

const STORY_PHOTO = '/img/story-photo.webp'

/** A mini phone mock-up used inside the creative-intelligence story card. */
function MiniPhone({ label, greenLine }) {
  return (
    <div className="mini-phone">
      <div className="screen">
        <small>{label}</small>
        {[0, 1, 2].map((i) => (
          <div className={`screen-line${i === greenLine ? ' green' : ''}`} key={i} />
        ))}
        <div className="screen-chart">
          {Array.from({ length: 5 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SignalLab() {
  return (
    <section className="signal-lab" id="lab">
      <div className="lab-wrap">
        <Reveal className="lab-head">
          <div>
            <div className="kicker">02 / Signal intelligence</div>
            <h2>
              One brief.
              <br />
              <em>Thousands of signals.</em>
            </h2>
          </div>
          <p className="lab-copy">
            See the acquisition loop as a living system: demand enters, supply responds, users
            convert, and every outcome feeds the next decision.
          </p>
        </Reveal>

        <Reveal className="signal-map">
          <SignalMapArt />
          {labCards.map((card) => (
            <div className={`lab-card ${card.key}`} key={card.key}>
              <small>{card.small}</small>
              <strong>{card.strong}</strong>
              <i>{card.note}</i>
            </div>
          ))}
          <div className="lab-core">
            CHARTWHEEL
            <br />
            ENGINE
          </div>
        </Reveal>

        <div className="story-grid">
          <Reveal className="story-card large">
            <img
              className="story-photo"
              src={STORY_PHOTO}
              alt="Futuristic mobile performance interface"
              loading="lazy"
            />
            <div className="story-content">
              <div className="kicker">Creative intelligence</div>
              <h3>Make the ad feel like the product.</h3>
              <p>
                Performance starts before the click. Build native, rewarded and interactive creative
                experiences that connect the message to the moment.
              </p>
            </div>
            <div className="phone-cluster">
              <MiniPhone label="CAMPAIGN" greenLine={0} />
              <MiniPhone label="USER JOURNEY" greenLine={1} />
            </div>
          </Reveal>

          <Reveal className="story-card" step={1}>
            <div className="story-content">
              <div className="kicker">Optimization loop</div>
              <h3>Every result becomes a signal.</h3>
              <p>
                Move from install volume to user quality with continuous feedback across events,
                retention, revenue and lifetime value.
              </p>
            </div>
            <div className="story-art">
              <StoryArt />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
