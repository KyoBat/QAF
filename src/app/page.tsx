import { Metadata } from 'next'
import { coursesData, getFeaturedCourses } from '@/lib/data/courses/index'
import HomePageClient from './HomePageClient'
import type { Course } from '@/lib/data/courses/types'

// ISR: Regénérer la page toutes les heures
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'TahaLearn - Plateforme Gratuite de Sciences Islamiques',
  alternates: {
    canonical: 'https://www.tahalearn.com',
  },
}



/**
 * Strip heavy lesson content to reduce RSC payload size.
 * The homepage only needs lesson id/title/order for display — not the full
 * trilingual markdown bodies (which bloated the page to 1.2 MB).
 */
function stripCourseContent(course: Course) {
  return {
    ...course,
    lessons: course.lessons.map(({ id, title, order, duration, videoUrl }) => ({
      id,
      title,
      order,
      duration,
      videoUrl,
      content: { fr: '', ar: '', en: '' },
    })),
  }
}

// Server Component - pas de 'use client', calculs côté serveur
export default function HomePage() {
  // Récupération des cours publiés (côté serveur)
  const allCourses = coursesData.filter(c => c.published)
  
  // Calcul dynamique des stats
  const totalCourses = allCourses.length
  const totalLessons = allCourses.reduce((acc, course) => acc + course.lessons.length, 0)
  
  // Cours à la une (top 3) - ordre déterministe pour un rendu stable (SEO)
  const allFeaturedCourses = getFeaturedCourses()
  const featuredCourses = allFeaturedCourses.slice(0, 3)
  const fallbackCourses = featuredCourses.length > 0 ? featuredCourses : allCourses.slice(0, 3)

  // Nombre de cours par catégorie
  const coursesPerCategory: Record<string, number> = {}
  for (const course of allCourses) {
    coursesPerCategory[course.category] = (coursesPerCategory[course.category] || 0) + 1
  }

  // Strip lesson content to reduce payload (1.2MB → ~50KB)
  const lightCourses = fallbackCourses.map(stripCourseContent)

  return (
    <HomePageClient 
      featuredCourses={lightCourses}
      totalCourses={totalCourses}
      totalLessons={totalLessons}
      coursesPerCategory={coursesPerCategory}
    />
  )
}
