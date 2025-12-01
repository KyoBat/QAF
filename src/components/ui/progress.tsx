/**
 * Progress Component
 * Utilise UNIQUEMENT les design tokens
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  showLabel?: boolean
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, showLabel = false, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))
    
    return (
      <div className={cn('relative', className)} {...props}>
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          className="relative h-2 w-full overflow-hidden rounded-full bg-secondary"
        >
          <div
            className="h-full bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <span className="absolute right-0 -top-6 text-sm text-muted-foreground">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    )
  }
)
Progress.displayName = 'Progress'

export { Progress }
export type { ProgressProps }
