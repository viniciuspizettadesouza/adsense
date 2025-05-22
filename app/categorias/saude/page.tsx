import CategoryPage from '@/components/template/CategoryPage';
import { pagesData } from '@/data/pages';

export function SaudePage() {
  return (
    <CategoryPage
      title="Saúde e Farmácias"
      description="Hospitais, farmácias e serviços médicos essenciais."
      items={pagesData.saude}
    />
  );
}
