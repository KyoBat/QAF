import { Metadata } from 'next'
import { MosqueeWeekly } from '@/components/mosquee/MosqueeWeekly'
import { BreadcrumbJsonLd } from '@/components/seo'
import { arRayaneMosquee } from '@/lib/data/mosquees/ar-rayane'
import {
  getWeeklyCourse,
  getWeeklyHadith,
  getUpcomingCourses,
  formatWeekRange,
  formatHijriDate,
} from '@/lib/data/mosquees/weekly'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

/**
 * Le contenu bascule le vendredi à minuit (heure de Batna) puis reste figé.
 * 30 min de cache : la bascule est effective bien avant la prière du Fajr.
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
    title: 'Mosquée Ar-Rayane, Batna — Le cours de la semaine',
    description:
      'Chaque vendredi, un nouveau cours et un hadith pour les fidèles de la mosquée Ar-Rayane (ممرات بن بولعيد, Batna) : aqida, sciences du hadith, et le cours adapté au mois en cours. Accès libre et gratuit.',
  },
  ar: {
    title: 'مسجد الريّان بباتنة — دورة الأسبوع',
    description:
      'كلَّ جمعة دورةٌ جديدة وحديثٌ لروّاد مسجد الريّان (ممرات بن بولعيد، باتنة): العقيدة، وعلوم الحديث، والدورة المناسبة لشهرك. مجّانًا وبلا تسجيل.',
  },
  en: {
    title: 'Ar-Rayane Mosque, Batna — Course of the week',
    description:
      'Every Friday, a new course and a hadith for the congregation of Ar-Rayane Mosque (Ben Boulaïd Alleys, Batna): aqidah, hadith sciences, and the course suited to the current month. Free and open.',
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
  const course = getWeeklyCourse(now)
  const hadith = getWeeklyHadith(now)
  const upcomingCourses = getUpcomingCourses(3, now)
  const weekRange = formatWeekRange(locale, now)
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
      <MosqueeWeekly
        locale={locale}
        mosquee={arRayaneMosquee}
        course={course}
        hadith={hadith}
        upcomingCourses={upcomingCourses}
        weekRange={weekRange}
        hijriDate={hijriDate}
        pageUrl={`${BASE_URL}/${locale}${PATH}`}
        qrTargetUrl={QR_TARGET_URL}
      />
    </>
  )
}
