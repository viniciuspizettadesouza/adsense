import { notFound } from 'next/navigation';
import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';
import { categoryTitles } from '@/data/categoryTitles';

type Props = {
  params: {
    slug: string;
  };
};

export default function DynamicCategoryPage({ params }: Props) {
  const data = pagesData[params.slug];

  if (!data) return notFound();

  const meta = categoryTitles[params.slug];

  if (!meta) return notFound();

  return (
    <CategoryPage
      title={meta.title}
      description={meta.description}
      items={data}
    />
  );
}
