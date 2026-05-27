import { notFound } from 'next/navigation'
import { getCourseBySlug, coursesData } from '@/lib/data'
import { CourseDetailClient } from '@/app/courses/[slug]/CourseDetailClient'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

export const revalidate = 3600

const LOCALES: Locale[] = ['fr', 'ar', 'en']

interface CoursePageProps {
  params: Promise<{ lang: string; slug: string }>
}

export async function generateStaticParams() {
  return LOCALES.flatMap(lang =>
    coursesData
      .filter(course => course.published)
      .map(course => ({ lang, slug: course.slug }))
  )
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { lang, slug } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
  const course = await getCourseBySlug(slug)

  if (!course) {
    return { title: locale === 'ar' ? 'الدورة غير موجودة' : locale === 'en' ? 'Course Not Found' : 'Cours Introuvable' }
  }

  const title = course.title[locale] ?? course.title.fr
  const description = course.description[locale] ?? course.description.fr
  const lessonsCount = course.lessons.length

  const categoryNames: Record<string, Record<Locale, string>> = {
    tajweed: { fr: 'Tajweed', ar: 'التجويد', en: 'Tajweed' },
    fiqh: { fr: 'Fiqh', ar: 'الفقه', en: 'Fiqh' },
    aqeedah: { fr: 'Aqeedah', ar: 'العقيدة', en: 'Aqeedah' },
    seerah: { fr: 'Seerah', ar: 'السيرة', en: 'Seerah' },
    hadith: { fr: 'Hadith', ar: 'الحديث', en: 'Hadith' },
    history: { fr: 'Histoire Islamique', ar: 'التاريخ الإسلامي', en: 'Islamic History' },
    spirituality: { fr: 'Spiritualité', ar: 'التزكية', en: 'Spirituality' },
  }
  const categoryLabel = categoryNames[course.category]?.[locale] ?? course.category
  const badge = locale === 'ar'
    ? `${lessonsCount} درس مجاني`
    : locale === 'en'
      ? `${lessonsCount} free lesson${lessonsCount > 1 ? 's' : ''}`
      : `${lessonsCount} leçon${lessonsCount > 1 ? 's' : ''} gratuite${lessonsCount > 1 ? 's' : ''}`

  const ogImageUrl = `https://www.tahalearn.com/api/og?${new URLSearchParams({
    title,
    sub: categoryLabel,
    img: (course.image ?? '/og-image.png').replace(/\.svg$/, '.png'),
    badge,
  }).toString()}`

  return {
    title,
    description: `${description} - ${badge}.`,
    keywords: [...course.tags, categoryLabel, 'TahaLearn'],
    alternates: {
      canonical: `https://www.tahalearn.com/${locale}/courses/${slug}`,
      languages: buildHreflangAlternates(`/courses/${slug}`),
    },
    openGraph: {
      title,
      description,
      url: `https://www.tahalearn.com/${locale}/courses/${slug}`,
      siteName: 'TahaLearn',
      type: 'article',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImageUrl] },
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { lang, slug } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
  const course = await getCourseBySlug(slug)

  if (!course) notFound()

  const lightLessons = course.lessons.map(({ id, title, order, duration, videoUrl }) => ({
    id, title, order, duration,
    videoUrl: videoUrl || '',
    content: { fr: '', ar: '', en: '' },
  }))

  const localTitle = course.title[locale] ?? course.title.fr

  return (
    <>
      <CourseJsonLd course={course} />
      <BreadcrumbJsonLd items={[
        { name: locale === 'ar' ? 'الرئيسية' : locale === 'en' ? 'Home' : 'Accueil', url: `/${locale}` },
        { name: locale === 'ar' ? 'الدورات' : locale === 'en' ? 'Courses' : 'Cours', url: `/${locale}/courses` },
        { name: localTitle },
      ]} />
      <CourseDetailClient course={{ ...course, lessons: lightLessons }} />
    </>
  )
}
