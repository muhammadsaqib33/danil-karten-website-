'use client';

import { useMemo, useState } from 'react';
import type { Treatment } from '@/types/treatment';
import { TreatmentFilters } from '@/components/treatments/treatment-filters';
import { TreatmentCard } from '@/components/treatments/treatment-card';

interface TreatmentGridProps {
  treatments: Treatment[];
  isPreviewMode: boolean;
}

export function TreatmentGrid({
  treatments,
  isPreviewMode,
}: TreatmentGridProps) {
  const [activeCategory, setActiveCategory] = useState('All Treatments');

  const categories = useMemo(() => {
    const seen = new Set<string>();
    for (const item of treatments) {
      seen.add(item.category);
    }
    return Array.from(seen);
  }, [treatments]);

  const filteredTreatments = useMemo(() => {
    if (activeCategory === 'All Treatments') {
      return treatments;
    }
    return treatments.filter((item) => item.category === activeCategory);
  }, [treatments, activeCategory]);

  return (
    <div className="space-y-8">
      {categories.length > 1 ? (
        <TreatmentFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          totalCount={treatments.length}
          filteredCount={filteredTreatments.length}
        />
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTreatments.map((treatment) => (
          <TreatmentCard
            key={treatment.slug}
            treatment={treatment}
            isPreviewMode={isPreviewMode}
          />
        ))}
      </div>
    </div>
  );
}

