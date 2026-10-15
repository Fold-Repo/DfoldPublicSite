# Folder structure (mirrors teks-shipping)

```
app/(site)/layout.tsx          → Navbar + <main> + Footer for marketing pages
app/(site)/page.tsx            → thin: `return <HomeView />` (one-page site)
views/<page>/index.tsx         → composes the page from sections
views/<page>/sections/*.tsx    → one file per section, exported from sections/index.ts
views/<page>/components/*      → pieces used only by this page
views/index.ts                 → re-exports every view
data/<page>.json + <page>.ts   → page copy, typed, exported as a CONSTANT (e.g. HOME)
types/<page>.type.ts           → types for that page's data, re-exported from types/index.ts
constants/                     → site-wide values (SITE, NAV_LINKS)
components/ui/                 → primitives: Container, Section, SectionHeader, ButtonLink, buttonStyles
components/layout/             → site chrome: Navbar, Footer
lib/                           → helpers (`cn`)
```

Rules:
- Import from barrels: `@/components`, `@/views`, `@/data`, `@/types`, `@/constants`, `@/lib`.
- No hard-coded copy in components — put it in `data/*.json`.
- `"use client"` only where state/effects are needed.
- Need a pattern twice → make it a component in `components/ui` first.
