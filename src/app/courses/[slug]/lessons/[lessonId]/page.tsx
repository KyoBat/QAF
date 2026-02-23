/**
 * Lesson Page
 * Affiche le contenu d'une leçon
 */

import { notFound } from 'next/navigation'
import { getLesson, coursesData } from '@/lib/data'
import { LessonPageClient } from './LessonPageClient'
import { BreadcrumbJsonLd } from '@/components/seo'

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

  // Use PNG version for social sharing (WhatsApp/Twitter/Facebook don't support SVG)
  const ogImage = data.course.image
    ? data.course.image.replace(/\.svg$/, '.png')
    : '/og-image.png'

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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: lessonTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${lessonTitle} | ${courseTitle}`,
      description: description,
      images: [ogImage],
    },
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lessonId } = await params
  const data = await getLesson(slug, lessonId)

  if (!data) {
    notFound()
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Cours', url: '/courses' },
        { name: data.course.title.fr, url: `/courses/${slug}` },
        { name: data.lesson.title.fr },
      ]} />
      <LessonPageClient data={data} />
    </>
  )
}
