import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Treatment } from '@/types/treatment';
import { getTreatmentDisplayImage } from '@/content/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  isPreviewMode?: boolean;
}

export function TreatmentCard({
  treatment,
  isPreviewMode = false,
}: TreatmentCardProps) {
  const href =
    isPreviewMode && treatment.publicationStatus === 'draft'
      ? `/treatments/${treatment.slug}?preview=drafts`
      : `/treatments/${treatment.slug}`;

  const displayImage = getTreatmentDisplayImage(treatment, isPreviewMode);
  const title = treatment.cardTitle ?? treatment.displayName;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-[0_14px_34px_-14px_rgba(18,63,53,0.16)]">
      {displayImage ? (
        <Link
          href={href}
          className="relative block overflow-hidden bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image
            src={displayImage.image.src}
            alt={displayImage.image.alt}
            width={displayImage.image.width}
            height={displayImage.image.height}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            style={{
              objectPosition: displayImage.image.objectPosition ?? '50% 35%',
            }}
            className="editorial-image-zoom aspect-[4/3] w-full object-cover"
          />
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              {treatment.category}
            </p>
          </div>

          <h3 className="font-serif text-2xl font-medium leading-snug text-ink">
            <Link
              href={href}
              className="rounded-sm transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {title}
            </Link>
          </h3>

          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
            {treatment.shortDescription}
          </p>

          {treatment.relatedOptions && treatment.relatedOptions.length > 0 ? (
            <p className="text-xs text-muted">
              Options discussed: {treatment.relatedOptions.join(', ')}
            </p>
          ) : null}
        </div>

        <div className="mt-5 border-t border-border/80 pt-4">
          <Link
            href={href}
            className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            <span>View Treatment</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
