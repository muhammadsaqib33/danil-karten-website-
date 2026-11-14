# DESIGN.md

## Design Concept
**Editorial, high-contrast boutique aesthetic clinic** — photography-led introductions, rich deep emerald and warm ivory contrast, soft rose editorial surfaces, restrained champagne accents, and crisp clinical credibility.

## Color Tokens
Defined centrally in `src/app/globals.css` (`@theme inline`) using semantic tokens:

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--color-emerald-deep` | `#123F35` | Footer, final consultation banner, practice intro strip, preview ribbon |
| `--color-brand` | `#1F6150` | Primary buttons, Care Approach editorial band, active filter pills, focus outlines |
| `--color-brand-hover` | `#174B3E` | Hover/active state for primary buttons |
| `--color-canvas` / `--color-ivory` | `#FAF7F2` | Main warm ivory page canvas |
| `--color-rose` | `#EBD8D2` | Selected editorial backgrounds (Meet Danielle) |
| `--color-rose-soft` | `#F5EAE6` | Secondary gallery and editorial card surfaces |
| `--color-champagne` | `#C5A47E` | Restrained decorative rules and borders (never used for small text on light backgrounds) |
| `--color-champagne-light` | `#E6D2B8` | High-contrast eyebrows, numerals, and icons on `#123F35` and `#1F6150` dark sections |
| `--color-ink` | `#202925` | Primary body and heading text |
| `--color-muted` | `#4F5B56` | Secondary labels and helper copy (WCAG AA compliant on `#FAF7F2`, `#FFFFFF`, and `#EBD8D2`) |
| `--color-surface-card` | `#FFFFFF` | Elevated card surface and crisp treatment/visit sections |
| `--color-border` | `#E2DBD1` | Hairline borders and dividers |

## Typography
Loaded via `next/font/google`:
- **Headings (`--font-serif`)**: `Cormorant Garamond` (weights 400, 500, 600, 700; italic 400).
- **Body & UI (`--font-sans`)**: `Inter` (weights 400, 500, 600).

## Layout & Section Cadence
- Desktop container width: `max-w-[1240px]` (`px-5 sm:px-8`).
- Section rhythm: `py-14 sm:py-18 lg:py-22` (roughly `56px` mobile, `72px–88px` desktop).
- Homepage visual contrast alternates intentionally across:
  - Warm Ivory (`#FAF7F2`) photography-led 45/55 split hero
  - Deep Emerald (`#123F35`) practice introduction strip
  - Pure White (`#FFFFFF`) 6-card image treatment showcase
  - Soft Rose (`#EBD8D2`) Meet Danielle editorial split
  - Warm Ivory (`#FAF7F2`) Before & After interactive comparison gallery
  - Primary Emerald (`#1F6150`) Care Approach editorial band
  - Soft Rose Tint (`#F5EAE6`) asymmetric editorial image gallery
  - Pure White (`#FFFFFF`) 4-step Your Visit sequence
  - Warm Ivory (`#FAF7F2`) split FAQ accordion
  - Deep Emerald (`#123F35`) final consultation banner & footer

## Accessibility & Reduced Motion
- Keyboard-operable mobile navigation drawer, category filters, FAQ accordions, Before/After slider (`role="slider"` with Arrow/Home/End/PageUp/PageDown keys), and gallery lightbox (focus trap + Escape + focus restoration).
- Global `@media (prefers-reduced-motion: reduce)` rule disables animations and image zoom transitions.
