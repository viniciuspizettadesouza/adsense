import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';

export default function AutomovelPage() {
  return (
    <CategoryPage
      title="Automóvel"
      description="Documentos, impostos e serviços relacionados a veículos."
      items={pagesData.automovel}
    />
  );
}
