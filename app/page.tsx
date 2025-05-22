import Link from 'next/link';
import { AdBanner } from '@/components/AdBanner';

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl p-6 sm:p-12">
      <h1 className="mb-4 text-center text-3xl font-bold sm:text-left sm:text-4xl">
        Portugal para Imigrantes
      </h1>
      <p className="mb-8 text-center text-gray-600 sm:text-left">
        Descubra serviços essenciais, sites úteis e informações práticas para
        viver em Portugal com mais facilidade.
      </p>

      {/* Bloco de anúncio (você pode comentar se ainda não tiver AdSense ativo) */}
      <AdBanner />

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link
          href="/categorias/servicos"
          className="block rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">Serviços Públicos</h2>
          <p className="text-sm text-gray-500">
            NIF, SEF, Segurança Social, IMT...
          </p>
        </Link>

        <Link
          href="/categorias/lojas"
          className="block rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">Lojas e Compras</h2>
          <p className="text-sm text-gray-500">Continente, Worten, OLX, etc.</p>
        </Link>

        <Link
          href="/categorias/transporte"
          className="block rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">Transporte Público</h2>
          <p className="text-sm text-gray-500">Metro, Comboios, Navegante...</p>
        </Link>

        <Link
          href="/categorias/noticias"
          className="block rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">Notícias e Mídia</h2>
          <p className="text-sm text-gray-500">RTP, Público, SIC Notícias...</p>
        </Link>

        <Link
          href="/categorias/saude"
          className="block rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">Saúde e Farmácias</h2>
          <p className="text-sm text-gray-500">
            SNS 24, hospitais públicos, farmácias e emergências.
          </p>
        </Link>
      </section>
    </main>
  );
}
