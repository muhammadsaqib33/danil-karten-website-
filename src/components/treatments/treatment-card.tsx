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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-14px_rgba(30,94,78,0.16)]">
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
          {displayImage.isDemo ? (
            <div className="absolute top-3 right-3 rounded-full border border-champagne/40 bg-black/55 px-2.5 py-0.5 text-[9.5px] font-medium tracking-wider text-champagne-light backdrop-blur-md">
              Sample Photo
            </div>
          ) : null}
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
              {treatment.category}
            </span>
          </div>

          <h3 className="font-serif text-2xl font-medium leading-snug text-ink sm:text-[25px]">
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
            <p className="text-xs text-muted/80">
              Discussed options: {treatment.relatedOptions.join(' · ')}
            </p>
          ) : null}
        </div>

        <div className="mt-6 border-t border-border/70 pt-4">
          <Link
            href={href}
            className="inline-flex min-h-[38px] items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            <span>Learn more</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
