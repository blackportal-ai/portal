import { Button } from '@/components/ui/Button';
import { Card, CardHeader } from '@/components/ui/Card';
import { Link } from '@/components/ui/Link';
import type { BrandItem } from '@/types/brand';

type Props = {
  title: string;
  logos: BrandItem[];
};

export default function BrandList({ title, logos }: Props) {
  return (
    <section className="animate-in fade-in py-20 duration-1000">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold">{title}</h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {logos.map((logo) => (
            <li key={logo.variants.svg.src}>
              <Card>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-center rounded-xl bg-zinc-200 p-6 dark:bg-zinc-800">
                    <img className="h-12" src={logo.variants.svg.src} alt="" />
                  </div>

                  <hr />

                  <div className="flex items-center justify-center">
                    <Button variant="ghost" asChild>
                      <Link href={logo.variants.svg.src}>SVG</Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
