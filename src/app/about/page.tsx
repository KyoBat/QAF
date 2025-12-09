import { coursesData } from '@/lib/data/courses/index'
import AboutPageClient from './AboutPageClient'

// Server Component - calculs côté serveur
export default function AboutPage() {
  // Récupération des cours publiés (côté serveur)
  const allCourses = coursesData.filter(c => c.published)
  
  // Calcul dynamique des stats
  const totalCourses = allCourses.length
  const totalLessons = allCourses.reduce((acc, course) => acc + course.lessons.length, 0)

  return (
    <AboutPageClient 
      totalCourses={totalCourses}
      totalLessons={totalLessons}
    />
  )
}
