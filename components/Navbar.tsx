'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { name: 'Início', href: '/' },
  { name: 'Serviços Públicos', href: '/categorias/servicos' },
  { name: 'Lojas', href: '/categorias/lojas' },
  { name: 'Transporte', href: '/categorias/transporte' },
  { name: 'Notícias', href: '/categorias/noticias' },
  { name: 'Saúde', href: '/categorias/saude' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold">
          Portugal para Imigrantes
        </Link>
        <ul className="hidden gap-4 text-sm sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'transition hover:text-blue-600',
                  pathname === item.href
                    ? 'font-semibold text-blue-600'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
