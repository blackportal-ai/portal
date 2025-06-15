import * as React from 'react';

import type { Metadata } from 'next';

import NebulaRegistryHero from '@/components/sections/nebula/NebulaRegistryHero';
import NebulaRegistryList from '@/components/sections/nebula/NebulaRegistryList';
import NebulaRegistrySearch from '@/components/sections/nebula/NebulaRegistrySearch';
import og from '@/lib/og';

const title = 'Nebula datasets and models';

export const metadata: Metadata = {
  title,
  ...og(title),
};

export default function NebulaRegistryPage() {
  return (
    <main>
      <NebulaRegistryHero />

      <div className="container">
        <div className="mx-auto mb-12 max-w-5xl">
          <React.Suspense>
            <NebulaRegistrySearch />
          </React.Suspense>
        </div>
      </div>

      <React.Suspense>
        <NebulaRegistryList />
      </React.Suspense>
    </main>
  );
}
