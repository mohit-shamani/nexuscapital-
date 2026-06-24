// Primary menu — routes to dedicated pages.
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/firm' },
  { label: 'Strategies', path: '/strategies' },
  { label: 'Insights', path: '/insights' },
  { label: 'Our Expertise', path: '/expertise' },
];

export const footerNav = [
  {
    heading: 'Firm',
    links: [
      { label: 'About Nexus', path: '/firm' },
      { label: 'Investment Philosophy', path: '/firm' },
      { label: 'Our Expertise', path: '/expertise' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Portfolio Management', path: '/strategies' },
      { label: 'Wealth Preservation', path: '/strategies' },
      { label: 'Alternative Investments', path: '/strategies' },
      { label: 'Strategic Advisory', path: '/strategies' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Book a Consultation', path: '/contact' },
      { label: 'Insights', path: '/insights' },
      { label: 'Client Stories', path: '/firm' },
      { label: 'Trust & Metrics', path: '/firm' },
    ],
  },
];
