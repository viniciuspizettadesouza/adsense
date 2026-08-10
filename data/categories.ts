import { FileCheck2 } from 'lucide-react';
import type { Category } from '@/types/content';

export const categories: Category[] = [
  {
    slug: 'documentos-e-imigracao',
    title: 'Documentos e imigração',
    description:
      'Guias verificados para tratar de números de identificação e encontrar o serviço público certo.',
    icon: FileCheck2,
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
