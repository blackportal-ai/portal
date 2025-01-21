import SevallaLogo from '@/components/icons/SevallaLogo';
import { Card, CardHeader } from '@/components/ui/Card';
import { Link } from '@/components/ui/Link';

const sponsors = [
  {
    logo: SevallaLogo,
    href: 'https://sevalla.com/',
  },
];

export default function Sponsors() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold">Our Sponsors</h2>

        <ul className="flex items-center justify-center gap-6">
          {sponsors.map((sponsor, idx) => (
            <li key={`sponsor-${idx}`}>
              <Link href={sponsor.href}>
                <Card>
                  <CardHeader className="p-4">
                    <sponsor.logo className="h-12" />
                  </CardHeader>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
