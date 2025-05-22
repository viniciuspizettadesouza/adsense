import CategoryPage from '@/components/template/CategoryPage';
import { pagesData } from '@/data/pages';

export function NoticiasPage() {
  return (
    <CategoryPage
      title="Notícias e Mídia"
      description="Principais fontes de notícias e jornais em Portugal."
      items={pagesData.noticias}
    />
  );
}
