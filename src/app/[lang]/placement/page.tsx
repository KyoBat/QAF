import { Metadata } from 'next'
import PlacementPageClient from '@/app/placement/PlacementPageClient'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

const LOCALES: Locale[] = ['fr', 'ar', 'en']

export async function generateStaticParams() {
  return LOCALES.map(lang => ({ lang }))
}

const metaMap: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: 'Test de Niveau - Parcours Personnalisé',
    description: 'Évaluez votre niveau en sciences islamiques et recevez un parcours personnalisé. Test adaptatif gratuit.',
  },
  ar: {
    title: 'اختبار المستوى - مسار مخصص',
    description: 'قيّم مستواك في العلوم الإسلامية واحصل على مسار تعلم مخصص. اختبار مجاني.',
  },
  en: {
    title: 'Level Test - Personalised Learning Path',
    description: 'Evaluate your level in Islamic sciences and receive a personalised learning path. Free adaptive test.',
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
      canonical: `https://www.tahalearn.com/${locale}/placement`,
      languages: buildHreflangAlternates('/placement'),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.tahalearn.com/${locale}/placement`,
      siteName: 'TahaLearn',
      type: 'website',
    },
  }
}

export default function PlacementPage() {
  return <PlacementPageClient />
}
