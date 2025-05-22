import { AdBanner } from '@/components/AdBanner';
import Link from 'next/link';

const links = [
  {
    title: 'Continente',
    url: 'https://www.continente.pt/',
    description: 'Supermercado popular em Portugal com compras online.',
  },
  {
    title: 'Worten',
    url: 'https://www.worten.pt/',
    description: 'Lojas de eletrônicos, eletrodomésticos e tecnologia.',
  },
  {
    title: 'Auchan',
    url: 'https://www.auchan.pt/',
    description: 'Rede de supermercados com ofertas semanais.',
  },
  {
    title: 'OLX Portugal',
    url: 'https://www.olx.pt/',
    description: 'Classificados para compra e venda de usados.',
  },
  {
    title: 'Fnac',
    url: 'https://www.fnac.pt/',
    description: 'Livros, eletrônicos, informática e cultura.',
  },
  {
    title: 'Amazon Espanha',
    url: 'https://www.amazon.es/',
    description: 'Entrega em Portugal com ampla variedade de produtos.',
  },
];

export default function LojasPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl p-6 sm:p-12">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Lojas e Compras</h1>
      <p className="mb-6 text-gray-600">
        Lista de lojas e plataformas populares para fazer compras em Portugal.
      </p>

      <AdBanner />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{link.title}</h2>
            <p className="text-sm text-gray-500">{link.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </main>
  );
}
