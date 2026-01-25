/**
 * QuoteBox & SceneBox Components
 * Remplacement des divs HTML par des composants React
 * Pour: citations, hadiths, scènes dramatiques
 */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Quote, BookOpen, MessageSquare, Users } from 'lucide-react'

/**
 * QuoteBox - Pour les citations, hadiths, versets
 */
export interface QuoteBoxProps {
  title?: string
  source?: string
  sourceRef?: string
  children: React.ReactNode
  variant?: 'hadith' | 'quran' | 'scholar' | 'default'
  className?: string
  dir?: 'rtl' | 'ltr'
}

const quoteVariants = {
  hadith: {
    icon: <BookOpen className="w-5 h-5" />,
    bg: 'bg-primary/5',
    border: 'border-primary/20',
    iconColor: 'text-primary',
    title: 'text-primary',
  },
  quran: {
    icon: <BookOpen className="w-5 h-5" />,
    bg: 'bg-success/5',
    border: 'border-success/20',
    iconColor: 'text-success',
    title: 'text-success',
  },
  scholar: {
    icon: <Quote className="w-5 h-5" />,
    bg: 'bg-info/5',
    border: 'border-info/20',
    iconColor: 'text-info',
    title: 'text-info',
  },
  default: {
    icon: <Quote className="w-5 h-5" />,
    bg: 'bg-muted/30',
    border: 'border-border',
    iconColor: 'text-muted-foreground',
    title: 'text-foreground',
  },
}

export function QuoteBox({
  title,
  source,
  sourceRef,
  children,
  variant = 'default',
  className,
  dir = 'ltr',
}: QuoteBoxProps) {
  const styles = quoteVariants[variant]

  return (
    <div 
      className={cn(
        "rounded-xl border p-4 sm:p-6",
        styles.bg,
        styles.border,
        className
      )}
      dir={dir}
    >
      {/* Header */}
      {title && (
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
          <span className={styles.iconColor}>{styles.icon}</span>
          <h4 className={cn("font-bold", styles.title)}>
            {variant === 'hadith' && '📜 '}
            {variant === 'quran' && '📖 '}
            {title}
          </h4>
        </div>
      )}

      {/* Content */}
      <div className="relative">
        {/* Quote mark */}
        <Quote className={cn(
          "absolute -top-2 opacity-10 w-8 h-8",
          dir === 'rtl' ? '-right-2' : '-left-2',
          styles.iconColor
        )} />
        
        <div className={cn(
          "text-foreground leading-relaxed",
          dir === 'rtl' ? 'pr-6' : 'pl-6'
        )}>
          {children}
        </div>
      </div>

      {/* Source */}
      {(source || sourceRef) && (
        <div className={cn(
          "mt-4 pt-2 border-t border-border/50 text-sm text-muted-foreground",
          dir === 'rtl' ? 'text-left' : 'text-right'
        )}>
          {source && <span className="font-medium">{source}</span>}
          {sourceRef && <span className="opacity-70"> [{sourceRef}]</span>}
        </div>
      )}
    </div>
  )
}

/**
 * SceneBox - Pour les scènes dramatiques et dialogues
 */
export interface SceneBoxProps {
  title?: string
  setting?: string
  children: React.ReactNode
  className?: string
  dir?: 'rtl' | 'ltr'
}

export function SceneBox({
  title,
  setting,
  children,
  className,
  dir = 'ltr',
}: SceneBoxProps) {
  return (
    <div 
      className={cn(
        "rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4 sm:p-6",
        className
      )}
      dir={dir}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-primary/20">
        <span className="text-xl">🎬</span>
        <h4 className="font-bold text-primary">
          {title || (dir === 'rtl' ? 'مشهد' : 'Scène')}
        </h4>
      </div>

      {/* Setting */}
      {setting && (
        <p className="text-sm italic text-muted-foreground mb-4 flex items-center gap-2">
          <Users className="w-4 h-4" />
          {setting}
        </p>
      )}

      {/* Content */}
      <div className="space-y-3 text-foreground">
        {children}
      </div>
    </div>
  )
}

/**
 * DialogueLine - Ligne de dialogue dans une scène
 */
export interface DialogueLineProps {
  speaker: string
  action?: string
  children: React.ReactNode
  variant?: 'default' | 'highlight'
  className?: string
}

export function DialogueLine({
  speaker,
  action,
  children,
  variant = 'default',
  className,
}: DialogueLineProps) {
  return (
    <div className={cn(
      "flex flex-col gap-1",
      variant === 'highlight' && "p-3 rounded-lg bg-primary/10 border border-primary/20",
      className
    )}>
      <div className="flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-primary flex-shrink-0" />
        <span className="font-bold text-primary">{speaker}</span>
        {action && (
          <span className="text-sm italic text-muted-foreground">({action})</span>
        )}
      </div>
      <div className="text-foreground mr-6 ml-6">
        {children}
      </div>
    </div>
  )
}

/**
 * SalafStory - Histoire des Salaf
 */
export interface SalafStoryProps {
  title: string
  narrator?: string
  children: React.ReactNode
  lesson?: string
  className?: string
  dir?: 'rtl' | 'ltr'
}

export function SalafStory({
  title,
  narrator,
  children,
  lesson,
  className,
  dir = 'ltr',
}: SalafStoryProps) {
  return (
    <div 
      className={cn(
        "rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-4 sm:p-6",
        className
      )}
      dir={dir}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-amber-500/20">
        <span className="text-xl">📖</span>
        <h4 className="font-bold text-amber-600 dark:text-amber-400">{title}</h4>
      </div>

      {/* Narrator */}
      {narrator && (
        <p className="text-sm text-muted-foreground mb-3 italic">
          — {narrator}
        </p>
      )}

      {/* Content */}
      <div className="text-foreground leading-relaxed">
        {children}
      </div>

      {/* Lesson */}
      {lesson && (
        <div className="mt-4 pt-3 border-t border-amber-500/20">
          <p className="text-sm flex items-start gap-2">
            <span className="text-amber-600 dark:text-amber-400 font-bold">
              {dir === 'rtl' ? '💡 العبرة:' : '💡 Leçon:'}
            </span>
            <span className="text-muted-foreground">{lesson}</span>
          </p>
        </div>
      )}
    </div>
  )
}
