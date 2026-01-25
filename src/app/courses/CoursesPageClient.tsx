/**
 * Courses Page Client Component
 * Gère les filtres et l'affichage interactif des cours
 */

'use client'

import { useState, useMemo } from 'react'
import { CourseCard, CourseFilters, CourseCardSkeleton } from '@/components/course'
import { EmptyState } from '@/components/ui/empty-state'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import type { CourseFilters as Filters } from '@/lib/schemas'
import type { CourseListItem } from '@/lib/data/courses/courses-list'

interface CoursesPageClientProps {
  initialCourses: CourseListItem[]
}

export function CoursesPageClient({ initialCourses }: CoursesPageClientProps) {
  const { locale, t, isRTL } = useLocale()
  
  // State simple pour les filtres - pas de sync URL
  const [filters, setFilters] = useState<Filters>({})

  // Filtrer les cours
  const filteredCourses = useMemo(() => {
    let courses = initialCourses

    if (filters.category) {
      courses = courses.filter(c => c.category === filters.category)
    }

    if (filters.level) {
      courses = courses.filter(c => c.level === filters.level)
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      courses = courses.filter(c => 
        c.title.fr.toLowerCase().includes(searchLower) ||
        c.title.ar.includes(filters.search!) ||
        c.title.en.toLowerCase().includes(searchLower) ||
        c.description.fr.toLowerCase().includes(searchLower) ||
        c.description.en.toLowerCase().includes(searchLower) ||
        c.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }

    return courses
  }, [initialCourses, filters])

  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={cn('mb-8', isRTL && 'text-right')}>
          <h1 className={cn(
            'text-3xl sm:text-4xl font-bold text-foreground mb-2',
            isRTL && 'font-arabic'
          )}>
            {t('courses.title')}
          </h1>
          <p className="text-muted-foreground">
            {locale === 'ar' 
              ? `${filteredCourses.length} دورة متاحة`
              : locale === 'en'
              ? `${filteredCourses.length} courses available`
              : `${filteredCourses.length} cours disponibles`
            }
          </p>
        </div>

        {/* Filters */}
        <CourseFilters 
          filters={filters} 
          onFiltersChange={setFilters}
          className="mb-8"
        />

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <EmptyState 
            type="no-results" 
            searchTerm={filters.search}
            onReset={() => setFilters({})}
          />
        )}
      </div>
    </div>
  )
}
