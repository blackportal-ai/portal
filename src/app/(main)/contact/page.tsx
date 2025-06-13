import type { Metadata } from 'next';

import ContactHero from '@/components/sections/contact/ContactHero';
import og from '@/lib/og';

const title = 'Contact Us';

export const metadata: Metadata = {
  title,
  ...og(title),
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
    </>
  );
}
