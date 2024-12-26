import { SiGithub } from 'react-icons/si';

import { Button } from '@/components/ui/Button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Link } from '@/components/ui/Link';
import { Badge } from '@/components/ui/Badge';
import DeltaLogo from '@/components/icons/DeltaLogo';

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl">
        <DeltaLogo className="mx-auto mb-16 h-12 w-auto" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="relative overflow-hidden text-center">
            <CardHeader className="hero-delta space-y-4 p-12">
              <CardTitle className="z-10 text-4xl">Delta</CardTitle>

              <CardDescription className="z-10 text-xl">
                Delta is an open-source machine learning framework in Rust
              </CardDescription>

              <div className="z-10">
                <div className="flex items-center justify-center gap-4">
                  <Button asChild>
                    <Link href="/delta/docs">Read the Docs</Link>
                  </Button>

                  <Button variant="secondary" asChild>
                    <Link href="https://github.com/delta-rs/delta">
                      <SiGithub />
                      <span>Star 200+</span>
                    </Link>
                  </Button>
                </div>

                <Link
                  className="mt-2 block"
                  href="https://docs.rs/deltaml/latest/deltaml/"
                >
                  Read on the docs.rs
                </Link>
              </div>
            </CardHeader>
          </Card>

          <Card className="relative overflow-hidden text-center">
            <Badge className="absolute left-3 top-3 z-10" variant="secondary">
              Coming Soon
            </Badge>

            <CardHeader className="hero-nebula space-y-4 p-12">
              <CardTitle className="z-10 text-4xl">Nebula</CardTitle>

              <CardDescription className="z-10 text-xl">
                A package manager for machine learning datasets and models.
              </CardDescription>

              <div className="z-10 flex items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/nebula/docs">Read the Docs</Link>
                </Button>

                <Button variant="secondary" asChild>
                  <Link href="https://github.com/delta-rs/nebula">
                    <SiGithub />
                    <span>Star 4</span>
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
