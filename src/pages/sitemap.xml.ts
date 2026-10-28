import type { APIRoute } from 'astro';
import { getCaseStudyPages, projectHref } from '../data/projects';
export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const routes = ['', 'about/', 'contact/', 'projects/', 'en/', 'en/about/', 'en/contact/', 'en/projects/'].map(path => base + path);
  for (const locale of ['pt', 'en'] as const) {
    for (const page of await getCaseStudyPages(locale)) routes.push(projectHref(locale, page.params.slug));
  }
  const urls = routes.map(path => '<url><loc>' + new URL(path, site).href + '</loc></url>').join('');
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>', { headers: { 'Content-Type': 'application/xml' } });
};
