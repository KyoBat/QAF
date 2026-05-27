import { Metadata } from 'next'
import { getCoursesListData } from '@/lib/data/courses/courses-list'
import { CoursesPageClient } from '@/app/courses/CoursesPageClient'
import { BreadcrumbJsonLd, ItemListJsonLd } from '@/components/seo'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

export const revalidate = 1800

const LOCALES: Locale[] = ['fr', 'ar', 'en']

export async function generateStaticParams() {
  return LOCALES.map(lang => ({ lang }))
}

const metaMap: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: 'Tous les Cours - Sciences Islamiques Gratuites',
    description: 'Catalogue de cours islamiques gratuits : Tajweed, Fiqh, Aqeedah, Seerah et Histoire. Cours en français, arabe et anglais.',
  },
  ar: {
    title: 'جميع الدورات - علوم إسلامية مجانية',
    description: 'كتالوج دورات إسلامية مجانية: التجويد، الفقه، العقيدة، السيرة والتاريخ.',
  },
  en: {
    title: 'All Courses - Free Islamic Sciences',
    description: 'Catalogue of free Islamic courses: Tajweed, Fiqh, Aqeedah, Seerah and History.',
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
      canonical: `https://www.tahalearn.com/${locale}/courses`,
      languages: buildHreflangAlternates('/courses'),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.tahalearn.com/${locale}/courses`,
      siteName: 'TahaLearn',
      type: 'website',
    },
  }
}

export default async function CoursesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
  const coursesListData = getCoursesListData()

  const courseItems = coursesListData.map((course, index) => ({
    name: course.title[locale] ?? course.title.fr,
    url: `/${locale}/courses/${course.slug}`,
    position: index + 1,
  }))

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: locale === 'ar' ? 'الرئيسية' : locale === 'en' ? 'Home' : 'Accueil', url: `/${locale}` },
        { name: locale === 'ar' ? 'الدورات' : locale === 'en' ? 'Courses' : 'Cours', url: `/${locale}/courses` },
      ]} />
      <ItemListJsonLd items={courseItems} name="Cours de Sciences Islamiques" />
      <CoursesPageClient initialCourses={coursesListData} />
    </>
  )
}
