/**
 * Lesson Page Client Component
 * Affiche le contenu d'une leçon côté client
 */

'use client'

import Link from 'next/link'
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Circle,
  BookOpen,
  Clock,
  ArrowLeft
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LessonContent, YouTubeEmbed, ResourceCard } from '@/components/course'
import { useLocale } from '@/components/providers'
import { useProgressStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import { isYouTubeUrl } from '@/lib/utils/resources'
import type { Course, Lesson } from '@/lib/schemas'

interface LessonData {
  lesson: Lesson
  course: Course
  prevLesson: Lesson | null
  nextLesson: Lesson | null
  lessonNumber: number
  totalLessons: number
}

interface LessonPageClientProps {
  data: LessonData
}

export function LessonPageClient({ data }: LessonPageClientProps) {
  const { lesson, course, prevLesson, nextLesson, lessonNumber, totalLessons } = data
  const { locale, t, isRTL } = useLocale()
  const { isLessonCompleted, markLessonComplete, getCourseProgress } = useProgressStore()

  const title = lesson.title[locale as keyof typeof lesson.title] || lesson.title.fr
  const courseTitle = course.title[locale as keyof typeof course.title] || course.title.fr
  const isCompleted = isLessonCompleted(course.slug, lesson.id)
  const progress = getCourseProgress(course.slug, totalLessons)

  const handleMarkComplete = () => {
    if (!isCompleted) {
      markLessonComplete(course.slug, lesson.id)
    }
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                {/* Course Progress */}
                <div className="mb-4 pb-4 border-b border-border">
                  <Link 
                    href={`/courses/${course.slug}`}
                    className={cn(
                      'flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3',
                      isRTL && 'flex-row-reverse'
                    )}
                  >
                    <ArrowLeft className={cn('h-4 w-4', isRTL && 'rotate-180')} />
                    <span>{t('lesson.backToCourse')}</span>
                  </Link>
                  <h2 className={cn(
                    'font-semibold text-foreground line-clamp-2 mb-2',
                    isRTL && 'text-right font-arabic'
                  )}>
                    {courseTitle}
                  </h2>
                  <Progress value={progress} className="h-1.5" />
                  <p className={cn(
                    'text-xs text-muted-foreground mt-1',
                    isRTL && 'text-right'
                  )}>
                    {progress}% {locale === 'ar' ? 'مكتمل' : locale === 'en' ? 'complete' : 'terminé'}
                  </p>
                </div>

                {/* Lessons List */}
                <h3 className={cn(
                  'text-sm font-medium text-muted-foreground mb-3',
                  isRTL && 'text-right'
                )}>
                  {t('lesson.tableOfContents')}
                </h3>
                <nav className="space-y-1 max-h-96 overflow-y-auto">
                  {course.lessons.map((l, index) => {
                    const lessonTitle = l.title[locale as keyof typeof l.title] || l.title.fr
                    const isActive = l.id === lesson.id
                    const isLessonDone = isLessonCompleted(course.slug, l.id)

                    return (
                      <Link
                        key={l.id}
                        href={`/courses/${course.slug}/lessons/${l.id}`}
                        className={cn(
                          'flex items-center gap-2 p-2 rounded-lg text-sm transition-colors',
                          isActive 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                          isRTL && 'flex-row-reverse'
                        )}
                      >
                        {isLessonDone ? (
                          <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                        ) : (
                          <Circle className="h-4 w-4 flex-shrink-0" />
                        )}
                        <span className={cn(
                          'truncate',
                          isRTL && 'font-arabic'
                        )}>
                          {index + 1}. {lessonTitle}
                        </span>
                      </Link>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Breadcrumb - Mobile */}
            <div className={cn(
              'lg:hidden flex items-center gap-2 text-sm text-muted-foreground mb-4',
              isRTL && 'flex-row-reverse'
            )}>
              <Link href={`/courses/${course.slug}`} className="hover:text-foreground transition-colors">
                {t('lesson.backToCourse')}
              </Link>
            </div>

            {/* Lesson Header */}
            <div className={cn('mb-8', isRTL && 'text-right')}>
              <div className={cn(
                'flex items-center gap-2 text-sm text-muted-foreground mb-2',
                isRTL && 'flex-row-reverse'
              )}>
                <BookOpen className="h-4 w-4" />
                <span>
                  {locale === 'ar' 
                    ? `الدرس ${lessonNumber} من ${totalLessons}`
                    : locale === 'en'
                    ? `Lesson ${lessonNumber} of ${totalLessons}`
                    : `Leçon ${lessonNumber} sur ${totalLessons}`
                  }
                </span>
                <span>•</span>
                <Clock className="h-4 w-4" />
                <span>{lesson.duration}</span>
              </div>
              <h1 className={cn(
                'text-2xl sm:text-3xl font-bold text-foreground',
                isRTL && 'font-arabic leading-relaxed'
              )}>
                {title}
              </h1>
            </div>

            {/* Video Player */}
            {lesson.videoUrl && isYouTubeUrl(lesson.videoUrl) && (
              <div className="mb-8">
                <YouTubeEmbed url={lesson.videoUrl} title={title} />
              </div>
            )}

            {/* Lesson Content */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <LessonContent lesson={lesson} />
              </CardContent>
            </Card>

            {/* Lesson Resources */}
            {lesson.resources && lesson.resources.length > 0 && (
              <div className="mb-8">
                <h2 className={cn(
                  'text-xl font-semibold mb-4',
                  isRTL && 'text-right font-arabic'
                )}>
                  {locale === 'ar' ? 'موارد الدرس' : locale === 'en' ? 'Lesson Resources' : 'Ressources du cours'}
                </h2>
                <div className="space-y-3">
                  {lesson.resources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} />
                  ))}
                </div>
              </div>
            )}

            {/* Mark Complete & Navigation */}
            <Card>
              <CardContent className="pt-6">
                {/* Mark Complete Button */}
                <div className={cn(
                  'flex items-center justify-center mb-6',
                  isRTL && 'flex-row-reverse'
                )}>
                  <Button
                    onClick={handleMarkComplete}
                    disabled={isCompleted}
                    variant={isCompleted ? 'secondary' : 'default'}
                    className="gap-2"
                    size="lg"
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        <span>{t('lesson.completed')}</span>
                      </>
                    ) : (
                      <>
                        <Circle className="h-5 w-5" />
                        <span>{t('lesson.markComplete')}</span>
                      </>
                    )}
                  </Button>
                </div>

                {/* Navigation Buttons */}
                <div className={cn(
                  'flex items-center justify-between gap-4',
                  isRTL && 'flex-row-reverse'
                )}>
                  {/* Previous */}
                  {prevLesson ? (
                    <Button variant="outline" asChild className="gap-2">
                      <Link href={`/courses/${course.slug}/lessons/${prevLesson.id}`}>
                        <ChevronLeft className={cn('h-4 w-4', isRTL && 'rotate-180')} />
                        <span className="hidden sm:inline">{t('lesson.previousLesson')}</span>
                        <span className="sm:hidden">{t('common.previous')}</span>
                      </Link>
                    </Button>
                  ) : (
                    <div />
                  )}

                  {/* Next */}
                  {nextLesson ? (
                    <Button asChild className="gap-2">
                      <Link href={`/courses/${course.slug}/lessons/${nextLesson.id}`}>
                        <span className="hidden sm:inline">{t('lesson.nextLesson')}</span>
                        <span className="sm:hidden">{t('common.next')}</span>
                        <ChevronRight className={cn('h-4 w-4', isRTL && 'rotate-180')} />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="gap-2">
                      <Link href={`/courses/${course.slug}`}>
                        <span>{t('lesson.backToCourse')}</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
