import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';

export default function NoticiasPage() {
  return (
    <CategoryPage
      title="Notícias e Mídia"
      description="Principais fontes de notícias e jornais em Portugal."
      items={pagesData.noticias}
    />
  );
}
