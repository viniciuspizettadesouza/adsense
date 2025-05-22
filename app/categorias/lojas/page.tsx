import CategoryPage from '@/components/template/CategoryPage';
import { pagesData } from '@/data/pages';

export function LojasPage() {
  return (
    <CategoryPage
      title="Lojas e Compras"
      description="Sites úteis para compras online e lojas populares em Portugal."
      items={pagesData.lojas}
    />
  );
}
