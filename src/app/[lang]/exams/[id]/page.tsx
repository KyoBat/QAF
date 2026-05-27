import { Metadata } from 'next'
import { getExamById, getAllExamsLight } from '@/lib/data/exams'
import ExamPageClient from '@/app/exams/[id]/ExamPageClient'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

export const revalidate = 86400

const LOCALES: Locale[] = ['fr', 'ar', 'en']

interface PageProps {
  params: Promise<{ lang: string; id: string }>
}

export async function generateStaticParams() {
  const exams = getAllExamsLight()
  return LOCALES.flatMap(lang => exams.map(exam => ({ lang, id: exam.id })))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, id } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
  const exam = getExamById(id)

  if (!exam) {
    return {
      title: locale === 'ar' ? 'الاختبار غير موجود' : locale === 'en' ? 'Exam Not Found' : 'Examen Introuvable',
    }
  }

  const title = exam.title[locale] ?? exam.title.fr
  const description = exam.description[locale] ?? exam.description.fr

  return {
    title,
    description: `${description} - ${locale === 'ar' ? 'احصل على شهادتك.' : locale === 'en' ? 'Get your certificate.' : 'Obtenez votre certificat.'}`,
    alternates: {
      canonical: `https://www.tahalearn.com/${locale}/exams/${id}`,
      languages: buildHreflangAlternates(`/exams/${id}`),
    },
    openGraph: {
      title,
      description,
      url: `https://www.tahalearn.com/${locale}/exams/${id}`,
      siteName: 'TahaLearn',
      type: 'website',
    },
  }
}

export default function ExamPage() {
  return <ExamPageClient />
}
