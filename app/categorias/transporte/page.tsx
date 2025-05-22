import CategoryPage from '@/components/template/CategoryPage';
import { pagesData } from '@/data/pages';

export function TransportePage() {
  return (
    <CategoryPage
      title="Transporte Público"
      description="Informações sobre metrô, comboios, passes e mobilidade urbana."
      items={pagesData.transporte}
    />
  );
}
