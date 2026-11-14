# AGENTS.md

## Project Scope
This repository contains the **public website** for **Dani E Esthetics** (provisional public display name; legal entity: **Dani E Esthetics LLC**), led by **Danielle Karten, NP, AGPCNP-BC**.

- **Private software boundary**: `DaniCare CRM` is the private internal dashboard/CRM. This public website is NOT a SaaS marketing site and MUST NOT expose, rebuild, or bundle private clinical CRM features (charts, medical history, allergies, medications, consents, lot numbers, clinical photos, WhatsApp/SMS logs, audit logs, or spreadsheet imports).
- **No existing CRM repository was present in this workspace** when this site was scaffolded, so a narrow, documented server-side integration interface (`src/lib/server/crm-client.ts`) is provided without simulating live CRM delivery.

## Repository Conventions
- **Framework**: Next.js App Router (`src/app/`), TypeScript (`strict: true`), Tailwind CSS v4.
- **Server-first**: Components in `src/app/` and `src/components/` are React Server Components by default. Use `'use client'` only for interactive components (mobile navigation drawer, mobile sticky CTA dismissal/visibility if needed, accordion, consultation form).
- **Centralized content**: All editable business facts, provider info, treatments, and FAQs live in `src/content/` (`site.ts`, `provider.ts`, `treatments.ts`, `faqs.ts`). Page components compose sections and pass typed data; never hardcode phone numbers, addresses, brand names, or clinical claims inside components.
- **Design tokens**: Color, typography, and spacing tokens are defined in `src/app/globals.css` and documented in `DESIGN.md`. Do not scatter raw hex values across components.
- **Draft vs. approved content**: Candidate treatments default to `publicationStatus: 'draft'` and `clinicalReviewStatus: 'pending_review'`. Production pages, navigation, and `sitemap.ts` MUST render only `publicationStatus === 'approved'` treatments.

## Commands
- `npm run dev` — Start local development server
- `npm run build` — Production build
- `npm run start` — Serve production build locally
- `npm run typecheck` — Run `tsc --noEmit`
- `npm run lint` — Run ESLint
- `npm test` — Run Vitest unit & integration-boundary tests

## Security & Privacy Boundaries
- **Secrets**: Never prefix private API keys or CRM endpoints with `NEXT_PUBLIC_`. All CRM communication happens exclusively in `src/lib/server/`.
- **Form scope**: The public consultation form collects only contact and scheduling-preference fields. Do NOT collect date of birth, medical history, allergies, medications, clinical photos, or unrestricted medical messages.
- **Logging**: Never log form PII (`fullName`, `phone`, `email`) or raw request payloads in server logs, URLs, or analytics.
- **No false compliance claims**: Never display a "HIPAA compliant" or "HIPAA certified" badge on the public site.
- **No unverified messaging**: Do not auto-send WhatsApp, SMS, or email messages without verified, BAA/privacy-reviewed production configuration.
- **Private residential arrival instructions**: Doorman/residence arrival instructions MUST NEVER be published on public pages or included in client bundles.

## Synthetic-Data Requirement
- Use synthetic/placeholder-free test data only during development and testing (`Jane Doe`, `+1-555-010-0199`, `synthetic@example.test`).
- Never import real patient spreadsheets, real clinical records, or private clinical photography.

## Rules Against Invented Business Facts
Do NOT invent or fabricate:
- Confirmed public brand name (flag `"Dani E Esthetics"` as provisional)
- Provider biography, education, awards, memberships, years of experience, or employment history
- Clinic/provider portraits or before-and-after imagery
- Business hours, prices, appointment durations, or cancellation/deposit policies
- Public email address or Instagram handle/URL (only `"Dani Skin Lab"` display name is supplied; no URL)
- Verified reviews, ratings, trust badges, or unsupported clinical claims (guarantees, pain levels, recovery times, longevity)

## Verification Requirements
Before claiming work is complete, run and report exact results for:
1. `npm run typecheck`
2. `npm run lint`
3. `npm test`
4. `npm run build`
5. Browser verification across `375px`, `390px`, `768px`, `1024px`, and `1440px` viewports, keyboard navigation, form validation/error/demo flows, zero console errors, and zero broken assets.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
