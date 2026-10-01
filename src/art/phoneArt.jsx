// SVG artwork ported from chartwheel_awwwards_v11_pixar_phone.html.
// Geometry is unchanged; attributes are converted to JSX props.

export function PhonePerformanceArt() {
  return (
    <svg viewBox="0 0 300 130" role="img" aria-label="3D animated performance scene">
      <defs>
        <linearGradient id="pvbg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#dff2ff" />
          <stop offset="1" stopColor="#f7fbff" />
        </linearGradient>
        <linearGradient id="pvblue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#087ff0" />
          <stop offset="1" stopColor="#49b8ff" />
        </linearGradient>
        <radialGradient id="pvball">
          <stop stopColor="#fff" />
          <stop offset=".7" stopColor="#8ed2ff" />
          <stop offset="1" stopColor="#087ff0" />
        </radialGradient>
      </defs>
      <rect width="300" height="130" rx="22" fill="url(#pvbg)" />
      <ellipse cx="148" cy="106" rx="102" ry="10" fill="#c6dfef" />
      <rect x="105" y="28" width="91" height="62" rx="14" fill="#0c2d47" transform="rotate(-7 150 60)" />
      <rect x="112" y="34" width="77" height="47" rx="9" fill="#f8fcff" transform="rotate(-7 150 60)" />
      <path d="M123 69 C137 60 142 65 151 52 S169 42 181 48" fill="none" stroke="#087ff0" strokeWidth="5" strokeLinecap="round" />
      <circle cx="124" cy="69" r="4" fill="#087ff0" />
      <circle cx="181" cy="48" r="4" fill="#49b8ff" />
      <circle cx="61" cy="42" r="18" fill="url(#pvball)" />
      <circle cx="228" cy="72" r="14" fill="#0b3450" />
      <circle cx="230" cy="68" r="5" fill="#49b8ff" />
      <path d="M58 76 Q73 56 88 76" fill="#087ff0" opacity=".22" />
    </svg>
  )
}

export function PhoneSupplyArt() {
  return (
    <svg viewBox="0 0 300 130" role="img" aria-label="3D animated mobile supply network">
      <defs>
        <linearGradient id="svbg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#eaf7ff" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient id="svblue">
          <stop stopColor="#087ff0" />
          <stop offset="1" stopColor="#7ed0ff" />
        </linearGradient>
      </defs>
      <rect width="300" height="130" rx="22" fill="url(#svbg)" />
      <path d="M45 83 C92 34 119 100 153 55 S216 39 257 76" fill="none" stroke="#a9d9f7" strokeWidth="2" strokeDasharray="4 5" />
      <g>
        <circle cx="45" cy="83" r="15" fill="#fff" stroke="#087ff0" strokeWidth="4" />
        <circle cx="153" cy="55" r="21" fill="url(#svblue)" />
        <circle cx="257" cy="76" r="15" fill="#0b3450" />
        <rect x="137" y="39" width="31" height="38" rx="8" fill="#f9fdff" opacity=".95" />
        <circle cx="145" cy="48" r="2.5" fill="#087ff0" />
        <circle cx="160" cy="48" r="2.5" fill="#49b8ff" />
        <path d="M144 65h17" stroke="#087ff0" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g fill="#087ff0">
        <circle cx="83" cy="59" r="5" />
        <circle cx="207" cy="48" r="4" />
        <circle cx="225" cy="99" r="3" />
      </g>
      <text x="28" y="113" fontFamily="Arial" fontSize="9" fontWeight="700" fill="#6f8799">
        OEM
      </text>
      <text x="133" y="113" fontFamily="Arial" fontSize="9" fontWeight="700" fill="#087ff0">
        PROGRAMMATIC
      </text>
      <text x="241" y="113" fontFamily="Arial" fontSize="9" fontWeight="700" fill="#6f8799">
        NATIVE
      </text>
    </svg>
  )
}

export function PhoneMeasureArt() {
  return (
    <svg viewBox="0 0 300 130" role="img" aria-label="3D animated measurement dashboard">
      <defs>
        <linearGradient id="mvbg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f7fbff" />
          <stop offset="1" stopColor="#dff2ff" />
        </linearGradient>
        <linearGradient id="mvbar" x1="0" y1="1" x2="0" y2="0">
          <stop stopColor="#087ff0" />
          <stop offset="1" stopColor="#83d1ff" />
        </linearGradient>
      </defs>
      <rect width="300" height="130" rx="22" fill="url(#mvbg)" />
      <ellipse cx="154" cy="106" rx="106" ry="9" fill="#c6dfef" />
      <rect x="55" y="24" width="190" height="72" rx="15" fill="#fff" stroke="#cfe5f4" />
      <text x="70" y="42" fontFamily="Arial" fontSize="8" fontWeight="700" fill="#7890a2">
        REAL PERFORMANCE
      </text>
      <text x="70" y="60" fontFamily="Arial" fontSize="17" fontWeight="800" fill="#0b3450">
        3.8×
      </text>
      <text x="115" y="60" fontFamily="Arial" fontSize="7" fill="#087ff0">
        ROAS
      </text>
      <g transform="translate(73 72)">
        <rect x="0" y="15" width="13" height="9" rx="4" fill="#bfe4fb" />
        <rect x="24" y="8" width="13" height="16" rx="4" fill="#83d1ff" />
        <rect x="48" y="3" width="13" height="21" rx="4" fill="#49b8ff" />
        <rect x="72" y="-4" width="13" height="28" rx="4" fill="#087ff0" />
        <rect x="96" y="-12" width="13" height="36" rx="4" fill="#0b3450" />
        <rect x="120" y="-22" width="13" height="46" rx="4" fill="url(#mvbar)" />
      </g>
      <circle cx="246" cy="34" r="14" fill="#087ff0" />
      <path d="M240 34l4 4 8-10" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PhoneEngineArt() {
  return (
    <svg viewBox="0 0 300 130" role="img" aria-label="3D animated Chartwheel growth engine">
      <defs>
        <radialGradient id="evcore">
          <stop stopColor="#dff5ff" />
          <stop offset=".5" stopColor="#49b8ff" />
          <stop offset="1" stopColor="#087ff0" />
        </radialGradient>
        <linearGradient id="evbg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#eaf7ff" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
      <rect width="300" height="130" rx="22" fill="url(#evbg)" />
      <g transform="translate(150 64)">
        <circle r="42" fill="none" stroke="#c9e5f6" strokeWidth="9" />
        <circle r="31" fill="none" stroke="#49b8ff" strokeWidth="7" strokeDasharray="42 14" transform="rotate(-20)" />
        <circle r="21" fill="url(#evcore)" />
        <circle r="8" fill="#fff" opacity=".9" />
        <g fill="#087ff0">
          <circle cx="-62" cy="0" r="7" />
          <circle cx="62" cy="0" r="7" />
          <circle cx="0" cy="-62" r="7" />
          <circle cx="0" cy="62" r="7" />
        </g>
        <path d="M-52 0h-22M52 0h22M0-52v-22M0 52v22" stroke="#9bcfec" strokeWidth="3" strokeLinecap="round" />
      </g>
      <text x="94" y="116" fontFamily="Arial" fontSize="9" fontWeight="800" fill="#0b3450">
        DISCOVER
      </text>
      <text x="142" y="116" fontFamily="Arial" fontSize="9" fontWeight="800" fill="#087ff0">
        →
      </text>
      <text x="154" y="116" fontFamily="Arial" fontSize="9" fontWeight="800" fill="#0b3450">
        SCALE
      </text>
    </svg>
  )
}

