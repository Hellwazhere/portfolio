import { getCollection } from 'astro:content';

export type Locale = 'pt' | 'en';

export async function getProjects(locale: Locale) {
  const entries = await getCollection('projects', ({ data }) => data.locale === locale);
  return entries.map(({ id, data }) => ({
    slug: id.split('/').at(-1)?.replace(/\.md$/, '') ?? id,
    ...data,
  }));
}
