/**
 * Course Detail Page
 * Affiche les détails d'un cours et sa liste de leçons
 */

import { notFound } from 'next/navigation'
import { getCourseBySlug, coursesData } from '@/lib/data'
import { CourseDetailClient } from './CourseDetailClient'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo'

// ISR: Regénérer les pages de cours toutes les heures
export const revalidate = 3600

interface CoursePageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all courses
export async function generateStaticParams() {
  const params = coursesData
    .filter(course => course.published)
    .map((course) => ({
      slug: course.slug,
    }))

  // Legacy aliases are now handled via redirects in next.config.mjs
  // No need to generate static params for them

  return params
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)
  
  if (!course) {
    return {
      title: 'Cours Introuvable',
      description: 'Le cours demandé n\'existe pas ou n\'est pas disponible.',
    }
  }

  const lessonsCount = course.lessons.length
  const categoryNames: Record<string, string> = {
    tajweed: 'Tajweed',
    fiqh: 'Fiqh',
    aqeedah: 'Aqeedah',
    seerah: 'Seerah',
    hadith: 'Hadith',
    history: 'Histoire Islamique',
    spirituality: 'Spiritualité',
  }

  const categoryLabel = categoryNames[course.category] || course.category
  const badge = `${lessonsCount} leçon${lessonsCount > 1 ? 's' : ''} gratuite${lessonsCount > 1 ? 's' : ''}`
  const ogImageUrl = `https://www.tahalearn.com/api/og?${new URLSearchParams({
    title: course.title.fr,
    sub: categoryLabel,
    img: (course.image ?? '/og-image.png').replace(/\.svg$/, '.png'),
    badge,
  }).toString()}`

  return {
    title: course.title.fr,
    description: `${course.description.fr} - ${lessonsCount} leçons. Cours gratuit de ${categoryNames[course.category] || course.category}.`,
    keywords: [...course.tags, categoryNames[course.category] || course.category, 'cours gratuit', 'sciences islamiques', 'TahaLearn'],
    alternates: {
      canonical: `https://www.tahalearn.com/courses/${slug}`,
    },
    openGraph: {
      title: course.title.fr,
      description: course.description.fr,
      url: `https://www.tahalearn.com/courses/${slug}`,
      siteName: 'TahaLearn',
      type: 'article',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: course.title.fr }],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title.fr,
      description: course.description.fr,
      images: [ogImageUrl],
    },
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  // Strip lesson content to reduce RSC payload (~186KB → ~20KB)
  // CourseDetailClient only needs lesson id/title/order/duration for the list
  const lightLessons = course.lessons.map(({ id, title, order, duration, videoUrl }) => ({
    id,
    title,
    order,
    duration,
    videoUrl: videoUrl || '',
    content: { fr: '', ar: '', en: '' },
  }))

  return (
    <>
      <CourseJsonLd course={course} />
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Cours', url: '/courses' },
        { name: course.title.fr },
      ]} />
      <CourseDetailClient course={{ ...course, lessons: lightLessons }} />
    </>
  )
}
