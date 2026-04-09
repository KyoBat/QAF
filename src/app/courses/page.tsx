/**
 * Courses Listing Page
 * Affiche tous les cours avec filtres
 * Optimisé : utilise les données légères (sans contenu des leçons)
 */

import { Metadata } from 'next'
import { getCoursesListData } from '@/lib/data/courses/courses-list'
import { CoursesPageClient } from './CoursesPageClient'
import { BreadcrumbJsonLd, ItemListJsonLd } from '@/components/seo'

export const metadata: Metadata = {
  title: 'Tous les Cours - Sciences Islamiques Gratuites',
  description: 'Catalogue de cours islamiques gratuits : Tajweed, Fiqh, Aqeedah, Seerah et Histoire. Retrouvez aussi des parcours sur la prière en groupe, le retardataire et le rattrapage des prières manquées.',
  keywords: ['Cours islamiques', 'Tajweed', 'Fiqh', 'Aqeedah', 'Seerah', 'Histoire islamique', 'Apprentissage gratuit', 'prière en groupe', 'rattraper ses prières', 'retardataire', 'TahaLearn'],
  alternates: {
    canonical: 'https://www.tahalearn.com/courses',
  },
  openGraph: {
    title: 'Tous les Cours de Sciences Islamiques | TahaLearn',
    description: 'Découvrez nos cours gratuits de sciences islamiques, y compris des parcours pratiques sur la salat, la Jama\'ah et le rattrapage des prières.',
    url: 'https://www.tahalearn.com/courses',
    siteName: 'TahaLearn',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TahaLearn - Catalogue de cours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tous les Cours de Sciences Islamiques | TahaLearn',
    description: 'Découvrez nos cours gratuits de sciences islamiques et nos parcours pratiques sur la salat.',
    images: ['/og-image.png'],
  },
}

// ISR: Regénérer la page toutes les 30 minutes
export const revalidate = 1800

export default function CoursesPage() {
  // Charger les données légères côté serveur
  const coursesListData = getCoursesListData()

  const courseItems = coursesListData.map((course, index) => ({
    name: course.title.fr,
    url: `/courses/${course.slug}`,
    position: index + 1,
  }))

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Cours', url: '/courses' },
      ]} />
      <ItemListJsonLd items={courseItems} name="Cours de Sciences Islamiques" />
      <CoursesPageClient initialCourses={coursesListData} />
    </>
  )
}
