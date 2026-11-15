'use client';

import type { Treatment } from '@/types/treatment';
import { TreatmentCard } from '@/components/treatments/treatment-card';

interface TreatmentGridProps {
  treatments: Treatment[];
  isPreviewMode: boolean;
}

export function TreatmentGrid({
  treatments,
  isPreviewMode,
}: TreatmentGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {treatments.map((treatment) => (
        <TreatmentCard
          key={treatment.slug}
          treatment={treatment}
          isPreviewMode={isPreviewMode}
        />
      ))}
    </div>
  );
}

