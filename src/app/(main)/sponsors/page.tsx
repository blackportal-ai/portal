import type { Metadata } from 'next';

import SevallaLogo from '@/components/icons/SevallaLogo';
import SponsorsHero from '@/components/sections/sponsors/SponsorsHero';
import og from '@/lib/og';

const title = 'Sponsors';

export const metadata: Metadata = {
  title,
  ...og(title),
};

export default function SponsorsPage() {
  return (
    <>
      <SponsorsHero />

      <section className="animate-in fade-in py-20 duration-1000">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <SevallaLogo className="h-24" />

          <p className="text-muted-foreground text-center text-xl">
            Sevalla is a powerful platform for hosting and managing
            applications, databases, and static sites. They are supporting our
            project by providing free hosting for our website and upcoming
            services, as well as sponsoring us on GitHub. This support helps
            BlackPortal grow and enables us to host future projects like the
            Nebula registry and more.
          </p>
        </div>
      </section>
    </>
  );
}
