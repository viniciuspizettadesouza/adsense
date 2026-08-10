export type ReviewStatus = 'current' | 'review-soon' | 'overdue';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export function daysSince(date: string, now = new Date()): number {
  const verifiedAt = new Date(`${date}T00:00:00Z`);
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );

  return Math.max(
    0,
    Math.floor((today.getTime() - verifiedAt.getTime()) / DAY_IN_MS)
  );
}

export function getReviewStatus(
  lastVerified: string,
  now = new Date()
): ReviewStatus {
  const age = daysSince(lastVerified, now);

  if (age < 90) return 'current';
  if (age <= 180) return 'review-soon';
  return 'overdue';
}

export const reviewStatusLabels: Record<ReviewStatus, string> = {
  current: 'Atualizado',
  'review-soon': 'Rever em breve',
  overdue: 'Revisão necessária',
};

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
