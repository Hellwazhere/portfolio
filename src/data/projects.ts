import { getCollection } from 'astro:content';

export type Locale = 'pt' | 'en';

export function projectHref(locale: Locale, slug: string) {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${locale === 'en' ? 'en/' : ''}projects/${slug}/`;
}

export async function getCaseStudyPages(locale: Locale) {
  const entries = (await getCollection('projects', ({ data }) => data.caseStudy)).filter((entry) => entry.body?.trim());
  return entries.filter((entry) => entry.data.locale === locale).map((project) => {
    const slug = project.id.split('/').at(-1) ?? project.id;
    const translationKey = project.data.translationKey ?? slug;
    const translation = entries.find((entry) => entry.data.locale !== locale && (entry.data.translationKey ?? entry.id.split('/').at(-1)) === translationKey);
    const translatedSlug = translation?.id.split('/').at(-1);
    return {
      params: { slug },
      props: {
        project,
        alternateHref: translation && translatedSlug ? projectHref(translation.data.locale, translatedSlug) : undefined,
      },
    };
  });
}

export async function getProjects(locale: Locale) {
  const entries = await getCollection('projects', ({ data }) => data.locale === locale);
  const order = ['smart-clinic-assistant', 'business-website', 'marketing-dashboard', 'content-assistant', 'myjobs'];
  const position = (entry: (typeof entries)[number]) => {
    const key = entry.data.translationKey ?? entry.id.split('/').at(-1);
    const index = key ? order.indexOf(key) : -1;
    return index === -1 ? order.length : index;
  };
  entries.sort((a, b) => position(a) - position(b) || a.data.title.localeCompare(b.data.title, locale));
  return entries.map(({ id, data, body }) => ({
    slug: id.split('/').at(-1)?.replace(/\.md$/, '') ?? id,
    ...data,
    caseStudy: data.caseStudy && Boolean(body?.trim()),
  }));
}
