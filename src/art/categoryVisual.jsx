// SVG artwork ported from chartwheel_awwwards_v11_pixar_phone.html.
// Geometry is unchanged; attributes are converted to JSX props.

export function CategoryVisualBackdrop() {
  return (
    <>
      <defs>
        <radialGradient id="cg" cx="50%" cy="45%">
          <stop offset="0" stopColor="#1ea0ff" stopOpacity=".5" />
          <stop offset=".45" stopColor="#0082fe" stopOpacity=".12" />
          <stop offset="1" stopColor="#071523" stopOpacity="0" />
        </radialGradient>
        <filter id="cblur">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>
      <rect width="900" height="650" fill="#071523" />
      <circle cx="610" cy="285" r="300" fill="url(#cg)" />
      <g opacity=".16" stroke="#7bd5ff">
        <path d="M0 120H900M0 240H900M0 360H900M0 480H900" />
        <path d="M120 0V650M240 0V650M360 0V650M480 0V650M600 0V650M720 0V650M840 0V650" />
      </g>
    </>
  )
}

export function GamingGraphic() {
  return (
    <g>
        <circle cx="650" cy="290" r="180" fill="none" stroke="#55c3ff" strokeWidth="1" />
        <circle cx="650" cy="290" r="125" fill="none" stroke="#0082fe" strokeWidth="2" strokeDasharray="5 12" />
        <path d="M430 430C500 300 545 350 650 290S760 130 860 210" fill="none" stroke="#7bd5ff" strokeWidth="2" strokeDasharray="8 12" />
        <rect x="550" y="125" width="200" height="340" rx="30" fill="#081827" stroke="#9bddff" strokeWidth="2" transform="rotate(-8 650 295)" />
        <rect x="568" y="168" width="164" height="255" rx="19" fill="#0c2945" transform="rotate(-8 650 295)" />
        <circle cx="650" cy="288" r="62" fill="#0082fe" opacity=".55" />
        <path d="M620 350l32-100 42 100-39-25z" fill="#fff" opacity=".82" />
        <g fill="#0082fe">
          <circle cx="370" cy="425" r="7" />
          <circle cx="780" cy="165" r="7" />
          <circle cx="470" cy="210" r="5" />
        </g>
    </g>
  )
}

export function FintechGraphic() {
  return (
    <g>
        <path d="M80 520L210 420 310 445 430 300 560 335 770 110" fill="none" stroke="#7bd5ff" strokeWidth="3" />
        <path d="M80 520L210 420 310 445 430 300 560 335 770 110V560H80Z" fill="#0082fe" opacity=".10" />
        <g fill="#0082fe">
          <circle cx="210" cy="420" r="9" />
          <circle cx="430" cy="300" r="9" />
          <circle cx="770" cy="110" r="11" />
        </g>
        <rect x="520" y="145" width="190" height="280" rx="25" fill="#f7fbff" stroke="#93dcff" strokeWidth="2" />
        <text x="545" y="190" fill="#718096" fontSize="12" fontFamily="Arial">
          BALANCE
        </text>
        <text x="545" y="235" fill="#0f1b29" fontSize="34" fontWeight="700" fontFamily="Arial">
          ₹84.2K
        </text>
        <path d="M545 350L580 320 615 335 650 280 685 300" fill="none" stroke="#0082fe" strokeWidth="4" />
    </g>
  )
}

export function EcomGraphic() {
  return (
    <g>
        <path d="M170 160h70l45 240h310l55-155H275" fill="none" stroke="#9de1ff" strokeWidth="7" />
        <circle cx="325" cy="445" r="25" fill="#0082fe" />
        <circle cx="545" cy="445" r="25" fill="#0082fe" />
        <rect x="390" y="150" width="190" height="240" rx="24" fill="#081827" stroke="#7bd5ff" />
        <rect x="408" y="172" width="154" height="120" rx="16" fill="#123a59" />
        <path d="M430 275l35-52 34 36 28-26 25 42" fill="#62c8ff" />
        <path d="M290 95C390 30 520 45 720 165" fill="none" stroke="#0082fe" strokeWidth="2" strokeDasharray="8 10" />
    </g>
  )
}

export function TravelGraphic() {
  return (
    <g>
        <path d="M0 430Q170 340 330 430T900 370V650H0Z" fill="#051321" />
        <circle cx="735" cy="130" r="62" fill="#fff" opacity=".85" />
        <path d="M260 320L430 245 505 280 420 300 565 390 535 405 375 320 270 355 235 330Z" fill="#e9f8ff" />
        <path d="M80 180C260 90 410 115 520 190S750 270 860 120" fill="none" stroke="#7bd5ff" strokeWidth="2" strokeDasharray="7 10" />
    </g>
  )
}

export function EntGraphic() {
  return (
    <g>
        <circle cx="620" cy="320" r="210" fill="none" stroke="#7bd5ff" />
        <circle cx="620" cy="320" r="140" fill="none" stroke="#0082fe" strokeWidth="2" />
        <circle cx="620" cy="320" r="70" fill="#0082fe" opacity=".4" />
        <path d="M620 90V550M390 320H850" stroke="#7bd5ff" opacity=".3" />
        <path d="M440 180Q620 340 800 180M440 460Q620 300 800 460" fill="none" stroke="#fff" opacity=".35" />
        <circle cx="620" cy="320" r="20" fill="#fff" />
    </g>
  )
}

export function MobilityGraphic() {
  return (
    <g>
        <path d="M40 480C180 370 260 510 390 405S640 180 860 245" fill="none" stroke="#7bd5ff" strokeWidth="3" strokeDasharray="8 10" />
        <circle cx="160" cy="425" r="10" fill="#0082fe" />
        <circle cx="410" cy="400" r="10" fill="#0082fe" />
        <circle cx="780" cy="225" r="10" fill="#0082fe" />
        <path d="M310 360l40-100h220l65 100v70H310Z" fill="#081827" stroke="#9adfff" strokeWidth="3" />
        <circle cx="390" cy="445" r="28" fill="#081827" stroke="#75d0ff" strokeWidth="5" />
        <circle cx="575" cy="445" r="28" fill="#081827" stroke="#75d0ff" strokeWidth="5" />
        <path d="M400 260l40-50h95l40 50" fill="#0f2f4c" stroke="#9adfff" strokeWidth="2" />
        <rect x="390" y="295" width="200" height="60" rx="10" fill="#0c3e66" />
    </g>
  )
}
