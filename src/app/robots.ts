import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';
import { isPreviewContentMode } from '@/lib/content-mode';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl().toString().replace(/\/$/, '');
  const isPreviewDeployment =
    process.env.VERCEL_ENV === 'preview' || isPreviewContentMode();

  if (isPreviewDeployment) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
