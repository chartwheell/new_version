// SVG artwork ported from chartwheel_awwwards_v11_pixar_phone.html.
// Geometry is unchanged; attributes are converted to JSX props.

export function GamingCardArt() {
  return (
    <svg viewBox="0 0 400 200">
      <path className="ghost" d="M30 160C120 90 160 170 235 110S330 50 390 85" />
      <circle className="soft" cx="295" cy="75" r="70" />
      <circle className="dot" cx="295" cy="75" r="7" />
    </svg>
  )
}

export function FintechCardArt() {
  return (
    <svg viewBox="0 0 400 200">
      <path className="line" d="M25 160L105 130 170 142 235 85 300 105 380 35" />
      <circle className="dot" cx="380" cy="35" r="7" />
    </svg>
  )
}

export function EcomCardArt() {
  return (
    <svg viewBox="0 0 400 200">
      <path className="line" d="M55 50h45l30 90h160l35-60H120" />
      <circle className="dot" cx="150" cy="155" r="8" />
      <circle className="dot" cx="270" cy="155" r="8" />
    </svg>
  )
}

export function TravelCardArt() {
  return (
    <svg viewBox="0 0 400 200">
      <path className="line" d="M30 145C110 95 180 135 240 100S325 60 390 80" />
      <path d="M150 105l70-30 40 20-45 10 60 45-15 9-72-44-45 16-14-12z" fill="#7bd5ff" />
    </svg>
  )
}

export function EntCardArt() {
  return (
    <svg viewBox="0 0 400 200">
      <circle className="ghost" cx="280" cy="100" r="75" />
      <circle className="ghost" cx="280" cy="100" r="45" />
      <circle className="dot" cx="280" cy="100" r="7" />
    </svg>
  )
}

export function MobilityCardArt() {
  return (
    <svg viewBox="0 0 400 200">
      <path className="line" d="M20 160C100 110 150 175 220 125S330 45 390 70" />
      <circle className="dot" cx="220" cy="125" r="6" />
      <circle className="dot" cx="390" cy="70" r="7" />
    </svg>
  )
}
