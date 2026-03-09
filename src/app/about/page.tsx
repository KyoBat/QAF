import { Metadata } from 'next'
import { coursesData } from '@/lib/data/courses/index'
import AboutPageClient from './AboutPageClient'
import { BreadcrumbJsonLd } from '@/components/seo'

export const metadata: Metadata = {
  title: 'À Propos - Sciences Islamiques Gratuites',
  description: 'Découvrez TahaLearn, plateforme gratuite de sciences islamiques. Tajweed, Fiqh, Aqeedah et Seerah en français, arabe et anglais.',
  keywords: ['À propos TahaLearn', 'Plateforme islamique', 'Apprentissage gratuit', 'Sciences islamiques', 'Mission TahaLearn', 'Cours islamiques gratuits'],
  alternates: {
    canonical: 'https://www.tahalearn.com/about',
  },
  openGraph: {
    title: 'À Propos de TahaLearn - Plateforme d\'apprentissage islamique gratuite',
    description: 'Découvrez notre mission : rendre l\'apprentissage des sciences islamiques accessible à tous gratuitement.',
    url: 'https://www.tahalearn.com/about',
    siteName: 'TahaLearn',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TahaLearn - À propos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À Propos de TahaLearn',
    description: 'Découvrez notre mission : rendre l\'apprentissage des sciences islamiques accessible à tous.',
    images: ['/og-image.png'],
  },
}

// Server Component - calculs côté serveur
export default function AboutPage() {
  // Récupération des cours publiés (côté serveur)
  const allCourses = coursesData.filter(c => c.published)
  
  // Calcul dynamique des stats
  const totalCourses = allCourses.length
  const totalLessons = allCourses.reduce((acc, course) => acc + course.lessons.length, 0)

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'À Propos', url: '/about' },
      ]} />
      <AboutPageClient 
        totalCourses={totalCourses}
        totalLessons={totalLessons}
      />
    </>
  )
}
