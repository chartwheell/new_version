// Copy and configuration transcribed from chartwheel_awwwards_v11_pixar_phone.html.

export const LOGO = '/img/chartwheel-logo.png'

export const CONTACT = {
  email: 'hello@chartwheel.com',
  company: 'Chartwheel LLP',
  tagline: 'Private performance marketplace',
  year: 2026,
}

export const hero = {
  eyebrow: 'The performance engine for mobile growth',
  lead: 'Chartwheel connects ambitious apps with high-quality mobile inventory, intelligent media buying and measurable performance—bringing the moving parts of growth into one powerful engine.',
  floats: [
    { key: 'hf1', label: 'QUALITY SIGNAL', value: '+62%', note: 'retention' },
    { key: 'hf2', label: 'MEDIA EFFICIENCY', value: '-38%', note: 'cost / install' },
    { key: 'hf3', label: 'LIVE OPTIMIZATION', value: '24/7', note: 'signal loop' },
  ],
  metrics: [
    { label: 'Reach', value: '1.2B+', note: 'devices', count: { target: 1.2, suffix: 'B+', decimals: 1 } },
    { label: 'Markets', value: '190+', note: 'countries', count: { target: 190, suffix: '+' } },
    { label: 'Signals', value: '24/7', note: 'optimization' },
  ],
}

export const phonePages = {
  overview: {
    label: '01 / PERFORMANCE PULSE',
    greeting: { value: '2.46M', note: 'active users in motion' },
    insight: { title: 'Growth is moving', note: '+18.4% this cycle' },
    flow: [
      { stage: 'ACQUIRE', value: '2.46M', fill: '100' },
      { stage: 'ENGAGE', value: '1.67M', fill: '68' },
      { stage: 'CONVERT', value: '0.42M', fill: '26' },
    ],
    note: 'One performance loop. Every signal feeds the next decision.',
  },
  supply: {
    label: '02 / SUPPLY ENGINE',
    heading: ['Reach the right', 'mobile moments.'],
    copy: 'Chartwheel connects premium mobile supply with performance buying across the channels that matter.',
    channels: [
      { id: 'OEM', title: 'OEM', note: 'device-level reach' },
      { id: 'Programmatic', title: 'PROGRAMMATIC', note: 'smart buying' },
      { id: 'Native', title: 'NATIVE', note: 'seamless action' },
      { id: 'Rewarded', title: 'REWARDED', note: 'high intent' },
    ],
  },
  measure: {
    label: '03 / MEASUREMENT',
    heading: ['Know what', 'actually moved.'],
    metrics: [
      { label: 'ATTRIBUTED INSTALLS', value: '184K', delta: '+21%' },
      { label: 'QUALITY USERS', value: '78%', delta: '+12%' },
      { label: 'ROAS', value: '3.8×', delta: '+0.7×' },
      { label: 'LTV SIGNAL', value: '↑ 24%', delta: 'stable' },
    ],
    copy: 'Measure installs, downstream events, retention, revenue and value—not just clicks.',
  },
  engine: {
    label: '04 / CHARTWHEEL ENGINE',
    heading: ['Build growth', 'as a system.'],
    steps: [
      { n: '01', title: 'DISCOVER', note: 'Map markets, audiences and inventory.' },
      { n: '02', title: 'LAUNCH', note: 'Activate campaigns with the right supply mix.' },
      { n: '03', title: 'MEASURE', note: 'Connect attribution to real outcomes.' },
      { n: '04', title: 'SCALE', note: 'Feed the signal loop back into buying.' },
    ],
    tag: 'PRIVATE PERFORMANCE EXCHANGE',
  },
}

export const channels = [
  { key: 'oem', title: 'OEM', copy: 'Scale at the source with device-level opportunities.' },
  { key: 'programmatic', title: 'Programmatic', copy: 'Smarter media buying driven by performance signals.' },
  { key: 'native', title: 'Native', copy: 'Seamless experiences designed to create action.' },
  { key: 'influencer', title: 'Influencer', copy: 'Creators and communities that move people.' },
  { key: 'rewarded', title: 'Rewarded', copy: 'Engagement with value built into the experience.' },
  { key: 'search', title: 'Search', copy: 'High-intent users when they are ready to act.' },
]

export const globeStats = [
  { key: 's1', label: 'Monthly active devices', value: '1.2B+' },
  { key: 's2', label: 'Premium publishers', value: '800+' },
  { key: 's3', label: 'Countries', value: '190+' },
]

export const labCards = [
  { key: 'lc1', small: 'Demand', strong: 'Apps', note: 'brief →' },
  { key: 'lc2', small: 'Supply', strong: 'Inventory', note: '→ live' },
  { key: 'lc3', small: 'Signal', strong: 'Attribution', note: '→ measured' },
  { key: 'lc4', small: 'Decision', strong: 'Optimization', note: '→ scaled' },
]

export const dashboard = {
  title: 'Acquisition performance',
  number: '2,456,320',
  up: '↑ 112% vs previous period',
  side: [
    { value: '-38%', label: 'Lower CPI' },
    { value: '+62%', label: 'Higher retention' },
    { value: '2.3×', label: 'LTV growth' },
    { value: '+41%', label: 'Event rate' },
  ],
}

export const categories = [
  {
    key: 'gaming',
    index: '01',
    title: 'Gaming',
    cardCopy: 'Engagement · IAP · ROAS',
    desc: 'Engagement, IAP, ROAS and the signals behind repeat play. Chartwheel maps acquisition to the moments that create value.',
    chips: [['Signal', 'engagement'], ['Outcome', 'ROAS'], ['Loop', 'retention']],
  },
  {
    key: 'fintech',
    index: '02',
    title: 'Fintech',
    cardCopy: 'Acquisition · KYC · LTV',
    desc: 'Acquire users while connecting acquisition signals to KYC, activation and downstream value.',
    chips: [['Signal', 'KYC'], ['Outcome', 'activation'], ['Loop', 'LTV']],
  },
  {
    key: 'ecom',
    index: '03',
    title: 'E-commerce',
    cardCopy: 'Purchase · ROAS · Repeat value',
    desc: 'Connect product discovery to purchase intent, repeat value and efficient ROAS.',
    chips: [['Signal', 'purchase'], ['Outcome', 'ROAS'], ['Loop', 'repeat value']],
  },
  {
    key: 'travel',
    index: '04',
    title: 'Travel',
    cardCopy: 'Intent · Bookings · Revenue',
    desc: 'Map intent from discovery to booking with destination, timing and revenue signals.',
    chips: [['Signal', 'intent'], ['Outcome', 'bookings'], ['Loop', 'revenue']],
  },
  {
    key: 'ent',
    index: '05',
    title: 'Entertainment',
    cardCopy: 'Subscription · Engagement · Retention',
    desc: 'Understand the signals behind content discovery, subscription conversion and sustained engagement.',
    chips: [['Signal', 'engagement'], ['Outcome', 'subscription'], ['Loop', 'retention']],
  },
  {
    key: 'mobility',
    index: '06',
    title: 'Mobility',
    cardCopy: 'Local acquisition · Activation · Repeat',
    desc: 'Connect local acquisition with activation, ride intent and repeat usage.',
    chips: [['Signal', 'ride intent'], ['Outcome', 'activation'], ['Loop', 'repeat usage']],
  },
]
