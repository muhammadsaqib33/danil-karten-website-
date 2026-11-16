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
      ? items.slice(0, 4)
      : filtered;

  return (
    <section
      aria-labelledby="practice-gallery-heading"
      className="border-y border-[#eadfd8] bg-[#f3e9e2]/45 py-14 sm:py-18 lg:py-20"
    >
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 border-b border-[#eadfd8] pb-8 sm:flex-row sm:items-end">
        <div className="space-y-3">
          <h2
            id="practice-gallery-heading"
            className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] font-light leading-[1.1] text-[#2e2c31]"
          >
            Atmosphere, precision &amp; <em>calm care.</em>
          </h2>
          <p className="lead max-w-2xl text-[16px]">
            A calm look inside our private suite atmosphere, clean clinical
            preparation, and unhurried appointment environment in New York.
          </p>
        </div>

        {mode === 'editorial-home' ? (
          <Link
            href="/gallery"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a15a] underline decoration-[#c9a15a]/40 underline-offset-4 transition-colors hover:text-[#b88d44] hover:decoration-[#c9a15a]"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : null}
      </div>

      {mode === 'full-page' && categories.length > 2 ? (
        <div
          role="group"
          aria-label="Filter practice gallery by category"
          className="mt-8 flex flex-wrap gap-2.5"
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

      <div
        className={`mt-10 grid gap-7 sm:grid-cols-2 ${
          mode === 'editorial-home' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
        }`}
      >
        {visibleItems.map((item) => (
          <figure
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-[#eadfd8] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9a15a]/60 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setLightboxTarget({ kind: 'gallery', item })}
              aria-label={`View ${item.title} in gallery lightbox`}
              className="relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a15a]"
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
              <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1b191f]/85 text-[#faf4ee] opacity-90 shadow-sm transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <figcaption className="flex flex-1 flex-col gap-1.5 border-t border-[#eadfd8]/70 p-5">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#d4788f]">
                {item.category}
              </span>
              <span className="font-serif text-[1.28rem] font-medium text-[#2e2c31]">
                {item.title}
              </span>
              <span className="text-[13.5px] font-light leading-relaxed text-[#6a6266]">
                {item.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

        <GalleryLightbox
          target={lightboxTarget}
          onClose={() => setLightboxTarget(null)}
        />
      </div>
    </section>
  );
}
