import { useEffect } from 'react'

const setVar = (name, value) => document.documentElement.style.setProperty(name, value)

/**
 * Publishes pointer position as root-level CSS custom properties so the cursor
 * stack, hero glows and parallax can be positioned entirely from stylesheets.
 * Mirrors the original build's mousemove handler and lerped ring loop.
 */
export function usePointer() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let frame = 0

    const onMove = (e) => {
      document.body.classList.add('has-pointer')
      mx = e.clientX
      my = e.clientY
      setVar('--mx', `${(mx / window.innerWidth) * 100}%`)
      setVar('--my', `${(my / window.innerHeight) * 100}%`)
      setVar('--cx', `${mx}px`)
      setVar('--cy', `${my}px`)
    }

    // Eased follow for the wide outer ring.
    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      setVar('--ringx', `${rx}px`)
      setVar('--ringy', `${ry}px`)
      frame = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(loop)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])
}

/** Drives the scroll progress bar width via a CSS variable. */
export function useScrollProgress() {
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      setVar('--scroll-progress', `${pct}%`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
