/**
 * Breadcrumb Component
 * Navigation fil d'Ariane réutilisable avec support RTL
 */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  showHome?: boolean
  className?: string
}

export function Breadcrumb({ items, showHome = true, className }: BreadcrumbProps) {
  const { t, isRTL } = useLocale()

  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: t('nav.home'), href: '/' }, ...items]
    : items

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'flex items-center gap-1.5 text-sm text-muted-foreground overflow-x-auto',
        isRTL && 'flex-row-reverse',
        className
      )}
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1
        const isFirst = index === 0

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight
                className={cn(
                  'h-4 w-4 flex-shrink-0 text-muted-foreground/50',
                  isRTL && 'rotate-180'
                )}
                aria-hidden="true"
              />
            )}
            
            {isLast ? (
              <span
                className={cn(
                  'font-medium text-foreground truncate max-w-[200px]',
                  isRTL && 'font-arabic'
                )}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : item.href ? (
              <Link
                href={item.href}
                className={cn(
                  'hover:text-foreground transition-colors flex items-center gap-1.5 whitespace-nowrap',
                  isRTL && 'flex-row-reverse'
                )}
              >
                {isFirst && showHome && (
                  <Home className="h-4 w-4" aria-hidden="true" />
                )}
                <span className={cn(isRTL && 'font-arabic')}>{item.label}</span>
              </Link>
            ) : (
              <span className="whitespace-nowrap">{item.label}</span>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}

export type { BreadcrumbProps }
