import type { Metadata } from 'next';
import Link from 'next/link';
import { InformationPage } from '@/components/templates/InformationPage';

export const metadata: Metadata = {
  title: 'Metodologia',
  description:
    'Como o Portugal Prático pesquisa, verifica e revê os seus guias.',
  alternates: { canonical: '/metodologia' },
};

export default function MethodologyPage() {
  return (
    <InformationPage
      eyebrow="Transparência editorial"
      title="Como verificamos os guias"
      intro="Cada guia nasce de fontes públicas identificadas, recebe uma data de verificação e entra num ciclo explícito de revisão."
    >
      <section>
        <h2>1. Começamos pela pergunta prática</h2>
        <p>
          Organizamos cada página em torno do que uma pessoa precisa de saber:
          para quem é o serviço, que documentos preparar, quanto custa, quais
          são os passos e onde concluir o pedido.
        </p>
      </section>
      <section>
        <h2>2. Priorizamos fontes oficiais</h2>
        <p>
          As afirmações operacionais são confrontadas com páginas do gov.pt e
          das entidades responsáveis. As fontes consultadas aparecem no fim de
          cada guia e na <Link href="/fontes">lista geral de fontes</Link>.
        </p>
      </section>
      <section>
        <h2>3. Separamos explicação de decisão oficial</h2>
        <p>
          Resumimos informação e ajudamos a encontrar o canal certo, mas a
          entidade pública determina requisitos, prazos e decisões. Quando
          existem variações por situação, o guia assinala essa limitação em vez
          de apresentar uma regra universal.
        </p>
      </section>
      <section>
        <h2>4. Mostramos a idade da revisão</h2>
        <ul>
          <li>
            <strong>Atualizado:</strong> verificado há menos de 90 dias.
          </li>
          <li>
            <strong>Rever em breve:</strong> verificado entre 90 e 180 dias.
          </li>
          <li>
            <strong>Revisão necessária:</strong> verificado há mais de 180 dias.
          </li>
        </ul>
        <p>
          O estado é calculado automaticamente. Consulte o{' '}
          <Link href="/estado-dos-guias">painel de estado</Link> para ver todos
          os guias.
        </p>
      </section>
      <section>
        <h2>Limitações</h2>
        <p>
          Uma data recente reduz o risco de desatualização, mas não garante que
          uma entidade não tenha alterado um formulário ou procedimento depois
          da verificação. Abra sempre a fonte oficial antes de agir.
        </p>
      </section>
    </InformationPage>
  );
}
