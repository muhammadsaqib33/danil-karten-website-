'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BeforeAfterComparison } from '@/types/gallery';
import { BeforeAfterSlider } from '@/components/gallery/before-after-slider';
import { BeforeAfterCard } from '@/components/gallery/before-after-card';
import {
  GalleryLightbox,
  type LightboxTarget,
} from '@/components/gallery/gallery-lightbox';

interface ResultsGalleryProps {
  comparisons: BeforeAfterComparison[];
  mode?: 'preview-section' | 'full-page';
}

export function ResultsGallery({
  comparisons,
  mode = 'preview-section',
}: ResultsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxTarget, setLightboxTarget] = useState<LightboxTarget>(null);

  const categories = useMemo(() => {
    const seen = new Set<string>();
    for (const item of comparisons) {
      seen.add(item.category);
    }
    return ['All', ...Array.from(seen)];
  }, [comparisons]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') {
      return comparisons;
    }
    return comparisons.filter((item) => item.category === activeCategory);
  }, [comparisons, activeCategory]);

  if (comparisons.length === 0) {
    return null;
  }

  const featured = filtered[0] ?? comparisons[0];
  const secondaryCards =
    mode === 'preview-section' ? filtered.slice(1, 4) : filtered.slice(1);

  return (
    <section
      aria-labelledby="before-after-heading"
      className="bg-canvas py-14 sm:py-18 lg:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-[#c9a15a]" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d4788f]">
                Before &amp; After
              </p>
            </div>
            <h2
              id="before-after-heading"
              className="font-serif text-[clamp(1.9rem,2.8vw+0.85rem,2.75rem)] font-medium leading-tight text-ink"
            >
              Treatment results &amp; comparison gallery
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Representative aesthetic treatment comparisons. Individual
              recommendations vary by anatomy and consultation plan.
            </p>
          </div>

          {mode === 'preview-section' ? (
            <Link
              href="/gallery"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#966d24] underline decoration-[#966d24]/40 underline-offset-4 transition-colors hover:text-[#785416] hover:decoration-[#785416]"
            >
              <span>View Gallery</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        {/* Treatment Category Filters */}
        {categories.length > 2 ? (
          <div
            role="group"
            aria-label="Filter comparisons by treatment category"
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex min-h-[40px] items-center rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a15a] ${
                    isActive
                      ? 'border-[#1b191f] bg-[#1b191f] text-white shadow-sm ring-1 ring-[#1b191f]'
                      : 'border-[#eadfd8] bg-white text-[#2e2c31] hover:border-[#c9a15a] hover:bg-[#faf4ee]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        ) : null}

        {/* Featured Interactive Comparison */}
        {featured ? (
          <div className="mt-8 grid items-center gap-8 rounded-xl border border-border bg-surface-card p-5 sm:p-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              {featured.isAlignedForSlider ? (
                <BeforeAfterSlider comparison={featured} />
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded">
                    <Image
                      src={featured.beforeImage.src}
                      alt={featured.beforeImage.alt}
                      fill
                      sizes="(max-width: 1024px) 45vw, 28vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded">
                    <Image
                      src={featured.afterImage.src}
                      alt={featured.afterImage.alt}
                      fill
                      sizes="(max-width: 1024px) 45vw, 28vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4 lg:col-span-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d4788f]">
                  Featured · {featured.treatmentLabel}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium leading-snug text-ink sm:text-3xl">
                {featured.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {featured.summary}
              </p>
              <p className="text-xs leading-relaxed text-muted sm:text-sm">
                {featured.caption}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxTarget({ kind: 'comparison', item: featured })
                  }
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-[#c9a15a] to-[#dcb877] border border-[#c9a15a] px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1b191f] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(201,161,90,0.35)] hover:-translate-y-0.5 cursor-pointer"
                >
                  Open full-screen view
                </button>
                <Link
                  href={`/treatments/${featured.treatmentSlug}`}
                  className="inline-flex min-h-[44px] items-center text-xs font-bold uppercase tracking-[0.18em] text-[#966d24] underline decoration-[#966d24]/40 underline-offset-4 transition-colors hover:text-[#785416] hover:decoration-[#785416]"
                >
                  View Treatment
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        {/* Additional Comparison Cards */}
        {secondaryCards.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryCards.map((item) => (
              <BeforeAfterCard
                key={item.id}
                comparison={item}
                onInspect={(target) =>
                  setLightboxTarget({ kind: 'comparison', item: target })
                }
              />
            ))}
          </div>
        ) : null}
      </div>

      <GalleryLightbox
        target={lightboxTarget}
        onClose={() => setLightboxTarget(null)}
      />
    </section>
  );
}
