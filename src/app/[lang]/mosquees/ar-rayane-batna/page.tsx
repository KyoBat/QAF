import { Metadata } from 'next'
import { MosqueeDaily } from '@/components/mosquee/MosqueeDaily'
import { BreadcrumbJsonLd } from '@/components/seo'
import { arRayaneMosquee } from '@/lib/data/mosquees/ar-rayane'
import {
  getResolvedDaily,
  getUpcoming,
  formatDailyDate,
  formatHijriDate,
} from '@/lib/data/mosquees/daily'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

/**
 * Le contenu change chaque jour à minuit (heure de Batna). 30 min de cache
 * suffisent : la bascule est effective bien avant le Fajr.
 */
export const revalidate = 1800

const LOCALES: Locale[] = ['fr', 'ar', 'en']
const PATH = '/mosquees/ar-rayane-batna'
const BASE_URL = 'https://www.tahalearn.com'

/** URL sans préfixe de langue : le middleware redirige vers la langue du visiteur. */
const QR_TARGET_URL = `${BASE_URL}${PATH}`

export async function generateStaticParams() {
  return LOCALES.map(lang => ({ lang }))
}

const metaMap: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: 'Mosquée Ar-Rayane, Batna — Hadith du jour',
    description:
      'Chaque jour, un hadith ou une leçon pour les fidèles de la mosquée Ar-Rayane (ممرات بن بولعيد, Batna) : citation, référence et question du jour, avec la leçon complète en accès libre.',
  },
  ar: {
    title: 'مسجد الريّان بباتنة — حديث اليوم',
    description:
      'كلَّ يوم حديثٌ أو درسٌ لروّاد مسجد الريّان (ممرات بن بولعيد، باتنة): النصُّ وتخريجه وسؤال اليوم، مع الدرس كاملًا مجّانًا.',
  },
  en: {
    title: 'Ar-Rayane Mosque, Batna — Hadith of the day',
    description:
      'Every day, one hadith or lesson for the congregation of Ar-Rayane Mosque (Ben Boulaïd Alleys, Batna): text, reference and a question of the day, with the full lesson freely available.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
  const meta = metaMap[locale]

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}${PATH}`,
      languages: buildHreflangAlternates(PATH),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${locale}${PATH}`,
      siteName: 'TahaLearn',
      type: 'website',
    },
  }
}

/** Schema.org Mosque — améliore le référencement local sur « mosquée Batna ». */
function MosqueeJsonLd({ locale }: { locale: Locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Mosque',
    name: arRayaneMosquee.name[locale],
    alternateName: arRayaneMosquee.nameArabic,
    url: `${BASE_URL}/${locale}${PATH}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: arRayaneMosquee.address[locale],
      addressLocality: arRayaneMosquee.city[locale],
      addressCountry: 'DZ',
    },
    foundingDate: arRayaneMosquee.inauguratedAt,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function ArRayaneMosqueePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale

  const now = new Date()
  const today = getResolvedDaily(now)
  const upcoming = getUpcoming(3, now)
  const formattedDate = formatDailyDate(locale, now)
  const hijriDate = formatHijriDate(locale, now)

  return (
    <>
      <MosqueeJsonLd locale={locale} />
      <BreadcrumbJsonLd
        items={[
          { name: 'TahaLearn', url: `/${locale}` },
          { name: arRayaneMosquee.name[locale], url: `/${locale}${PATH}` },
        ]}
      />
      <MosqueeDaily
        locale={locale}
        mosquee={arRayaneMosquee}
        today={today}
        upcoming={upcoming}
        formattedDate={formattedDate}
        hijriDate={hijriDate}
        pageUrl={`${BASE_URL}/${locale}${PATH}`}
        qrTargetUrl={QR_TARGET_URL}
      />
    </>
  )
}
