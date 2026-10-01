import { useEffect, useState } from 'react'

const LABELS = [
  ['.channel', 'Explore'],
  ['.industry', 'View'],
  ['.cat-card', 'View'],
]

/**
 * The bespoke cursor: a ring that grows over interactive elements, a dot that
 * tracks exactly, a lagging outer ring and a contextual label. Positions are
 * published as CSS variables by usePointer, so nothing is styled from JSX.
 */
export default function Cursor() {
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const targets = document.querySelectorAll('a,.channel,.industry,.hero-metric,.lab-card,.cat-card')

    const enter = (e) => {
      setActive(true)
      const match = LABELS.find(([sel]) => e.currentTarget.matches(sel))
      setLabel(match ? match[1] : 'Open')
    }
    const leave = () => {
      setActive(false)
      setLabel('')
    }

    targets.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () =>
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
  }, [])

  return (
    <>
      <div className={`cursor${active ? ' is-active' : ''}`} aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className={`cursor-label${label ? ' show' : ''}`} aria-hidden="true">
        {label || 'Explore'}
      </div>
    </>
  )
}
