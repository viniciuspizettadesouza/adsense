import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      id="conteudo"
      className="mx-auto flex w-full max-w-3xl flex-col items-start px-5 py-20 sm:px-8"
    >
      <p className="text-sm font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
        Erro 404
      </p>
      <h1 className="mt-3 text-4xl font-bold">Esta página não existe.</h1>
      <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
        O antigo diretório foi substituído por guias verificados. Encontre o
        conteúdo disponível na página inicial.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-emerald-950 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
