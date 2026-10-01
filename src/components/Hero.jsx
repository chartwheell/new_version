import { useEffect, useRef } from 'react'
import { hero } from '../data/site'
import { useCountUp } from '../hooks/useReveal'
import PhoneDevice from './PhoneDevice'

/** Counts up when visible; static metrics render their literal value. */
function HeroMetric({ metric }) {
  const ref = useCountUp(
    metric.count?.target ?? 0,
    metric.count?.suffix ?? '',
    metric.count?.decimals ?? 0,
  )
  return (
    <div className="hero-metric">
      <small>{metric.label}</small>
      <b ref={metric.count ? ref : undefined}>{metric.value}</b>
      <span>{metric.note}</span>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  // Pointer parallax: the art drifts, the device tilts a couple of degrees.
  useEffect(() => {
    const section = heroRef.current
    if (!section) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const art = section.querySelector('.hero-art')
    const device = section.querySelector('.realistic-phone')

    const onMove = (e) => {
      if (window.innerWidth < 900) return
      const r = section.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      art?.style.setProperty('--art-x', `${x * 28}px`)
      art?.style.setProperty('--art-y', `${y * 20}px`)
      device?.style.setProperty('--rx', `${(-y * 2.2).toFixed(2)}deg`)
      device?.style.setProperty('--ry', `${(x * 2.6).toFixed(2)}deg`)
    }
    const onLeave = () => {
      art?.style.setProperty('--art-x', '0px')
      art?.style.setProperty('--art-y', '0px')
      device?.style.setProperty('--rx', '0deg')
      device?.style.setProperty('--ry', '0deg')
    }

    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="grid" />
      <div className="hero-glow hg1" />
      <div className="hero-glow hg2" />

      <div className="hero-copy">
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1>
          Turn mobile
          <br />
          <span>into what&apos;s</span>
          <em> next.</em>
        </h1>
        <p className="lead">{hero.lead}</p>
        <div className="actions">
          <a className="btn primary" href="#contact">
            Build your engine ↗
          </a>
          <a className="btn secondary" href="#ecosystem">
            Explore the system
          </a>
        </div>
      </div>

      <div className="hero-art hero-art-v7">
        <div className="orb orb-main" />
        <div className="orb-orbit orbit-a" />
        <div className="orb-orbit orbit-b" />
        <div className="signal-dot sd1" />
        <div className="signal-dot sd2" />
        <div className="signal-dot sd3" />
        <div className="signal-dot sd4" />

        <PhoneDevice />

        {hero.floats.map((f) => (
          <div className={`hero-float ${f.key}`} key={f.key}>
            <small>{f.label}</small>
            <strong>{f.value}</strong>
            <span>{f.note}</span>
          </div>
        ))}

        <div className="hero-activity">
          <span className="pulse" />
          <b>2,841</b> signals processed <i>now</i>
        </div>
      </div>

      <div className="hero-metrics">
        {hero.metrics.map((m) => (
          <HeroMetric key={m.label} metric={m} />
        ))}
      </div>
    </section>
  )
}
