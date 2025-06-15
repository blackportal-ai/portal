import Link from 'next/link';

import SevallaLogo from '@/components/icons/SevallaLogo';
import { Card } from '@/components/ui/Card';

const sponsors = [
  {
    logo: SevallaLogo,
    href: 'https://sevalla.com/',
  },
];

export default function Sponsors() {
  return (
    <section className="animate-in fade-in py-20 duration-1000">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold">Our Sponsors</h2>

        <ul className="flex items-center justify-center gap-6">
          {sponsors.map((sponsor, idx) => (
            <li key={`sponsor-${idx}`}>
              <Link
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-4">
                  <sponsor.logo className="h-12" />
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
