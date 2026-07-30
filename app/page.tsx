import Link from 'next/link';
import { AdBanner } from '@/components/molecules/AdBanner';
import { categories } from '@/data/categories';
import { pagesData } from '@/data/pages';

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6 sm:p-12">
      <AdBanner />

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ icon: Icon, title, description, href }) => {
          const slug = href.split('/').pop();
          const items = pagesData[slug!]?.slice(0, 3);

          return (
            <div
              key={href}
              className="group relative flex flex-col gap-3 rounded-md border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
            >
              <Link href={href} className="flex items-center gap-3">
                <div className="rounded-md bg-blue-100 p-2 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 dark:text-gray-100">
                  {title}
                </h2>
              </Link>

              <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
                {description}
              </p>

              <ul className="mt-2 space-y-1">
                {items?.map(({ title, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  href={href}
                  className="mt-4 block w-full rounded bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                >
                  Ver todos
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
