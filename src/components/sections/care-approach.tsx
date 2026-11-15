import { homeContent } from '@/content/site';

export function CareApproach() {
  return (
    <section
      aria-labelledby="care-approach-heading"
      className="site-container py-14 sm:py-18 lg:py-20"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-4 lg:col-span-5">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f]">
            Care Philosophy
          </span>
          <h2
            id="care-approach-heading"
            className="font-serif text-[clamp(2.1rem,3.8vw,3.2rem)] font-light leading-[1.1] text-[#2e2c31]"
          >
            Luxury is expressed through <em>restraint.</em>
          </h2>
          <p className="lead max-w-md text-[16px]">
            Aesthetic medicine should never feel rushed or overdone. Danielle Karten,
            NP approaches every treatment with precision, measured dosage, and an
            appreciation for natural beauty.
          </p>
        </div>

        <ol className="divide-y divide-[#eadfd8] border-y border-[#eadfd8] lg:col-span-7">
          {homeContent.careApproach.pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-8"
            >
              <span className="font-serif text-3xl font-normal text-[#a87c2b] sm:col-span-2">
                {pillar.number}
              </span>
              <div className="space-y-2 sm:col-span-10">
                <h3 className="font-serif text-2xl font-medium leading-snug text-[#1b191f]">
                  {pillar.title}
                </h3>
                <p className="text-[15px] font-normal leading-relaxed text-[#403a3d]">
                  {pillar.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
