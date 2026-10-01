# Chartwheel — "Performance Engine" (new version)

A React + Vite port of `../chartwheel_awwwards_v11_pixar_phone.html`. Home page only,
reproducing its layout, palette, artwork and animations exactly. The source file's CSS
is carried over rule-for-rule; nothing was redesigned.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint
```

## How the stylesheet was ported

The source is one HTML file with seven `<style>` blocks, authored as successive design
passes (V1 components, then V2, V4, V6, the image-strip and story blocks, then V7–V11).
Those passes override each other **by source order**, not by specificity, so the port had
to preserve the exact rule sequence.

`src/styles/` therefore holds 25 files:

- `01`–`16` split the first authored pass by component (base, nav, hero, phone, ecosystem,
  globe, lab, performance, CTA …), as contiguous runs so order is untouched.
- `17`–`25` keep each later design pass as a single ordered layer (`17-v2.css`,
  `18-v4.css`, … `25-v10.css`).
- `interactions.css` is the only new stylesheet — see below.

`src/main.jsx` imports them in that numbered order. Concatenating them reproduces the
original 618 rules in identical sequence, so the cascade resolves exactly as it did in
the source file. (Splitting by component alone did **not** work: grouped selectors such as
`.hero h1, .section h2, .logo, .btn { … }` span several components, and rules like
`.section` vs `.globe-section` rely on equal-specificity source order.)

## No inline CSS

Neither this app nor `../../old-version` has a single `style={{…}}` prop. Everything the
original did with `style=""` attributes or JS-written inline styles now lives in
`src/styles/interactions.css`:

| Original | Now |
| --- | --- |
| `style="font-size:clamp(40px,5vw,72px)"` | `.manifest-heading` |
| `style="display:inline-block;margin-top:30px"` | `.globe-cta` |
| `style="color:#7bd5ff"` on the category kicker | `.category-hero-copy .kicker` |
| `style="color:#748078"` on mini-phone labels | `.mini-phone .screen small` |
| `style="width:100%/68%/26%"` funnel bars | `.flow-row[data-fill='…'] i em` |
| `style="height:28%…92%"` sparkline bars | `.phone-chart-mini span:nth-child(n)` |
| `style="width:100%;height:100%"` on the story SVG | `.story-art-svg` |
| `style="display:none"` on category SVG layers | React renders only the active layer |
| JS writing `opacity`/`transform`/`transition` for reveals | `.will-reveal` / `.is-revealed` |

Pointer-driven motion is the one place JS still touches the DOM: it publishes **CSS custom
properties** (`--cx`, `--cy`, `--ringx`, `--ringy`, `--art-x`, `--art-y`, `--rx`, `--ry`,
`--scroll-progress`). The styling that consumes them lives in `interactions.css`; JS only
supplies the numbers, which is unavoidable for cursor tracking.

## Animations

All of the original behaviour is preserved:

- **Custom cursor** — ring that grows 24→52px over interactive elements, exact-tracking dot,
  lagged outer ring (0.12 easing), contextual label. Hidden until the pointer first moves,
  and on coarse-pointer devices.
- **Scroll reveal** — IntersectionObserver at threshold 0.1, fade + 35px rise over 0.9s on
  `cubic-bezier(.16,1,.3,1)`, with the original `i % 6 × 60ms` stagger.
- **Scroll progress bar** and **section dots** that track the section in view.
- **Count-up metrics** (1.2B+, 190+) easing out over 900ms once 80% visible.
- **Hero parallax** — artwork drifts, device tilts ±2–3°.
- **In-phone dashboard** — four scrollable pages, page dots, selectable supply channel,
  wheel containment so the page doesn't scroll until the phone hits an end stop.
- **Category switcher** — picking a vertical swaps copy, chips and the SVG scene layer.
- CSS keyframes (orbs, orbit rings, signal dots, floats, marquee, pulse) are carried over.

Everything collapses to a static render under `prefers-reduced-motion: reduce`.

## Fonts

The source asks for `'Milker'`, a licensed font it never ships, so headings resolve to the
`Arial Black` fallback — which is what the design actually looks like. That stack is kept
verbatim. The DM Sans / Space Grotesk link is also kept (the source imports them, though
its own rules never reference them). Dropping in a real Milker webfont is a one-line change.

## Images

The logo and story photo are local in `public/img/`. The image-strip photo
(`neuradigi.com/images/services/mobile-apps.jpg`) **returns 404 at source**, so that panel
renders as its gradient surface plus badges — exactly how the original file paints today.
Drop a replacement into `public/img/` and add an `<img>` to `ImageStrip.jsx` to restore it.

## Verifying the port

Rendered at 1440px the page is **10318px tall — identical to the source file**, and
computed styles for headings, sections and components match element for element.
