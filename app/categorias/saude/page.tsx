import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';

export default function SaudePage() {
  return (
    <CategoryPage
      title="Saúde e Farmácias"
      description="Hospitais, farmácias e serviços médicos essenciais."
      items={pagesData.saude}
    />
  );
}
