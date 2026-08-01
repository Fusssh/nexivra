# Nexivra Technologies — Website

Marketing site for **Nexivra Technologies**, built with Next.js 15 (App Router),
TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services (with in-page anchors: `#product-engineering`,
  `#cloud-platform`, `#data-ai`, `#design`)
- `/contact` — Contact (working form UI + FAQ)

## Structure

```
app/                 Route files (page.tsx per route) + layout.tsx + globals.css
components/          Header, Footer, Logo, Section, Button, Reveal, SignalRail, Eyebrow
components/sections/ Page-specific sections (Hero, Process, ContactForm, etc.)
public/fonts/        Self-hosted variable fonts (Space Grotesk, Inter, JetBrains Mono)
public/images/       Generated abstract background artwork (SVG)
```

## Design system

- **Palette** — "Ink & Signal": deep navy base (`--color-ink`), an amber accent
  (`--color-signal-amber`) for calls to action, and a cyan accent
  (`--color-wire-cyan`) for technical/data details. All tokens live in
  `app/globals.css` under `@theme`.
- **Type** — Space Grotesk (display/headings), Inter (body), JetBrains Mono
  (small uppercase labels/eyebrows).
- **Signature motif** — `components/SignalRail.tsx` is a scroll-progress rail
  fixed to the left edge on large screens, a small recurring nod to the
  "connectivity" idea behind the brand name.
- Roughly two-thirds of the site's sections use a full-bleed or panel
  background image (via `components/Section.tsx`'s `image` prop) with a dark
  gradient overlay for legible text; the rest use flat surface colors for
  visual rest.

## Adding your logo

`components/Logo.tsx` currently renders a placeholder wordmark ("N" mark +
"Nexivra Technologies" text). Once you have a logo file:

1. Drop it in `public/` (e.g. `public/logo.svg`).
2. In `components/Logo.tsx`, replace the placeholder `<span>` block with:
   ```tsx
   <Image src="/logo.svg" alt="Nexivra Technologies" width={132} height={32} />
   ```
   (add `import Image from "next/image"` at the top).

The header and footer both import this single component, so the swap only
needs to happen in one place.

## Replacing background artwork

The images in `public/images/` are generated abstract SVGs (network meshes,
grids, signal rings) standing in for photography. Swap any of them for real
photos or brand renders by keeping the same filename, or update the `image`
prop passed to `<Section />` in the relevant `components/sections/*.tsx` file.

## Notes

- The contact form (`components/sections/ContactForm.tsx`) is UI-complete but
  not wired to a backend — see the `NOTE` comment in that file for where to
  add an API route or email service.
- Social links in the footer point to `#` placeholders — update
  `components/Footer.tsx` with real URLs.
- Reduced-motion is respected globally (see `globals.css`), and all
  interactive elements have visible keyboard focus states.
