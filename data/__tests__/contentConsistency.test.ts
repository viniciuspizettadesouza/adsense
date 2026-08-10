import { categories, getCategory } from '@/data/categories';
import { getGuide, guides } from '@/data/guides';

const legacyCategorySlugs = [
  'habitacao',
  'automovel',
  'financas',
  'servicos',
  'lojas',
  'transporte',
  'noticias',
  'saude',
];

describe('Consistência do conteúdo editorial', () => {
  it('mantém slugs de categorias e guias únicos', () => {
    expect(new Set(categories.map(({ slug }) => slug)).size).toBe(
      categories.length
    );
    expect(new Set(guides.map(({ slug }) => slug)).size).toBe(guides.length);
  });

  it('publica apenas categorias com guias e relacionamentos válidos', () => {
    for (const category of categories) {
      expect(guides.some((guide) => guide.categorySlug === category.slug)).toBe(
        true
      );
    }

    for (const guide of guides) {
      expect(getCategory(guide.categorySlug)).toBeDefined();
      for (const relatedSlug of guide.relatedGuideSlugs) {
        expect(getGuide(relatedSlug)).toBeDefined();
        expect(relatedSlug).not.toBe(guide.slug);
      }
    }
  });

  it('exige data ISO válida e fontes oficiais em todos os guias', () => {
    for (const guide of guides) {
      expect(guide.lastVerified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(`${guide.lastVerified}T00:00:00Z`))).toBe(
        false
      );
      expect(guide.sources.length).toBeGreaterThan(0);

      for (const source of guide.sources) {
        const url = new URL(source.url);
        expect(url.protocol).toBe('https:');
        expect([
          'gov.pt',
          'www.gov.pt',
          'aima.gov.pt',
          'info.portaldasfinancas.gov.pt',
        ]).toContain(url.hostname);
        expect(source.checkedAt).toBe(guide.lastVerified);
      }
    }
  });

  it('não mantém as antigas categorias do diretório', () => {
    for (const slug of legacyCategorySlugs) {
      expect(getCategory(slug)).toBeUndefined();
    }
  });
});
