import Link from 'next/link';

const footerLinks = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/metodologia', label: 'Metodologia' },
  { href: '/fontes', label: 'Fontes' },
  { href: '/estado-dos-guias', label: 'Estado dos guias' },
  { href: '/privacidade', label: 'Privacidade' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-stone-100 dark:bg-stone-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-lg font-black text-emerald-950 dark:text-emerald-100">
            Portugal Prático
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600 dark:text-stone-400">
            Informação clara e verificada para orientar o acesso a serviços
            públicos em Portugal.
          </p>
        </div>
        <nav
          aria-label="Navegação do rodapé"
          className="flex max-w-md flex-wrap gap-x-5 gap-y-3 text-sm"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold hover:text-emerald-700 hover:underline dark:hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-stone-500 md:col-span-2">
          © {new Date().getFullYear()} Portugal Prático. Conteúdo informativo;
          confirme sempre a fonte oficial.
        </p>
      </div>
    </footer>
  );
}
