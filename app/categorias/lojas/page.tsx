import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';

export default function LojasPage() {
  return (
    <CategoryPage
      title="Lojas e Compras"
      description="Sites úteis para compras online e lojas populares em Portugal."
      items={pagesData.lojas}
    />
  );
}
