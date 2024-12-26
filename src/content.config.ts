import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docsSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

const deltaDocs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/delta/docs' }),
  schema: docsSchema,
});

const nebulaDocs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/nebula/docs' }),
  schema: docsSchema,
});

export const collections = { deltaDocs, nebulaDocs };
