import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { siteConfig } from '@/content/site';
import { getSiteUrl } from '@/lib/site-url';
import { isPreviewContentMode } from '@/lib/content-mode';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export function generateMetadata(): Metadata {
  const isPreview = isPreviewContentMode();

  return {
    metadataBase: getSiteUrl(),
    title: {
      default: siteConfig.metadata.defaultTitle,
      template: siteConfig.metadata.titleTemplate,
    },
    description: siteConfig.metadata.description,
    robots: isPreview
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : undefined,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: siteConfig.displayName,
      title: siteConfig.metadata.defaultTitle,
      description: siteConfig.metadata.description,
    },
    twitter: {
      card: 'summary',
      title: siteConfig.metadata.defaultTitle,
      description: siteConfig.metadata.description,
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FAF7F2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="bg-canvas text-ink antialiased selection:bg-brand/15 selection:text-ink">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
