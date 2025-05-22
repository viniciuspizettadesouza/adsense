import { categories } from '@/data/categories';
import { categoryTitles } from '@/data/categoryTitles';
import { pagesData } from '@/data/pages';

describe('Consistência de dados', () => {
  const categorySlugs = categories.map((c) => c.href.split('/').pop());
  const titleSlugs = Object.keys(categoryTitles);
  const pagesSlugs = Object.keys(pagesData);

  it('Todas as categorias devem ter título e conteúdo', () => {
    categorySlugs.forEach((slug) => {
      expect(titleSlugs).toContain(slug);
      expect(pagesSlugs).toContain(slug);
    });
  });

  it('Todos os títulos devem ter categoria e conteúdo', () => {
    titleSlugs.forEach((slug) => {
      expect(categorySlugs).toContain(slug);
      expect(pagesSlugs).toContain(slug);
    });
  });

  it('Todas as páginas devem ter categoria e título', () => {
    pagesSlugs.forEach((slug) => {
      expect(categorySlugs).toContain(slug);
      expect(titleSlugs).toContain(slug);
    });
  });
});
