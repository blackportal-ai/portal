import { useTypewriter } from '@/hooks/use-typewriter';

const text =
  'A fast, open-source Rust solution for building scalable machine learning models with easy-to-use, customizable APIs and comprehensive classical ML tools.';

export default function WelcomeMessage() {
  const displayText = useTypewriter(text, 60);

  return (
    <div className="mx-auto mb-12 min-h-52 text-3xl font-bold md:min-h-28 md:text-4xl">
      <h1 className="">{displayText}</h1>
    </div>
  );
}
