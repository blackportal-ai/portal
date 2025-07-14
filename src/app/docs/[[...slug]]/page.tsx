import { notFound } from 'next/navigation';

import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';

import og from '@/lib/og';
import { docsSource } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';

export async function generateStaticParams() {
  return docsSource.generateParams();
}

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Readonly<Props>) {
  const pageParams = await params;
  const page = docsSource.getPage(pageParams.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    ...og(page.data.title, page.data.description),
  };
}

export default async function DocsSlugPage({ params }: Readonly<Props>) {
  const pageParams = await params;
  const page = docsSource.getPage(pageParams.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{ style: 'clerk' }}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(docsSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}
