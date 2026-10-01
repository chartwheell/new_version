import Cursor from './components/Cursor'
import Nav from './components/Nav'
import NavDots from './components/NavDots'
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import Globe from './components/Globe'
import SignalLab from './components/SignalLab'
import Marquee from './components/Marquee'
import ImageStrip from './components/ImageStrip'
import Performance from './components/Performance'
import Categories from './components/Categories'
import Cta from './components/Cta'
import { usePointer, useScrollProgress } from './hooks/usePointer'

export default function App() {
  usePointer()
  useScrollProgress()

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Cursor />
      <Nav />
      <div className="progress" aria-hidden="true" />
      <NavDots />

      <main>
        <Hero />
        <Ecosystem />
        <Globe />
        <SignalLab />
        <Marquee />
        <ImageStrip />
        <Performance />
        <Categories />
        <Cta />
      </main>
    </>
  )
}
