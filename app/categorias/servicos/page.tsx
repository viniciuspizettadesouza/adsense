import { AdBanner } from '@/components/AdBanner';
import Link from 'next/link';

const links = [
  {
    title: 'Portal das Finanças',
    url: 'https://www.portaldasfinancas.gov.pt/',
    description: 'Acesso ao NIF, IRS, faturas e outros serviços fiscais.',
  },
  {
    title: 'Serviço de Estrangeiros e Fronteiras (SEF)',
    url: 'https://www.sef.pt/',
    description: 'Agendamentos e informações sobre vistos e residência.',
  },
  {
    title: 'Loja do Cidadão',
    url: 'https://eportugal.gov.pt/loja-do-cidadao',
    description: 'Centralização de serviços públicos em um só lugar.',
  },
  {
    title: 'IMT Online',
    url: 'https://www.imtonline.pt/',
    description: 'Renovação da carta de condução, troca de CNH, etc.',
  },
  {
    title: 'Segurança Social Direta',
    url: 'https://www.seg-social.pt/',
    description: 'Subsídios, contribuições e apoio familiar.',
  },
  {
    title: 'SNS 24',
    url: 'https://www.sns24.gov.pt/',
    description: 'Serviço Nacional de Saúde e marcação de consultas.',
  },
];

export default function ServicosPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl p-6 sm:p-12">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Serviços Públicos</h1>
      <p className="mb-6 text-gray-600">
        Sites oficiais para resolver documentação, saúde, impostos e mais.
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
