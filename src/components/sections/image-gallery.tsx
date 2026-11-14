'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Expand } from 'lucide-react';
import type { GalleryItem } from '@/types/gallery';
import {
  GalleryLightbox,
  type LightboxTarget,
} from '@/components/gallery/gallery-lightbox';

interface ImageGalleryProps {
  items: GalleryItem[];
  mode?: 'editorial-home' | 'full-page';
}

export function ImageGallery({
  items,
  mode = 'editorial-home',
}: ImageGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxTarget, setLightboxTarget] = useState<LightboxTarget>(null);

  if (items.length === 0) {
    return null;
  }

  const categories = ['All', ...Array.from(new Set(items.map((i) => i.category)))];
  const filtered =
    activeCategory === 'All'
      ? items
      : items.filter((i) => i.category === activeCategory);

  const visibleItems =
    mode === 'editorial-home'
      ? items.filter((i) => i.id !== 'gal-preparation').slice(0, 4)
      : filtered;

  return (
    <section
      aria-labelledby="practice-gallery-heading"
      className="bg-rose-soft py-14 sm:py-18 lg:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-rose-border pb-6 sm:flex-row sm:items-end">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-brand" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Practice &amp; Experience
              </p>
            </div>
            <h2
              id="practice-gallery-heading"
              className="font-serif text-[clamp(1.9rem,2.8vw+0.85rem,2.75rem)] font-medium leading-tight text-ink"
            >
              Atmosphere, precision &amp; calm care
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              A calm look inside our consultation atmosphere, skin care
              preparation, and individualized approach to clinical esthetics.
            </p>
          </div>

          {mode === 'editorial-home' ? (
            <Link
              href="/gallery"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 text-sm font-medium text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-hover hover:decoration-brand"
            >
              <span>View Gallery</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        {mode === 'full-page' && categories.length > 2 ? (
          <div
            role="group"
            aria-label="Filter practice gallery by category"
            className="mt-6 flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex min-h-[40px] items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    isActive
                      ? 'border-brand bg-brand text-white'
                      : 'border-rose-border bg-surface-card text-ink hover:border-brand/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        ) : null}

        {mode === 'editorial-home' ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visibleItems.map((item) => (
              <figure
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-rose-border bg-surface-card"
              >
                <button
                  type="button"
                  onClick={() => setLightboxTarget({ kind: 'gallery', item })}
                  aria-label={`View ${item.title} in gallery lightbox`}
                  className="relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    loading="lazy"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    style={{
                      objectPosition: item.image.objectPosition ?? '50% 50%',
                    }}
                    className="editorial-image-zoom aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-deep/85 text-ivory opacity-90 shadow-sm transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                <figcaption className="flex flex-1 flex-col gap-1 border-t border-border/70 px-5 py-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                    {item.category}
                  </span>
                  <span className="font-serif text-lg font-medium text-ink">
                    {item.title}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <figure
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-rose-border bg-surface-card"
              >
                <button
                  type="button"
                  onClick={() => setLightboxTarget({ kind: 'gallery', item })}
                  aria-label={`View ${item.title} in gallery lightbox`}
                  className="relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    loading="lazy"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    style={{
                      objectPosition: item.image.objectPosition ?? '50% 50%',
                    }}
                    className="editorial-image-zoom aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-deep/85 text-ivory opacity-90 shadow-sm transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                <figcaption className="flex flex-1 flex-col gap-1 border-t border-border/70 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                    {item.category}
                  </span>
                  <span className="font-serif text-xl font-medium text-ink">
                    {item.title}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>

      <GalleryLightbox
        target={lightboxTarget}
        onClose={() => setLightboxTarget(null)}
      />
    </section>
  );
}

