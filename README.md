# Dani E Esthetics — Public Website

Standalone Next.js App Router website for **Dani E Esthetics** (provisional public brand name; legal entity **Dani E Esthetics LLC**), led by **Danielle Karten, NP, AGPCNP-BC**.

> **Status:** Complete visual preview with temporary demo imagery, candidate treatment menu, and an explicit development/demo consultation boundary. **Not production-ready** until owner approvals, authentic photography, and the live `DaniCare CRM` endpoint are connected (see [docs/launch-checklist.md](./docs/launch-checklist.md)).

## Setup

```bash
npm install
cp .env.example .env.local
# For full visual preview locally, set CONTENT_MODE=preview in .env.local
npm run dev
```

Open `http://localhost:3000`.

## Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build production bundle |
| `npm run start` | Serve production build locally |
| `npm run typecheck` | Run TypeScript strict type checking |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest suite |

## Preview vs. Production (`CONTENT_MODE`)

Configured via `CONTENT_MODE` in `.env.local` / environment variables (`src/lib/content-mode.ts`):

- **`CONTENT_MODE=preview`** (default in `next dev`):
  - Renders all 8 candidate treatments on `/treatments` (6 featured on `/`) with demo photography.
  - Renders the Before & After layout demos (`Demo imagery — not actual Dani E Esthetics patient results.`) and Practice & Experience gallery on `/` and `/gallery`.
  - Shows the labeled placeholder clinician portrait (`Placeholder portrait — replace with Danielle's photograph.`).
  - Displays a discreet preview banner in the header and blocks search engine indexing (`noindex, nofollow` + `Disallow: /` in `robots.txt`).
- **`CONTENT_MODE=production`** (default when `NODE_ENV=production` unless `CONTENT_MODE=preview` is explicitly set):
  - Publishes only `publicationStatus === 'approved'` treatments and non-demo approved images (`isDemo === false`).
  - Never falls back to demo imagery, placeholder portraits, or comparison layout demos.
  - Omits unapproved optional sections gracefully.

## Editing Content & Replacing Images

All editable business facts, images, treatments, and gallery items live in `src/content/`:
- `src/content/site.ts` — Brand name (`Dani E Esthetics`), legal entity (`Dani E Esthetics LLC`), phone (`917-855-7737`), public location (`New York, NY`), navigation (`Treatments`, `About`, `Gallery`, `Contact`), and homepage copy.
- `src/content/provider.ts` — Provider credentials (`Danielle Karten, NP, AGPCNP-BC`), `portrait` (production) vs. `placeholderPortrait` (preview), bio, and philosophy.
- `src/content/treatments.ts` — Candidate treatments (`publicationStatus: 'draft' | 'approved'`, `image` for production vs. `demoImage` for preview).
- `src/content/gallery.ts` — Before & After comparisons (`comparisonsData`) and Practice & Experience items (`galleryItemsData`).
- `src/content/images.ts` — Centralized image manifest tracking local paths under `public/images/`, source URLs, license references, and replacement notes.
- `src/content/faqs.ts` — General consultation FAQs.

To replace any demo image with an owner-approved photograph:
1. Place the optimized file under `public/images/` (`hero/`, `provider/`, `treatments/`, `gallery/`, or `comparisons/`).
2. Update the corresponding slot in `src/content/images.ts`, `src/content/provider.ts`, `src/content/treatments.ts`, or `src/content/gallery.ts` with `isDemo: false` and `publicationStatus: 'approved'`.

## CRM Integration Status
A documented, server-side integration interface lives in `src/lib/server/crm-client.ts` and `src/lib/server/consultation-service.ts` (see [docs/integration.md](./docs/integration.md)). Never prefix private CRM environment variables with `NEXT_PUBLIC_`.
