import { SidebarTrigger } from '@/components/ui/Sidebar';
import { Separator } from '@/components/ui/Separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb';

import type { BreadcrumbItem as BreadcrumbItemType } from '@/types/breadcrumb';

type Props = {
  breadcrumb: BreadcrumbItemType[];
};

export default function DocsHeader({ breadcrumb }: Props) {
  return (
    <div className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-8">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumb.map((breadcrumbItem, idx) => {
            if (breadcrumbItem.active) {
              return (
                <BreadcrumbItem key={`breadcrumb-item-${idx}`}>
                  <BreadcrumbPage>{breadcrumbItem.title}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            }

            return (
              <>
                <BreadcrumbItem
                  key={`breadcrumb-item-${idx}`}
                  className="hidden md:block"
                >
                  <BreadcrumbLink href={breadcrumbItem.href}>
                    {breadcrumbItem.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
