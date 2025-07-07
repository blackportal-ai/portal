import type { LinkItemType } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
} from 'react-icons/si';

import BlackPortalLogo from '@/components/icons/BlackPortalLogo';

export const socialLinks: LinkItemType[] = [
  {
    type: 'icon',
    url: 'https://github.com/blackportal-ai',
    text: 'GitHub',
    icon: <SiGithub />,
    external: true,
  },
  {
    type: 'icon',
    url: 'https://x.com/blackportal_ai',
    text: 'X',
    icon: <SiX />,
    external: true,
  },
  {
    type: 'icon',
    url: 'https://discord.gg/g5HtkAzRNG',
    text: 'Discord',
    icon: <SiDiscord />,
    external: true,
  },
  {
    type: 'icon',
    url: 'https://www.linkedin.com/company/blackportal',
    text: 'LinkedIn',
    icon: <SiLinkedin />,
    external: true,
  },
  {
    type: 'icon',
    url: 'https://www.youtube.com/@BlackPortal_AI',
    text: 'YouTube',
    icon: <SiYoutube />,
    external: true,
  },
];

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Main Layout: app/(main)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <BlackPortalLogo className="h-6 w-auto" />{' '}
        <span className="sr-only">BlackPortal</span>
      </>
    ),
  },
  searchToggle: { enabled: false },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
