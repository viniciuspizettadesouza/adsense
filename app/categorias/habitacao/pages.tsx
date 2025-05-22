import CategoryPage from '@/components/template/CategoryPage';
import { pagesData } from '@/data/pages';

export function HabitacaoPage() {
  return (
    <CategoryPage
      title="Habitação"
      description="Informações sobre imóveis, IMI e moradia em Portugal."
      items={pagesData.habitacao}
    />
  );
}
