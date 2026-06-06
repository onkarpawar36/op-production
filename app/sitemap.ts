import { MetadataRoute } from 'next';

const routes = ['', '/services', '/portfolio', '/case-studies', '/about', '/pricing', '/booking', '/contact', '/admin'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `https://opproductions.studio${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
