import CategoryPage from '@/components/template/CategoryPage';
import { pagesData } from '@/data/pages';

export function AutomovelPage() {
  return (
    <CategoryPage
      title="Automóvel"
      description="Documentos, impostos e serviços relacionados a veículos."
      items={pagesData.automovel}
    />
  );
}
