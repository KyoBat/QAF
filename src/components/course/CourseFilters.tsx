/**
 * CourseFilters Component
 * Filtres pour la liste des cours
 * Utilise UNIQUEMENT les design tokens
 */

'use client'

import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import type { CourseCategory, CourseLevel, CourseFilters as Filters } from '@/lib/schemas'

interface CourseFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  className?: string
}

// Labels pour les catégories
const categories: { value: CourseCategory | 'all'; labels: Record<string, string> }[] = [
  { value: 'all', labels: { fr: 'Toutes les catégories', ar: 'جميع التصنيفات', en: 'All Categories' } },
  { value: 'quran', labels: { fr: 'Coran', ar: 'القرآن', en: 'Quran' } },
  { value: 'tajweed', labels: { fr: 'Tajweed', ar: 'التجويد', en: 'Tajweed' } },
  { value: 'tafsir', labels: { fr: 'Tafsir', ar: 'التفسير', en: 'Tafsir' } },
  { value: 'hadith', labels: { fr: 'Hadith', ar: 'الحديث', en: 'Hadith' } },
  { value: 'fiqh', labels: { fr: 'Fiqh', ar: 'الفقه', en: 'Fiqh' } },
  { value: 'aqeedah', labels: { fr: 'Aqeedah', ar: 'العقيدة', en: 'Aqeedah' } },
  { value: 'seerah', labels: { fr: 'Seerah', ar: 'السيرة', en: 'Seerah' } },
  { value: 'arabic', labels: { fr: 'Langue Arabe', ar: 'اللغة العربية', en: 'Arabic Language' } },
]

// Labels pour les niveaux
const levels: { value: CourseLevel | 'all'; labels: Record<string, string> }[] = [
  { value: 'all', labels: { fr: 'Tous les niveaux', ar: 'جميع المستويات', en: 'All Levels' } },
  { value: 'beginner', labels: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' } },
  { value: 'intermediate', labels: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' } },
  { value: 'advanced', labels: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' } },
]

export function CourseFilters({ filters, onFiltersChange, className }: CourseFiltersProps) {
  const { locale, t, isRTL } = useLocale()

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value || undefined })
  }

  const handleCategoryChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      category: value === 'all' ? undefined : value as CourseCategory 
    })
  }

  const handleLevelChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      level: value === 'all' ? undefined : value as CourseLevel 
    })
  }

  const clearFilters = () => {
    onFiltersChange({})
  }

  const hasActiveFilters = filters.search || filters.category || filters.level

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
          value={filters.search || ''}
          onChange={(e) => handleSearchChange(e.target.value)}
          className={cn(isRTL ? 'pr-10' : 'pl-10')}
        />
      </div>

      {/* Filter Selects */}
      <div className={cn(
        'flex flex-wrap gap-3',
        isRTL && 'flex-row-reverse'
      )}>
        {/* Category Filter */}
        <Select 
          value={filters.category || 'all'} 
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder={t('courses.categories.all')} />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.labels[locale] || cat.labels.fr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Level Filter */}
        <Select 
          value={filters.level || 'all'} 
          onValueChange={handleLevelChange}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder={t('courses.levels.all')} />
          </SelectTrigger>
          <SelectContent>
            {levels.map((lvl) => (
              <SelectItem key={lvl.value} value={lvl.value}>
                {lvl.labels[locale] || lvl.labels.fr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
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

export type { CourseFiltersProps }
