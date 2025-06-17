import type { Metadata } from 'next';

const siteName = 'BlackPortal';
const ogImageUrl = 'https://blackportal.ai/images/blackportal-banner.png';

export default function og(title: string = '', description?: string): Metadata {
  const ogTitle = !!title.length ? `${title} | ${siteName}` : siteName;

  return {
    openGraph: {
      title: ogTitle,
      description,
      url: 'https://blackportal.ai/',
      locale: 'en',
      type: 'website',
      siteName,
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      title: ogTitle,
      description,
      card: 'summary_large_image',
      site: '@blackportal_ai',
      creator: '@blackportal_ai',
      images: [{ url: ogImageUrl }],
    },
  };
}
