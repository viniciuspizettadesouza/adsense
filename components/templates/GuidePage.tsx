import { ArrowUpRight, Info, TriangleAlert } from 'lucide-react';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { GuideCard } from '@/components/molecules/GuideCard';
import { VerifiedBadge } from '@/components/molecules/VerifiedBadge';
import type { Category, Guide, GuideSection } from '@/types/content';

export default function GuidePage({
  guide,
  category,
  relatedGuides,
}: {
  guide: Guide;
  category: Category;
  relatedGuides: Guide[];
}) {
  return (
    <main id="conteudo" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
      <Breadcrumbs
        items={[
          { label: 'Início', href: '/' },
          { label: category.title, href: `/categorias/${category.slug}` },
          { label: guide.title },
        ]}
      />

      <header className="grid gap-10 border-b pb-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
        <div>
          <p className="text-sm font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
            {guide.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 dark:text-stone-300">
            {guide.description}
          </p>
          <div className="mt-6">
            <VerifiedBadge lastVerified={guide.lastVerified} />
          </div>
        </div>
        <aside className="rounded-2xl border bg-stone-50 p-5 dark:bg-stone-900">
          <p className="text-sm font-bold">Neste guia</p>
          <nav aria-label="Índice do guia">
            <ul className="mt-3 space-y-2 text-sm text-stone-600 dark:text-stone-300">
              {guide.sections.map((section) => (
                <li key={section.id}>
                  <a
                    className="hover:text-emerald-700 hover:underline dark:hover:text-emerald-300"
                    href={`#${section.id}`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="hover:text-emerald-700 hover:underline dark:hover:text-emerald-300"
                  href="#erros-comuns"
                >
                  Erros comuns
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-700 hover:underline dark:hover:text-emerald-300"
                  href="#perguntas"
                >
                  Perguntas frequentes
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-700 hover:underline dark:hover:text-emerald-300"
                  href="#fontes"
                >
                  Fontes oficiais
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </header>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <article className="max-w-3xl min-w-0">
          <section aria-labelledby="destinatarios" className="guide-section">
            <h2 id="destinatarios">Para quem é este guia</h2>
            <ul className="check-list">
              {guide.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {guide.sections.map((section) => (
            <ContentSection key={section.id} section={section} />
          ))}

          <section
            id="erros-comuns"
            className="guide-section scroll-mt-28"
            aria-labelledby="erros-title"
          >
            <h2 id="erros-title">Erros comuns a evitar</h2>
            <ul className="warning-list">
              {guide.commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </section>

          <section
            id="perguntas"
            className="guide-section scroll-mt-28"
            aria-labelledby="perguntas-title"
          >
            <h2 id="perguntas-title">Perguntas frequentes</h2>
            <div className="divide-y rounded-2xl border px-5">
              {guide.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 font-bold marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section
            id="fontes"
            className="guide-section scroll-mt-28"
            aria-labelledby="fontes-title"
          >
            <h2 id="fontes-title">Fontes oficiais</h2>
            <p>
              Estas páginas foram consultadas na data de verificação indicada no
              início do guia.
            </p>
            <ul className="mt-5 space-y-3">
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a
                    className="external-card"
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <strong>{source.title}</strong>
                      <small>{source.publisher}</small>
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="order-first lg:order-none">
          <div className="sticky top-28 rounded-2xl bg-emerald-950 p-5 text-white">
            <p className="text-sm font-bold text-emerald-200">
              Informação rápida
            </p>
            <dl className="mt-4 divide-y divide-white/15">
              {guide.quickFacts.map((fact) => (
                <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-xs text-emerald-200">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      <section className="border-t pt-12" aria-labelledby="relacionados-title">
        <h2 id="relacionados-title" className="text-2xl font-bold">
          Continue a preparar-se
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {relatedGuides.map((related) => (
            <GuideCard key={related.slug} guide={related} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ContentSection({ section }: { section: GuideSection }) {
  const NoteIcon = section.note?.tone === 'warning' ? TriangleAlert : Info;

  return (
    <section
      id={section.id}
      className="guide-section scroll-mt-28"
      aria-labelledby={`${section.id}-title`}
    >
      <h2 id={`${section.id}-title`}>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.items && (
        <ul className="check-list">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.steps && (
        <ol className="mt-6 space-y-5">
          {section.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-1 text-stone-600 dark:text-stone-300">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
      {section.links && (
        <ul className="mt-6 space-y-3">
          {section.links.map((link) => (
            <li key={link.url}>
              <a
                className="external-card"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.description}</small>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      )}
      {section.note && (
        <aside
          className={`mt-6 flex gap-3 rounded-2xl border p-5 ${section.note.tone === 'warning' ? 'border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40' : 'border-sky-200 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/40'}`}
        >
          <NoteIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div>
            <h3 className="font-bold">{section.note.title}</h3>
            <p className="mt-1 text-sm leading-6">{section.note.text}</p>
          </div>
        </aside>
      )}
    </section>
  );
}
