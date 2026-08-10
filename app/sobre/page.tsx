import type { Metadata } from 'next';
import { InformationPage } from '@/components/templates/InformationPage';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a missão e os limites editoriais do Portugal Prático.',
  alternates: { canonical: '/sobre' },
};

export default function AboutPage() {
  return (
    <InformationPage
      eyebrow="O projeto"
      title="Sobre o Portugal Prático"
      intro="Um projeto editorial independente para tornar informação pública mais fácil de compreender e usar."
    >
      <section>
        <h2>A nossa missão</h2>
        <p>
          Serviços públicos importantes estão frequentemente distribuídos por
          várias páginas, formulários e entidades. O Portugal Prático reúne o
          contexto essencial, organiza os passos e encaminha cada pessoa para a
          fonte oficial adequada.
        </p>
        <p>
          Publicamos poucos guias de cada vez para que cada um possa ser
          verificado e mantido.
        </p>
      </section>
      <section>
        <h2>O que este site não é</h2>
        <p>
          Não somos uma entidade pública, não representamos a AIMA, a Autoridade
          Tributária, a Segurança Social ou o gov.pt e não tratamos de processos
          em nome dos leitores.
        </p>
        <p>
          O conteúdo é informativo e não substitui aconselhamento jurídico,
          fiscal ou profissional adaptado ao seu caso.
        </p>
      </section>
      <section>
        <h2>Independência</h2>
        <p>
          Nesta versão, o site não apresenta publicidade, não usa links de
          afiliados e não recebe pagamentos para recomendar intermediários.
        </p>
      </section>
    </InformationPage>
  );
}
