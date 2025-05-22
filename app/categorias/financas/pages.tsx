import CategoryPage from '@/components/templates/CategoryPage';
import { pagesData } from '@/data/pages';

export default function FinancasPage() {
  return (
    <CategoryPage
      title="Finanças e Impostos"
      description="IRS, IVA, contribuições sociais e serviços financeiros."
      items={pagesData.financas}
    />
  );
}
