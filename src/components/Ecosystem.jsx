import { channels } from '../data/site'
import { channelArt } from '../art/registry'
import Reveal from './Reveal'

const LAYERS = [
  { key: 'l1', label: 'Acquire' },
  { key: 'l2', label: 'Engage' },
  { key: 'l3', label: 'Monetize' },
  { key: 'l4', label: 'Scale' },
]

export default function Ecosystem() {
  return (
    <section className="section" id="ecosystem">
      <Reveal className="section-head">
        <div className="kicker">01 / The system</div>
        <h2>
          A more <span className="green">intelligent</span> app economy.
        </h2>
        <p className="muted">
          We bring together premium supply, advanced targeting and real-time optimization to help
          brands acquire, engage and monetize the right users across every stage of growth.
        </p>
      </Reveal>

      <Reveal className="manifest">
        <div className="stack">
          {LAYERS.map((layer) => (
            <div className={`layer ${layer.key}`} key={layer.key}>
              <span>{layer.label}</span>
            </div>
          ))}
          <div className="core">
            CW
            <br />
            ENGINE
          </div>
        </div>
        <div>
          <div className="kicker">Performance architecture</div>
          <h2 className="manifest-heading">
            One engine.
            <br />
            Many <span className="green">paths.</span>
          </h2>
          <p className="muted">
            Instead of treating every channel as a separate world, Chartwheel connects the signals.
            Supply, demand, attribution and optimization become one continuous loop.
          </p>
        </div>
      </Reveal>

      <div className="channel-grid" id="solutions">
        {channels.map((channel, i) => {
          const Art = channelArt[channel.key]
          return (
            <Reveal className="channel" key={channel.key} step={i % 6}>
              <div className="channel-art">
                <Art />
              </div>
              <div className="channel-copy">
                <b>{channel.title}</b>
                <p>{channel.copy}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
