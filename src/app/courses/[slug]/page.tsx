/**
 * Course Detail Page
 * Affiche les détails d'un cours et sa liste de leçons
 */

import { notFound } from 'next/navigation'
import { getCourseBySlug, coursesData } from '@/lib/data'
import { CourseDetailClient } from './CourseDetailClient'

interface CoursePageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all courses
export async function generateStaticParams() {
  return coursesData
    .filter(course => course.published)
    .map((course) => ({
      slug: course.slug,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)
  
  if (!course) {
    return {
      title: 'Course Not Found',
    }
  }

  return {
    title: `${course.title.fr} | Rabbi Zidni Ilma`,
    description: course.description.fr,
    keywords: course.tags.join(', '),
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  return <CourseDetailClient course={course} />
}
