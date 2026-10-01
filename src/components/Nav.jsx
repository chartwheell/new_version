import { CONTACT, LOGO } from '../data/site'

const LINKS = [
  { label: 'Technology', href: '#ecosystem' },
  { label: 'Signals', href: '#lab' },
  { label: 'Measurement', href: '#measurement' },
  { label: 'Categories', href: '#industries' },
  { label: 'Company', href: '#contact' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <a className="logo-img" href="#hero">
        <img src={LOGO} alt="Chartwheel" />
      </a>
      <div className="navlinks">
        {LINKS.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <a className="navcta" href={`mailto:${CONTACT.email}`}>
        Let&apos;s Talk ↗
      </a>
    </nav>
  )
}
