'use client';

import Link from 'next/link';
import { ModeToggle } from '@/components/atoms/ModeToggle';

export default function Navbar() {
  return (
    <header className="mx-auto max-w-6xl">
      <h1 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-left sm:text-4xl dark:text-gray-100">
        Portugal para Imigrantes
      </h1>
      <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start">
        <p className="max-w-2xl text-center text-gray-600 sm:text-left dark:text-gray-400">
          Descubra serviços essenciais, sites úteis e informações práticas para
          viver em Portugal com mais facilidade.
        </p>
        <div className="flex gap-2">
          <Link
            href="/sobre"
            className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Sobre o site
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
