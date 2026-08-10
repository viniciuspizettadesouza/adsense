import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Navegação estrutural"
      className="mb-8 text-sm text-stone-500 dark:text-stone-400"
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center gap-1.5"
          >
            {index > 0 && (
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="rounded-sm hover:text-emerald-700 hover:underline focus-visible:outline-2 dark:hover:text-emerald-300"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="text-stone-800 dark:text-stone-200"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
