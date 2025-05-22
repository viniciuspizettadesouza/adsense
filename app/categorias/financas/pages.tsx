import CategoryPage from '@/components/template/CategoryPage';
import { pagesData } from '@/data/pages';

export function FinancasPage() {
  return (
    <CategoryPage
      title="Finanças e Impostos"
      description="IRS, IVA, contribuições sociais e serviços financeiros."
      items={pagesData.financas}
    />
  );
}
