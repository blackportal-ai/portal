import { SiGithub } from 'react-icons/si';

import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader } from '@/components/ui/Card';
import { Link } from '@/components/ui/Link';
import { Badge } from '@/components/ui/Badge';
import DeltaLogo from '@/components/icons/DeltaLogo';
import NebulaLogo from '@/components/icons/NebulaLogo';

export default function Hero() {
  return (
    <section className="animate-in fade-in py-20 duration-500">
      <div className="container mx-auto max-w-5xl">
        <div className="animate-in slide-in-from-bottom-20 mb-12 duration-700">
          <h1 className="text-center text-3xl font-bold md:text-4xl">
            A fast, open-source Rust solution for building scalable machine learning models with easy-to-use, customizable APIs and comprehensive tools.
          </h1>
        </div>

        <div className="animate-in slide-in-from-bottom-20 grid grid-cols-1 gap-6 duration-700 lg:grid-cols-2">
          <Card className="relative overflow-hidden p-0 text-center">
            <CardHeader className="hero-delta space-y-4 p-12">
              <DeltaLogo className="mx-auto h-12 w-auto" />

              <CardDescription className="text-xl">
                Delta is an open-source machine learning framework in Rust
              </CardDescription>

              <div className="flex items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/delta/docs">Read the Docs</Link>
                </Button>

                <Button variant="secondary" asChild>
                  <Link href="https://github.com/blackportal-ai/delta">
                    <SiGithub />
                    <span>Star 300+</span>
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="relative overflow-hidden p-0 text-center">
            <Badge className="absolute top-3 left-3" variant="secondary">
              Coming Soon
            </Badge>

            <CardHeader className="hero-nebula space-y-4 p-12">
              <NebulaLogo className="mx-auto h-12 w-auto" />

              <CardDescription className="text-xl">
                A package manager for machine learning datasets and models.
              </CardDescription>

              <div className="flex items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/nebula/docs">Read the Docs</Link>
                </Button>

                <Button variant="secondary" asChild>
                  <Link href="https://github.com/blackportal-ai/nebula">
                    <SiGithub />
                    <span>Star 70+</span>
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
