# Dfoldlab design system

One-page studio site. Calm, human, product-led. Each section uses one of these patterns:
- Dark rounded hero frame with a slow moving light, labelled points joined by hairlines, centred pill nav, scroll cue.
- Tall photo cards with overlaid title, chips, arrow circle and a white pill button.
- Brand-blue bands, two-tone muted headings, a soft pill accordion, a CTA band with an email field, a full footer.
- Pinned scroll story with small real UI cards over photos; soft-tinted cards with live UI.
- Dark panel with a project tracker card.
- New section ideas can come from anywhere, but rebuild them in this system — never copy a design whole.

## Avoid (reads as AI-made)
Italic serif accents · mono `[01]`/`FIG` labels · uppercase tracking labels · neon glow · grid backgrounds · identical icon-card grids with "Learn more →" · fake client logos · buzzwords ("unlock", "elevate", "seamless").

## Typography
- **Instrument Sans only** (`lib/fonts.ts`, `next/font/google`, 400/500/600).
- Headings `font-medium`, `tracking-[-0.03em]`:
  - h1 `text-[2.75rem] sm:text-6xl lg:text-[5rem] leading-[1.02]`
  - h2 `text-[2.1rem] sm:text-5xl leading-[1.08]`
- Eyebrow: `| What we do |` in `text-sm text-muted`.
- Optional `accent` = second line in muted grey (not a colour).

## Colour (`app/globals.css`; light `:root`, dark `[data-theme="dark"]`)
| Token | Use |
|---|---|
| `surface` (warm off-white) / `paper` / `raised` | page / soft panels / cards |
| `ink` / `muted` / `line` | text / secondary / borders |
| `primary` (forest #134e43; mint in dark) + `on-primary` | buttons, logo |
| `sage` | small dots and badges on dark |
| `tint-sage/sand/mist` | approach cards only |
| `night`, `forest`, `forest-light` | fixed: hero frame, `forest-band`, CTA band |

Text on `primary` uses `text-on-primary` (flips in dark mode). Check both themes.

## Shape & layout
- Pills everywhere: buttons, chips, nav, filters (`rounded-full`).
- Big rounded panels: `rounded-[2rem] lg:rounded-[2.5rem]`, inset from the edge with `px-2 sm:px-4` (hero, forest bands, shop, contact).
- Cards `rounded-3xl` / `rounded-[1.75rem]`. Shadows only on the active testimonial, open FAQ item and floating UI.
- Rhythm: off-white page, then a dark or green panel, then off-white again. Never two green bands in a row.

## Motion (framer-motion + Lenis)
- `SmoothScroll` (Lenis) · `FadeUp` for headers and cards · `RollingNumber` for counts.
- Hero: aurora drift (CSS `aurora` keyframes), nodes float and draw their lines in.
- Work cards widen on hover (CSS `:has()`), image zooms, arrow rotates 45°.
- Services story pins on scroll (desktop), copy un-blurs per step. Testimonial carousel via `useCarousel` (`hooks/`).
- Ease `EASE` from `lib/motion.ts`. Respect `prefers-reduced-motion`.

## Components
- `@/components`: `Button`, `ButtonLink` (`primary | outline | ghost | light | glass`), `Container`, `Section`, `SectionHeader`, `FadeUp`, `RollingNumber`, `Media`, `FilterTabs`, `SocialIcon`, `SmoothScroll`, `ThemeToggle`, `Navbar`, `Footer`, `CtaBand`, `Logo`.
- `views/home/components`: `HeroNodes`, `ServiceStory`, `ServiceList`, `ServiceFrame`, `screens/*`, `ApproachCard`, `EditorWindow`, `ShopGrid`, `TestimonialCarousel`, `CarouselArrows`, `SentenceForm`.

## Imagery
`public/images/<section>/`, Unsplash licence, never hotlinked. Replace with real team and project photos before launch.

## Logo
- Mark: one flat band folded into a geometric **D** — `components/layout/LogoMark.tsx` (`LOGO_PATHS`, `LOGO_COLORS`). Lighter top fold, darker bottom fold.
- Wordmark: `dfold` semibold + `lab` regular in `text-muted`, `tracking-[-0.045em]`.
- Same geometry in `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png`, `public/icons/*` and the OG image. Change the mark in one place, then regenerate the PNG/ICO files.

## SEO (mirrors teks-shipping / hubcommerce)
- Site URL = the request's origin (`lib/seo/origin.ts`, reads Host / X-Forwarded-* headers). Not deployed on Vercel; no env var. Behind a proxy, forward Host and X-Forwarded-Proto.
- `constants/seo.ts` — title, description, keywords, OG/Twitter, robots, theme colours (no absolute URLs).
- `app/layout.tsx` uses `generateMetadata` (metadataBase = origin); JSON-LD via `components/seo/StructuredData.tsx` in Suspense — import it directly, never through the `@/components` barrel (server-only).
- `app/layout.tsx` — metadata + JSON-LD (`lib/seo/schemas.ts`: ProfessionalService, WebSite, FAQPage built from `HOME.faq`) + optional GA4.
- `app/opengraph-image.tsx`, `app/twitter-image.tsx` — `lib/og.tsx`: white left (logo, two-tone headline, "Design & engineering studio" — no location), blue right panel with an oversized mark. No domain, no chips. Instrument Sans from `assets/fonts/*.woff`.
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`. Env vars in `.env.example`.

## Copy
Professional, plain, outcome-focused. Don't talk about tech stack, frameworks or code — talk about clarity, milestones, quality and support.
