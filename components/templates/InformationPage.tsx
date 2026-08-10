import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';

export function InformationPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main id="conteudo" className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8">
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: title }]} />
      <header className="border-b pb-10">
        <p className="text-sm font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600 dark:text-stone-300">
          {intro}
        </p>
      </header>
      <div className="information-content py-10">{children}</div>
    </main>
  );
}
