import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InformationPage } from '@/components/templates/InformationPage';
import { guides } from '@/data/guides';
import { formatDate } from '@/lib/review-status';

export const metadata: Metadata = {
  title: 'Fontes oficiais',
  description: 'Fontes públicas consultadas nos guias do Portugal Prático.',
  alternates: { canonical: '/fontes' },
};

const sources = Array.from(
  new Map(
    guides
      .flatMap((guide) => guide.sources)
      .map((source) => [source.url, source])
  ).values()
).sort((a, b) => a.publisher.localeCompare(b.publisher, 'pt'));

export default function SourcesPage() {
  return (
    <InformationPage
      eyebrow="Referências"
      title="Fontes oficiais"
      intro="Todas as fontes públicas usadas para verificar os guias, reunidas sem duplicações."
    >
      <ul className="space-y-4">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              className="external-card"
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <strong>{source.title}</strong>
                <small>
                  {source.publisher} · consultado em{' '}
                  {formatDate(source.checkedAt)}
                </small>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </InformationPage>
  );
}
