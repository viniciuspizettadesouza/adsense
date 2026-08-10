'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ModeToggle } from '@/components/atoms/ModeToggle';

const links = [
  { href: '/#guias', label: 'Guias' },
  { href: '/estado-dos-guias', label: 'Estado dos guias' },
  { href: '/metodologia', label: 'Metodologia' },
  { href: '/sobre', label: 'Sobre' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur dark:bg-stone-950/90">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-amber-300 focus:px-4 focus:py-2 focus:text-emerald-950"
      >
        Saltar para o conteúdo
      </a>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="rounded-sm text-xl font-black tracking-tight text-emerald-950 focus-visible:outline-2 dark:text-emerald-100"
        >
          Portugal{' '}
          <span className="text-amber-600 dark:text-amber-300">Prático</span>
        </Link>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-semibold text-stone-700 hover:text-emerald-700 focus-visible:outline-2 dark:text-stone-200 dark:hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="rounded-md border p-2"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="border-t bg-white px-5 py-4 md:hidden dark:bg-stone-950"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold hover:bg-stone-100 dark:hover:bg-stone-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
