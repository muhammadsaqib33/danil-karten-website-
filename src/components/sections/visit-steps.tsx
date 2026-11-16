import { homeContent } from '@/content/site';

export function VisitSteps() {
  return (
    <section
      aria-labelledby="visit-steps-heading"
      className="site-container py-14 sm:py-18 lg:py-20"
    >
      <div className="max-w-2xl space-y-3">
        <h2
          id="visit-steps-heading"
          className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] font-light leading-tight text-[#2e2c31]"
        >
          From inquiry to <em>personalized care.</em>
        </h2>
      </div>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homeContent.visitSteps.steps.map((step) => (
          <li
            key={step.stepNumber}
            className="flex flex-col rounded-xl border border-[#eadfd8] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9a15a]/50 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,161,90,0.35)] bg-[#faf4ee] font-serif text-lg font-medium text-[#966d24]">
                {step.stepNumber}
              </span>
              <span
                aria-hidden="true"
                className="ml-4 h-px flex-1 bg-[#eadfd8]"
              />
            </div>
            <h3 className="mt-5 font-serif text-xl font-medium leading-snug text-[#1b191f]">
              {step.title}
            </h3>
            <p className="mt-2.5 text-[14px] font-normal leading-relaxed text-[#403a3d]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
