import { MetadataRoute } from 'next'
import { coursesData } from '@/lib/data/courses/index'
import { getAllExamsLight } from '@/lib/data/exams'
import type { Course } from '@/lib/data/courses/types'

/**
 * Génération du sitemap pour Google Search Console
 * Optimisé pour l'indexation avec priorités et fréquences de mise à jour
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tahalearn.com'
  // Date fixe pour les pages statiques — ne changer qu'en cas de mise à jour réelle
  // Utiliser new Date() envoie un faux signal de fraîcheur à Google
  const staticDate = new Date('2026-04-01')

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/exams`,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/placement`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sitemap-html`,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ]

  // Pages des cours
  const coursePages: MetadataRoute.Sitemap = coursesData
    .filter((course: Course) => course.published)
    .map((course: Course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: new Date(course.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // Pages des leçons - contenu principal  
  const lessonPages: MetadataRoute.Sitemap = coursesData
    .filter((course: Course) => course.published)
    .flatMap((course: Course) =>
      course.lessons.map((lesson) => ({
        url: `${baseUrl}/courses/${course.slug}/lessons/${lesson.id}`,
        lastModified: new Date(course.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    )

  // Pages des examens
  const examPages: MetadataRoute.Sitemap = getAllExamsLight().map((exam) => ({
    url: `${baseUrl}/exams/${exam.id}`,
    lastModified: staticDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...coursePages, ...lessonPages, ...examPages]
}
