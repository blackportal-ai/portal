import { useTypewriter } from '@/hooks/use-typewriter';

const text = 'We are happy to have introduced you to our brands.';

export default function BrandMessage() {
  const displayText = useTypewriter(text, 60);

  return (
    <div className="container py-20">
      <h1 className="mx-auto min-h-36 max-w-3xl text-3xl font-bold md:min-h-28 md:text-4xl">
        {displayText}
      </h1>
    </div>
  );
}
