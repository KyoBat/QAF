/**
 * RulingCard Component
 * Affiche les conditions, règles et ahkam de manière structurée
 * Pour: conditions de validité, obligations, interdictions
 */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2, XCircle, AlertTriangle, Info, Scale } from 'lucide-react'

export type RulingType = 'conditions' | 'obligations' | 'prohibitions' | 'recommended' | 'info'

export interface RulingItem {
  text: string
  detail?: string
  subitems?: string[]
}

export interface RulingCardProps {
  title: string
  type: RulingType
  items: (string | RulingItem)[]
  footer?: string
  className?: string
  dir?: 'rtl' | 'ltr'
  numbered?: boolean
}

const rulingStyles = {
  conditions: {
    icon: <CheckCircle2 className="w-5 h-5" />,
    headerBg: 'bg-primary/10 border-primary/30',
    headerText: 'text-primary',
    itemIcon: <CheckCircle2 className="w-4 h-4 text-primary" />,
    emoji: '✅',
  },
  obligations: {
    icon: <Scale className="w-5 h-5" />,
    headerBg: 'bg-info/10 border-info/30',
    headerText: 'text-info',
    itemIcon: <Info className="w-4 h-4 text-info" />,
    emoji: '📋',
  },
  prohibitions: {
    icon: <XCircle className="w-5 h-5" />,
    headerBg: 'bg-destructive/10 border-destructive/30',
    headerText: 'text-destructive',
    itemIcon: <XCircle className="w-4 h-4 text-destructive" />,
    emoji: '❌',
  },
  recommended: {
    icon: <CheckCircle2 className="w-5 h-5" />,
    headerBg: 'bg-success/10 border-success/30',
    headerText: 'text-success',
    itemIcon: <CheckCircle2 className="w-4 h-4 text-success" />,
    emoji: '💚',
  },
  info: {
    icon: <Info className="w-5 h-5" />,
    headerBg: 'bg-muted border-border',
    headerText: 'text-foreground',
    itemIcon: <Info className="w-4 h-4 text-muted-foreground" />,
    emoji: '💡',
  },
}

export function RulingCard({
  title,
  type,
  items,
  footer,
  className,
  dir = 'ltr',
  numbered = false,
}: RulingCardProps) {
  const styles = rulingStyles[type]

  return (
    <div 
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden",
        className
      )}
      dir={dir}
    >
      {/* Header */}
      <div className={cn(
        "flex items-center gap-2 px-4 py-3 border-b",
        styles.headerBg
      )}>
        <span className={styles.headerText}>{styles.icon}</span>
        <h3 className={cn("font-bold", styles.headerText)}>{title}</h3>
      </div>

      {/* Items */}
      <div className="p-4 space-y-3">
        {items.map((item, idx) => {
          const itemText = typeof item === 'string' ? item : item.text
          const itemDetail = typeof item === 'string' ? undefined : item.detail
          const subitems = typeof item === 'string' ? undefined : item.subitems

          return (
            <div key={idx} className="group">
              <div className="flex items-start gap-3">
                {/* Number or Icon */}
                <span className="flex-shrink-0 mt-0.5">
                  {numbered ? (
                    <span className={cn(
                      "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
                      styles.headerBg,
                      styles.headerText
                    )}>
                      {idx + 1}
                    </span>
                  ) : (
                    styles.itemIcon
                  )}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-medium">{itemText}</p>
                  {itemDetail && (
                    <p className="text-sm text-muted-foreground mt-1">{itemDetail}</p>
                  )}
                  
                  {/* Subitems */}
                  {subitems && subitems.length > 0 && (
                    <ul className="mt-2 space-y-1.5">
                      {subitems.map((subitem, subIdx) => (
                        <li 
                          key={subIdx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-xs mt-1">•</span>
                          <span>{subitem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      {footer && (
        <div className="px-4 py-3 border-t border-border bg-muted/30">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            {footer}
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * QuickRuling - Version compacte inline
 */
export interface QuickRulingProps {
  ruling: 'halal' | 'haram' | 'makruh' | 'mustahab' | 'mubah' | 'disputed'
  text: string
  className?: string
}

const quickRulingStyles = {
  halal: { bg: 'bg-success/10', text: 'text-success', label: '✅ حلال / Halal' },
  haram: { bg: 'bg-destructive/10', text: 'text-destructive', label: '❌ حرام / Haram' },
  makruh: { bg: 'bg-warning/10', text: 'text-warning', label: '⚠️ مكروه / Makruh' },
  mustahab: { bg: 'bg-success/10', text: 'text-success', label: '💚 مستحب / Mustahab' },
  mubah: { bg: 'bg-muted', text: 'text-muted-foreground', label: '⚪ مباح / Mubah' },
  disputed: { bg: 'bg-info/10', text: 'text-info', label: '🔄 خلاف / Disputed' },
}

export function QuickRuling({ ruling, text, className }: QuickRulingProps) {
  const styles = quickRulingStyles[ruling]
  
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-2 rounded-lg",
      styles.bg,
      className
    )}>
      <span className={cn("font-bold text-sm", styles.text)}>{styles.label}</span>
      <span className="text-sm text-foreground">{text}</span>
    </div>
  )
}
