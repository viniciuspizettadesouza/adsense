import { CircleCheck, Clock3, TriangleAlert } from 'lucide-react';
import {
  formatDate,
  getReviewStatus,
  reviewStatusLabels,
} from '@/lib/review-status';

const styles = {
  current:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200',
  'review-soon':
    'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200',
  overdue: 'bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-200',
};

const icons = {
  current: CircleCheck,
  'review-soon': Clock3,
  overdue: TriangleAlert,
};

export function VerifiedBadge({ lastVerified }: { lastVerified: string }) {
  const status = getReviewStatus(lastVerified);
  const Icon = icons[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${styles[status]}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {reviewStatusLabels[status]} · {formatDate(lastVerified)}
    </span>
  );
}
