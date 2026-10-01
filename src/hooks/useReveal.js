import { useEffect, useRef, useState } from 'react'

/**
 * One-shot scroll reveal, matching the original IntersectionObserver:
 * fade in and rise 35px at threshold 0.1, then stop observing.
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-revealed')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed')
          io.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}

/** Reports which page section is in view, for the right-hand nav dots. */
export function useSectionSpy(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('inview')
            setActive(entry.target.id)
          }
        }),
      { threshold: 0.35 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [ids])

  return active
}

/**
 * Counts a metric up once it is 80% visible, easing out over 900ms —
 * the same curve the original used for the hero reach and market figures.
 */
export function useCountUp(target, suffix, decimals = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const render = (value) =>
      (el.textContent =
        (decimals
          ? value.toFixed(decimals)
          : Math.round(value).toLocaleString()) + suffix)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      render(target)
      return
    }

    let frame = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / 900)
          render(target * (1 - Math.pow(1 - p, 3)))
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.8 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, suffix, decimals])

  return ref
}
