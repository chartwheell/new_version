import { dashboard } from '../data/site'
import { LineChartArt } from '../art/sectionArt'
import Reveal from './Reveal'

export default function Performance() {
  return (
    <section className="section performance" id="measurement">
      <Reveal className="section-head">
        <div className="kicker">03 / Measurement</div>
        <h2>
          Performance that <span className="green">compounds.</span>
        </h2>
        <p className="muted">
          From first install to long-term value, the system is built around the signals that reveal
          what actually drives business impact.
        </p>
      </Reveal>

      <Reveal className="dashboard" step={1}>
        <div className="dash-main">
          <div className="dash-title">{dashboard.title}</div>
          <div className="dash-number">{dashboard.number}</div>
          <div className="dash-up">{dashboard.up}</div>
          <div className="linechart">
            <LineChartArt />
          </div>
        </div>
        <div className="dash-side">
          {dashboard.side.map((s) => (
            <div className="side-stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
