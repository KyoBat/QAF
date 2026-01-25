/**
 * Courses Page Client Component
 * Gère les filtres et l'affichage des cours - Version simplifiée
 */

'use client'

import { useState, useMemo } from 'react'
import { CourseCard } from '@/components/course'
import { CourseFilters } from '@/components/course/CourseFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import type { CourseListItem } from '@/lib/data/courses/courses-list'

interface CoursesPageClientProps {
  initialCourses: CourseListItem[]
}

export function CoursesPageClient({ initialCourses }: CoursesPageClientProps) {
  const { locale, t, isRTL } = useLocale()
  
  // États séparés pour chaque filtre - plus simple et direct
  const [category, setCategory] = useState('')
  const [level, setLevel] = useState('')
  const [search, setSearch] = useState('')

  // Debug - à supprimer après
  console.log('🔍 Filters:', { category, level, search })

  // Filtrer les cours
  const filteredCourses = useMemo(() => {
    console.log('🔄 Filtering with category:', category, 'Total courses:', initialCourses.length)
    
    return initialCourses.filter(course => {
      // Filtre catégorie
      if (category && course.category !== category) {
        return false
      }
      
      // Filtre niveau
      if (level && course.level !== level) {
        return false
      }
      
      // Filtre recherche
      if (search) {
        const searchLower = search.toLowerCase()
        const matchTitle = 
          course.title.fr.toLowerCase().includes(searchLower) ||
          course.title.ar.includes(search) ||
          course.title.en.toLowerCase().includes(searchLower)
        const matchDesc = 
          course.description.fr.toLowerCase().includes(searchLower) ||
          course.description.en.toLowerCase().includes(searchLower)
        const matchTags = course.tags.some(tag => 
          tag.toLowerCase().includes(searchLower)
        )
        
        if (!matchTitle && !matchDesc && !matchTags) {
          return false
        }
      }
      
      return true
    })
  }, [initialCourses, category, level, search])

  // Reset tous les filtres
  const handleClear = () => {
    setCategory('')
    setLevel('')
    setSearch('')
  }

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
          category={category}
          level={level}
          search={search}
          onCategoryChange={setCategory}
          onLevelChange={setLevel}
          onSearchChange={setSearch}
          onClear={handleClear}
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
            searchTerm={search}
            onReset={handleClear}
          />
        )}
      </div>
    </div>
  )
}
