import { describe, expect, it } from 'vitest';
import {
  getApprovedTreatments,
  getTreatmentBySlug,
  getTreatmentDisplayImage,
  getTreatmentsForView,
  treatmentsData,
} from '@/content/treatments';
import {
  comparisonsData,
  galleryItemsData,
  getComparisonsForView,
  getGalleryItemsForView,
} from '@/content/gallery';
import { siteConfig, homeContent } from '@/content/site';
import { getProviderDisplayPortrait, providerProfile } from '@/content/provider';
import { generalFaqs } from '@/content/faqs';
import { resolveContentMode } from '@/lib/content-mode';
import sitemap from '@/app/sitemap';

describe('content publication boundaries', () => {
  it('publishes confirmed signature treatments while keeping candidate services in draft status', () => {
    expect(treatmentsData.length).toBeGreaterThanOrEqual(6);
    const approved = getApprovedTreatments();
    expect(approved).toHaveLength(6);
    expect(getTreatmentsForView(false)).toHaveLength(6);
    expect(getTreatmentsForView(true)).toHaveLength(treatmentsData.length);

    // Verify candidate services remain pending review
    const drafts = treatmentsData.filter((item) => item.publicationStatus === 'draft');
    expect(drafts.length).toBeGreaterThan(0);
    for (const item of drafts) {
      expect(item.clinicalReviewStatus).toBe('pending_review');
    }
  });

  it('hides unapproved candidate treatments from getTreatmentBySlug unless draft preview is enabled', () => {
    expect(getTreatmentBySlug('biostimulators', false)).toBeUndefined();
    expect(getTreatmentBySlug('biostimulators', true)?.displayName).toBe(
      'Biostimulators — Sculptra / Radiesse',
    );
    expect(getTreatmentBySlug('neuromodulators', false)?.displayName).toBe(
      'Botox & Dysport',
    );
  });

  it('includes approved treatments and excludes draft treatments from production sitemap', () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls.some((url) => url.includes('/treatments/neuromodulators'))).toBe(
      true,
    );
    expect(urls.some((url) => url.includes('/treatments/biostimulators'))).toBe(
      false,
    );
    expect(urls.some((url) => url.endsWith('/treatments'))).toBe(true);
    expect(urls.some((url) => url.endsWith('/gallery'))).toBe(true);
    expect(urls.some((url) => url.endsWith('/contact'))).toBe(true);
  });

  it('publishes authentic clinician portrait, patient comparisons, and clinical gallery items in production mode', () => {
    expect(getComparisonsForView(false)).toHaveLength(5);
    expect(getComparisonsForView(true)).toHaveLength(5);

    expect(getGalleryItemsForView(false)).toHaveLength(6);
    expect(getGalleryItemsForView(true)).toHaveLength(6);

    const providerPortrait = getProviderDisplayPortrait(false);
    expect(providerPortrait).not.toBeNull();
    expect(providerPortrait?.isPlaceholder).toBe(false);
    expect(providerPortrait?.image.src).toBe(
      '/images/provider/danielle-karten.jpg',
    );

    const approvedTreatments = getApprovedTreatments();
    for (const treatment of approvedTreatments) {
      expect(getTreatmentDisplayImage(treatment, false)).not.toBeNull();
    }

    const draftTreatments = treatmentsData.filter(
      (t) => t.publicationStatus === 'draft',
    );
    for (const treatment of draftTreatments) {
      expect(getTreatmentDisplayImage(treatment, false)).toBeNull();
    }
  });

  it('resolves preview vs production content modes explicitly', () => {
    expect(
      resolveContentMode(undefined, {
        NODE_ENV: 'production',
        CONTENT_MODE: 'production',
      }),
    ).toBe('production');

    expect(
      resolveContentMode(undefined, {
        NODE_ENV: 'production',
        CONTENT_MODE: 'preview',
      }),
    ).toBe('preview');

    expect(
      resolveContentMode(undefined, {
        NODE_ENV: 'production',
      }),
    ).toBe('production');

    expect(
      resolveContentMode(undefined, {
        NODE_ENV: 'development',
      }),
    ).toBe('preview');
  });

  it('never leaks private residential address or doorman instructions into public content', () => {
    const serialized = JSON.stringify({
      siteConfig,
      homeContent,
      providerProfile,
      treatmentsData,
      generalFaqs,
      comparisonsData,
      galleryItemsData,
    }).toLowerCase();

    expect(serialized).not.toContain('330 east 75');
    expect(serialized).not.toContain('suite 2f');
    expect(serialized).not.toContain('doorman');
    expect(serialized).not.toContain('karten residence');
  });
});
