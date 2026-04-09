/**
 * Courses Page Client Component
 * Gère les filtres et l'affichage des cours - Version simplifiée
 */

'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { CourseCard } from '@/components/course'
import { CourseFilters } from '@/components/course/CourseFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { Card, CardContent } from '@/components/ui/card'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import type { CourseListItem } from '@/lib/data/courses/courses-list'

interface CoursesPageClientProps {
  initialCourses: CourseListItem[]
}

const featuredLearningPaths = {
  fr: {
    title: 'Parcours recommandés pour la salat et le rattrapage',
    body: 'Si vous cherchez des réponses claires sur la prière en groupe, la prière du retardataire ou le rattrapage des prières manquées, commencez par ces deux cours complémentaires.',
    bullets: [
      'Comprendre les règles de la Jama\'ah, le suivi de l’imam et la gestion des rak\'at manquées.',
      'Apprendre comment rattraper ses prières et dans quel ordre les reprendre.',
      'Naviguer plus vite vers les leçons les plus utiles pour les questions pratiques du quotidien.',
    ],
    links: [
      { href: '/courses/bases-fiqh-ibadat-salat', label: 'Voir le cours sur la salat' },
      { href: '/courses/bases-fiqh-salawat-khassa', label: 'Voir le cours sur les prières spéciales' },
    ],
  },
  ar: {
    title: 'مسارات مقترحة لفهم الصلاة والجماعة وقضاء الفوائت',
    body: 'إذا كنت تبحث عن أجوبة واضحة حول صلاة الجماعة، وصلاة المسبوق، وقضاء الصلوات الفائتة، فابدأ بهذين المسارين المتكاملين.',
    bullets: [
      'فهم أحكام الجماعة، ومتابعة الإمام، وكيفية التعامل مع الركعات الفائتة.',
      'تعلم كيفية قضاء الصلوات الفائتة وبأي ترتيب تُقضى.',
      'الوصول السريع إلى أهم الدروس العملية التي يحتاجها المسلم يوميًا.',
    ],
    links: [
      { href: '/courses/bases-fiqh-ibadat-salat', label: 'عرض مسار فقه الصلاة' },
      { href: '/courses/bases-fiqh-salawat-khassa', label: 'عرض مسار الصلوات الخاصة' },
    ],
  },
  en: {
    title: 'Recommended paths for salah, congregational prayer, and missed prayers',
    body: 'If you are looking for clear guidance on congregational prayer, the latecomer prayer, or making up missed prayers, start with these two complementary courses.',
    bullets: [
      'Understand jama\'ah rulings, following the imam, and dealing with missed rak\'at.',
      'Learn how to make up missed prayers and in what order to perform them.',
      'Reach the most practical lessons faster for everyday prayer questions.',
    ],
    links: [
      { href: '/courses/bases-fiqh-ibadat-salat', label: 'Open the salah course' },
      { href: '/courses/bases-fiqh-salawat-khassa', label: 'Open the special prayers course' },
    ],
  },
} as const

export function CoursesPageClient({ initialCourses }: CoursesPageClientProps) {
  const { locale, t, isRTL } = useLocale()
  
  // États séparés pour chaque filtre - plus simple et direct
  const [category, setCategory] = useState('')
  const [level, setLevel] = useState('')
  const [search, setSearch] = useState('')
  const learningPath = featuredLearningPaths[locale as keyof typeof featuredLearningPaths] || featuredLearningPaths.fr

  // Lire la catégorie depuis le hash après le montage (évite le mismatch d'hydratation)
  useEffect(() => {
    function readCategoryFromHash() {
      const hash = window.location.hash
      if (hash) {
        const hashMatch = hash.match(/^#category-(.+)$/)
        if (hashMatch) {
          setCategory(hashMatch[1])
        }
      }
    }

    // Lecture initiale
    readCategoryFromHash()

    // Écouter les changements de hash
    window.addEventListener('hashchange', readCategoryFromHash)
    return () => window.removeEventListener('hashchange', readCategoryFromHash)
  }, [])

  // Filtrer les cours
  const filteredCourses = useMemo(() => {
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

        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className={cn('space-y-4', isRTL && 'text-right')}>
              <h2 className={cn('text-xl font-semibold text-foreground', isRTL && 'font-arabic leading-relaxed')}>
                {learningPath.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {learningPath.body}
              </p>
              <ul className={cn('space-y-2 text-sm text-muted-foreground', isRTL ? 'mr-5 list-disc' : 'ml-5 list-disc')}>
                {learningPath.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={cn('flex flex-col gap-2', isRTL && 'items-end')}>
                {learningPath.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

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
