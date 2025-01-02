import type { SidebarItem, SidebarMenu } from '@/types/sidebar';

export const deltaMenu: SidebarItem[] = [
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
    ],
  },
  {
    title: 'Advanced',
    items: [
      {
        title: 'Customization',
        href: '/delta/docs/customization',
      },
      {
        title: 'Vision',
        href: '/delta/docs/vision',
      },
      {
        title: 'Distributed Training',
        href: '/delta/docs/distributed-training',
      },
      {
        title: 'Integration',
        href: '/delta/docs/integration',
      }
    ],
  },
  {
    title: 'Features',
    items: [
      {
        title: 'Supported Features',
        href: '/delta/docs/supported-features',
      },
      {
        title: 'Architecture',
        href: '/delta/docs/architecture',
      },
      {
        title: 'Comparison',
        href: '/delta/docs/comparison',
      },
    ],
  },
  {
    title: 'Spotlight',
    href: '/delta/docs/spotlight',
  },
  {
    title: 'Contributors',
    items: [
      {
        title: 'Development Guidelines',
        href: '/delta/docs/development-guidelines',
      },
      {
        title: 'Release Checklist',
        href: '/delta/docs/release-checklist',
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
