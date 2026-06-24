# Nexus Capital — Institutional Asset Management

A premium, institutional-grade marketing site built to feel like a $500M asset
manager: restrained, editorial, trustworthy. Light ivory canvas, deep navy
fields, a single muted brass accent, and a quiet 3D form that never distracts.

## Tech

- **React 18** + **Vite 5** — fast, code-split SPA
- **Tailwind CSS** — design tokens for the brand system
- **Framer Motion** — page transitions, masked text reveals, magnetic CTAs
- **GSAP + ScrollTrigger** — synced with Lenis smooth scroll
- **Three.js / React Three Fiber / drei** — the subtle hero object

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in /dist
npm run preview  # preview the production build
```

## Architecture

```
src/
├── components/
│   ├── layout/      Navbar, Footer, Logo, Layout, PageWrapper
│   ├── sections/    Composable page sections (Hero, Stats, CTA, …)
│   ├── three/       WebGL hero scene (lazy-loaded)
│   ├── ui/          Design-system primitives (Button, RevealText, …)
│   └── utils/       SmoothScroll, ScrollToTop
├── data/            Content as data — strategies, insights, nav, stats
├── hooks/           useReveal, usePrefersReducedMotion
├── lib/             motion variants, helpers
├── pages/           Route components (lazy-loaded)
└── styles/          Tailwind entry + global layers
```

## Performance & accessibility

- Route-level and WebGL **code splitting**; vendor chunks separated in Vite config.
- 3D scene uses a **capped, adaptive DPR** and **performance monitor**.
- All motion **respects `prefers-reduced-motion`** (smooth scroll + 3D disabled).
- Fonts preconnected and `display=swap`; console stripped in production builds.
- Semantic landmarks, focus-visible rings, and ARIA labels throughout.

> For institutional and professional investors only. Content is illustrative.
