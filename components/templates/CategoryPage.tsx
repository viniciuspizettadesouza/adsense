import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { GuideCard } from '@/components/molecules/GuideCard';
import type { Category, Guide } from '@/types/content';

export default function CategoryPage({
  category,
  guides,
}: {
  category: Category;
  guides: Guide[];
}) {
  const Icon = category.icon;

  return (
    <main id="conteudo" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
      <Breadcrumbs
        items={[{ label: 'Início', href: '/' }, { label: category.title }]}
      />
      <header className="max-w-3xl">
        <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {category.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-300">
          {category.description}
        </p>
      </header>
      <section
        aria-label={`Guias de ${category.title}`}
        className="mt-12 grid gap-6 lg:grid-cols-3"
      >
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </section>
    </main>
  );
}
