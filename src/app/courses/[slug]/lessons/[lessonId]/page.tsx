/**
 * Lesson Page
 * Affiche le contenu d'une leçon
 */

import { notFound } from 'next/navigation'
import { getLesson, coursesData } from '@/lib/data'
import { LessonPageClient } from './LessonPageClient'

interface LessonPageProps {
  params: Promise<{ slug: string; lessonId: string }>
}

// Generate static params for all lessons
export async function generateStaticParams() {
  const params: { slug: string; lessonId: string }[] = []
  
  coursesData
    .filter(course => course.published)
    .forEach((course) => {
      course.lessons.forEach((lesson) => {
        params.push({
          slug: course.slug,
          lessonId: lesson.id,
        })
      })
    })

  return params
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LessonPageProps) {
  const { slug, lessonId } = await params
  const data = await getLesson(slug, lessonId)
  
  if (!data) {
    return {
      title: 'Lesson Not Found',
    }
  }

  return {
    title: `${data.lesson.title.fr} | ${data.course.title.fr} | Rabbi Zidni Ilma`,
    description: `Leçon ${data.lessonNumber} sur ${data.totalLessons} - ${data.course.title.fr}`,
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lessonId } = await params
  const data = await getLesson(slug, lessonId)

  if (!data) {
    notFound()
  }

  return <LessonPageClient data={data} />
}
