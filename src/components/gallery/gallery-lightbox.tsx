'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { BeforeAfterComparison, GalleryItem } from '@/types/gallery';
import { BeforeAfterSlider } from '@/components/gallery/before-after-slider';

export type LightboxTarget =
  | { kind: 'comparison'; item: BeforeAfterComparison }
  | { kind: 'gallery'; item: GalleryItem }
  | null;

interface GalleryLightboxProps {
  target: LightboxTarget;
  onClose: () => void;
}

export function GalleryLightbox({ target, onClose }: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) {
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => !el.hasAttribute('disabled'));

        if (focusables.length === 0) {
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [target, onClose]);

  if (!target) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-deep/75 p-4 backdrop-blur-xs sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-heading"
        className="relative max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-xl border border-border bg-canvas p-5 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d4788f]">
              {target.kind === 'comparison'
                ? target.item.treatmentLabel
                : target.item.category}
            </p>
            <h2
              id="lightbox-heading"
              className="font-serif text-2xl font-medium text-ink sm:text-3xl"
            >
              {target.item.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close gallery preview"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#1b191f] transition-all hover:border-[#1b191f] hover:bg-[#1b191f] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a15a] cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {target.kind === 'comparison' ? (
            <>
              {target.item.isAlignedForSlider ? (
                <BeforeAfterSlider comparison={target.item} />
              ) : (
                <div className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
                      <Image
                        src={target.item.beforeImage.src}
                        alt={target.item.beforeImage.alt}
                        width={target.item.beforeImage.width}
                        height={target.item.beforeImage.height}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded bg-emerald-deep/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-ivory">
                        Before
                      </span>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
                      <Image
                        src={target.item.afterImage.src}
                        alt={target.item.afterImage.alt}
                        width={target.item.afterImage.width}
                        height={target.item.afterImage.height}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <span className="absolute right-3 top-3 rounded bg-emerald-deep/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-ivory">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {target.item.summary}
              </p>
              <p className="text-xs text-muted">{target.item.caption}</p>
            </>
          ) : (
            <>
              <div className="overflow-hidden rounded-lg border border-border bg-surface">
                <Image
                  src={target.item.image.src}
                  alt={target.item.image.alt}
                  width={target.item.image.width}
                  height={target.item.image.height}
                  style={{
                    objectPosition:
                      target.item.image.objectPosition ?? '50% 50%',
                  }}
                  className="max-h-[62dvh] w-full object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {target.item.caption}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

