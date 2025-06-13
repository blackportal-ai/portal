import { SiGithub } from 'react-icons/si';

import DeltaLogo from '@/components/icons/DeltaLogo';
import HorizonLogo from '@/components/icons/HorizonLogo';
import NebulaLogo from '@/components/icons/NebulaLogo';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader } from '@/components/ui/Card';
import { Link } from '@/components/ui/Link';

export default function Hero() {
  return (
    <section className="animate-in fade-in py-20 duration-500">
      <div className="container">
        <div className="animate-in slide-in-from-bottom-20 mx-auto mb-12 max-w-5xl duration-700">
          <h1 className="text-center text-3xl font-bold md:text-4xl">
            A fast, open-source Rust solution for building scalable machine
            learning models with easy-to-use, customizable APIs and
            comprehensive tools.
          </h1>
        </div>

        <div className="animate-in slide-in-from-bottom-20 mx-auto grid max-w-7xl grid-cols-1 gap-6 duration-700 lg:grid-cols-3">
          <Card className="relative overflow-hidden text-center">
            <CardHeader className="hero-delta gap-4">
              <DeltaLogo className="mx-auto mt-6 h-12 w-auto" />

              <CardDescription className="text-xl">
                Delta is an Open-Source Machine Learning Framework in Rust
              </CardDescription>

              <div className="flex items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/docs/delta">Read the Docs</Link>
                </Button>

                <Button variant="secondary" asChild>
                  <Link href="https://github.com/blackportal-ai/delta">
                    <SiGithub />
                    <span>Star 400+</span>
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="relative overflow-hidden text-center">
            <Badge className="absolute top-3 left-3" variant="secondary">
              Coming Soon
            </Badge>

            <CardHeader className="hero-nebula gap-4">
              <NebulaLogo className="mx-auto mt-6 h-12 w-auto" />

              <CardDescription className="text-xl">
                A Package Manager for Machine Learning Datasets and Models.
              </CardDescription>

              <div className="flex items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/docs/nebula">Read the Docs</Link>
                </Button>

                <Button variant="secondary" asChild>
                  <Link href="https://github.com/blackportal-ai/nebula">
                    <SiGithub />
                    <span>Star 80+</span>
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="relative overflow-hidden text-center">
            <Badge className="absolute top-3 left-3" variant="secondary">
              Coming Soon
            </Badge>

            <CardHeader className="hero-horizon gap-4">
              <HorizonLogo className="mx-auto mt-6 h-12 w-auto" />

              <CardDescription className="text-xl">
                A Decentralized GPU Marketplace for Machine Learning Workloads.
              </CardDescription>

              <div className="flex items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/docs/horizon">Read the Docs</Link>
                </Button>

                <Button variant="secondary" asChild>
                  <Link href="https://github.com/blackportal-ai/horizon">
                    <SiGithub />
                    <span>Star 20+</span>
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
