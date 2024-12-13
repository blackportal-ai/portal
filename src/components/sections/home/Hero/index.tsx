import DeltaLogo from '@/components/icons/DeltaLogo';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Link } from '@/components/ui/Link';

export default function Hero() {
  return (
    <section>
      <div className="container py-12">
        <Card className="hero-before hero-after relative flex flex-col items-center overflow-hidden px-6 py-20">
          <DeltaLogo className="z-10 mb-8 h-14 w-14" />

          <h1 className="z-10 mx-auto max-w-4xl text-center text-4xl font-extrabold md:text-5xl">
            <span className="text-primary">Delta</span> is an open-source
            machine learning framework for{' '}
            <span className="text-primary">Rust</span> developers
          </h1>

          <div className="z-10 mt-12 flex items-center justify-center">
            <Button asChild>
              <Link href="https://docs.rs/deltaml/latest/deltaml/">
                Read the Docs
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
