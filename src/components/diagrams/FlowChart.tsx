/**
 * FlowChart Component
 * Processus étape par étape avec flèches et indicateurs
 * Pour: procédures, workflow, étapes d'un contrat
 */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export interface FlowStep {
  number?: number
  title: string
  description?: string
  icon?: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'current' | 'pending'
}

export interface FlowChartProps {
  title?: string
  titleIcon?: React.ReactNode
  steps: FlowStep[]
  className?: string
  dir?: 'rtl' | 'ltr'
  layout?: 'vertical' | 'horizontal'
  showNumbers?: boolean
}

const stepVariants = {
  default: {
    container: 'border-border bg-card',
    number: 'bg-primary text-primary-foreground',
    title: 'text-foreground',
  },
  success: {
    container: 'border-success/30 bg-success/5',
    number: 'bg-success text-white',
    title: 'text-success',
  },
  warning: {
    container: 'border-warning/30 bg-warning/5',
    number: 'bg-warning text-white',
    title: 'text-warning',
  },
  current: {
    container: 'border-primary bg-primary/10 ring-2 ring-primary/20',
    number: 'bg-primary text-primary-foreground animate-pulse',
    title: 'text-primary font-bold',
  },
  pending: {
    container: 'border-border bg-muted/30 opacity-60',
    number: 'bg-muted text-muted-foreground',
    title: 'text-muted-foreground',
  },
}

function StepCard({ 
  step, 
  index, 
  showNumbers = true,
  layout = 'vertical'
}: { 
  step: FlowStep
  index: number
  showNumbers?: boolean
  layout?: 'vertical' | 'horizontal'
}) {
  const variant = step.variant || 'default'
  const styles = stepVariants[variant]

  return (
    <div className={cn(
      "rounded-xl border p-4 transition-all",
      styles.container,
      layout === 'horizontal' ? "flex-1 min-w-[200px]" : "w-full"
    )}>
      <div className="flex items-start gap-3">
        {/* Number or Icon */}
        {(showNumbers || step.icon) && (
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold",
            styles.number
          )}>
            {step.icon || (showNumbers ? (step.number ?? index + 1) : null)}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className={cn("font-semibold", styles.title)}>
            {step.title}
          </h4>
          {step.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {step.description}
            </p>
          )}
        </div>

        {/* Success indicator */}
        {variant === 'success' && (
          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
        )}
      </div>
    </div>
  )
}

function Arrow({ layout, dir }: { layout: 'vertical' | 'horizontal'; dir: 'rtl' | 'ltr' }) {
  if (layout === 'vertical') {
    return (
      <div className="flex justify-center py-2">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    )
  }

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  return (
    <div className="flex items-center px-2">
      <ArrowIcon className="w-5 h-5 text-muted-foreground" />
    </div>
  )
}

export function FlowChart({
  title,
  titleIcon,
  steps,
  className,
  dir = 'ltr',
  layout = 'vertical',
  showNumbers = true,
}: FlowChartProps) {
  return (
    <div 
      className={cn(
        "rounded-xl border border-border bg-card p-4 sm:p-6",
        className
      )}
      dir={dir}
    >
      {/* Header */}
      {title && (
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          {titleIcon || <span className="text-xl">🔄</span>}
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
      )}

      {/* Steps */}
      <div className={cn(
        layout === 'horizontal' 
          ? "flex flex-wrap items-stretch gap-2 overflow-x-auto pb-2" 
          : "space-y-0"
      )}>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <StepCard 
              step={step} 
              index={idx} 
              showNumbers={showNumbers}
              layout={layout}
            />
            {idx < steps.length - 1 && (
              <Arrow layout={layout} dir={dir} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

/**
 * SimpleFlow - Version simplifiée inline
 */
export interface SimpleFlowProps {
  steps: string[]
  className?: string
  dir?: 'rtl' | 'ltr'
}

export function SimpleFlow({ steps, className, dir = 'ltr' }: SimpleFlowProps) {
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  
  return (
    <div 
      className={cn(
        "flex flex-wrap items-center gap-2 p-4 rounded-lg bg-muted/30",
        className
      )}
      dir={dir}
    >
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <span className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium">
            {step}
          </span>
          {idx < steps.length - 1 && (
            <ArrowIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
