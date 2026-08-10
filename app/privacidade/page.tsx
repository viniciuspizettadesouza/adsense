import type { Metadata } from 'next';
import { InformationPage } from '@/components/templates/InformationPage';

export const metadata: Metadata = {
  title: 'Privacidade',
  description:
    'Informação sobre privacidade, cookies e serviços externos no Portugal Prático.',
  alternates: { canonical: '/privacidade' },
};

export default function PrivacyPage() {
  return (
    <InformationPage
      eyebrow="Privacidade"
      title="Privacidade e dados"
      intro="Esta versão do Portugal Prático foi concebida para funcionar sem recolher dados pessoais dos leitores."
    >
      <section>
        <h2>Dados e cookies</h2>
        <p>
          O site não tem contas de utilizador, formulários, comentários ou
          newsletter. Não instalamos cookies de publicidade e não usamos
          ferramentas de analytics.
        </p>
        <p>
          A preferência de tema claro ou escuro pode ser guardada localmente no
          seu navegador para manter a opção escolhida.
        </p>
      </section>
      <section>
        <h2>Publicidade</h2>
        <p>
          Não existem anúncios nem integração com Google AdSense nesta versão.
        </p>
      </section>
      <section>
        <h2>Links externos</h2>
        <p>
          Os guias contêm links para sites de entidades públicas. Ao seguir
          esses links, passa a estar sujeito às políticas de privacidade e
          cookies do site de destino.
        </p>
      </section>
      <section>
        <h2>Alterações futuras</h2>
        <p>
          Esta página deverá ser atualizada antes da introdução de analytics,
          formulários, publicidade ou qualquer tecnologia adicional que trate
          dados pessoais.
        </p>
        <p>
          <strong>Última atualização:</strong> 10 de agosto de 2026.
        </p>
      </section>
    </InformationPage>
  );
}
