/**
 * CaseStudy Component
 * Affiche les cas contemporains avec question/réponse structurée
 * Pour: 🎯 cas pratiques, fatawa, situations réelles
 */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { MessageCircleQuestion, CheckCircle2, XCircle, AlertTriangle, HelpCircle } from 'lucide-react'

export type CaseRuling = 'permissible' | 'forbidden' | 'disputed' | 'conditional'

export interface CaseStudyProps {
  number?: number
  title: string
  icon?: string
  question: string
  answer: string
  ruling?: CaseRuling
  conditions?: string[]
  note?: string
  className?: string
  dir?: 'rtl' | 'ltr'
}

const rulingConfig = {
  permissible: {
    icon: <CheckCircle2 className="w-5 h-5" />,
    badge: 'bg-success/10 text-success border-success/30',
    label: { ar: 'جائز', fr: 'Permis', en: 'Permissible' },
  },
  forbidden: {
    icon: <XCircle className="w-5 h-5" />,
    badge: 'bg-destructive/10 text-destructive border-destructive/30',
    label: { ar: 'محرم', fr: 'Interdit', en: 'Forbidden' },
  },
  disputed: {
    icon: <HelpCircle className="w-5 h-5" />,
    badge: 'bg-info/10 text-info border-info/30',
    label: { ar: 'خلاف', fr: 'Disputé', en: 'Disputed' },
  },
  conditional: {
    icon: <AlertTriangle className="w-5 h-5" />,
    badge: 'bg-warning/10 text-warning border-warning/30',
    label: { ar: 'بشروط', fr: 'Conditionnel', en: 'Conditional' },
  },
}

export function CaseStudy({
  number,
  title,
  icon = '🎯',
  question,
  answer,
  ruling,
  conditions,
  note,
  className,
  dir = 'ltr',
}: CaseStudyProps) {
  const rulingStyle = ruling ? rulingConfig[ruling] : null
  const lang = dir === 'rtl' ? 'ar' : 'fr'

  return (
    <div 
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden",
        className
      )}
      dir={dir}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-muted/30 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          {number && (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              {number}
            </span>
          )}
          <h3 className="font-bold text-foreground">{title}</h3>
        </div>
        
        {ruling && rulingStyle && (
          <span className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium",
            rulingStyle.badge
          )}>
            {rulingStyle.icon}
            {rulingStyle.label[lang]}
          </span>
        )}
      </div>

      {/* Question */}
      <div className="p-4 border-b border-border bg-muted/10">
        <div className="flex items-start gap-3">
          <MessageCircleQuestion className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              {dir === 'rtl' ? 'السؤال' : 'Question'}
            </span>
            <p className="mt-1 text-foreground">{question}</p>
          </div>
        </div>
      </div>

      {/* Answer */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {ruling && rulingStyle && (
            <span className={cn("mt-0.5 flex-shrink-0", rulingStyle.badge.includes('success') ? 'text-success' : rulingStyle.badge.includes('destructive') ? 'text-destructive' : 'text-warning')}>
              {rulingStyle.icon}
            </span>
          )}
          <div className="flex-1">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {dir === 'rtl' ? 'الجواب' : 'Réponse'}
            </span>
            <p className="mt-1 text-foreground">{answer}</p>

            {/* Conditions */}
            {conditions && conditions.length > 0 && (
              <div className="mt-3 p-3 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  {dir === 'rtl' ? 'الشروط:' : 'Conditions:'}
                </p>
                <ul className="space-y-1.5">
                  {conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Note */}
      {note && (
        <div className="px-4 py-3 border-t border-border bg-warning/5">
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
            <span>{note}</span>
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * CaseStudyGrid - Grille de cas multiples
 */
export interface CaseStudyGridProps {
  title?: string
  cases: CaseStudyProps[]
  className?: string
  columns?: 1 | 2
}

export function CaseStudyGrid({ 
  title, 
  cases, 
  className,
  columns = 1 
}: CaseStudyGridProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <span>🎯</span> {title}
        </h2>
      )}
      <div className={cn(
        "grid gap-4",
        columns === 2 ? "md:grid-cols-2" : "grid-cols-1"
      )}>
        {cases.map((caseItem, idx) => (
          <CaseStudy 
            key={idx} 
            {...caseItem} 
            number={caseItem.number ?? idx + 1}
          />
        ))}
      </div>
    </div>
  )
}
