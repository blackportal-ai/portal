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
import NebulaLogo from '@/components/icons/NebulaLogo';
import { TypeWriter } from '@/components/TypeWriter/TypeWriter.tsx';

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto mb-24 h-auto w-auto text-center text-6xl font-medium">
          <TypeWriter speed={100} text= "A fast, open-source Rust framework for building scalable neural networks with easy-to-use, customizable APIs and comprehensive ML tools."/>
        </div>

        {/* This below is just hidden temporarily */}

        {/*<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="relative overflow-hidden text-center">
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
                  <Link href="https://github.com/delta-rs/delta">
                    <SiGithub />
                    <span>Star 200+</span>
                  </Link>
                </Button>

              </div>
            </CardHeader>
          </Card>

          <Card className="relative overflow-hidden text-center">
            <Badge className="absolute left-3 top-3 " variant="secondary">
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
                  <Link href="https://github.com/delta-rs/nebula">
                    <SiGithub />
                    <span>Star 4</span>
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>ß
        </div>*/}
      </div>
    </section>
  );
}
