'use client';

interface TreatmentFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  totalCount: number;
  filteredCount: number;
}

export function TreatmentFilters({
  categories,
  activeCategory,
  onSelectCategory,
  totalCount,
  filteredCount,
}: TreatmentFiltersProps) {
  return (
    <div className="flex flex-col gap-5 border-b border-[#eadfd8] pb-8 sm:flex-row sm:items-center sm:justify-between">
      <div
        role="group"
        aria-label="Filter treatments by category"
        className="flex flex-wrap gap-2.5"
      >
        {['All Treatments', ...categories].map((category) => {
          const isActive = activeCategory === category;
          return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectCategory(category)}
                className={`inline-flex min-h-[40px] items-center rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a15a] ${
                  isActive
                    ? 'border-[#1b191f] bg-[#1b191f] text-white shadow-sm ring-1 ring-[#1b191f]'
                    : 'border-[#eadfd8] bg-white text-[#2e2c31] hover:border-[#c9a15a] hover:bg-[#faf4ee]'
                }`}
              >
                {category}
              </button>
          );
        })}
      </div>

      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8d8289]">
        Showing {filteredCount} of {totalCount} treatments
      </p>
    </div>
  );
}
