// Primary menu — routes to dedicated pages.
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/firm' },
  { label: 'Strategies', path: '/strategies' },
  { label: 'Insights', path: '/insights' },
  { label: 'Our Expertise', path: '/expertise' },
];

// Footer groups. Every label must name a page or a capability the site
// actually describes — no link may imply clients, history or recognition.
export const footerNav = [
  {
    heading: 'Firm',
    links: [
      { label: 'About Nexus', path: '/firm' },
      { label: 'Our Expertise', path: '/expertise' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    heading: 'Strategies',
    links: [
      { label: 'Core Digital Assets', path: '/strategies' },
      { label: 'Staking & On-Chain Yield', path: '/strategies' },
      { label: 'Digital Venture', path: '/strategies' },
      { label: 'Multi-Strategy Solutions', path: '/strategies' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Book a Consultation', path: '/contact' },
      { label: 'Insights', path: '/insights' },
      { label: 'Legal & Regulatory', path: '/legal' },
      { label: 'Privacy', path: '/privacy' },
    ],
  },
];
