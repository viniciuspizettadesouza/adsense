import Link from 'next/link';
import { PageItem } from '@/data/pages';
import { AdBanner } from '@/components/molecules/AdBanner';

interface CategoryPageProps {
  title: string;
  description?: string;
  items: PageItem[];
}

export default function CategoryPage({
  title,
  description,
  items,
}: CategoryPageProps) {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6 sm:p-12">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">{title}</h1>
      {description && <p className="mb-6 text-gray-600">{description}</p>}

      <AdBanner />

      <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, description, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow transition-all hover:border-blue-400 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <p className="text-sm text-gray-500">{description}</p>
            <div className="absolute top-4 right-4 text-xs text-blue-400 group-hover:text-blue-600">
              →
            </div>
          </a>
        ))}
      </section>

      <div className="mt-10">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </main>
  );
}
