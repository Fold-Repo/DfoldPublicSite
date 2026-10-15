# One-page site

Everything is on `/` → `app/(site)/page.tsx` → `views/home/index.tsx`. Nav links are section ids.

| Section | id |
|---|---|
| Hero (dark frame, aurora, nodes, avatars) + stat chips — keep as is | — |
| Services (pinned scroll story, UI cards on photos) | `services` |
| Approach (3 tinted cards with live UI) | — |
| Work (tall photo cards that widen on hover) | `work` |
| Delivery (dark panel, 4 stages + project tracker card) | — |
| Shop (filter + product cards) | `shop` |
| Team (portrait grid with name cards) | `team` |
| Testimonials (focused card, faded sides) | — |
| FAQ (muted two-tone heading + soft accordion) | `faq` |
| Contact (details list + form card) | `contact` |
| Footer: CTA band + columns + socials | — |

- **All text lives in JSON** — never type copy into a component:
  - `data/site.json` — company details, nav, footer, social links, accessibility labels, share-image text
  - `data/home.json` — every section's copy, form labels/placeholders, and the small app mockups (`mockups`)
  - `data/projects.json`, `data/products.json` — work and shop items
- `constants/site.ts` only re-exports `data/site.json`. The logo wordmark is the only text kept in code.
- New section: data → `types/home.type.ts` → `sections/X.tsx` → export → `views/home/index.tsx` → nav link if needed.
