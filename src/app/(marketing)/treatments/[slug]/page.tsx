import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTreatmentBySlug } from '@/content/treatments';
import { siteConfig } from '@/content/site';
import { isPreviewContentMode } from '@/lib/content-mode';
import { TreatmentDetail } from '@/components/treatments/treatment-detail';

export const dynamic = 'force-dynamic';

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const isPreview = isPreviewContentMode(resolvedSearchParams.preview);
  const treatment = getTreatmentBySlug(slug, isPreview);

  if (!treatment) {
    return {
      title: 'Treatment Not Found',
    };
  }

  const isDraft = treatment.publicationStatus === 'draft';

  return {
    title: treatment.cardTitle ?? treatment.displayName,
    description: treatment.shortDescription,
    alternates: isDraft
      ? undefined
      : {
          canonical: `/treatments/${treatment.slug}`,
        },
    robots:
      isDraft || isPreview
        ? {
            index: false,
            follow: false,
          }
        : undefined,
    openGraph: {
      title: `${treatment.cardTitle ?? treatment.displayName} | ${siteConfig.displayName}`,
      description: treatment.shortDescription,
    },
  };
}

export default async function TreatmentPage({
  params,
  searchParams,
}: TreatmentPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const isPreview = isPreviewContentMode(resolvedSearchParams.preview);
  const treatment = getTreatmentBySlug(slug, isPreview);

  if (!treatment) {
    notFound();
  }

  return (
    <TreatmentDetail
      treatment={treatment}
      isPreviewMode={isPreview}
    />
  );
}
