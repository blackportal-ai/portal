import type { Metadata } from 'next';

import AboutHero from '@/components/sections/about/AboutHero';
import Team from '@/components/sections/about/Team';
import Values from '@/components/sections/about/Values';
import og from '@/lib/og';

const title = 'About';

export const metadata: Metadata = {
  title,
  ...og(title),
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <Team />
    </>
  );
}
