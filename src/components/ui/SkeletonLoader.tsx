import clsx from 'clsx';

interface SkeletonProps {
  className?: string;
  lines?: number;
}

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={clsx('shimmer rounded-lg', className)} style={{ background: 'rgba(255,255,255,0.06)' }} />
  );
}

export function MetricCardSkeleton() {
  return (
    <div className="rounded-2xl border p-5" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-28" />
        </div>
        <Skeleton className="w-11 h-11 rounded-xl" />
      </div>
      <Skeleton className="h-10 w-full mb-3" />
      <Skeleton className="h-4 w-24" />
    </div>
  );
}

export function TableRowSkeleton({ cols = 5 }: { cols?: number }) {
  return (
    <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="px-4 py-3.5">
          <Skeleton className={clsx('h-4', i === 0 ? 'w-32' : 'w-20')} />
        </td>
      ))}
    </tr>
  );
}

export function CardSkeleton({ lines = 3 }: SkeletonProps) {
  return (
    <div className="rounded-2xl border p-5 space-y-3" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="flex gap-3 items-center">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={clsx('h-3', i === lines - 1 ? 'w-2/3' : 'w-full')} />
      ))}
    </div>
  );
}

export default Skeleton;