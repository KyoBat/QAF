/**
 * Courses Listing Page
 * Affiche tous les cours avec filtres
 * Optimisé : utilise les données légères (sans contenu des leçons)
 */

import { Suspense } from 'react'
import { Metadata } from 'next'
import { getCoursesListData } from '@/lib/data/courses/courses-list'
import { CoursesPageClient } from './CoursesPageClient'

export const metadata: Metadata = {
  title: 'Cours | TahaLearn',
  description: 'Découvrez nos cours de sciences islamiques : Tajweed, Fiqh, Aqeedah, Seerah et plus encore.',
}

// Squelette de chargement
function CoursesLoadingSkeleton() {
  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-pulse">
          <div className="h-10 bg-muted rounded w-48 mb-2" />
          <div className="h-5 bg-muted rounded w-32" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-72 bg-muted rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CoursesPage() {
  // Charger les données légères côté serveur
  const coursesListData = getCoursesListData()

  return (
    <Suspense fallback={<CoursesLoadingSkeleton />}>
      <CoursesPageClient initialCourses={coursesListData} />
    </Suspense>
  )
}
