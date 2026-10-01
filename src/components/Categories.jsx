import { useState } from 'react'
import { categories } from '../data/site'
import { CategoryVisualBackdrop } from '../art/categoryVisual'
import { catCardArt, categoryGraphics } from '../art/registry'
import Reveal from './Reveal'

/**
 * Each vertical gets its own scene. Picking a card swaps the copy, the chips
 * and the layer drawn inside the shared SVG backdrop — the original toggled
 * `display:none` on those layers, React just renders the active one.
 */
export default function Categories() {
  const [active, setActive] = useState(categories[0].key)
  const current = categories.find((c) => c.key === active) ?? categories[0]
  const Graphic = categoryGraphics[current.key]

  return (
    <section className="category-section" id="industries">
      <Reveal className="category-intro">
        <div className="section-head">
          <div className="kicker">04 / Performance by category</div>
          <h2>
            Every category
            <br />
            has a <span className="green">different signal.</span>
          </h2>
        </div>
        <p>
          Instead of repeating the same card six times, each vertical gets a visual system that
          reflects how its users discover, convert and create value.
        </p>
      </Reveal>

      <div className="category-stage">
        <Reveal as="article" className="category-hero">
          <div className="category-hero-art">
            <svg
              viewBox="0 0 900 650"
              preserveAspectRatio="xMidYMid slice"
              aria-label="Interactive category visualization"
            >
              <CategoryVisualBackdrop />
              <Graphic />
            </svg>
          </div>
          <div className="category-hero-copy">
            <div className="kicker">GROWTH SIGNALS</div>
            <h3>{current.title}</h3>
            <p>{current.desc}</p>
            <div className="category-detail">
              {current.chips.map(([label, value]) => (
                <span className="detail-chip" key={label}>
                  <b>{label}</b> {value}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="category-side">
          {categories.map((cat) => {
            const CardArt = catCardArt[cat.key]
            return (
              <button
                type="button"
                key={cat.key}
                className={`cat-card${cat.key === active ? ' active' : ''}`}
                onClick={() => setActive(cat.key)}
              >
                <span className="tiny-label">{cat.index} / Category</span>
                <h4>{cat.title}</h4>
                <p>{cat.cardCopy}</p>
                <span className="mini-arrow">↗</span>
                <CardArt />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
