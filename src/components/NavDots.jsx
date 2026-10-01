import { useSectionSpy } from '../hooks/useReveal'

const SECTIONS = ['hero', 'ecosystem', 'lab', 'measurement', 'industries', 'contact']

/** The right-hand rail: one dot per section, highlighting whatever is in view. */
export default function NavDots() {
  const active = useSectionSpy(SECTIONS)

  return (
    <div className="nav-dot" aria-label="Page sections">
      {SECTIONS.map((id) => (
        <button
          key={id}
          type="button"
          data-target={id}
          className={id === active ? 'active' : undefined}
          aria-label={`Go to ${id}`}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </div>
  )
}
