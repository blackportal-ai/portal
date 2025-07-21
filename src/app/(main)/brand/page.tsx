import type { Metadata } from 'next';

import BrandHero from '@/components/sections/brand/BrandHero';
import BrandList from '@/components/sections/brand/BrandList';
import {
  blackPortalLogos,
  deltaLogos,
  horizonLogos,
  nebulaLogos,
} from '@/data/brand';
import og from '@/lib/og';

const title = 'Brand';

export const metadata: Metadata = {
  title,
  ...og(title),
};

export default function BrandPage() {
  return (
    <>
      <BrandHero />

      <BrandList title="BlackPortal Logo" logos={blackPortalLogos} />
      <BrandList title="Delta Logo" logos={deltaLogos} />
      <BrandList title="Nebula Logo" logos={nebulaLogos} />
      <BrandList title="Horizon Logo" logos={horizonLogos} />
    </>
  );
}
