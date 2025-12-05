import { coursesData, getFeaturedCourses } from '@/lib/data/courses/index'
import HomePageClient from './HomePageClient'

// Server Component - pas de 'use client', calculs côté serveur
export default function HomePage() {
  // Récupération des cours publiés (côté serveur)
  const allCourses = coursesData.filter(c => c.published)
  
  // Calcul dynamique des stats
  const totalCourses = allCourses.length
  const totalLessons = allCourses.reduce((acc, course) => acc + course.lessons.length, 0)
  
  // Cours à la une
  const featuredCourses = getFeaturedCourses()
  const featuredCourse = featuredCourses[0] || allCourses[0] || null

  // Nombre de cours par catégorie
  const coursesPerCategory: Record<string, number> = {}
  for (const course of allCourses) {
    coursesPerCategory[course.category] = (coursesPerCategory[course.category] || 0) + 1
  }

  return (
    <HomePageClient 
      featuredCourse={featuredCourse}
      totalCourses={totalCourses}
      totalLessons={totalLessons}
      coursesPerCategory={coursesPerCategory}
    />
  )
}
