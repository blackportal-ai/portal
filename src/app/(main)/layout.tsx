import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

import { baseOptions, socialLinks } from '@/app/layout.config';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
};

const links: LinkItemType[] = [
  {
    text: 'Docs',
    url: '/docs/delta',
  },
  {
    text: 'Sponsors',
    url: '/sponsors',
  },
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Contact Us',
    url: '/contact',
  },
  ...socialLinks,
];

export default function MainLayout({ children }: Readonly<Props>) {
  return (
    <HomeLayout
      className="flex min-h-screen flex-col"
      {...baseOptions}
      links={links}
    >
      <div className="grow">
        <AnimatedBackground />
        {children}
      </div>

      <Footer />
    </HomeLayout>
  );
}
