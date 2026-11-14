# Owner Review & Pre-Launch Checklist

**Status:** NOT PRODUCTION-READY. Complete every blocker below before deploying to a live public domain.

## 1. Branding & Identity Blockers
- [ ] Confirm final public display name (`Dani E Esthetics` vs. `Dani’s SkinLab` vs. `Dani E Aesthetic`) in `src/content/site.ts`.
- [ ] Supply final vector/high-res logo mark (if desired in header/footer).
- [ ] Confirm public production domain (`NEXT_PUBLIC_SITE_URL`) for canonical tags, Open Graph, and `sitemap.xml`.

## 2. Clinical & Content Review Blockers
- [ ] Review and approve provider biography for **Danielle Karten, NP, AGPCNP-BC** (`src/content/provider.ts`).
- [ ] Review and confirm final treatment menu in `src/content/treatments.ts`; flip approved items to `publicationStatus: 'approved'` and `clinicalReviewStatus: 'approved'`.
- [ ] Review draft clinical copy, risks/limitations, recovery notes, and FAQs (`src/content/treatments.ts`, `src/content/faqs.ts`).
- [ ] Confirm whether treatment prices or appointment durations should be published.

## 3. Location, Contact & Social Blockers
- [ ] Confirm whether full street address (`330 East 75th Street, Suite 2F, New York, NY`) may be displayed publicly (currently set to `New York, NY`).
- [ ] Keep private doorman arrival instructions (*"visiting the Karten residence"*) out of the public website and inside private CRM appointment confirmations only.
- [ ] Supply public contact email address (if one should be shown alongside `917-855-7737`).
- [ ] Supply exact verified Instagram URL for `Dani Skin Lab` (or confirm omission).
- [ ] Supply verified business hours.

## 4. Photography & Testimonials Blockers
- [ ] Supply authentic provider portrait (`Danielle Karten, NP, AGPCNP-BC`).
- [ ] Supply authentic clinic photographs (if desired).
- [ ] Supply approved patient testimonials and/or before-and-after photography **with separate documented marketing authorization** (never pull directly from private CRM clinical photo storage).

## 5. Legal, Privacy & CRM Integration Blockers
- [ ] Connect real `DaniCare CRM` endpoint (`CRM_API_URL`, `CRM_API_KEY`, `CONSULTATION_DELIVERY_MODE=crm`).
- [ ] Verify privacy/BAA, encryption, retention, and deletion policies for consultation inquiry handling.
- [ ] Review and finalize `/privacy` (`src/app/(marketing)/privacy/page.tsx`) with legal counsel, including cancellation and deposit policies if applicable.
- [ ] Review `/accessibility` (`src/app/(marketing)/accessibility/page.tsx`) and confirm contact channel for accessibility support.
- [ ] Verify WhatsApp/SMS communications remain inactive on the public site until verified business channels and consent workflows are reviewed.
