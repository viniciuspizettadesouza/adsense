import Link from 'next/link';
import {
  ArrowRight,
  BookOpenCheck,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { GuideCard } from '@/components/molecules/GuideCard';
import { guides } from '@/data/guides';

export default function Home() {
  return (
    <main id="conteudo" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
      <section className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-emerald-950 px-6 py-14 text-white shadow-xl shadow-emerald-950/10 sm:px-12 sm:py-20 dark:border-emerald-400/20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-emerald-300 uppercase">
            Informação pública, explicada
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Tratar da vida em Portugal não devia ser um labirinto.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
            Guias claros, verificados e ligados às fontes oficiais para tratar
            de documentos e encontrar o serviço certo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#guias"
              className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 font-semibold text-emerald-950 transition hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            >
              Explorar os guias <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/metodologia"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Como verificamos
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-label="Compromissos editoriais"
        className="grid gap-4 py-12 md:grid-cols-3"
      >
        <ValueProposition
          icon={BookOpenCheck}
          title="Passos, não apenas links"
          text="Explicamos o contexto, o que preparar e onde concluir cada processo."
        />
        <ValueProposition
          icon={ShieldCheck}
          title="Data de verificação visível"
          text="Cada guia mostra quando as instruções e fontes foram conferidas."
        />
        <ValueProposition
          icon={ExternalLink}
          title="Fontes oficiais"
          text="Os canais do Estado estão identificados e separados da nossa explicação."
        />
      </section>

      <section
        id="guias"
        aria-labelledby="guias-heading"
        className="scroll-mt-28 py-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Começar por aqui
            </p>
            <h2
              id="guias-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Guias essenciais
            </h2>
          </div>
          <Link
            href="/categorias/documentos-e-imigracao"
            className="inline-flex items-center gap-2 font-semibold text-emerald-800 hover:underline dark:text-emerald-300"
          >
            Ver a categoria <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border bg-stone-100 p-7 sm:p-10 dark:bg-stone-900">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-amber-700 uppercase dark:text-amber-300">
            Antes de avançar
          </p>
          <h2 className="mt-2 text-2xl font-bold">
            Confirme sempre a fonte oficial.
          </h2>
          <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
            Procedimentos públicos mudam. Este projeto organiza informação, mas
            não substitui a decisão da entidade responsável nem aconselhamento
            jurídico, fiscal ou profissional para o seu caso.
          </p>
        </div>
      </section>
    </main>
  );
}

function ValueProposition({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof BookOpenCheck;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border bg-white p-5 dark:bg-stone-950">
      <Icon
        className="h-6 w-6 text-emerald-700 dark:text-emerald-300"
        aria-hidden="true"
      />
      <h2 className="mt-4 font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
        {text}
      </p>
    </article>
  );
}
