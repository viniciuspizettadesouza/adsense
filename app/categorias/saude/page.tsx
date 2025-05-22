import { AdBanner } from '@/components/AdBanner';
import Link from 'next/link';

const links = [
  {
    title: 'SNS 24',
    url: 'https://www.sns24.gov.pt/',
    description:
      'Portal do Serviço Nacional de Saúde com informações, marcações e linha de apoio 24h.',
  },
  {
    title: 'Hospital de Santa Maria',
    url: 'https://www.chln.min-saude.pt/',
    description: 'Um dos maiores hospitais públicos de Lisboa, parte do SNS.',
  },
  {
    title: 'Hospital São João (Porto)',
    url: 'https://www.chsj.min-saude.pt/',
    description:
      'Centro hospitalar público de referência no norte de Portugal.',
  },
  {
    title: 'Farmácias de Serviço',
    url: 'https://www.farmaciasdeservico.net/',
    description: 'Localize farmácias abertas 24h em todo o país.',
  },
  {
    title: 'Farmácias Portuguesas',
    url: 'https://www.farmaciasportuguesas.pt/',
    description:
      'Encontre farmácias por localização, com informações e serviços.',
  },
  {
    title: 'INEM - Emergências Médicas',
    url: 'https://www.inem.pt/',
    description:
      'Instituto Nacional de Emergência Médica. Ligue 112 em caso de urgência.',
  },
];

export default function SaudePage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl p-6 sm:p-12">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Saúde e Farmácias</h1>
      <p className="mb-6 text-gray-600">
        Serviços de saúde públicos, emergências médicas e onde encontrar
        farmácias em Portugal.
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
