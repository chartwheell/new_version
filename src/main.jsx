import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Stylesheet order reproduces the cascade of the original single-file build.
// The first authored pass is split per component; every later design pass stays
// as one ordered layer, so the rule sequence is identical to the source file.
import './styles/01-base.css'
import './styles/02-nav.css'
import './styles/03-hero.css'
import './styles/04-hero.css'
import './styles/05-buttons.css'
import './styles/06-hero.css'
import './styles/07-phone.css'
import './styles/08-typography.css'
import './styles/09-performance.css'
import './styles/10-hero.css'
import './styles/11-ecosystem.css'
import './styles/12-ecosystem.css'
import './styles/13-globe.css'
import './styles/14-performance.css'
import './styles/15-lab.css'
import './styles/16-cta.css'
import './styles/17-v2.css'
import './styles/18-v4.css'
import './styles/19-v6.css'
import './styles/20-strip.css'
import './styles/21-story.css'
import './styles/22-v7.css'
import './styles/23-v8.css'
import './styles/24-v9.css'
import './styles/25-v10.css'

// Replaces the style="" attributes and JS-written inline styles of the original.
import './styles/interactions.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
