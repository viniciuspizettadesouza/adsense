import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Guide } from '@/types/content';
import { VerifiedBadge } from './VerifiedBadge';

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-700/40 hover:shadow-lg dark:bg-stone-950">
      <p className="text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
        {guide.eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-bold tracking-tight">
        <Link
          href={`/guias/${guide.slug}`}
          className="rounded-sm outline-none after:absolute focus-visible:ring-2 focus-visible:ring-emerald-600"
        >
          {guide.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-stone-600 dark:text-stone-400">
        {guide.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-5">
        <VerifiedBadge lastVerified={guide.lastVerified} />
        <ArrowUpRight
          className="h-5 w-5 text-emerald-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-emerald-300"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
