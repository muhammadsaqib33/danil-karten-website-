import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { NotFoundContent } from '@/components/sections/not-found-content';

export default function RootNotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main id="main-content" className="flex flex-1 flex-col">
        <NotFoundContent />
      </main>
      <SiteFooter />
    </div>
  );
}
