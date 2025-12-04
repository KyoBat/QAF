/**
 * Course Detail Client Component
 * Affiche les détails d'un cours côté client
 */

'use client'

import Link from 'next/link'
import { Clock, BookOpen, User, ChevronRight, PlayCircle, CheckCircle2 } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ResourceCard } from '@/components/course'
import { useLocale } from '@/components/providers'
import { useProgressStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import type { Course, CourseCategory, CourseLevel } from '@/lib/schemas'

interface CourseDetailClientProps {
  course: Course
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

type CourseLesson = Course['lessons'][number]

export function CourseDetailClient({ course }: CourseDetailClientProps) {
  const { locale, t, isRTL } = useLocale()
  const { isLessonCompleted, getCourseProgress } = useProgressStore()

  // Sort lessons by order
  const sortedLessons = [...course.lessons].sort((a, b) => a.order - b.order)
  const lessonsById = new Map(sortedLessons.map((lesson) => [lesson.id, lesson] as const))
  const lessonIndexMap = new Map(sortedLessons.map((lesson, index) => [lesson.id, index] as const))
  const hasSections = Array.isArray(course.sections) && course.sections.length > 0

  const title = course.title[locale as keyof typeof course.title] || course.title.fr
  const description = course.description[locale as keyof typeof course.description] || course.description.fr
  const categoryLabel = categoryLabels[course.category]?.[locale] || course.category
  const levelLabel = levelLabels[course.level]?.[locale] || course.level

  const progress = getCourseProgress(course.slug, sortedLessons.length)
  const completedLessons = sortedLessons.filter(l => isLessonCompleted(course.slug, l.id)).length

  // Find first incomplete lesson for "Continue" button
  const nextLesson = sortedLessons.find(l => !isLessonCompleted(course.slug, l.id)) || sortedLessons[0]

  const renderLessonRow = (lesson: CourseLesson) => {
    const lessonTitle = lesson.title[locale as keyof typeof lesson.title] || lesson.title.fr
    const isCompleted = isLessonCompleted(course.slug, lesson.id)
    const lessonIndex = lessonIndexMap.get(lesson.id)
    const displayNumber = typeof lessonIndex === 'number' ? lessonIndex + 1 : undefined

    return (
      <Link
        key={lesson.id}
        href={`/courses/${course.slug}/lessons/${lesson.id}`}
        className={cn(
          'flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors',
          isRTL && 'flex-row-reverse'
        )}
      >
        <div className={cn(
          'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium',
          isCompleted 
            ? 'bg-success/20 text-success' 
            : 'bg-muted text-muted-foreground'
        )}>
          {isCompleted ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <span>{displayNumber ?? '?'}</span>
          )}
        </div>

        <div className={cn('flex-1 min-w-0', isRTL && 'text-right')}>
          <h3 className={cn(
            'font-medium text-foreground truncate',
            isRTL && 'font-arabic'
          )}>
            {lessonTitle}
          </h3>
          <div className={cn(
            'flex items-center gap-2 text-sm text-muted-foreground mt-1',
            isRTL && 'flex-row-reverse'
          )}>
            <Clock className="h-3.5 w-3.5" />
            <span>{lesson.duration}</span>
            {lesson.videoUrl && (
              <>
                <span>•</span>
                <PlayCircle className="h-3.5 w-3.5" />
                <span>{locale === 'ar' ? 'فيديو' : locale === 'en' ? 'Video' : 'Vidéo'}</span>
              </>
            )}
          </div>
        </div>

        <ChevronRight className={cn(
          'h-5 w-5 text-muted-foreground flex-shrink-0',
          isRTL && 'rotate-180'
        )} />
      </Link>
    )
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className={cn(
          'flex items-center gap-2 text-sm text-muted-foreground mb-6',
          isRTL && 'flex-row-reverse'
        )}>
          <Link href="/courses" className="hover:text-foreground transition-colors">
            {t('nav.courses')}
          </Link>
          <ChevronRight className={cn('h-4 w-4', isRTL && 'rotate-180')} />
          <span className="text-foreground truncate">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className={isRTL ? 'text-right' : ''}>
              <div className={cn(
                'flex flex-wrap items-center gap-2 mb-4',
                isRTL && 'flex-row-reverse'
              )}>
                <Badge variant="secondary">{categoryLabel}</Badge>
                <Badge variant={levelVariants[course.level]}>{levelLabel}</Badge>
                {course.featured && (
                  <Badge variant="default">
                    {locale === 'ar' ? 'مميز' : locale === 'en' ? 'Featured' : 'En vedette'}
                  </Badge>
                )}
              </div>

              <h1 className={cn(
                'text-3xl sm:text-4xl font-bold text-foreground mb-4',
                isRTL && 'font-arabic leading-relaxed'
              )}>
                {title}
              </h1>

              <p className={cn(
                'text-lg text-muted-foreground mb-6',
                isRTL && 'leading-relaxed'
              )}>
                {description}
              </p>

              {/* Course Meta */}
              <div className={cn(
                'flex flex-wrap items-center gap-6 text-muted-foreground',
                isRTL && 'flex-row-reverse'
              )}>
                <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
                  <User className="h-5 w-5" />
                  <span>{course.instructor}</span>
                </div>
                <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
                  <BookOpen className="h-5 w-5" />
                  <span>
                    {course.lessons.length} {course.lessons.length > 1 ? t('courses.lessons') : t('courses.lesson')}
                  </span>
                </div>
              </div>
            </div>

            {/* Lessons List */}
            <Card>
              <CardHeader>
                <h2 className={cn(
                  'text-xl font-semibold',
                  isRTL && 'text-right font-arabic'
                )}>
                  {t('lesson.tableOfContents')}
                </h2>
              </CardHeader>
              <CardContent className="p-0">
                {hasSections ? (
                  <div className="flex flex-col">
                    {course.sections!.map((section, sectionIndex) => {
                      const sectionLessons = section.lessonIds
                        .map((lessonId) => lessonsById.get(lessonId))
                        .filter((lesson): lesson is CourseLesson => Boolean(lesson))

                      if (sectionLessons.length === 0) return null

                      const sectionTitle = section.title[locale as keyof typeof section.title] || section.title.fr
                      const sectionDescription = section.description
                        ? section.description[locale as keyof typeof section.description] || section.description.fr
                        : undefined

                      return (
                        <div
                          key={section.id}
                          className={cn(sectionIndex > 0 && 'border-t border-border')}
                        >
                          <div
                            className={cn(
                              'px-4 py-3 bg-muted/40 border-b border-border',
                              isRTL && 'text-right font-arabic'
                            )}
                          >
                            <h3 className={cn(
                              'text-base font-semibold text-foreground',
                              isRTL && 'leading-relaxed'
                            )}>
                              {sectionTitle}
                            </h3>
                            {sectionDescription && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {sectionDescription}
                              </p>
                            )}
                          </div>
                          <div className="divide-y divide-border">
                            {sectionLessons.map((lesson) => renderLessonRow(lesson))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="divide-y divide-border">
                    {sortedLessons.map((lesson) => renderLessonRow(lesson))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Resources */}
            {course.resources.length > 0 && (
              <div>
                <h2 className={cn(
                  'text-xl font-semibold mb-4',
                  isRTL && 'text-right font-arabic'
                )}>
                  {locale === 'ar' ? 'الموارد' : locale === 'en' ? 'Resources' : 'Ressources'}
                </h2>
                <div className="space-y-3">
                  {course.resources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="pt-6">
                {/* Progress */}
                {progress > 0 && (
                  <div className="mb-6">
                    <div className={cn(
                      'flex items-center justify-between text-sm mb-2',
                      isRTL && 'flex-row-reverse'
                    )}>
                      <span className="text-muted-foreground">{t('courses.progress')}</span>
                      <span className="font-medium">{progress}%</span>
                    </div>
                    <Progress value={progress} />
                    <p className={cn(
                      'text-sm text-muted-foreground mt-2',
                      isRTL && 'text-right'
                    )}>
                      {completedLessons}/{sortedLessons.length} {t('courses.lessons')}
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <Button asChild className="w-full gap-2" size="lg">
                  <Link href={`/courses/${course.slug}/lessons/${nextLesson.id}`}>
                    <PlayCircle className="h-5 w-5" />
                    <span>
                      {progress > 0 ? t('courses.continueCourse') : t('courses.startCourse')}
                    </span>
                  </Link>
                </Button>

                {/* Tags */}
                {course.tags.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className={cn(
                      'text-sm font-medium text-muted-foreground mb-3',
                      isRTL && 'text-right'
                    )}>
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
