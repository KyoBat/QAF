/**
 * CourseFilters Component
 * Filtres pour la liste des cours - Version simplifiée avec selects natifs
 */

'use client'

import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

interface CourseFiltersProps {
  category: string
  level: string
  search: string
  onCategoryChange: (value: string) => void
  onLevelChange: (value: string) => void
  onSearchChange: (value: string) => void
  onClear: () => void
  className?: string
}

export function CourseFilters({ 
  category,
  level,
  search,
  onCategoryChange,
  onLevelChange,
  onSearchChange,
  onClear,
  className 
}: CourseFiltersProps) {
  const { locale, t, isRTL } = useLocale()

  const categories = [
    { value: '', label: { fr: 'Toutes les catégories', ar: 'جميع التصنيفات', en: 'All Categories' } },
    { value: 'hadith', label: { fr: 'Hadith', ar: 'الحديث', en: 'Hadith' } },
    { value: 'fiqh', label: { fr: 'Fiqh', ar: 'الفقه', en: 'Fiqh' } },
    { value: 'aqeedah', label: { fr: 'Aqeedah', ar: 'العقيدة', en: 'Aqeedah' } },
    { value: 'seerah', label: { fr: 'Seerah', ar: 'السيرة', en: 'Seerah' } },
    { value: 'spirituality', label: { fr: 'Spiritualité', ar: 'الروحانيات', en: 'Spirituality' } },
    { value: 'history', label: { fr: 'Histoire', ar: 'التاريخ', en: 'History' } },
  ]

  const levels = [
    { value: '', label: { fr: 'Tous les niveaux', ar: 'جميع المستويات', en: 'All Levels' } },
    { value: 'beginner', label: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' } },
    { value: 'intermediate', label: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' } },
    { value: 'advanced', label: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' } },
  ]

  const hasActiveFilters = search || category || level

  return (
    <div className={cn('space-y-4', className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className={cn(
          'absolute top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground',
          isRTL ? 'right-3' : 'left-3'
        )} />
        <Input
          type="text"
          placeholder={t('nav.search') + '...'}
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className={cn(isRTL ? 'pr-10' : 'pl-10')}
        />
      </div>

      {/* Filter Selects */}
      <div className={cn(
        'flex flex-wrap gap-3 items-center',
        isRTL && 'flex-row-reverse'
      )}>
        {/* Category Filter - Native Select */}
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label[locale as keyof typeof cat.label] || cat.label.fr}
            </option>
          ))}
        </select>

        {/* Level Filter - Native Select */}
        <select
          value={level}
          onChange={(e) => onLevelChange(e.target.value)}
          className="h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {levels.map((lvl) => (
            <option key={lvl.value} value={lvl.value}>
              {lvl.label[locale as keyof typeof lvl.label] || lvl.label.fr}
            </option>
          ))}
        </select>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClear}
            className="gap-1"
          >
            <X className="h-4 w-4" />
            <span className="hidden sm:inline">
              {locale === 'ar' ? 'مسح الفلاتر' : locale === 'en' ? 'Clear filters' : 'Effacer les filtres'}
            </span>
          </Button>
        )}
      </div>
    </div>
  )
}
