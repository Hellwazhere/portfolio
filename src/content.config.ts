import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    locale: z.enum(['pt', 'en']),
    kind: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
  }),
});

export const collections = { projects };
