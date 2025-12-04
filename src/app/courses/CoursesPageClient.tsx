/**
 * Courses Page Client Component
 * Gère les filtres et l'affichage interactif des cours
 */

'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CourseCard, CourseFilters } from '@/components/course'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import type { CourseFilters as Filters } from '@/lib/schemas'
import type { CourseListItem } from '@/lib/data/courses/courses-list'

interface CoursesPageClientProps {
  initialCourses: CourseListItem[]
}

export function CoursesPageClient({ initialCourses }: CoursesPageClientProps) {
  const { locale, t, isRTL } = useLocale()
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState<Filters>({})

  // Initialiser les filtres depuis l'URL
  useEffect(() => {
    const category = searchParams.get('category')
    const level = searchParams.get('level')
    const search = searchParams.get('search')
    
    setFilters({
      category: category as Filters['category'] || undefined,
      level: level as Filters['level'] || undefined,
      search: search || undefined,
    })
  }, [searchParams])

  // Filter courses based on current filters
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
          <div className={cn(
            'text-center py-16',
            isRTL && 'font-arabic'
          )}>
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t('courses.noCourses')}
            </h3>
            <p className="text-muted-foreground">
              {locale === 'ar'
                ? 'جرب تعديل معايير البحث'
                : locale === 'en'
                ? 'Try adjusting your search criteria'
                : 'Essayez de modifier vos critères de recherche'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
