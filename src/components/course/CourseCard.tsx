/**
 * CourseCard Component
 * Affiche une carte de cours avec les informations essentielles
 * Utilise UNIQUEMENT les design tokens
 * Supporte Course complet ou CourseListItem léger
 */

'use client'

import Link from 'next/link'
import { Clock, BookOpen, User, ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import type { Course, CourseCategory, CourseLevel } from '@/lib/schemas'
import type { CourseListItem } from '@/lib/data/courses/courses-list'

// Union type pour accepter les deux formats
type CourseData = Course | CourseListItem

interface CourseCardProps {
  course: CourseData
  progress?: number
  className?: string
}

// Labels pour les catégories
const categoryLabels: Record<CourseCategory, Record<string, string>> = {
  quran: { fr: 'Coran', ar: 'القرآن', en: 'Quran' },
  tajweed: { fr: 'Tajweed', ar: 'التجويد', en: 'Tajweed' },
  tafsir: { fr: 'Tafsir', ar: 'التفسير', en: 'Tafsir' },
  hadith: { fr: 'Hadith', ar: 'الحديث', en: 'Hadith' },
  fiqh: { fr: 'Fiqh', ar: 'الفقه', en: 'Fiqh' },
  aqeedah: { fr: 'Aqeedah', ar: 'العقيدة', en: 'Aqeedah' },
  seerah: { fr: 'Seerah', ar: 'السيرة', en: 'Seerah' },
  arabic: { fr: 'Arabe', ar: 'العربية', en: 'Arabic' },
  other: { fr: 'Autre', ar: 'أخرى', en: 'Other' },
}

// Labels pour les niveaux
const levelLabels: Record<CourseLevel, Record<string, string>> = {
  beginner: { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' },
  intermediate: { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
  advanced: { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' },
}

const levelVariants: Record<CourseLevel, 'success' | 'warning' | 'info'> = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'info',
}

// Helper pour obtenir le nombre de leçons
function getLessonsCount(course: CourseData): number {
  if ('lessonsCount' in course) {
    return course.lessonsCount
  }
  return course.lessons.length
}

// Helper pour obtenir l'instructeur
function getInstructor(course: CourseData): string | undefined {
  if ('instructor' in course) {
    return course.instructor
  }
  return undefined
}

export function CourseCard({ course, progress, className }: CourseCardProps) {
  const { locale, t, isRTL } = useLocale()
  
  const title = course.title[locale as keyof typeof course.title] || course.title.fr
  const description = course.description[locale as keyof typeof course.description] || course.description.fr
  const categoryLabel = categoryLabels[course.category]?.[locale] || course.category
  const levelLabel = levelLabels[course.level]?.[locale] || course.level
  const lessonsCount = getLessonsCount(course)
  const instructor = getInstructor(course)

  return (
    <Card className={cn(
      'group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20',
      className
    )}>
      {/* Featured indicator */}
      {course.featured && (
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-primary border-l-[40px] border-l-transparent" />
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {categoryLabel}
          </Badge>
          <Badge variant={levelVariants[course.level]} className="text-xs">
            {levelLabel}
          </Badge>
        </div>
        
        <Link 
          href={`/courses/${course.slug}`}
          className="block group-hover:text-primary transition-colors"
        >
          <h3 className={cn(
            'text-lg font-semibold line-clamp-2',
            isRTL && 'text-right font-arabic'
          )}>
            {title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pb-3">
        <p className={cn(
          'text-sm text-muted-foreground line-clamp-2 mb-4',
          isRTL && 'text-right'
        )}>
          {description}
        </p>

        <div className={cn(
          'flex items-center gap-4 text-sm text-muted-foreground',
          isRTL && 'flex-row-reverse'
        )}>
          <div className={cn('flex items-center gap-1.5', isRTL && 'flex-row-reverse')}>
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className={cn('flex items-center gap-1.5', isRTL && 'flex-row-reverse')}>
            <BookOpen className="h-4 w-4" />
            <span>
              {lessonsCount} {lessonsCount > 1 ? t('courses.lessons') : t('courses.lesson')}
            </span>
          </div>
        </div>

        {instructor && (
          <div className={cn(
            'flex items-center gap-1.5 mt-3 text-sm text-muted-foreground',
            isRTL && 'flex-row-reverse'
          )}>
            <User className="h-4 w-4" />
            <span>{instructor}</span>
          </div>
        )}

        {/* Progress bar if applicable */}
        {progress !== undefined && progress > 0 && (
          <div className="mt-4">
            <div className={cn(
              'flex items-center justify-between text-xs text-muted-foreground mb-1',
              isRTL && 'flex-row-reverse'
            )}>
              <span>{t('courses.progress')}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full group/btn">
          <Link href={`/courses/${course.slug}`}>
            <span>{progress ? t('courses.continueCourse') : t('courses.startCourse')}</span>
            <ChevronRight className={cn(
              'h-4 w-4 transition-transform group-hover/btn:translate-x-1',
              isRTL && 'rotate-180 group-hover/btn:-translate-x-1'
            )} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export type { CourseCardProps }
