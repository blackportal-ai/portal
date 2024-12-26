import * as React from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui/Sidebar';
import DocsSidebar from './DocsSidebar';
import DocsHeader from './DocsHeader';

import { sidebarMenu } from '@/data/sidebar';
import type { SidebarKey } from '@/types/sidebar';
import type { BreadcrumbItem } from '@/types/breadcrumb';

type Props = {
  children: React.ReactNode;
  sidebarKey: SidebarKey;
  breadcrumb: BreadcrumbItem[];
};

export default function DocsLayoutContent({
  children,
  sidebarKey,
  breadcrumb,
}: Props) {
  return (
    <SidebarProvider>
      <DocsSidebar items={sidebarMenu[sidebarKey]} />

      <SidebarInset>
        <DocsHeader breadcrumb={breadcrumb} />

        <main className="prose prose-sm dark:prose-invert grid max-w-full grid-cols-1 p-4 md:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
