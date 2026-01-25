/**
 * SummaryTable Component
 * Tableau récapitulatif pour les leçons
 * Pour: résumé des règles, récapitulatif des ahkam
 */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2, XCircle, AlertTriangle, HelpCircle } from 'lucide-react'

export interface SummaryRow {
  item: string
  category?: string
  ruling: 'halal' | 'haram' | 'makruh' | 'mustahab' | 'mubah' | 'disputed' | 'conditional'
  notes?: string
}

export interface SummaryTableProps {
  title?: string
  titleIcon?: React.ReactNode
  headers?: {
    item: string
    category?: string
    ruling: string
    notes?: string
  }
  rows: SummaryRow[]
  className?: string
  dir?: 'rtl' | 'ltr'
  showCategory?: boolean
  showNotes?: boolean
}

const rulingBadges = {
  halal: {
    bg: 'bg-success/10',
    text: 'text-success',
    icon: <CheckCircle2 className="w-4 h-4" />,
    label: { ar: '✅ جائز', fr: '✅ Halal', en: '✅ Halal' },
  },
  haram: {
    bg: 'bg-destructive/10',
    text: 'text-destructive',
    icon: <XCircle className="w-4 h-4" />,
    label: { ar: '❌ حرام', fr: '❌ Haram', en: '❌ Haram' },
  },
  makruh: {
    bg: 'bg-warning/10',
    text: 'text-warning',
    icon: <AlertTriangle className="w-4 h-4" />,
    label: { ar: '⚠️ مكروه', fr: '⚠️ Makruh', en: '⚠️ Makruh' },
  },
  mustahab: {
    bg: 'bg-success/10',
    text: 'text-success',
    icon: <CheckCircle2 className="w-4 h-4" />,
    label: { ar: '💚 مستحب', fr: '💚 Mustahab', en: '💚 Mustahab' },
  },
  mubah: {
    bg: 'bg-muted',
    text: 'text-muted-foreground',
    icon: null,
    label: { ar: '⚪ مباح', fr: '⚪ Mubah', en: '⚪ Mubah' },
  },
  disputed: {
    bg: 'bg-info/10',
    text: 'text-info',
    icon: <HelpCircle className="w-4 h-4" />,
    label: { ar: '🔄 خلاف', fr: '🔄 Disputé', en: '🔄 Disputed' },
  },
  conditional: {
    bg: 'bg-warning/10',
    text: 'text-warning',
    icon: <AlertTriangle className="w-4 h-4" />,
    label: { ar: '⚡ بشروط', fr: '⚡ Conditionnel', en: '⚡ Conditional' },
  },
}

export function SummaryTable({
  title,
  titleIcon,
  headers = {
    item: 'Élément',
    category: 'Catégorie',
    ruling: 'Statut',
    notes: 'Notes',
  },
  rows,
  className,
  dir = 'ltr',
  showCategory = false,
  showNotes = true,
}: SummaryTableProps) {
  const lang = dir === 'rtl' ? 'ar' : 'fr'

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
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
          {titleIcon || <span className="text-xl">📋</span>}
          <h3 className="font-bold text-foreground">{title}</h3>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/20">
              <th className="px-4 py-3 text-start text-sm font-semibold text-foreground">
                {headers.item}
              </th>
              {showCategory && (
                <th className="px-4 py-3 text-start text-sm font-semibold text-foreground">
                  {headers.category}
                </th>
              )}
              <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                {headers.ruling}
              </th>
              {showNotes && (
                <th className="px-4 py-3 text-start text-sm font-semibold text-foreground">
                  {headers.notes}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {rows.map((row, idx) => {
              const badge = rulingBadges[row.ruling]
              
              return (
                <tr 
                  key={idx}
                  className="hover:bg-muted/20 transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-foreground font-medium">
                    {row.item}
                  </td>
                  {showCategory && (
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {row.category}
                    </td>
                  )}
                  <td className="px-4 py-3 text-center">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                      badge.bg,
                      badge.text
                    )}>
                      {badge.icon}
                      {badge.label[lang]}
                    </span>
                  </td>
                  {showNotes && (
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {row.notes}
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * RulesList - Liste de règles fondamentales
 */
export interface RulesListProps {
  title?: string
  rules: string[]
  className?: string
  dir?: 'rtl' | 'ltr'
  numbered?: boolean
}

export function RulesList({
  title,
  rules,
  className,
  dir = 'ltr',
  numbered = true,
}: RulesListProps) {
  return (
    <div 
      className={cn(
        "rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6",
        className
      )}
      dir={dir}
    >
      {title && (
        <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
          <span>📌</span> {title}
        </h3>
      )}
      
      <ol className={cn(
        "space-y-3",
        !numbered && "list-none"
      )}>
        {rules.map((rule, idx) => (
          <li 
            key={idx}
            className="flex items-start gap-3"
          >
            {numbered ? (
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                {idx + 1}
              </span>
            ) : (
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            )}
            <span className="text-foreground">{rule}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
