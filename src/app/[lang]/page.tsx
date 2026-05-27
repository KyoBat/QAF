import { Metadata } from 'next'
import { coursesData, getFeaturedCourses } from '@/lib/data/courses/index'
import HomePageClient from '@/app/HomePageClient'
import type { Course } from '@/lib/data/courses/types'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

export const revalidate = 3600

const LOCALES: Locale[] = ['fr', 'ar', 'en']

export async function generateStaticParams() {
  return LOCALES.map(lang => ({ lang }))
}

const metaMap: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: 'TahaLearn - Plateforme Gratuite de Sciences Islamiques',
    description: 'Apprenez les sciences islamiques gratuitement : Tajweed, Fiqh, Aqeedah, Seerah et Histoire. Cours en français, arabe et anglais.',
  },
  ar: {
    title: 'طه للتعلم - منصة علوم إسلامية مجانية',
    description: 'تعلم العلوم الإسلامية مجاناً: التجويد، الفقه، العقيدة، السيرة النبوية والتاريخ. دروس بالعربية والفرنسية والإنجليزية.',
  },
  en: {
    title: 'TahaLearn - Free Islamic Sciences Platform',
    description: 'Learn Islamic sciences for free: Tajweed, Fiqh, Aqeedah, Seerah and History. Courses in French, Arabic and English.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
  const meta = metaMap[locale]
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://www.tahalearn.com/${locale}`,
      languages: buildHreflangAlternates(''),
    },
  }
}

function stripCourseContent(course: Course) {
  return {
    ...course,
    lessons: course.lessons.map(({ id, title, order, duration, videoUrl }) => ({
      id,
      title,
      order,
      duration,
      videoUrl,
      content: { fr: '', ar: '', en: '' },
    })),
  }
}

export default function HomePage() {
  const allCourses = coursesData.filter(c => c.published)
  const totalCourses = allCourses.length
  const totalLessons = allCourses.reduce((acc, course) => acc + course.lessons.length, 0)
  const allFeaturedCourses = getFeaturedCourses()
  const featuredCourses = allFeaturedCourses.slice(0, 3)
  const fallbackCourses = featuredCourses.length > 0 ? featuredCourses : allCourses.slice(0, 3)
  const coursesPerCategory: Record<string, number> = {}
  for (const course of allCourses) {
    coursesPerCategory[course.category] = (coursesPerCategory[course.category] || 0) + 1
  }
  const lightCourses = fallbackCourses.map(stripCourseContent)

  return (
    <HomePageClient
      featuredCourses={lightCourses}
      totalCourses={totalCourses}
      totalLessons={totalLessons}
      coursesPerCategory={coursesPerCategory}
    />
  )
}
