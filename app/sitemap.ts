import type { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { guides } from '@/data/guides';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/sobre',
    '/metodologia',
    '/privacidade',
    '/fontes',
    '/estado-dos-guias',
  ];

  return [
    ...staticPages.map((path) => ({
      url: absoluteUrl(path || '/'),
      changeFrequency: path ? ('monthly' as const) : ('weekly' as const),
      priority: path ? 0.6 : 1,
    })),
    ...categories.map((category) => ({
      url: absoluteUrl(`/categorias/${category.slug}`),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guias/${guide.slug}`),
      lastModified: guide.lastVerified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
