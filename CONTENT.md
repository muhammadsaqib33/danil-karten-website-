# CONTENT.md

## 1. Supplied Facts (Verified in Client Brief)
- **Legal business name**: `Dani E Esthetics LLC`
- **Provider name & credentials**: `Danielle Karten, NP, AGPCNP-BC`
- **Phone**: `917-855-7737` (`tel:+19178557737`)
- **Public location (approved provisional)**: `New York, NY`
- **Full street address (WITHHELD FROM PUBLIC SITE PENDING OWNER CONFIRMATION)**: `330 East 75th Street, Suite 2F, New York, NY`
- **Private arrival instructions (NEVER PUBLISH ON PUBLIC WEBSITE)**:
  > Doorman building. Clients should tell the doorman they are visiting the Karten residence.
  > *Store only in private DaniCare CRM / approved appointment confirmation workflows.*
- **Instagram display name**: `Dani Skin Lab` *(no exact Instagram handle or URL supplied — omitted from public links)*

## 2. Provisional Branding (Requires Owner Confirmation)
- **Provisional public display name**: `Dani E Esthetics` (configured in `src/content/site.ts`)
- **Earlier brand names referenced in client material**:
  - `Dani’s SkinLab`
  - `Dani E Aesthetic`
- **Action required**: Owner must confirm the single canonical public brand name before launch.

## 3. Candidate Treatments & Publication Status
All candidate services derived from CRM notes default to `publicationStatus: 'draft'` and `clinicalReviewStatus: 'pending_review'` in `src/content/treatments.ts`. **None are published in production until owner confirmation.**

| Slug | Display Name | Card Title | Category | Publication Status | Clinical Review |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `neuromodulators` | Neuromodulators | Botox & Dysport | Injectables | `draft` | `pending_review` |
| `dermal-fillers` | Dermal Fillers | Dermal Fillers | Injectables | `draft` | `pending_review` |
| `biostimulators` | Biostimulators — Sculptra / Radiesse | Biostimulators — Sculptra / Radiesse | Injectables | `draft` | `pending_review` |
| `microneedling` | Microneedling | Microneedling | Skin & Regenerative | `draft` | `pending_review` |
| `prp` | PRP | PRP | Skin & Regenerative | `draft` | `pending_review` |
| `hair-treatments` | Hair Treatments | Hair Treatments | Scalp & Hair | `draft` | `pending_review` |
| `iv-therapy` | IV Therapy | IV Therapy | Wellness | `draft` | `pending_review` |
| `chemical-peels` | Chemical Peels | Chemical Peels | Skin Resurfacing | `draft` | `pending_review` |

### How to Publish an Approved Treatment
1. Danielle Karten, NP, AGPCNP-BC reviews and edits the clinical copy in `src/content/treatments.ts`.
2. Supply an approved photograph (`image`) and set `clinicalReviewStatus: 'approved'` and `publicationStatus: 'approved'`.
3. Production pages, navigation links, consultation interest options, and `sitemap.xml` update automatically.

## 4. Preview vs. Production (`CONTENT_MODE`)
- `CONTENT_MODE=preview`: Displays all candidate treatments, demo image gallery, labeled placeholder clinician portrait (`"Placeholder portrait — replace with Danielle's photograph."`), and Before & After comparison layout demos (`"Demo imagery — not actual Dani E Esthetics patient results."`), while marking pages `noindex, nofollow` and `robots.txt` `Disallow: /`.
- `CONTENT_MODE=production`: Publishes strictly `publicationStatus === 'approved'` treatments and non-demo approved images (`isDemo === false`). Never falls back to demo imagery or unapproved clinical entries.

## 5. Missing Owner-Supplied Assets
- [ ] Final logo / brand mark
- [ ] Confirmed public brand name
- [ ] Approved provider biography (education, experience, philosophy)
- [ ] Authentic provider portrait (`Danielle Karten, NP, AGPCNP-BC`)
- [ ] Authentic clinic photographs
- [ ] Public contact email address
- [ ] Exact verified Instagram URL
- [ ] Business hours
- [ ] Confirmed final treatment menu & approved clinical copy
- [ ] Treatment prices and appointment durations (if to be published)
- [ ] Approved patient testimonials (with documented marketing release)
- [ ] Approved before-and-after photographs (with separate marketing authorization)
- [ ] Cancellation policy, Deposit policy, and legal Privacy / Accessibility sign-off
- [ ] Permission to publish full street address (`330 East 75th Street, Suite 2F, New York, NY`)
