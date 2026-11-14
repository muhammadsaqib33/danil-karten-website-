import Image from 'next/image';
import { Expand } from 'lucide-react';
import type { BeforeAfterComparison } from '@/types/gallery';

interface BeforeAfterCardProps {
  comparison: BeforeAfterComparison;
  onInspect: (comparison: BeforeAfterComparison) => void;
}

export function BeforeAfterCard({
  comparison,
  onInspect,
}: BeforeAfterCardProps) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface-card">
      <div>
        <div className="grid grid-cols-2 gap-1 bg-border/60 p-1">
          <div className="relative overflow-hidden rounded-l bg-surface">
            <Image
              src={comparison.beforeImage.src}
              alt={comparison.beforeImage.alt}
              width={comparison.beforeImage.width}
              height={comparison.beforeImage.height}
              loading="lazy"
              sizes="(max-width: 639px) 48vw, (max-width: 1023px) 24vw, 18vw"
              style={{
                objectPosition:
                  comparison.beforeImage.objectPosition ?? '50% 25%',
              }}
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="absolute left-2 top-2 rounded bg-emerald-deep/90 px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-ivory">
              Before
            </span>
          </div>

          <div className="relative overflow-hidden rounded-r bg-surface">
            <Image
              src={comparison.afterImage.src}
              alt={comparison.afterImage.alt}
              width={comparison.afterImage.width}
              height={comparison.afterImage.height}
              loading="lazy"
              sizes="(max-width: 639px) 48vw, (max-width: 1023px) 24vw, 18vw"
              style={{
                objectPosition:
                  comparison.afterImage.objectPosition ?? '50% 25%',
              }}
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="absolute right-2 top-2 rounded bg-emerald-deep/90 px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-ivory">
              After
            </span>
          </div>
        </div>

        <div className="space-y-2 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {comparison.treatmentLabel}
            </span>
          </div>
          <h3 className="font-serif text-xl font-medium leading-snug text-ink">
            {comparison.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {comparison.caption}
          </p>
        </div>
      </div>

      <div className="border-t border-border/80 px-5 py-3.5">
        <button
          type="button"
          onClick={() => onInspect(comparison)}
          className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Expand className="h-4 w-4" aria-hidden="true" />
          <span>Inspect comparison</span>
        </button>
      </div>
    </article>
  );
}

