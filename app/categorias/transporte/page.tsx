import { AdBanner } from '@/components/AdBanner';
import Link from 'next/link';

const links = [
  {
    title: 'Passe Navegante',
    url: 'https://www.portalviva.pt/',
    description: 'Passe mensal para transportes públicos da região de Lisboa.',
  },
  {
    title: 'Carris',
    url: 'https://www.carris.pt/',
    description: 'Autocarros e elétricos na cidade de Lisboa.',
  },
  {
    title: 'Metro de Lisboa',
    url: 'https://www.metrolisboa.pt/',
    description: 'Mapa de linhas, horários e compra de bilhetes do metrô.',
  },
  {
    title: 'CP - Comboios de Portugal',
    url: 'https://www.cp.pt/',
    description: 'Trens urbanos, regionais e intermunicipais em todo o país.',
  },
  {
    title: 'Fertagus',
    url: 'https://www.fertagus.pt/',
    description: 'Trens entre Lisboa e Setúbal com acesso à margem sul.',
  },
  {
    title: 'Transportes do Porto (STCP / Metro do Porto)',
    url: 'https://www.stcp.pt/',
    description: 'Informações sobre autocarros e o metro da cidade do Porto.',
  },
];

export default function TransportePage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl p-6 sm:p-12">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
        Transporte Público
      </h1>
      <p className="mb-6 text-gray-600">
        Encontre os principais sites e apps para circular em Portugal.
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
