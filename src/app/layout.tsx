import type { Metadata, Viewport } from 'next';

import { Chakra_Petch } from 'next/font/google';

import { Providers } from '@/components/Providers';

import './globals.css';

const chakraPetchSans = Chakra_Petch({
  variable: '--font-chakra-petch-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const metaTitle = 'BlackPortal';

export const metadata: Metadata = {
  title: {
    template: `%s | ${metaTitle}`,
    default: metaTitle,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-96x96.png',
      },
    ],
  },
  appleWebApp: {
    title: 'BlackPortal',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f1114' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${chakraPetchSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
