import { cn } from '@/lib/utils'

interface LabBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning'
  className?: string
}

export function LabBadge({ children, variant = 'default', className }: LabBadgeProps) {
  const variants = {
    default: 'bg-accent/10 text-accent border-accent/20',
    success: 'bg-green-500/10 text-green-400 border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  }

  return (
    <span className={cn('inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border', variants[variant], className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  )
}
