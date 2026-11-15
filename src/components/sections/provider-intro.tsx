import Link from 'next/link';
import Image from 'next/image';
import { getProviderDisplayPortrait, providerProfile } from '@/content/provider';

interface ProviderIntroProps {
  isPreviewMode: boolean;
}

export function ProviderIntro({ isPreviewMode }: ProviderIntroProps) {
  const portraitInfo = getProviderDisplayPortrait(isPreviewMode);
  const portraitSrc =
    portraitInfo?.image.src || '/images/provider/placeholder-portrait.jpg';

  return (
    <section
      aria-labelledby="provider-intro-heading"
      className="border-y border-[#eadfd8] bg-[#f3e9e2]/55 py-18 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f]">
              Clinical Leadership · New York
            </span>

            <h2
              id="provider-intro-heading"
              className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.08] text-[#2e2c31]"
            >
              Danielle Karten. <em>NP, AGPCNP-BC.</em>
            </h2>

            <p className="lead max-w-2xl text-[16.5px]">
              {providerProfile.shortIntro}
            </p>

            <ul className="gold-dash-list mt-6 max-w-xl">
              <li>
                <strong className="font-medium text-[#2e2c31]">
                  Individualized Facial Harmony:
                </strong>{' '}
                Treatments are tailored around your dynamic facial movement,
                muscle strength, and bone structure rather than standard dosages.
              </li>
              <li>
                <strong className="font-medium text-[#2e2c31]">
                  Unhurried Consultations:
                </strong>{' '}
                Every recommendation is shaped through dedicated conversation,
                transparent discussion of expectations, and careful aftercare.
              </li>
              <li>
                <strong className="font-medium text-[#2e2c31]">
                  Board-Certified Safety:
                </strong>{' '}
                Advanced practice nursing background providing safe, measured, and
                evidence-based clinical care.
              </li>
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/about" className="cta-solid">
                About Danielle
              </Link>
              <Link href="/contact#consultation-form" className="cta-dark-ghost">
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <figure className="relative overflow-hidden rounded-xl border border-[#eadfd8] bg-white split-img-shadow">
                <Image
                  src={portraitSrc}
                  alt="Danielle Karten, NP, AGPCNP-BC"
                  width={portraitInfo?.image.width ?? 896}
                  height={portraitInfo?.image.height ?? 1200}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  style={{
                    objectPosition:
                      portraitInfo?.image.objectPosition ?? '50% 20%',
                  }}
                  className="editorial-image-zoom aspect-[3/4] w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
