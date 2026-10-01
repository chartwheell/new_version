/**
 * Visual intelligence strip. The original referenced a remote photo that now
 * returns 404, so the panel renders as the gradient surface plus badges —
 * which is exactly how the source file paints today.
 */
export default function ImageStrip() {
  return (
    <section className="image-strip" aria-label="Chartwheel visual intelligence">
      <div className="image-strip-copy">
        <div className="kicker">VISUAL INTELLIGENCE</div>
        <h2>
          Turn data into <span>direction.</span>
        </h2>
        <p>
          Campaign performance is not just a dashboard. It is a moving picture of supply, users,
          creative and value.
        </p>
      </div>
      <div className="image-strip-visual">
        <div className="image-badge b1">REAL-TIME SIGNALS</div>
        <div className="image-badge b2">ACQUISITION</div>
        <div className="image-badge b3">OPTIMIZATION</div>
      </div>
    </section>
  )
}
