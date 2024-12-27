'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import type { MarkdownHeading } from 'astro';

type TOCItem = {
  text: string;
  slug: string;
  items: TOCItem[];
};

type TOCProps = {
  headings: MarkdownHeading[];
};

export function TOC({ headings }: TOCProps) {
  const { tocItems, ids } = prepareTOCItems(headings);
  const activeItem = useActiveItem(ids);

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree items={tocItems} activeItem={activeItem} />
    </div>
  );
}

type TreeProps = {
  items: TOCItem[];
  level?: number;
  activeItem?: string;
};

function Tree({ items, level = 1, activeItem }: TreeProps) {
  return (
    <ul className={cn({ 'pl-4': level > 1 })}>
      {items.map((item, idx) => (
        <li key={`toc-item-${idx}`} className={cn('mt-0 pt-2')}>
          <a
            href={`#${item.slug}`}
            className={cn(
              'inline-block no-underline transition-colors hover:text-foreground',
              item.slug === activeItem
                ? 'font-medium text-foreground'
                : 'text-muted-foreground',
            )}
          >
            {item.text}
          </a>
          {item.items?.length ? (
            <Tree
              items={item.items}
              level={level + 1}
              activeItem={activeItem}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function prepareTOCItems(headings: MarkdownHeading[]) {
  const filteredHeadings = headings.filter((item) =>
    [2, 3].includes(item.depth),
  );

  const pointList = filteredHeadings.reduce<number[]>((acc, val, idx) => {
    if (val.depth === 2) {
      acc.push(idx);
    }

    return acc;
  }, []);

  let currentIdx = 0;

  const tocItems = filteredHeadings.reduce<TOCItem[]>((acc, val, idx) => {
    if (pointList.includes(idx)) {
      acc.push({
        text: val.text,
        slug: val.slug,
        items: [],
      });

      currentIdx = idx;
    } else {
      if (!!acc[currentIdx] && !!acc[currentIdx].items) {
        acc[currentIdx].items.push({
          text: val.text,
          slug: val.slug,
          items: [],
        });
      }
    }

    return acc;
  }, []);

  const ids = filteredHeadings.map((item) => item.slug);

  return { tocItems, ids };
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | undefined>();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}
