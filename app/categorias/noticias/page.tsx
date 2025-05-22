import { AdBanner } from '@/components/AdBanner';
import Link from 'next/link';

const links = [
  {
    title: 'RTP Notícias',
    url: 'https://www.rtp.pt/noticias',
    description: 'Portal de notícias da emissora pública portuguesa RTP.',
  },
  {
    title: 'SIC Notícias',
    url: 'https://sicnoticias.pt/',
    description:
      'Canal de notícias 24h com foco em atualidades nacionais e internacionais.',
  },
  {
    title: 'Público',
    url: 'https://www.publico.pt/',
    description:
      'Jornal diário português com cobertura ampla de política, economia e sociedade.',
  },
  {
    title: 'Expresso',
    url: 'https://expresso.pt/',
    description: 'Um dos jornais mais tradicionais e influentes do país.',
  },
  {
    title: 'Jornal de Notícias',
    url: 'https://www.jn.pt/',
    description: 'Cobertura nacional com foco também no norte de Portugal.',
  },
  {
    title: 'Observador',
    url: 'https://observador.pt/',
    description: 'Jornal online com notícias, opinião e podcasts.',
  },
];

export default function NoticiasPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl p-6 sm:p-12">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Notícias e Mídia</h1>
      <p className="mb-6 text-gray-600">
        Acompanhe os principais veículos de informação e fique por dentro do que
        acontece em Portugal.
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
