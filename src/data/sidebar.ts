import type { SidebarItem, SidebarMenu } from '@/types/sidebar';

const deltaMenu: SidebarItem[] = [
  {
    title: 'Delta Docs',
    href: '/delta/docs',
  },
  {
    title: 'Beginners',
    items: [
      {
        title: 'Getting Started',
        href: '/delta/docs/getting-started',
      },
      {
        title: 'Dataset Support',
        href: '/delta/docs/dataset-support',
      },
      {
        title: 'Development Guidelines',
        href: '/delta/docs/development-guidelines',
      },
      {
        title: 'Release Checklist',
        href: '/delta/docs/release-checklist',
      },
      {
        title: 'Spotlight',
        href: '/delta/docs/spotlight',
      },
    ],
  },
];

const nebulaMenu: SidebarItem[] = [
  {
    title: 'Nebula Docs',
    href: '/nebula/docs',
  },
];

export const sidebarMenu: SidebarMenu = {
  delta: deltaMenu,
  nebula: nebulaMenu,
};
