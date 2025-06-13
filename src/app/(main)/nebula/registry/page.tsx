import type { Metadata } from 'next';

import og from '@/lib/og';
import NebulaRegistryHero from '@/components/sections/nebula/NebulaRegistryHero';
import NebulaRegistrySearch from '@/components/sections/nebula/NebulaRegistrySearch';
import NebulaRegistryList from '@/components/sections/nebula/NebulaRegistryList';

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
          <NebulaRegistrySearch />
        </div>
      </div>

      <NebulaRegistryList />
    </main>
  );
}
