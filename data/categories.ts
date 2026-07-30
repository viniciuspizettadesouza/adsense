import {
  House,
  Car,
  Banknote,
  Landmark,
  Store,
  Bus,
  Newspaper,
  Stethoscope,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Category = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export const categories: Category[] = [
  {
    icon: House,
    title: 'Habitação',
    description: 'Câmaras Municipais, IMI, IRS...',
    href: '/categorias/habitacao',
  },
  {
    icon: Car,
    title: 'Automóvel',
    description: 'IMT, IUC, seguros e assistência.',
    href: '/categorias/automovel',
  },
  {
    icon: Banknote,
    title: 'Finanças e Impostos',
    description: 'IRS, IVA, Segurança Social...',
    href: '/categorias/financas',
  },
  {
    icon: Landmark,
    title: 'Serviços Públicos',
    description: 'NIF, SEF, Segurança Social, IMT...',
    href: '/categorias/servicos',
  },
  {
    icon: Store,
    title: 'Lojas e Compras',
    description: 'Continente, Worten, OLX, etc.',
    href: '/categorias/lojas',
  },
  {
    icon: Bus,
    title: 'Transporte Público',
    description: 'Metro, Comboios, Navegante...',
    href: '/categorias/transporte',
  },
  {
    icon: Newspaper,
    title: 'Notícias e Mídia',
    description: 'RTP, Público, SIC Notícias...',
    href: '/categorias/noticias',
  },
  {
    icon: Stethoscope,
    title: 'Saúde e Farmácias',
    description: 'SNS 24, hospitais, farmácias e emergências.',
    href: '/categorias/saude',
  },
];
