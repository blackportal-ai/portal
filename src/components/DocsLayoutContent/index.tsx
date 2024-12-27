import * as React from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui/Sidebar';
import { TOC } from '@/components/ui/TOC';
import DocsSidebar from './DocsSidebar';
import DocsHeader from './DocsHeader';

import { sidebarMenu } from '@/data/sidebar';
import type { SidebarKey } from '@/types/sidebar';
import type { BreadcrumbItem } from '@/types/breadcrumb';
import type { MarkdownHeading } from 'astro';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  sidebarKey: SidebarKey;
  breadcrumb: BreadcrumbItem[];
  headings?: MarkdownHeading[];
};

export default function DocsLayoutContent({
  children,
  sidebarKey,
  breadcrumb,
  headings,
}: Props) {
  return (
    <SidebarProvider>
      <DocsSidebar items={sidebarMenu[sidebarKey]} />

      <SidebarInset>
        <DocsHeader breadcrumb={breadcrumb} />

        <div
          className={cn(
            'grid grid-cols-1 gap-8 p-4 md:p-8',
            !!headings ? 'xl:grid-cols-[1fr_300px]' : '',
          )}
        >
          <div className="prose prose-sm grid max-w-full grid-cols-1 dark:prose-invert">
            {children}
          </div>

          {!!headings ? (
            <div className="hidden text-sm xl:block">
              <div className="sticky top-24 h-[calc(100vh-8rem)]">
                <TOC headings={headings} />
              </div>
            </div>
          ) : null}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
