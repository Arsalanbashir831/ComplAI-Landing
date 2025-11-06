import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://compl-ai.co.uk';

  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/demo',
    '/pricing',
    '/news',
    '/solutions/companion',
    '/solutions/resolve',
    '/privacy-policy',
    '/cookie-policy',
    '/user-agreement',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
