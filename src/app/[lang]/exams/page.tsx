import { Metadata } from 'next'
import ExamsPageClient from '@/app/exams/ExamsPageClient'
import { BreadcrumbJsonLd } from '@/components/seo'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

export const revalidate = 21600

const LOCALES: Locale[] = ['fr', 'ar', 'en']

export async function generateStaticParams() {
  return LOCALES.map(lang => ({ lang }))
}

const metaMap: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: 'Examens et Certifications',
    description: 'Testez vos connaissances en sciences islamiques et obtenez vos certificats. Examens gratuits avec correction instantanée.',
  },
  ar: {
    title: 'الاختبارات والشهادات',
    description: 'اختبر معلوماتك في العلوم الإسلامية واحصل على شهاداتك. اختبارات مجانية مع تصحيح فوري.',
  },
  en: {
    title: 'Exams and Certifications',
    description: 'Test your knowledge of Islamic sciences and get your certificates. Free exams with instant correction.',
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
      canonical: `https://www.tahalearn.com/${locale}/exams`,
      languages: buildHreflangAlternates('/exams'),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.tahalearn.com/${locale}/exams`,
      siteName: 'TahaLearn',
      type: 'website',
    },
  }
}

export default function ExamsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Examens', url: '/exams' },
      ]} />
      <ExamsPageClient />
    </>
  )
}
