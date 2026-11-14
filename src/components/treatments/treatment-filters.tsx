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
    <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div
        role="group"
        aria-label="Filter treatments by category"
        className="flex flex-wrap gap-2"
      >
        {['All Treatments', ...categories].map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelectCategory(category)}
              className={`inline-flex min-h-[40px] items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                isActive
                  ? 'border-brand bg-brand text-white'
                  : 'border-border bg-surface-card text-ink hover:border-brand/50 hover:bg-surface'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
        Showing {filteredCount} of {totalCount}
      </p>
    </div>
  );
}

