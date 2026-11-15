import Link from 'next/link';
import Image from 'next/image';
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
    <article className="tcard group">
      {displayImage ? (
        <Link
          href={href}
          className="relative block overflow-hidden bg-[#faf4ee] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a15a]"
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
            className="editorial-image-zoom aspect-[16/10] w-full object-cover"
          />
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
        <div className="space-y-3">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4788f]">
            {treatment.category}
          </span>

          <h3 className="font-serif text-[1.65rem] font-medium leading-snug text-[#2e2c31] transition-colors group-hover:text-[#b88d44]">
            <Link
              href={href}
              className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a15a]"
            >
              {title}
            </Link>
          </h3>

          <p className="text-[14.5px] font-light leading-relaxed text-[#6a6266]">
            {treatment.shortDescription}
          </p>

          {treatment.relatedOptions && treatment.relatedOptions.length > 0 ? (
            <p className="text-xs font-light text-[#8d8289]">
              Formulations: {treatment.relatedOptions.join(' · ')}
            </p>
          ) : null}
        </div>

        <div className="mt-6 border-t border-[#eadfd8]/70 pt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a15a] transition-all group-hover:text-[#b88d44]"
          >
            <span>Learn more</span>
            <span
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
