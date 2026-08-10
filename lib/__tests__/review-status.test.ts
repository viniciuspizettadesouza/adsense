import { daysSince, getReviewStatus } from '@/lib/review-status';

describe('estado de revisão', () => {
  const now = new Date('2026-08-10T16:00:00Z');

  it('calcula a idade por dias completos em UTC', () => {
    expect(daysSince('2026-08-10', now)).toBe(0);
    expect(daysSince('2026-08-09', now)).toBe(1);
  });

  it('considera atualizado até 89 dias', () => {
    expect(getReviewStatus('2026-05-13', now)).toBe('current');
  });

  it('marca revisão próxima entre 90 e 180 dias inclusive', () => {
    expect(getReviewStatus('2026-05-12', now)).toBe('review-soon');
    expect(getReviewStatus('2026-02-11', now)).toBe('review-soon');
  });

  it('marca revisão necessária depois de 180 dias', () => {
    expect(getReviewStatus('2026-02-10', now)).toBe('overdue');
  });
});
