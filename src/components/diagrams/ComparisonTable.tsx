/**
 * ComparisonTable Component
 * Tableau de comparaison visuel (Halal vs Haram, Avant vs Après, etc.)
 * Avec support RTL et responsive
 */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Check, X, Minus } from 'lucide-react'

export interface ComparisonColumn {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  variant: 'positive' | 'negative' | 'neutral'
  items: (string | { text: string; detail?: string })[]
}

export interface ComparisonTableProps {
  title?: string
  titleIcon?: React.ReactNode
  columns: [ComparisonColumn, ComparisonColumn]
  className?: string
  dir?: 'rtl' | 'ltr'
  showIcons?: boolean
}

const columnVariants = {
  positive: {
    header: 'bg-success/10 border-success/30',
    headerText: 'text-success',
    icon: <Check className="w-4 h-4 text-success" />,
    itemBg: 'hover:bg-success/5',
    badge: 'bg-success/10 text-success',
  },
  negative: {
    header: 'bg-destructive/10 border-destructive/30',
    headerText: 'text-destructive',
    icon: <X className="w-4 h-4 text-destructive" />,
    itemBg: 'hover:bg-destructive/5',
    badge: 'bg-destructive/10 text-destructive',
  },
  neutral: {
    header: 'bg-muted border-border',
    headerText: 'text-foreground',
    icon: <Minus className="w-4 h-4 text-muted-foreground" />,
    itemBg: 'hover:bg-muted/50',
    badge: 'bg-muted text-muted-foreground',
  },
}

export function ComparisonTable({
  title,
  titleIcon,
  columns,
  className,
  dir = 'ltr',
  showIcons = true,
}: ComparisonTableProps) {
  return (
    <div 
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden",
        className
      )}
      dir={dir}
    >
      {/* Title */}
      {title && (
        <div className="flex items-center gap-2 p-4 border-b border-border bg-muted/30">
          {titleIcon || <span className="text-xl">⚖️</span>}
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
      )}

      {/* Comparison Grid */}
      <div className="grid grid-cols-2 divide-x divide-border">
        {columns.map((column, colIdx) => {
          const styles = columnVariants[column.variant]
          
          return (
            <div key={colIdx} className="flex flex-col">
              {/* Column Header */}
              <div className={cn(
                "p-4 text-center border-b",
                styles.header
              )}>
                {column.icon && (
                  <div className="flex justify-center mb-2">
                    {column.icon}
                  </div>
                )}
                <h4 className={cn("font-bold text-lg", styles.headerText)}>
                  {column.title}
                </h4>
                {column.subtitle && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {column.subtitle}
                  </p>
                )}
              </div>

              {/* Items */}
              <div className="flex-1 divide-y divide-border/50">
                {column.items.map((item, itemIdx) => {
                  const itemText = typeof item === 'string' ? item : item.text
                  const itemDetail = typeof item === 'string' ? undefined : item.detail

                  return (
                    <div 
                      key={itemIdx}
                      className={cn(
                        "p-3 sm:p-4 flex items-start gap-3 transition-colors",
                        styles.itemBg
                      )}
                    >
                      {showIcons && (
                        <span className="mt-0.5 flex-shrink-0">
                          {styles.icon}
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base text-foreground">
                          {itemText}
                        </p>
                        {itemDetail && (
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                            {itemDetail}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * ComparisonRow - Version ligne simple pour comparaisons inline
 */
export interface ComparisonRowProps {
  positive: string
  negative: string
  className?: string
  dir?: 'rtl' | 'ltr'
}

export function ComparisonRow({
  positive,
  negative,
  className,
  dir = 'ltr',
}: ComparisonRowProps) {
  return (
    <div 
      className={cn(
        "grid grid-cols-2 gap-4 p-4 rounded-lg border border-border",
        className
      )}
      dir={dir}
    >
      <div className="flex items-center gap-2 p-2 rounded-md bg-success/10">
        <Check className="w-4 h-4 text-success flex-shrink-0" />
        <span className="text-sm text-success">{positive}</span>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-md bg-destructive/10">
        <X className="w-4 h-4 text-destructive flex-shrink-0" />
        <span className="text-sm text-destructive">{negative}</span>
      </div>
    </div>
  )
}
