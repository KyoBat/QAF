import { MetadataRoute } from 'next'
import { coursesData } from '@/lib/data/courses/index'
import type { Course } from '@/lib/data/courses/types'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tahalearn.com'
  const currentDate = new Date()

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Pages des cours
  const coursePages: MetadataRoute.Sitemap = coursesData
    .filter((course: Course) => course.published)
    .map((course: Course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // Pages des leçons
  const lessonPages: MetadataRoute.Sitemap = coursesData
    .filter((course: Course) => course.published)
    .flatMap((course: Course) =>
      course.lessons.map((lesson) => ({
        url: `${baseUrl}/courses/${course.slug}/lessons/${lesson.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    )

  return [...staticPages, ...coursePages, ...lessonPages]
}
