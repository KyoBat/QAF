import { coursesData, getFeaturedCourses } from '@/lib/data/courses/index'
import HomePageClient from './HomePageClient'

// ISR: Regénérer la page toutes les heures
export const revalidate = 3600

// Fonction pour mélanger aléatoirement un tableau (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Server Component - pas de 'use client', calculs côté serveur
export default function HomePage() {
  // Récupération des cours publiés (côté serveur)
  const allCourses = coursesData.filter(c => c.published)
  
  // Calcul dynamique des stats
  const totalCourses = allCourses.length
  const totalLessons = allCourses.reduce((acc, course) => acc + course.lessons.length, 0)
  
  // Cours à la une (top 3) - mélangés aléatoirement
  const allFeaturedCourses = getFeaturedCourses()
  const shuffledFeatured = shuffleArray(allFeaturedCourses)
  const featuredCourses = shuffledFeatured.slice(0, 3)
  const fallbackCourses = featuredCourses.length > 0 ? featuredCourses : shuffleArray(allCourses).slice(0, 3)

  // Nombre de cours par catégorie
  const coursesPerCategory: Record<string, number> = {}
  for (const course of allCourses) {
    coursesPerCategory[course.category] = (coursesPerCategory[course.category] || 0) + 1
  }

  return (
    <HomePageClient 
      featuredCourses={fallbackCourses}
      totalCourses={totalCourses}
      totalLessons={totalLessons}
      coursesPerCategory={coursesPerCategory}
    />
  )
}
