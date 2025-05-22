import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';

export default function TransportePage() {
  return (
    <CategoryPage
      title="Transporte Público"
      description="Informações sobre metrô, comboios, passes e mobilidade urbana."
      items={pagesData.transporte}
    />
  );
}
