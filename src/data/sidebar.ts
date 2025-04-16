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
        title: 'Intro - Classical ML',
        href: '/delta/docs/intro-classical',
      },
      // {
      //   title: 'Intro - Deep Learning',
      //   href: '/delta/docs/intro-deep-learning',
      // },
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
    ],
  },
  {
    title: 'Features',
    items: [
      {
        title: 'Datasets',
        href: '/delta/docs/datasets',
      },
      {
        title: 'Backends',
        href: '/delta/docs/backends',
      },
      {
        title: 'Comparison',
        href: '/delta/docs/comparison',
      },
      {
        title: 'Integration',
        href: '/delta/docs/integration',
      }
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
