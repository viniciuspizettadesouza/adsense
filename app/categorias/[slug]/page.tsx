import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryPage from '@/components/templates/CategoryPage';
import { categories, getCategory } from '@/data/categories';
import { getGuidesByCategory } from '@/data/guides';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/categorias/${category.slug}` },
  };
}

export default async function DynamicCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryGuides = getGuidesByCategory(category.slug);
  if (categoryGuides.length === 0) notFound();

  return <CategoryPage category={category} guides={categoryGuides} />;
}
