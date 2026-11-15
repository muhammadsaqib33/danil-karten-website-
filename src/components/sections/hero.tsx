import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { getHeroImage } from '@/content/images';

interface HeroProps {
  isPreviewMode: boolean;
}

export function Hero({ isPreviewMode }: HeroProps) {
  const heroImage = getHeroImage(isPreviewMode);
  const imageSrc = heroImage?.image.src || '/images/hero/home-clinic-hero.jpg';

  return (
    <header className="phero">
      <picture>
        <Image
          src={imageSrc}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="phero-img"
          style={{
            objectPosition: heroImage?.image.objectPosition ?? 'center center',
          }}
        />
      </picture>

      <div className="phero-grade" aria-hidden="true" />

      <div className="phero-inner">
        <h1>
          Thoughtful care. Keep your <em>expression.</em>
        </h1>

        <p>
          Personalized aesthetic consultations with Danielle Karten, NP,
          AGPCNP-BC in New York. Carefully placed, treatments soften expression
          lines, restore natural facial balance, and support preventative skin
          longevity customized to your muscle anatomy.
        </p>

        <div className="phero-ctas">
          <Link
            href={siteConfig.primaryCta.href}
            className="cta-solid"
          >
            {siteConfig.primaryCta.label}
          </Link>
          <Link
            href={siteConfig.secondaryCta.href}
            className="cta-ghost"
          >
            {siteConfig.secondaryCta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
