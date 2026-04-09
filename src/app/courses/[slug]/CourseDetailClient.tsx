/**
 * Course Detail Client Component
 * Affiche les détails d'un cours côté client
 */

'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { Clock, BookOpen, User, ChevronRight, PlayCircle, CheckCircle2 } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ResourceCard } from '@/components/course'
import { QuizSection } from '@/components/quiz/QuizSection'
import { ProgressWidget } from '@/components/quiz/ProgressWidget'
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
  history: { fr: 'Histoire', ar: 'التاريخ', en: 'History' },
  spirituality: { fr: 'Spiritualité', ar: 'الروحانيات', en: 'Spirituality' },
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

type CoursePageGuideLink = {
  href: string
  label: Record<string, string>
}

type CoursePageGuide = {
  title: Record<string, string>
  body: Record<string, string>
  bullets: Record<string, string[]>
  links: CoursePageGuideLink[]
}

const coursePageGuides: Record<string, CoursePageGuide> = {
  'bases-fiqh-ibadat-salat': {
    title: {
      fr: 'Guide pratique pour mieux comprendre la prière en groupe',
      ar: 'دليل عملي لفهم صلاة الجماعة وما يتعلق بها',
      en: 'Practical guide to congregational prayer',
    },
    body: {
      fr: 'Ce parcours aide à comprendre comment prier correctement, comment rejoindre l’imam en retard, comment suivre la Jama\'ah sans erreur et quelles règles connaître quand une rak\'a est manquée.',
      ar: 'هذا المسار يساعد على فهم كيفية الصلاة الصحيحة، وكيفية إدراك الإمام عند التأخر، وكيفية متابعة الجماعة بلا أخطاء، وما الأحكام المتعلقة بمن فاتته ركعة أو أكثر.',
      en: 'This track helps learners understand how to pray correctly, how to join the imam late, and how to avoid mistakes in congregational prayer.',
    },
    bullets: {
      fr: [
        'Comprendre la prière du retardataire et savoir quand une rak\'a est comptée.',
        'Apprendre à prier en groupe, suivre l’imam et éviter les erreurs fréquentes.',
        'Mieux relier les règles de la Jama\'ah avec les autres leçons du fiqh de la salat.',
      ],
      ar: [
        'فهم صلاة المسبوق ومعرفة متى تُحسب الركعة.',
        'تعلم أحكام صلاة الجماعة ومتابعة الإمام وتجنب الأخطاء الشائعة.',
        'ربط أحكام الجماعة ببقية دروس فقه الصلاة بشكل أوضح.',
      ],
      en: [
        'Understand latecomer prayer and when a rak\'ah counts.',
        'Learn how to follow the imam correctly and avoid common mistakes.',
        'Connect congregational prayer rulings with the broader salah course.',
      ],
    },
    links: [
      {
        href: '/courses/bases-fiqh-ibadat-salat/lessons/lesson-017',
        label: {
          fr: 'Voir la leçon sur la prière du retardataire',
          ar: 'عرض درس صلاة المسبوق',
          en: 'Open the latecomer prayer lesson',
        },
      },
      {
        href: '/courses/bases-fiqh-ibadat-salat/lessons/lesson-018',
        label: {
          fr: 'Voir la leçon sur la prière en groupe',
          ar: 'عرض درس صلاة الجماعة',
          en: 'Open the congregational prayer lesson',
        },
      },
      {
        href: '/courses/bases-fiqh-salawat-khassa/lessons/lesson-027',
        label: {
          fr: 'Voir aussi le rattrapage des prières manquées',
          ar: 'اطلع أيضًا على درس قضاء الفوائت',
          en: 'See also the missed-prayers lesson',
        },
      },
    ],
  },
  'bases-fiqh-salawat-khassa': {
    title: {
      fr: 'Guide pratique pour le rattrapage des prières et les cas spéciaux',
      ar: 'دليل عملي لقضاء الفوائت وأحكام الصلوات الخاصة',
      en: 'Practical guide to missed prayers and special prayer cases',
    },
    body: {
      fr: 'Ce cours aide à comprendre les situations particulières de la salat, notamment le rattrapage des prières manquées, l’ordre de priorité entre les prières et les cas où le fidèle prie dans des circonstances exceptionnelles.',
      ar: 'هذا المسار يشرح الحالات الخاصة في الصلاة، ومنها قضاء الفوائت، وترتيب الصلوات عند الفوات، وأحكام الصلاة في الظروف الاستثنائية.',
      en: 'This course covers special prayer cases, especially missed prayers, priority order, and exceptional circumstances.',
    },
    bullets: {
      fr: [
        'Savoir comment rattraper ses prières et dans quel ordre les reprendre.',
        'Comprendre les règles du qada et les cas de retard, oubli, maladie ou circonstances particulières.',
        'Créer un pont naturel avec les leçons sur la Jama\'ah et le retardataire.',
      ],
      ar: [
        'معرفة كيفية قضاء الصلوات الفائتة وبأي ترتيب تُقضى.',
        'فهم أحكام القضاء في حالات النسيان والنوم والمرض والظروف الخاصة.',
        'ربط هذا الباب بدروس الجماعة وصلاة المسبوق.',
      ],
      en: [
        'Learn how to make up missed prayers and in what order.',
        'Understand qada rulings for forgetfulness, sleep, illness, and special cases.',
        'Connect this topic with congregational and latecomer prayer lessons.',
      ],
    },
    links: [
      {
        href: '/courses/bases-fiqh-salawat-khassa/lessons/lesson-027',
        label: {
          fr: 'Voir la leçon sur le rattrapage des prières manquées',
          ar: 'عرض درس قضاء الفوائت',
          en: 'Open the missed-prayers lesson',
        },
      },
      {
        href: '/courses/bases-fiqh-ibadat-salat/lessons/lesson-017',
        label: {
          fr: 'Revoir la leçon sur la prière du retardataire',
          ar: 'راجع درس صلاة المسبوق',
          en: 'Review the latecomer prayer lesson',
        },
      },
      {
        href: '/courses/bases-fiqh-ibadat-salat/lessons/lesson-018',
        label: {
          fr: 'Revoir la leçon sur la prière en groupe',
          ar: 'راجع درس صلاة الجماعة',
          en: 'Review the congregational prayer lesson',
        },
      },
    ],
  },
}

export function CourseDetailClient({ course }: CourseDetailClientProps) {
  const { locale, t, isRTL } = useLocale()
  const { isLessonCompleted, getCourseProgress } = useProgressStore()

  // Sort lessons by order
  const sortedLessons = useMemo(() => 
    [...course.lessons].sort((a, b) => a.order - b.order),
    [course.lessons]
  )
  
  const lessonsById = useMemo(() => 
    new Map(sortedLessons.map((lesson) => [lesson.id, lesson] as const)),
    [sortedLessons]
  )
  
  const lessonIndexMap = useMemo(() => 
    new Map(sortedLessons.map((lesson, index) => [lesson.id, index] as const)),
    [sortedLessons]
  )
  
  const hasSections = Array.isArray(course.sections) && course.sections.length > 0

  // Mémoriser les statuts de complétion pour éviter les appels répétés
  const completionStatus = useMemo(() => {
    const status: Record<string, boolean> = {}
    for (const lesson of sortedLessons) {
      status[lesson.id] = isLessonCompleted(course.slug, lesson.id)
    }
    return status
  }, [sortedLessons, course.slug, isLessonCompleted])

  const title = course.title[locale as keyof typeof course.title] || course.title.fr
  const description = course.description[locale as keyof typeof course.description] || course.description.fr
  const categoryLabel = categoryLabels[course.category]?.[locale] || course.category
  const levelLabel = levelLabels[course.level]?.[locale] || course.level

  const progress = getCourseProgress(course.slug, sortedLessons.length)
  const courseGuide = coursePageGuides[course.slug]
  const completedLessonsCount = useMemo(() => 
    Object.values(completionStatus).filter(Boolean).length,
    [completionStatus]
  )

  // Find first incomplete lesson for "Continue" button
  const nextLesson = useMemo(() => 
    sortedLessons.find(l => !completionStatus[l.id]) || sortedLessons[0],
    [sortedLessons, completionStatus]
  )

  // Breadcrumb items
  const breadcrumbItems = [
    { label: t('nav.courses'), href: '/courses' },
    { label: title },
  ]

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
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

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

              {courseGuide && (
                <Card className="mb-6 border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className={cn('space-y-4', isRTL && 'text-right')}>
                      <h2 className={cn('text-xl font-semibold text-foreground', isRTL && 'font-arabic leading-relaxed')}>
                        {courseGuide.title[locale] || courseGuide.title.fr}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {courseGuide.body[locale] || courseGuide.body.fr}
                      </p>
                      <ul className={cn('space-y-2 text-sm text-muted-foreground', isRTL ? 'mr-5 list-disc' : 'ml-5 list-disc')}>
                        {(courseGuide.bullets[locale] || courseGuide.bullets.fr).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className={cn('flex flex-col gap-2', isRTL && 'items-end')}>
                        {courseGuide.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            {link.label[locale] || link.label.fr}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

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

            {/* Quiz Section - Mobile only (visible en bas sur mobile) */}
            <div className="lg:hidden">
              <QuizSection 
                courseSlug={course.slug} 
                locale={locale as 'fr' | 'ar' | 'en'} 
              />
            </div>
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
                      {completedLessonsCount}/{sortedLessons.length} {t('courses.lessons')}
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

                {/* Quiz Section - Desktop (dans la sidebar) */}
                <div className="hidden lg:block mt-6 pt-6 border-t border-border">
                  <QuizSection 
                    courseSlug={course.slug} 
                    locale={locale as 'fr' | 'ar' | 'en'}
                    compact
                  />
                </div>

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

                {/* XP Progress Widget */}
                <div className="mt-6 pt-6 border-t border-border">
                  <ProgressWidget 
                    locale={locale as 'fr' | 'ar' | 'en'} 
                    compact 
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
