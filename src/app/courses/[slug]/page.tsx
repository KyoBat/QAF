/**
 * Course Detail Page
 * Affiche les détails d'un cours et sa liste de leçons
 */

import { notFound } from 'next/navigation'
import { getCourseBySlug, coursesData } from '@/lib/data'
import { CourseDetailClient } from './CourseDetailClient'

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

  // Legacy aliases to preserve backward compatibility
  const legacySlugs: Record<string, string> = {
    'bases-fiqh-ibadat': 'bases-fiqh-ibadat-purification',
  }

  Object.entries(legacySlugs).forEach(([alias, target]) => {
    if (coursesData.some(course => course.slug === target)) {
      params.push({ slug: alias })
    }
  })

  return params
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)
  
  if (!course) {
    return {
      title: 'Cours Introuvable | TahaLearn',
      description: 'Le cours demandé n\'existe pas ou n\'est pas disponible.',
    }
  }

  const lessonsCount = course.lessons.length
  const categoryNames: Record<string, string> = {
    tajweed: 'Tajweed',
    fiqh: 'Fiqh',
    aqeedah: 'Aqeedah',
    seerah: 'Seerah',
    history: 'Histoire Islamique',
  }

  return {
    title: `${course.title.fr} | TahaLearn`,
    description: `${course.description.fr} - ${lessonsCount} leçons. Cours gratuit de ${categoryNames[course.category] || course.category}.`,
    keywords: [...course.tags, categoryNames[course.category] || course.category, 'cours gratuit', 'sciences islamiques', 'TahaLearn'],
    openGraph: {
      title: `${course.title.fr} | TahaLearn`,
      description: course.description.fr,
      url: `https://www.tahalearn.com/courses/${slug}`,
      siteName: 'TahaLearn',
      type: 'article',
      images: [
        {
          url: course.image || '/og-image.png',
          width: 1200,
          height: 630,
          alt: course.title.fr,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title.fr} | TahaLearn`,
      description: course.description.fr,
      images: [course.image || '/og-image.png'],
    },
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  return <CourseDetailClient course={course} />
}
