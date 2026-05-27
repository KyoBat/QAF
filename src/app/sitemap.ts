import { MetadataRoute } from 'next'
import { coursesData } from '@/lib/data/courses/index'
import { getAllExamsLight } from '@/lib/data/exams'
import type { Course } from '@/lib/data/courses/types'

const LOCALES = ['fr', 'ar', 'en'] as const
const BASE_URL = 'https://www.tahalearn.com'
const STATIC_DATE = new Date('2026-04-01')

/** Build one sitemap entry per locale for a given path */
function localizedEntry(
  path: string,
  opts: { lastModified?: Date; changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency']; priority?: number }
): MetadataRoute.Sitemap {
  const { lastModified = STATIC_DATE, changeFrequency = 'monthly', priority = 0.7 } = opts
  const alternates: Record<string, string> = {}
  LOCALES.forEach(loc => { alternates[loc] = `${BASE_URL}/${loc}${path}` })
  alternates['x-default'] = `${BASE_URL}/fr${path}`

  return LOCALES.map(loc => ({
    url: `${BASE_URL}/${loc}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: alternates },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Pages statiques
  const staticPages = [
    ...localizedEntry('', { changeFrequency: 'weekly', priority: 1 }),
    ...localizedEntry('/courses', { changeFrequency: 'weekly', priority: 0.9 }),
    ...localizedEntry('/about', { changeFrequency: 'monthly', priority: 0.4 }),
    ...localizedEntry('/exams', { changeFrequency: 'weekly', priority: 0.7 }),
    ...localizedEntry('/placement', { changeFrequency: 'monthly', priority: 0.6 }),
  ]

  // Pages des cours (×3 langues)
  const coursePages: MetadataRoute.Sitemap = coursesData
    .filter((course: Course) => course.published)
    .flatMap((course: Course) =>
      localizedEntry(`/courses/${course.slug}`, {
        lastModified: new Date(course.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    )

  // Pages des leçons (×3 langues)
  const lessonPages: MetadataRoute.Sitemap = coursesData
    .filter((course: Course) => course.published)
    .flatMap((course: Course) =>
      course.lessons.flatMap(lesson =>
        localizedEntry(`/courses/${course.slug}/lessons/${lesson.id}`, {
          lastModified: new Date(course.updatedAt),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      )
    )

  // Pages des examens (×3 langues)
  const examPages: MetadataRoute.Sitemap = getAllExamsLight().flatMap(exam =>
    localizedEntry(`/exams/${exam.id}`, {
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  )

  return [...staticPages, ...coursePages, ...lessonPages, ...examPages]
}

