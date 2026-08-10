import type { Guide } from '@/types/content';

const verifiedAt = '2026-08-10';

export const guides: Guide[] = [
  {
    slug: 'nif',
    categorySlug: 'documentos-e-imigracao',
    title: 'Como pedir o NIF em Portugal',
    description:
      'Quem pode pedir, que documentos preparar e quais são os canais oficiais para obter o número de contribuinte.',
    eyebrow: 'Finanças e identificação',
    lastVerified: verifiedAt,
    audience: [
      'Pessoas estrangeiras, residentes ou não residentes, que ainda não têm NIF.',
      'Pessoas que precisam de trabalhar, celebrar contratos, abrir conta bancária ou cumprir obrigações fiscais em Portugal.',
      'Representantes legais que vão apresentar o pedido por outra pessoa.',
    ],
    quickFacts: [
      { label: 'Custo do pedido', value: 'Gratuito' },
      { label: 'Entidade', value: 'Autoridade Tributária' },
      { label: 'Também chamado', value: 'Número de contribuinte' },
    ],
    sections: [
      {
        id: 'o-que-e',
        title: 'O que é e para que serve',
        paragraphs: [
          'O Número de Identificação Fiscal (NIF) identifica cada contribuinte perante a Autoridade Tributária e Aduaneira. É usado em atos correntes como trabalhar, abrir uma conta bancária, celebrar contratos e tratar de impostos.',
          'Quem tem Cartão de Cidadão português já recebe o NIF automaticamente. Nos restantes casos, é necessário pedi-lo.',
        ],
      },
      {
        id: 'documentos',
        title: 'Documentos a preparar',
        items: [
          'Documento de identificação civil válido ou passaporte.',
          'Comprovativo da morada, quando esta não constar do documento de identificação.',
          'Documento que comprove a situação de residência em Portugal, quando o pedido for feito como residente.',
          'Procuração com poderes para o pedido, quando for apresentado por representante legal.',
          'Documento comprovativo do nascimento para criança que não tenha passaporte.',
        ],
        note: {
          tone: 'warning',
          title: 'Residente e não residente não são a mesma situação',
          text: 'Os documentos e a necessidade de representação dependem da morada, do estatuto fiscal e do país de residência. Confirme o seu caso nas Finanças antes de marcar atendimento ou emitir uma procuração.',
        },
      },
      {
        id: 'passo-a-passo',
        title: 'Passo a passo',
        steps: [
          {
            title: 'Confirme como será registado',
            description:
              'Determine se o pedido será feito como residente ou não residente e consulte os requisitos específicos desse enquadramento.',
          },
          {
            title: 'Reúna os documentos',
            description:
              'Prepare identificação, comprovativo de morada e, quando aplicável, título de residência e procuração.',
          },
          {
            title: 'Escolha o canal oficial',
            description:
              'O próprio pode usar atendimento presencial com marcação. Um representante legal pode apresentar o pedido pelo e-balcão ou num Serviço de Finanças, conforme o caso.',
          },
          {
            title: 'Confirme os dados atribuídos',
            description:
              'Verifique nome, morada e estatuto fiscal no comprovativo de NIF e guarde o documento.',
          },
        ],
      },
      {
        id: 'onde-pedir',
        title: 'Onde pedir',
        links: [
          {
            label: 'Serviço oficial no gov.pt',
            description:
              'Resumo atualizado de elegibilidade, documentos e formas de atendimento.',
            url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-para-pessoa-singular?lang=pt',
          },
          {
            label: 'Informação sobre NIF nas Finanças',
            description:
              'Requisitos da Autoridade Tributária e acesso à marcação de atendimento.',
            url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/NIF/Paginas/default.aspx',
          },
          {
            label: 'Pedido conjunto de NIF, NISS e número de utente',
            description:
              'Opção presencial disponível para pessoas estrangeiras que cumpram as condições indicadas no gov.pt.',
            url: 'https://www.gov.pt/servicos/pedir-os-numeros-de-identificacao-fiscal-seguranca-social-e-nacional-de-utente-saude-para-estrangeiros',
          },
        ],
      },
    ],
    commonMistakes: [
      'Confundir ter NIF com estar registado como residente fiscal em Portugal.',
      'Levar um comprovativo de morada que não corresponde à situação declarada.',
      'Usar intermediários sem confirmar se o pedido pode ser feito diretamente e gratuitamente.',
      'Não atualizar a morada e o estatuto fiscal quando a situação muda.',
    ],
    faqs: [
      {
        question: 'Pedir o NIF tem custo?',
        answer:
          'A atribuição do NIF é gratuita. Serviços privados de representação podem cobrar honorários próprios, que não são uma taxa das Finanças.',
      },
      {
        question: 'Uma pessoa não residente pode ter NIF?',
        answer:
          'Sim. Pessoas portuguesas ou estrangeiras, residentes ou não residentes, podem pedir NIF. O enquadramento e os documentos variam conforme a situação.',
      },
      {
        question: 'Posso pedir NIF, NISS e número de utente ao mesmo tempo?',
        answer:
          'Existe um serviço conjunto em Espaços Cidadão selecionados para pessoas estrangeiras com morada em Portugal que cumpram as condições publicadas no gov.pt.',
      },
    ],
    sources: [
      {
        title: 'Pedir o Número de Identificação Fiscal para pessoa singular',
        publisher: 'gov.pt',
        url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-para-pessoa-singular?lang=pt',
        checkedAt: verifiedAt,
      },
      {
        title: 'NIF — Dados pessoais',
        publisher: 'Autoridade Tributária e Aduaneira',
        url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/NIF/Paginas/default.aspx',
        checkedAt: verifiedAt,
      },
      {
        title: 'Pedir NIF, NISS e número nacional de utente para estrangeiros',
        publisher: 'gov.pt',
        url: 'https://www.gov.pt/servicos/pedir-os-numeros-de-identificacao-fiscal-seguranca-social-e-nacional-de-utente-saude-para-estrangeiros',
        checkedAt: verifiedAt,
      },
    ],
    relatedGuideSlugs: ['niss', 'aima'],
  },
  {
    slug: 'niss',
    categorySlug: 'documentos-e-imigracao',
    title: 'Como pedir o NISS em Portugal',
    description:
      'O pedido online, os documentos necessários, o acompanhamento e o levantamento do Número de Identificação da Segurança Social.',
    eyebrow: 'Segurança Social',
    lastVerified: verifiedAt,
    audience: [
      'Pessoas estrangeiras que ainda não têm Número de Identificação da Segurança Social.',
      'Pessoas portuguesas com bilhete de identidade vitalício.',
      'Representantes legais e entidades empregadoras que podem pedir o número nos casos permitidos.',
    ],
    quickFacts: [
      { label: 'Custo do pedido', value: 'Gratuito' },
      { label: 'Pedido', value: 'Online' },
      { label: 'Entidade', value: 'Segurança Social' },
    ],
    sections: [
      {
        id: 'o-que-e',
        title: 'O que é e para que serve',
        paragraphs: [
          'O NISS identifica uma pessoa perante a Segurança Social. Permite cumprir deveres contributivos e aceder a direitos e prestações quando estiverem reunidas as respetivas condições.',
          'Ter um NISS não atribui automaticamente prestações sociais nem substitui a inscrição ou as contribuições exigidas em cada situação.',
        ],
      },
      {
        id: 'quem-pode-pedir',
        title: 'Quem pode fazer o pedido',
        items: [
          'A própria pessoa estrangeira.',
          'Um representante legal em nome da pessoa estrangeira.',
          'Uma entidade empregadora que esteja a contratar a pessoa, depois de celebrar o contrato e comunicar o vínculo na Segurança Social Direta.',
          'Uma pessoa portuguesa com bilhete de identidade vitalício.',
        ],
      },
      {
        id: 'documentos',
        title: 'Documentos a preparar',
        paragraphs: [
          'O formulário oficial indica os anexos exigidos conforme nacionalidade e situação. Os documentos devem estar válidos e legíveis.',
        ],
        items: [
          'Documento de identificação civil ou passaporte válido.',
          'Documento relativo à situação de trabalho, quando aplicável.',
          'Comprovativo da situação de residência ou permanência exigido para o seu caso.',
          'Procuração ou documento de representação, se o pedido não for apresentado pela própria pessoa.',
        ],
      },
      {
        id: 'passo-a-passo',
        title: 'Passo a passo',
        steps: [
          {
            title: 'Abra o formulário oficial',
            description:
              'Use o acesso “Realizar serviço” na página do gov.pt e escolha a qualidade em que apresenta o pedido.',
          },
          {
            title: 'Preencha os dados e anexe documentos',
            description:
              'Introduza os dados exatamente como aparecem na identificação e envie ficheiros válidos e legíveis.',
          },
          {
            title: 'Guarde o comprovativo',
            description:
              'Conserve a referência do pedido para acompanhar o processo e responder a pedidos de elementos adicionais.',
          },
          {
            title: 'Consulte o estado',
            description:
              'O estado do pedido pode ser consultado através da Segurança Social Direta, conforme indicado pelo serviço oficial.',
          },
          {
            title: 'Siga as instruções de entrega',
            description:
              'Quando o número estiver atribuído, siga a comunicação recebida e as regras vigentes para obter o comprovativo.',
          },
        ],
      },
      {
        id: 'onde-pedir',
        title: 'Pedido e acompanhamento oficiais',
        links: [
          {
            label: 'Pedir o NISS no gov.pt',
            description:
              'Informação oficial e acesso ao formulário online da Segurança Social.',
            url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-da-seguranca-social-niss-',
          },
          {
            label: 'Segurança Social Direta',
            description:
              'Área autenticada para consultar informação e acompanhar serviços disponíveis.',
            url: 'https://app.seg-social.pt/ptss',
          },
          {
            label: 'Pedido conjunto para pessoas estrangeiras',
            description:
              'Verifique se pode pedir NIF, NISS e número de utente numa única deslocação.',
            url: 'https://www.gov.pt/servicos/pedir-os-numeros-de-identificacao-fiscal-seguranca-social-e-nacional-de-utente-saude-para-estrangeiros',
          },
        ],
      },
    ],
    commonMistakes: [
      'Anexar documentos cortados, ilegíveis ou fora de validade.',
      'Submeter várias vezes o mesmo pedido antes de consultar o estado.',
      'Confundir a atribuição do NISS com a comunicação do vínculo laboral.',
      'Pagar a terceiros por um pedido que é gratuito sem avaliar primeiro o canal oficial.',
    ],
    faqs: [
      {
        question: 'O pedido do NISS é gratuito?',
        answer: 'Sim. O serviço oficial de atribuição do NISS é gratuito.',
      },
      {
        question: 'A entidade empregadora pode pedir o NISS?',
        answer:
          'Pode fazê-lo quando está a contratar uma pessoa estrangeira, depois de celebrar o contrato e comunicar o vínculo na Segurança Social Direta, nos termos indicados pelo serviço oficial.',
      },
      {
        question: 'Quem tem Cartão de Cidadão precisa de pedir NISS?',
        answer:
          'Não. Segundo o gov.pt, quem tem Cartão de Cidadão não precisa de pedir o NISS separadamente.',
      },
    ],
    sources: [
      {
        title: 'Pedir o Número de Identificação da Segurança Social (NISS)',
        publisher: 'gov.pt',
        url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-da-seguranca-social-niss-',
        checkedAt: verifiedAt,
      },
      {
        title: 'Pedir NIF, NISS e número nacional de utente para estrangeiros',
        publisher: 'gov.pt',
        url: 'https://www.gov.pt/servicos/pedir-os-numeros-de-identificacao-fiscal-seguranca-social-e-nacional-de-utente-saude-para-estrangeiros',
        checkedAt: verifiedAt,
      },
    ],
    relatedGuideSlugs: ['nif', 'aima'],
  },
  {
    slug: 'aima',
    categorySlug: 'documentos-e-imigracao',
    title: 'AIMA: encontre o serviço certo',
    description:
      'Um mapa dos canais oficiais para primeira autorização de residência, renovação, contactos e alterações ao título.',
    eyebrow: 'Imigração e residência',
    lastVerified: verifiedAt,
    audience: [
      'Pessoas estrangeiras que precisam de tratar de residência ou de um processo migratório em Portugal.',
      'Titulares de autorização de residência que procuram o canal de renovação ou alteração de dados.',
      'Pessoas que ainda encontram referências antigas ao SEF e precisam de identificar a entidade atual.',
    ],
    quickFacts: [
      { label: 'Entidade', value: 'AIMA' },
      { label: 'Regra principal', value: 'O canal depende do processo' },
      { label: 'Revisão', value: 'Consultar antes de agir' },
    ],
    sections: [
      {
        id: 'sef-aima',
        title: 'Do SEF para o sistema atual',
        paragraphs: [
          'O Serviço de Estrangeiros e Fronteiras (SEF) foi extinto em 2023. As suas competências foram distribuídas por várias entidades. A AIMA passou a assegurar funções administrativas relacionadas com migração, asilo, acolhimento e integração; controlo de fronteiras e funções policiais ficaram noutras entidades.',
          'Por isso, um link antigo do SEF não deve ser tratado como instrução atual. Comece pelo tipo de pedido e confirme o canal publicado pela AIMA.',
        ],
        note: {
          tone: 'warning',
          title: 'Os canais mudam com frequência',
          text: 'Formulários, grupos abrangidos e plataformas de renovação podem mudar. Abra sempre a fonte oficial antes de enviar documentos, pagar uma referência ou deslocar-se a um balcão.',
        },
      },
      {
        id: 'escolher-servico',
        title: 'Escolha o seu ponto de partida',
        links: [
          {
            label: 'Primeira autorização de residência',
            description:
              'Consulte o regime e os requisitos correspondentes ao seu visto e fundamento de residência.',
            url: 'https://aima.gov.pt/pt/viver/autorizacao-de-residencia-regime-e-requisitos-gerais-art-o-77-o-n-o-1',
          },
          {
            label: 'Renovação de autorização de residência',
            description:
              'Confirme a plataforma e os grupos atualmente abrangidos antes de iniciar o pedido.',
            url: 'https://aima.gov.pt/pt/noticias/services-aima-gov-pt-novo-servico-para-renovacao-de-autorizacoes-de-residencia',
          },
          {
            label: 'Formulário de contacto AIMA',
            description:
              'Canal para temas e pedidos de agendamento disponibilizados no formulário oficial.',
            url: 'https://contactenos.aima.gov.pt/contact-form',
          },
          {
            label: 'Lojas AIMA',
            description:
              'Consulte localizações, horários e necessidade de marcação antes de se deslocar.',
            url: 'https://aima.gov.pt/pt/lojas-aima',
          },
        ],
      },
      {
        id: 'primeira-residencia',
        title: 'Se é a primeira autorização de residência',
        steps: [
          {
            title: 'Identifique o fundamento legal',
            description:
              'O procedimento depende do visto e do motivo da residência, como trabalho, estudo ou reagrupamento familiar.',
          },
          {
            title: 'Abra a página específica da AIMA',
            description:
              'Use a área “Viver” para confirmar requisitos e documentos do seu caso, não apenas uma lista genérica.',
          },
          {
            title: 'Confirme o canal de apresentação',
            description:
              'Alguns processos têm canal digital; outros continuam sujeitos a agendamento e atendimento presencial.',
          },
          {
            title: 'Prepare apenas documentos atuais',
            description:
              'Verifique validade, morada, meios de subsistência, cobertura de saúde e outros requisitos publicados para o processo concreto.',
          },
        ],
      },
      {
        id: 'outros-pedidos',
        title: 'Renovação, segunda via e alteração de dados',
        paragraphs: [
          'Não presuma que todos estes pedidos usam a mesma plataforma. A AIMA publica serviços por tipo de título, data de validade e situação do processo.',
        ],
        items: [
          'Para renovação, confirme primeiro se o seu título e período de validade estão abrangidos pela plataforma indicada.',
          'Para alteração de dados ou segunda via, use a opção correspondente no formulário oficial e prepare os comprovativos pedidos.',
          'Se já existe um processo, use a referência e os dados exatamente como constam das comunicações oficiais.',
          'Desconfie de mensagens, referências de pagamento e domínios que não consiga confirmar nos canais oficiais.',
        ],
      },
      {
        id: 'contactos',
        title: 'Antes de contactar a AIMA',
        items: [
          'Tenha consigo nome completo, data de nascimento, nacionalidade e números de passaporte, título e processo, quando aplicáveis.',
          'Descreva um único assunto de forma objetiva e anexe apenas os documentos solicitados pelo canal oficial.',
          'Evite pedidos duplicados; guarde comprovativos, mensagens e referências recebidas.',
          'Se a situação tiver consequências jurídicas urgentes, procure apoio jurídico qualificado.',
        ],
      },
    ],
    commonMistakes: [
      'Seguir tutoriais antigos do SEF sem abrir a página atual da AIMA.',
      'Usar o canal de renovação para uma primeira concessão, ou o inverso.',
      'Enviar repetidamente o mesmo pedido por vários canais.',
      'Pagar referências recebidas sem confirmar a origem em domínio oficial.',
      'Assumir que uma regra geral substitui os requisitos do fundamento específico de residência.',
    ],
    faqs: [
      {
        question: 'A AIMA substituiu totalmente o SEF?',
        answer:
          'Não. As competências do antigo SEF foram distribuídas por várias entidades. A AIMA assumiu funções administrativas de migração, asilo, acolhimento e integração, mas não todas as funções policiais e de fronteira.',
      },
      {
        question: 'Todos os pedidos podem ser feitos online?',
        answer:
          'Não. Existem serviços digitais para situações específicas, enquanto outros procedimentos dependem de agendamento e atendimento presencial. Confirme a página do seu processo.',
      },
      {
        question: 'Este guia substitui aconselhamento jurídico?',
        answer:
          'Não. O guia organiza informação pública e encaminha para fontes oficiais; não avalia casos individuais nem substitui aconselhamento jurídico.',
      },
    ],
    sources: [
      {
        title: 'Autorização de residência — regime e requisitos gerais',
        publisher: 'AIMA',
        url: 'https://aima.gov.pt/pt/viver/autorizacao-de-residencia-regime-e-requisitos-gerais-art-o-77-o-n-o-1',
        checkedAt: verifiedAt,
      },
      {
        title: 'Serviço online para renovação de autorizações de residência',
        publisher: 'AIMA',
        url: 'https://aima.gov.pt/pt/noticias/services-aima-gov-pt-novo-servico-para-renovacao-de-autorizacoes-de-residencia',
        checkedAt: verifiedAt,
      },
      {
        title: 'Perguntas frequentes sobre alterações à Lei de Estrangeiros',
        publisher: 'AIMA',
        url: 'https://aima.gov.pt/pt/decreto-regulamentar-da-lei-de-estrangeiros-alteracoes/perguntas-frequentes',
        checkedAt: verifiedAt,
      },
      {
        title: 'Agência para a Integração, Migrações e Asilo',
        publisher: 'gov.pt',
        url: 'https://www.gov.pt/entidades/agencia-para-a-integracao-migracoes-e-asilo',
        checkedAt: verifiedAt,
      },
    ],
    relatedGuideSlugs: ['nif', 'niss'],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(categorySlug: string) {
  return guides.filter((guide) => guide.categorySlug === categorySlug);
}

export function getRelatedGuides(guide: Guide) {
  return guide.relatedGuideSlugs
    .map((slug) => getGuide(slug))
    .filter((related): related is Guide => Boolean(related));
}
