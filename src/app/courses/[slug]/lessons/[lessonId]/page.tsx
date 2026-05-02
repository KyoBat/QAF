/**
 * Lesson Page
 * Affiche le contenu d'une leçon
 */

import { notFound } from 'next/navigation'
import { getLesson, coursesData } from '@/lib/data'
import { LessonPageClient } from './LessonPageClient'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo'

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
      title: 'Leçon Introuvable',
      description: 'La leçon demandée n\'existe pas ou n\'est pas disponible.',
    }
  }

  const lessonTitle = data.lesson.title.fr
  const courseTitle = data.course.title.fr
  const description = `Leçon ${data.lessonNumber} sur ${data.totalLessons} du cours "${courseTitle}". Apprenez ${lessonTitle} avec preuves du Coran et Sunna.`

  const badge = `Leçon ${data.lessonNumber} / ${data.totalLessons}`
  const ogImageUrl = `https://www.tahalearn.com/api/og?${new URLSearchParams({
    title: lessonTitle,
    sub: courseTitle,
    img: (data.course.image ?? '/og-image.png').replace(/\.svg$/, '.png'),
    badge,
  }).toString()}`

  return {
    title: `${lessonTitle} | ${courseTitle}`,
    description: description,
    keywords: [...data.course.tags, data.course.category, lessonTitle, 'leçon gratuite', 'sciences islamiques'],
    alternates: {
      canonical: `https://www.tahalearn.com/courses/${slug}/lessons/${lessonId}`,
    },
    openGraph: {
      title: `${lessonTitle} | ${courseTitle}`,
      description: description,
      url: `https://www.tahalearn.com/courses/${slug}/lessons/${lessonId}`,
      siteName: 'TahaLearn',
      type: 'article',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: lessonTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${lessonTitle} | ${courseTitle}`,
      description: description,
      images: [ogImageUrl],
    },
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lessonId } = await params
  const data = await getLesson(slug, lessonId)

  if (!data) {
    notFound()
  }

  // Strip other lessons' content to reduce RSC payload (~600KB → ~60KB)
  // LessonPageClient only needs id+title from sibling lessons for the nav sidebar
  const lightData = {
    ...data,
    course: {
      ...data.course,
      lessons: data.course.lessons.map(l => ({
        id: l.id,
        title: l.title,
        order: l.order,
        duration: l.duration,
        videoUrl: l.videoUrl || '',
        content: l.id === lessonId ? l.content : { fr: '', ar: '', en: '' },
      })),
    },
    prevLesson: data.prevLesson ? { id: data.prevLesson.id, title: data.prevLesson.title, order: data.prevLesson.order, duration: data.prevLesson.duration, videoUrl: data.prevLesson.videoUrl || '', content: { fr: '', ar: '', en: '' } } : null,
    nextLesson: data.nextLesson ? { id: data.nextLesson.id, title: data.nextLesson.title, order: data.nextLesson.order, duration: data.nextLesson.duration, videoUrl: data.nextLesson.videoUrl || '', content: { fr: '', ar: '', en: '' } } : null,
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Cours', url: '/courses' },
        { name: data.course.title.fr, url: `/courses/${slug}` },
        { name: data.lesson.title.fr, url: `/courses/${slug}/lessons/${lessonId}` },
      ]} />
      <LearningResourceJsonLd
        lesson={data.lesson}
        course={data.course}
        lessonNumber={data.lessonNumber}
        totalLessons={data.totalLessons}
        slug={slug}
        lessonId={lessonId}
      />
      <LessonPageClient data={lightData} />
    </>
  )
}
