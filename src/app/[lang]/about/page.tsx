import { Metadata } from 'next'
import { coursesData } from '@/lib/data/courses/index'
import AboutPageClient from '@/app/about/AboutPageClient'
import { BreadcrumbJsonLd } from '@/components/seo'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

const LOCALES: Locale[] = ['fr', 'ar', 'en']

export async function generateStaticParams() {
  return LOCALES.map(lang => ({ lang }))
}

const metaMap: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: 'À Propos - Sciences Islamiques Gratuites',
    description: 'Découvrez TahaLearn, plateforme gratuite de sciences islamiques en français, arabe et anglais.',
  },
  ar: {
    title: 'من نحن - علوم إسلامية مجانية',
    description: 'اكتشف منصة طه للتعلم، منصة مجانية للعلوم الإسلامية بالعربية والفرنسية والإنجليزية.',
  },
  en: {
    title: 'About - Free Islamic Sciences',
    description: 'Discover TahaLearn, a free Islamic sciences platform in French, Arabic and English.',
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
      canonical: `https://www.tahalearn.com/${locale}/about`,
      languages: buildHreflangAlternates('/about'),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.tahalearn.com/${locale}/about`,
      siteName: 'TahaLearn',
      type: 'website',
    },
  }
}

export default function AboutPage() {
  const allCourses = coursesData.filter(c => c.published)
  const totalCourses = allCourses.length
  const totalLessons = allCourses.reduce((acc, course) => acc + course.lessons.length, 0)

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'À Propos', url: '/about' },
      ]} />
      <AboutPageClient totalCourses={totalCourses} totalLessons={totalLessons} />
    </>
  )
}
