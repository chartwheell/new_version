/** The looping Acquire → Measure → Optimize → Scale ticker. */
export default function Marquee() {
  return (
    <div className="marquee2" aria-hidden="true">
      <div className="marquee2-track">
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i}>
            <b>Acquire</b> → Measure → Optimize → Scale
          </span>
        ))}
      </div>
    </div>
  )
}
