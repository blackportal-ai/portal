import { useTypewriter } from '@/hooks/use-typewriter';

const text =
  'We’re a passionate group of people working from all over the world to build the future of machine learning.';

export default function AboutMessage() {
  const displayText = useTypewriter(text, 60);

  return (
    <div className="container py-20">
      <h1 className="mx-auto min-h-36 max-w-3xl text-3xl font-bold md:min-h-28 md:text-4xl">
        {displayText}
      </h1>
    </div>
  );
}
