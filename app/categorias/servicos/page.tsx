import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';

export default function ServicosPage() {
  return (
    <CategoryPage
      title="Serviços Públicos"
      description="Sites oficiais para resolver documentação, saúde, impostos e mais."
      items={pagesData.servicos}
    />
  );
}
