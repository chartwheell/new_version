import { useEffect, useRef, useState } from 'react'
import { LOGO, phonePages } from '../data/site'
import {
  PhoneEngineArt,
  PhoneMeasureArt,
  PhonePerformanceArt,
  PhoneSupplyArt,
} from '../art/phoneArt'

const PAGES = 4

/**
 * The hero device. Its screen is a real scroll container with four pages,
 * page dots, a selectable supply channel and pointer-driven tilt — the same
 * behaviour the original build wired up by hand.
 */
export default function PhoneDevice() {
  const areaRef = useRef(null)
  const pageRefs = useRef([])
  const [page, setPage] = useState(0)
  const [channel, setChannel] = useState(phonePages.supply.channels[0].id)

  // Track which page is closest to the top of the scroll area.
  useEffect(() => {
    const area = areaRef.current
    if (!area) return

    let frame = 0
    const update = () => {
      let best = 0
      let dist = Infinity
      pageRefs.current.forEach((p, i) => {
        if (!p) return
        const d = Math.abs(p.offsetTop - area.scrollTop)
        if (d < dist) {
          dist = d
          best = i
        }
      })
      setPage(best)
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    area.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      area.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Keep wheel gestures inside the phone until it hits an end stop.
  useEffect(() => {
    const area = areaRef.current
    if (!area) return

    const onWheel = (e) => {
      if (!e.deltaY) return
      const atTop = area.scrollTop <= 0
      const atBottom = Math.ceil(area.scrollTop + area.clientHeight) >= area.scrollHeight
      if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) e.stopPropagation()
    }
    area.addEventListener('wheel', onWheel, { passive: true })
    return () => area.removeEventListener('wheel', onWheel)
  }, [])

  const goTo = (i) => {
    pageRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    areaRef.current?.focus({ preventScroll: true })
  }

  const setRef = (i) => (el) => {
    pageRefs.current[i] = el
  }

  const { overview, supply, measure, engine } = phonePages

  return (
    <div className="phone phone-v7 realistic-phone" aria-label="Chartwheel mobile performance dashboard">
      <div className="phone-side-button phone-volume-1" />
      <div className="phone-side-button phone-volume-2" />
      <div className="phone-side-button phone-power" />
      <div className="phone-notch" />

      <div className="phone-screen-v7" aria-label="Interactive Chartwheel mobile dashboard">
        <div className="phone-status">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>

        <div className="phone-appbar">
          <span className="cw-mini-logo-wrap">
            <img src={LOGO} alt="Chartwheel logo" />
          </span>
          <i>LIVE</i>
        </div>

        <div
          className="phone-scroll-area"
          ref={areaRef}
          tabIndex={0}
          aria-label="Scroll inside the phone to explore Chartwheel"
        >
          <section className="phone-page phone-page-overview" data-page="1" ref={setRef(0)}>
            <div className="phone-page-label">{overview.label}</div>
            <div className="phone-visual phone-visual-performance">
              <PhonePerformanceArt />
            </div>
            <div className="phone-greeting">
              <strong>{overview.greeting.value}</strong>
              <span>{overview.greeting.note}</span>
            </div>
            <div className="phone-insight">
              <div className="insight-icon">↗</div>
              <div>
                <b>{overview.insight.title}</b>
                <span>{overview.insight.note}</span>
              </div>
            </div>
            <div className="phone-flow">
              {overview.flow.map((row) => (
                <div className="flow-row" key={row.stage} data-fill={row.fill}>
                  <span>{row.stage}</span>
                  <b>{row.value}</b>
                  <i>
                    <em />
                  </i>
                </div>
              ))}
            </div>
            <div className="phone-mini-note">{overview.note}</div>
          </section>

          <section className="phone-page phone-page-supply" data-page="2" ref={setRef(1)}>
            <div className="phone-page-label">{supply.label}</div>
            <div className="phone-visual phone-visual-supply">
              <PhoneSupplyArt />
            </div>
            <h4>
              {supply.heading[0]}
              <br />
              <b>{supply.heading[1]}</b>
            </h4>
            <p className="phone-page-copy">{supply.copy}</p>
            <div className="phone-channel-grid">
              {supply.channels.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`phone-channel${channel === c.id ? ' active' : ''}`}
                  onClick={() => setChannel(c.id)}
                >
                  <b>{c.title}</b>
                  <span>{c.note}</span>
                </button>
              ))}
            </div>
            <div className="phone-selection">
              <span>Selected</span>
              <b>{channel}</b>
              <i>● LIVE</i>
            </div>
          </section>

          <section className="phone-page phone-page-measure" data-page="3" ref={setRef(2)}>
            <div className="phone-page-label">{measure.label}</div>
            <div className="phone-visual phone-visual-measure">
              <PhoneMeasureArt />
            </div>
            <h4>
              {measure.heading[0]}
              <br />
              <b>{measure.heading[1]}</b>
            </h4>
            <div className="phone-metric-stack">
              {measure.metrics.map((m) => (
                <div className="phone-metric-row" key={m.label}>
                  <span>{m.label}</span>
                  <b>{m.value}</b>
                  <i>{m.delta}</i>
                </div>
              ))}
            </div>
            <div className="phone-chart-mini">
              {Array.from({ length: 7 }, (_, i) => (
                <span key={i} />
              ))}
            </div>
            <p className="phone-page-copy compact">{measure.copy}</p>
          </section>

          <section className="phone-page phone-page-engine" data-page="4" ref={setRef(3)}>
            <div className="phone-page-label">{engine.label}</div>
            <div className="phone-visual phone-visual-engine">
              <PhoneEngineArt />
            </div>
            <h4>
              {engine.heading[0]}
              <br />
              <b>{engine.heading[1]}</b>
            </h4>
            {engine.steps.map((s) => (
              <div className="phone-step" key={s.n}>
                <span>{s.n}</span>
                <div>
                  <b>{s.title}</b>
                  <small>{s.note}</small>
                </div>
              </div>
            ))}
            <div className="phone-engine-tag">{engine.tag}</div>
          </section>
        </div>

        <div className="phone-page-dots" aria-label="Phone dashboard pages">
          {Array.from({ length: PAGES }, (_, i) => (
            <button
              key={i}
              type="button"
              className={page === i ? 'active' : undefined}
              aria-label={`Page ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
