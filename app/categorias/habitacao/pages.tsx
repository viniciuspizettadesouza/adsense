import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';

export default function HabitacaoPage() {
  return (
    <CategoryPage
      title="Habitação"
      description="Informações sobre imóveis, IMI e moradia em Portugal."
      items={pagesData.habitacao}
    />
  );
}
