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
  it('keeps all unconfirmed candidate treatments in draft status by default', () => {
    expect(treatmentsData.length).toBeGreaterThan(0);
    for (const item of treatmentsData) {
      expect(item.publicationStatus).toBe('draft');
      expect(item.clinicalReviewStatus).toBe('pending_review');
    }
    expect(getApprovedTreatments()).toHaveLength(0);
    expect(getTreatmentsForView(false)).toHaveLength(0);
    expect(getTreatmentsForView(true)).toHaveLength(treatmentsData.length);
  });

  it('hides draft treatments from getTreatmentBySlug unless draft preview is enabled', () => {
    expect(getTreatmentBySlug('neuromodulators', false)).toBeUndefined();
    expect(getTreatmentBySlug('neuromodulators', true)?.displayName).toBe(
      'Neuromodulators',
    );
  });

  it('excludes draft treatments from production sitemap', () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls.some((url) => url.includes('/treatments/neuromodulators'))).toBe(
      false,
    );
    expect(urls.some((url) => url.endsWith('/treatments'))).toBe(true);
    expect(urls.some((url) => url.endsWith('/gallery'))).toBe(true);
    expect(urls.some((url) => url.endsWith('/contact'))).toBe(true);
  });

  it('excludes all demo gallery, comparison, and placeholder portrait assets in production mode', () => {
    expect(getComparisonsForView(false)).toHaveLength(0);
    expect(getComparisonsForView(true).length).toBeGreaterThanOrEqual(6);

    expect(getGalleryItemsForView(false)).toHaveLength(0);
    expect(getGalleryItemsForView(true).length).toBeGreaterThanOrEqual(6);

    expect(getProviderDisplayPortrait(false)).toBeNull();
    expect(getProviderDisplayPortrait(true)?.isPlaceholder).toBe(true);

    for (const treatment of treatmentsData) {
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
