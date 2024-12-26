export type SidebarKey = 'delta' | 'nebula';

export type SidebarItem = {
  title: string;
  href?: string;
  items?: SidebarItem[];
};

export type SidebarMenu = Record<SidebarKey, SidebarItem[]>;
