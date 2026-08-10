import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuidePage from '@/components/templates/GuidePage';
import { getCategory } from '@/data/categories';
import { getGuide, getRelatedGuides, guides } from '@/data/guides';
import { absoluteUrl } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guias/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      url: `/guias/${guide.slug}`,
      modifiedTime: guide.lastVerified,
    },
  };
}

export default async function DynamicGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const category = getCategory(guide.categorySlug);
  if (!category) notFound();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category.title,
        item: absoluteUrl(`/categorias/${category.slug}`),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.title,
        item: absoluteUrl(`/guias/${guide.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <GuidePage
        guide={guide}
        category={category}
        relatedGuides={getRelatedGuides(guide)}
      />
    </>
  );
}
