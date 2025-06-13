import Features from '@/components/sections/home/Features';
import Hero from '@/components/sections/home/Hero';
import Roadmap from '@/components/sections/home/Roadmap';
import Sponsors from '@/components/sections/home/Sponsors';
import og from '@/lib/og';

const title = 'Welcome';
const description =
  'A fast, open-source Rust solution for building scalable machine learning models with easy-to-use, customizable APIs and comprehensive tools.';

export const metadata = {
  title,
  description,
  ...og(title, description),
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Roadmap />
      <Sponsors />
    </main>
  );
}
