import type { LucideIcon } from 'lucide-react';
import {
  Landmark,
  ShieldCheck,
  FileText,
  BadgeCheck,
  Stethoscope,
  ShoppingBag,
  Monitor,
  ShoppingCart,
  Package,
  BookOpen,
  Truck,
  Ticket,
  Bus,
  TramFront,
  Train,
  TrainTrack,
  MapPin,
  Newspaper,
  BookText,
  Hospital,
  Pill,
  AlertTriangle,
  Banknote,
  Car,
} from 'lucide-react';

export type PageItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export type Pages = Record<string, PageItem[]>;

export const pagesData: Pages = {
  servicos: [
    {
      icon: Landmark,
      title: 'Portal das Finanças',
      description: 'Acesso ao NIF, IRS, faturas e outros serviços fiscais.',
      href: 'https://www.portaldasfinancas.gov.pt/',
    },
    {
      icon: ShieldCheck,
      title: 'SEF - Estrangeiros e Fronteiras',
      description: 'Vistos, residência, agendamentos e regularizações.',
      href: 'https://www.sef.pt/',
    },
    {
      icon: Landmark,
      title: 'Loja do Cidadão',
      description: 'Centralização de serviços públicos presenciais.',
      href: 'https://eportugal.gov.pt/loja-do-cidadao',
    },
    {
      icon: FileText,
      title: 'IMT Online',
      description: 'Carta de condução, troca de CNH, e assuntos de mobilidade.',
      href: 'https://www.imtonline.pt/',
    },
    {
      icon: BadgeCheck,
      title: 'Segurança Social Direta',
      description: 'Apoios, subsídios, contribuições e pensões.',
      href: 'https://www.seg-social.pt/',
    },
    {
      icon: Stethoscope,
      title: 'SNS 24',
      description: 'Cuidados de saúde, médicos de família e linha 24h.',
      href: 'https://www.sns24.gov.pt/',
    },
  ],
  lojas: [
    {
      icon: ShoppingBag,
      title: 'Continente',
      description: 'Supermercado popular em Portugal com compras online.',
      href: 'https://www.continente.pt/',
    },
    {
      icon: Monitor,
      title: 'Worten',
      description: 'Lojas de eletrônicos, eletrodomésticos e tecnologia.',
      href: 'https://www.worten.pt/',
    },
    {
      icon: ShoppingCart,
      title: 'Auchan',
      description: 'Rede de supermercados com ofertas semanais.',
      href: 'https://www.auchan.pt/',
    },
    {
      icon: Package,
      title: 'OLX Portugal',
      description: 'Classificados para compra e venda de usados.',
      href: 'https://www.olx.pt/',
    },
    {
      icon: BookOpen,
      title: 'Fnac',
      description: 'Livros, eletrônicos, informática e cultura.',
      href: 'https://www.fnac.pt/',
    },
    {
      icon: Truck,
      title: 'Amazon Espanha',
      description: 'Entrega em Portugal com ampla variedade de produtos.',
      href: 'https://www.amazon.es/',
    },
  ],
  transporte: [
    {
      icon: Ticket,
      title: 'Passe Navegante',
      description:
        'Passe mensal para transportes públicos da região de Lisboa.',
      href: 'https://www.portalviva.pt/',
    },
    {
      icon: Bus,
      title: 'Carris',
      description: 'Autocarros e elétricos na cidade de Lisboa.',
      href: 'https://www.carris.pt/',
    },
    {
      icon: TramFront,
      title: 'Metro de Lisboa',
      description: 'Mapa de linhas, horários e compra de bilhetes do metrô.',
      href: 'https://www.metrolisboa.pt/',
    },
    {
      icon: Train,
      title: 'CP - Comboios de Portugal',
      description: 'Trens urbanos, regionais e intermunicipais em todo o país.',
      href: 'https://www.cp.pt/',
    },
    {
      icon: TrainTrack,
      title: 'Fertagus',
      description: 'Trens entre Lisboa e Setúbal com acesso à margem sul.',
      href: 'https://www.fertagus.pt/',
    },
    {
      icon: MapPin,
      title: 'Transportes do Porto',
      description: 'Informações sobre autocarros e o metro da cidade do Porto.',
      href: 'https://www.stcp.pt/',
    },
  ],
  noticias: [
    {
      icon: Newspaper,
      title: 'RTP Notícias',
      description: 'Portal de notícias da emissora pública portuguesa RTP.',
      href: 'https://www.rtp.pt/noticias',
    },
    {
      icon: Newspaper,
      title: 'SIC Notícias',
      description:
        'Canal de notícias 24h com foco em atualidades nacionais e internacionais.',
      href: 'https://sicnoticias.pt/',
    },
    {
      icon: BookText,
      title: 'Público',
      description:
        'Jornal diário português com cobertura ampla de política, economia e sociedade.',
      href: 'https://www.publico.pt/',
    },
    {
      icon: BookText,
      title: 'Expresso',
      description: 'Um dos jornais mais tradicionais e influentes do país.',
      href: 'https://expresso.pt/',
    },
    {
      icon: BookText,
      title: 'Jornal de Notícias',
      description: 'Cobertura nacional com foco também no norte de Portugal.',
      href: 'https://www.jn.pt/',
    },
    {
      icon: BookText,
      title: 'Observador',
      description: 'Jornal online com notícias, opinião e podcasts.',
      href: 'https://observador.pt/',
    },
  ],
  saude: [
    {
      icon: Stethoscope,
      title: 'SNS 24',
      description:
        'Portal do Serviço Nacional de Saúde com informações, marcações e linha de apoio 24h.',
      href: 'https://www.sns24.gov.pt/',
    },
    {
      icon: Hospital,
      title: 'Hospital de Santa Maria',
      description: 'Um dos maiores hospitais públicos de Lisboa, parte do SNS.',
      href: 'https://www.chln.min-saude.pt/',
    },
    {
      icon: Hospital,
      title: 'Hospital São João (Porto)',
      description:
        'Centro hospitalar público de referência no norte de Portugal.',
      href: 'https://www.chsj.min-saude.pt/',
    },
    {
      icon: Pill,
      title: 'Farmácias de Serviço',
      description: 'Localize farmácias abertas 24h em todo o país.',
      href: 'https://www.farmaciasdeservico.net/',
    },
    {
      icon: Pill,
      title: 'Farmácias Portuguesas',
      description:
        'Encontre farmácias por localização, com informações e serviços.',
      href: 'https://www.farmaciasportuguesas.pt/',
    },
    {
      icon: AlertTriangle,
      title: 'INEM - Emergências Médicas',
      description:
        'Instituto Nacional de Emergência Médica. Ligue 112 em caso de urgência.',
      href: 'https://www.inem.pt/',
    },
  ],
  habitacao: [
    {
      icon: Landmark,
      title: 'Câmara Municipal',
      description: 'Serviços municipais, urbanismo e habitação social.',
      href: 'https://www.portaldocidadao.pt/municipios',
    },
    {
      icon: FileText,
      title: 'IMI - Imposto Municipal sobre Imóveis',
      description: 'Consulta e pagamento de IMI via Portal das Finanças.',
      href: 'https://www.portaldasfinancas.gov.pt/',
    },
    {
      icon: FileText,
      title: 'Simulador de Crédito Habitação',
      description: 'Compare condições de crédito para compra de casa.',
      href: 'https://www.comparaja.pt/credito-habitacao',
    },
    {
      icon: FileText,
      title: 'Programa 1.º Direito',
      description: 'Apoio à habitação para famílias com baixos rendimentos.',
      href: 'https://www.habitarportugal.pt/1-direito',
    },
    {
      icon: FileText,
      title: 'Arrendamento Acessível',
      description: 'Programa para facilitar o acesso a rendas mais baixas.',
      href: 'https://arrendamentoacessivel.gov.pt/',
    },
  ],
  automovel: [
    {
      icon: Car,
      title: 'IMT Online',
      description: 'Serviços para condutores, como renovação da carta.',
      href: 'https://www.imtonline.pt/',
    },
    {
      icon: Banknote,
      title: 'Simulador de IUC',
      description: 'Calcule o Imposto Único de Circulação do seu carro.',
      href: 'https://www.autocustos.info/iuc',
    },
    {
      icon: FileText,
      title: 'DGV - Direção-Geral de Viação',
      description: 'Consulta de infrações, pontos na carta e mais.',
      href: 'https://www.imt-ip.pt/',
    },
    {
      icon: FileText,
      title: 'Via Verde',
      description:
        'Pagamento automático de portagens e serviços de mobilidade.',
      href: 'https://www.viaverde.pt/',
    },
    {
      icon: FileText,
      title: 'Simulador de Seguro Auto',
      description: 'Compare preços de seguros automóveis.',
      href: 'https://www.comparaja.pt/seguro-automovel',
    },
  ],
  financas: [
    {
      icon: FileText,
      title: 'IRS - Imposto sobre Rendimento',
      description: 'Entrega da declaração anual e simulações.',
      href: 'https://www.portaldasfinancas.gov.pt/',
    },
    {
      icon: Banknote,
      title: 'IVA e Faturas',
      description: 'Consulta, validação e benefícios com faturas.',
      href: 'https://faturas.portaldasfinancas.gov.pt/',
    },
    {
      icon: BadgeCheck,
      title: 'Segurança Social Direta',
      description: 'Consulta de contribuições e benefícios.',
      href: 'https://www.seg-social.pt/',
    },
    {
      icon: FileText,
      title: 'Simulador de IRS Jovem',
      description: 'Benefícios fiscais para jovens até 26 anos.',
      href: 'https://www.portaldasfinancas.gov.pt/irs-jovem',
    },
    {
      icon: FileText,
      title: 'Plano de Poupança Reforma (PPR)',
      description: 'Incentivos fiscais para poupar a longo prazo.',
      href: 'https://www.cmvm.pt/',
    },
  ],
};
