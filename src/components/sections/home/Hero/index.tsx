import { SiGithub } from 'react-icons/si';

import DeltaLogo from '@/components/icons/DeltaLogo';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Link } from '@/components/ui/Link';
import { Image } from 'astro:assets';

export default function Hero() {
  return (
    <section>
      <div className="container py-12">
        <Card className="hero-before hero-after relative flex flex-col items-center overflow-hidden px-6 py-20">
          <img
            className="z-10 mb-4 h-24 dark:hidden"
            src="/images/delta_logo_github_black.svg"
            alt="Delta Logo"
            width={2048}
            height={756}
          />
          <img
            className="z-10 mb-4 hidden h-24 dark:block"
            src="/images/delta_logo_github_white.svg"
            alt="Delta Logo"
            width={2048}
            height={756}
          />

          <h1 className="z-10 mx-auto max-w-4xl text-center text-4xl font-extrabold md:text-5xl">
            <span className="text-primary">Delta</span> is an open-source
            machine learning framework in{' '}
            <span className="text-primary">Rust</span>
          </h1>

          <div className="z-10 mt-8 flex items-center justify-center gap-4">
            <Button asChild>
              <Link href="https://docs.rs/deltaml/latest/deltaml/">
                Read the Docs
              </Link>
            </Button>

            <Button variant="secondary" asChild>
              <Link href="https://github.com/delta-rs/delta">
                <SiGithub />
                <span>Star 100+</span>
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
