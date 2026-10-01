import { globeStats } from '../data/site'
import Reveal from './Reveal'

export default function Globe() {
  return (
    <section className="section globe-section" id="global">
      <div>
        <div className="kicker">02 / Global supply</div>
        <h2>
          Global supply.
          <br />
          <span className="green">Local impact.</span>
        </h2>
        <p className="muted">
          Access diversified mobile inventory across OEM, programmatic, native, rewarded, influencer
          and private app ecosystems—then optimize around the markets that matter.
        </p>
        <a className="btn secondary globe-cta" href="#contact">
          Explore supply ↗
        </a>
      </div>

      <div className="globe">
        <div className="earth">
          <div className="routes">
            <i className="route r1" />
            <i className="route r2" />
            <i className="route r3" />
            <i className="node n1" />
            <i className="node n2" />
            <i className="node n3" />
          </div>
        </div>
        {globeStats.map((stat, i) => (
          <Reveal className={`stat ${stat.key}`} key={stat.key} step={i}>
            <small>{stat.label}</small>
            <b>{stat.value}</b>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
