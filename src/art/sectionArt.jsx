// SVG artwork ported from chartwheel_awwwards_v11_pixar_phone.html.
// Geometry is unchanged; attributes are converted to JSX props.

export function SignalMapArt() {
  return (
    <svg viewBox="0 0 1200 560" preserveAspectRatio="none" aria-label="Chartwheel performance signal network">
      <defs>
        <linearGradient id="flow" x1="0" x2="1">
          <stop stopColor="#0082fe" stopOpacity="0" />
          <stop offset=".45" stopColor="#0082fe" />
          <stop offset="1" stopColor="#d9efff" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path className="flow-path" d="M120 120 C300 40 380 230 600 280 S900 100 1080 160" />
      <path className="flow-path alt" d="M120 410 C320 490 430 300 600 280 S850 430 1080 350" />
      <path className="flow-path" d="M120 270 C300 280 400 90 600 280 S900 490 1080 270" />
      <circle className="flow-node" cx="120" cy="120" r="8" />
      <circle className="flow-node" cx="120" cy="270" r="8" />
      <circle className="flow-node" cx="120" cy="410" r="8" />
      <circle className="flow-node" cx="1080" cy="160" r="8" />
      <circle className="flow-node" cx="1080" cy="270" r="8" />
      <circle className="flow-node" cx="1080" cy="350" r="8" />
      <circle className="flow-core" cx="600" cy="280" r="18" />
    </svg>
  )
}

export function StoryArt() {
  return (
    <svg viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice" className="story-art-svg">
      <g fill="none" stroke="#0082fe" opacity=".25">
        <circle cx="420" cy="260" r="150" />
        <circle cx="420" cy="260" r="100" />
        <circle cx="420" cy="260" r="50" />
      </g>
      <g fill="#0082fe">
        <circle cx="420" cy="110" r="5" />
        <circle cx="570" cy="260" r="5" />
        <circle cx="420" cy="410" r="5" />
        <circle cx="270" cy="260" r="5" />
      </g>
      <path d="M420 110 A150 150 0 0 1 570 260" fill="none" stroke="#0082fe" strokeWidth="2" strokeDasharray="4 10">
        <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  )
}

export function LineChartArt() {
  return (
    <svg viewBox="0 0 700 260" preserveAspectRatio="none">
      <path d="M0 230 C80 225 90 180 160 195 S240 120 300 145 S390 80 455 100 S540 45 610 62 S665 20 700 30" fill="none" stroke="#006be0" strokeWidth="4" />
      <path d="M0 230 C80 225 90 180 160 195 S240 120 300 145 S390 80 455 100 S540 45 610 62 S665 20 700 30 L700 260 L0 260Z" fill="url(#g)" opacity=".12" />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#006be0" />
          <stop offset="1" stopColor="#006be0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

