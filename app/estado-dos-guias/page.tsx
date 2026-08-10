import type { Metadata } from 'next';
import Link from 'next/link';
import { InformationPage } from '@/components/templates/InformationPage';
import { VerifiedBadge } from '@/components/molecules/VerifiedBadge';
import { guides } from '@/data/guides';
import { daysSince } from '@/lib/review-status';

export const metadata: Metadata = {
  title: 'Estado dos guias',
  description: 'Consulte quando cada guia do Portugal Prático foi verificado.',
  alternates: { canonical: '/estado-dos-guias' },
};

export default function GuidesStatusPage() {
  return (
    <InformationPage
      eyebrow="Manutenção"
      title="Estado dos guias"
      intro="Uma visão transparente da data de verificação e da idade de cada guia publicado."
    >
      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[38rem] text-left text-sm">
          <thead className="bg-stone-100 dark:bg-stone-900">
            <tr>
              <th className="px-5 py-4">Guia</th>
              <th className="px-5 py-4">Estado</th>
              <th className="px-5 py-4">Idade</th>
              <th className="px-5 py-4">
                <span className="sr-only">Abrir</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {guides.map((guide) => (
              <tr key={guide.slug}>
                <td className="px-5 py-4 font-bold">{guide.title}</td>
                <td className="px-5 py-4">
                  <VerifiedBadge lastVerified={guide.lastVerified} />
                </td>
                <td className="px-5 py-4 text-stone-600 dark:text-stone-300">
                  {daysSince(guide.lastVerified)} dias
                </td>
                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/guias/${guide.slug}`}
                    className="font-semibold text-emerald-700 hover:underline dark:text-emerald-300"
                  >
                    Abrir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm text-stone-600 dark:text-stone-300">
        Os estados mudam automaticamente com o tempo. Veja os limites e o
        processo de revisão na <Link href="/metodologia">metodologia</Link>.
      </p>
    </InformationPage>
  );
}
