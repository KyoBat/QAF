/**
 * Page mosquée — hadith / leçon du jour
 *
 * Server component, à une exception près : le bouton de partage.
 * La hiérarchie visuelle est délibérée — le bloc du jour doit dominer,
 * tout le reste lui est subordonné.
 */

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Clock, MapPin, ArrowLeft, ArrowRight, QrCode, Moon, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Locale } from '@/locales'
import type { Mosquee } from '@/lib/data/mosquees/types'
import type { ResolvedDaily } from '@/lib/data/mosquees/daily'
import { ShareDaily } from './ShareDaily'

interface MosqueeDailyProps {
  locale: Locale
  mosquee: Mosquee
  today: ResolvedDaily
  upcoming: ResolvedDaily[]
  formattedDate: string
  hijriDate: string
  /** URL canonique de la page, partagée telle quelle */
  pageUrl: string
  /** URL encodée dans le QR code affiché */
  qrTargetUrl: string
}

const ui = {
  fr: {
    todayBadge: 'Aujourd’hui',
    hadithOfDay: 'Le hadith du jour',
    lessonOfDay: 'La leçon du jour',
    dayCounter: (n: number, total: number) => `Jour ${n} / ${total}`,
    thinkAbout: 'La question du jour',
    readLesson: 'Lire la leçon complète',
    fromCourse: 'Tiré du cours',
    rhythm: 'Nouveau chaque jour à minuit — revenez après la prière.',
    upcomingTitle: 'Les prochains jours',
    allCourses: 'Voir les 29 cours gratuits',
    qrTitle: 'Afficher cette page à la mosquée',
    qrText: 'Imprimez ce code pour le panneau d’affichage. Il ouvre la page directement dans la langue du visiteur.',
    shareTitle: 'Contenu du jour',
    backToSite: 'Découvrir TahaLearn',
  },
  ar: {
    todayBadge: 'اليوم',
    hadithOfDay: 'حديث اليوم',
    lessonOfDay: 'درس اليوم',
    dayCounter: (n: number, total: number) => `اليوم ${n} من ${total}`,
    thinkAbout: 'سؤال اليوم',
    readLesson: 'اقرأ الدرس كاملًا',
    fromCourse: 'من دورة',
    rhythm: 'يتجدّد كلَّ يوم عند منتصف الليل — عُد إليه بعد الصلاة.',
    upcomingTitle: 'الأيام القادمة',
    allCourses: 'تصفَّح 29 دورة مجانية',
    qrTitle: 'اعرض هذه الصفحة في المسجد',
    qrText: 'اطبع هذا الرمز لتعليقه على لوحة الإعلانات. يفتح الصفحةَ مباشرةً بلغة الزائر.',
    shareTitle: 'محتوى اليوم',
    backToSite: 'تعرَّف على منصّة طه للتعلّم',
  },
  en: {
    todayBadge: 'Today',
    hadithOfDay: 'Hadith of the day',
    lessonOfDay: 'Lesson of the day',
    dayCounter: (n: number, total: number) => `Day ${n} of ${total}`,
    thinkAbout: 'Question of the day',
    readLesson: 'Read the full lesson',
    fromCourse: 'From the course',
    rhythm: 'New every day at midnight — come back after the prayer.',
    upcomingTitle: 'Coming up',
    allCourses: 'Browse all 29 free courses',
    qrTitle: 'Display this page at the mosque',
    qrText: 'Print this code for the noticeboard. It opens the page directly in the visitor’s language.',
    shareTitle: 'Today’s content',
    backToSite: 'Discover TahaLearn',
  },
} as const

export function MosqueeDaily({
  locale,
  mosquee,
  today,
  upcoming,
  formattedDate,
  hijriDate,
  pageUrl,
  qrTargetUrl,
}: MosqueeDailyProps) {
  const isRTL = locale === 'ar'
  const t = ui[locale]
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const { entry } = today

  const lessonHref = `/${locale}${today.path}`

  // Ce qui part réellement dans WhatsApp : la citation si elle existe, sinon
  // le titre de la leçon — puis toujours la question, qui est l'accroche.
  const shareText = [
    entry.quote ? entry.quote.ar : today.lessonTitle[locale],
    entry.question[locale],
  ].join('\n\n')

  return (
    <div className={cn('pb-12', isRTL && 'text-right')} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ── Bandeau mosquée : compact, il ne doit pas voler la vedette ── */}
      <header className="border-b border-primary/10 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {!isRTL && (
            <p
              className="text-2xl sm:text-3xl font-bold text-primary mb-1 font-arabic leading-relaxed text-left"
              dir="rtl"
              lang="ar"
            >
              {mosquee.nameArabic}
            </p>
          )}
          <h1
            className={cn(
              'font-bold text-foreground',
              isRTL ? 'text-3xl sm:text-4xl font-arabic leading-relaxed' : 'text-xl sm:text-2xl'
            )}
          >
            {mosquee.name[locale]}
          </h1>

          <p
            className={cn(
              'mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground',
              isRTL && 'flex-row-reverse'
            )}
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {mosquee.address[locale]} — {mosquee.city[locale]}, {mosquee.country[locale]}
          </p>

          <p className={cn('mt-3 text-sm text-muted-foreground leading-relaxed', isRTL && 'leading-loose')}>
            {mosquee.intro[locale]}
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* ── LE BLOC DU JOUR ─────────────────────────────────
            Élevé, cerclé, dégradé : c'est l'élément que l'œil
            doit trouver en premier en arrivant sur la page. */}
        <Card className="-mt-2 mb-6 border-primary/25 shadow-lg ring-1 ring-primary/10 bg-gradient-to-b from-primary/[0.07] to-card overflow-hidden">
          <CardContent className="p-5 sm:p-8">
            {/* Ligne de date : grégorienne + hégirienne + rang dans le cycle */}
            <div
              className={cn(
                'flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-sm',
                isRTL && 'flex-row-reverse'
              )}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                {t.todayBadge}
              </span>
              <span className="text-muted-foreground">{formattedDate}</span>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-primary/80',
                  isRTL && 'flex-row-reverse'
                )}
              >
                <Moon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {hijriDate}
              </span>
              <span
                className={cn(
                  'text-xs text-muted-foreground/70 tabular-nums',
                  isRTL ? 'me-auto' : 'ms-auto'
                )}
              >
                {t.dayCounter(today.dayInCycle, today.cycleLength)}
              </span>
            </div>

            <h2
              className={cn(
                'text-sm font-semibold uppercase tracking-widest text-primary mb-5',
                isRTL && 'font-arabic tracking-normal text-base'
              )}
            >
              {entry.kind === 'hadith' ? t.hadithOfDay : t.lessonOfDay}
            </h2>

            {/* Citation : le cœur émotionnel, donc grande et aérée */}
            {entry.quote && (
              <figure className="mb-7">
                <blockquote
                  className="rounded-xl bg-primary/[0.06] px-5 py-6 sm:px-7 sm:py-8 text-center text-2xl sm:text-3xl font-arabic leading-[2.1] text-foreground"
                  dir="rtl"
                  lang="ar"
                >
                  {entry.quote.ar}
                </blockquote>

                {/* En arabe la traduction répète le texte : on ne l'affiche pas deux fois */}
                {locale !== 'ar' && (
                  <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-center italic">
                    {entry.quote.translation[locale]}
                  </p>
                )}

                <figcaption className="mt-4 flex justify-center">
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    {entry.quote.source[locale]}
                  </span>
                </figcaption>
              </figure>
            )}

            {/* La question — l'accroche qui doit faire ouvrir la leçon */}
            <div
              className={cn(
                'rounded-xl border border-primary/20 bg-background/70 p-5 sm:p-6 mb-7',
                isRTL ? 'border-e-4' : 'border-s-4',
                'border-s-primary border-e-primary'
              )}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5">
                {t.thinkAbout}
              </p>
              <p
                className={cn(
                  'text-lg sm:text-xl text-foreground leading-relaxed',
                  isRTL && 'font-arabic leading-loose'
                )}
              >
                {entry.question[locale]}
              </p>
            </div>

            {/* Renvoi vers la leçon */}
            <div className="space-y-1 mb-5">
              <p className="text-sm text-muted-foreground">{t.fromCourse}</p>
              <p
                className={cn(
                  'text-lg sm:text-xl font-semibold text-foreground',
                  isRTL && 'font-arabic leading-relaxed'
                )}
              >
                {today.lessonTitle[locale]}
              </p>
              <p className="text-sm text-muted-foreground">{today.courseTitle[locale]}</p>
            </div>

            <div
              className={cn(
                'flex flex-wrap items-center gap-3',
                isRTL && 'flex-row-reverse'
              )}
            >
              <Button asChild size="lg" className="flex-1 sm:flex-none">
                <Link href={lessonHref}>
                  {t.readLesson}
                  <Arrow className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <ShareDaily
                locale={locale}
                title={`${t.shareTitle} — ${mosquee.name[locale]}`}
                text={shareText}
                url={pageUrl}
              />

              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-sm text-muted-foreground',
                  isRTL && 'flex-row-reverse'
                )}
              >
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {/* dir="ltr" : sinon « 45 min » s'affiche « min 45 » en RTL */}
                <bdi dir="ltr">{today.lessonDuration}</bdi>
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Le rythme, en une ligne — remplace l'ancienne section d'explications */}
        <p className="mb-10 text-center text-sm text-muted-foreground">{t.rhythm}</p>

        {/* ── Jours suivants : volontairement discret ────────── */}
        {upcoming.length > 0 && (
          <section className="mb-10" aria-labelledby="upcoming-title">
            <h2
              id="upcoming-title"
              className={cn(
                'text-base font-semibold text-foreground mb-3',
                isRTL && 'font-arabic leading-relaxed'
              )}
            >
              {t.upcomingTitle}
            </h2>

            <ul className="divide-y divide-border rounded-lg border border-border">
              {upcoming.map(item => (
                <li key={item.entry.id}>
                  <Link
                    href={`/${locale}${item.path}`}
                    className={cn(
                      'flex items-center gap-3 p-3.5 transition-colors hover:bg-muted/50',
                      isRTL && 'flex-row-reverse text-right'
                    )}
                  >
                    <BookOpen
                      className="h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          'block text-sm font-medium text-foreground',
                          isRTL && 'font-arabic leading-relaxed'
                        )}
                      >
                        {item.lessonTitle[locale]}
                      </span>
                      <span className="block text-xs text-muted-foreground mt-0.5">
                        <bdi dir="ltr">{item.lessonDuration}</bdi>
                      </span>
                    </span>
                    <Arrow className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href={`/${locale}/courses`}>
                  {t.allCourses}
                  <Arrow className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </section>
        )}

        {/* ── QR code : destiné à l'affichage, pas au lecteur quotidien ── */}
        <Card className="mb-6 bg-muted/30">
          <CardContent className="p-5 sm:p-6">
            <div
              className={cn(
                'flex flex-col sm:flex-row items-center gap-5',
                isRTL && 'sm:flex-row-reverse'
              )}
            >
              <div className="shrink-0 rounded-lg bg-white p-2.5">
                <Image
                  src="/images/mosquees/ar-rayane-qr.svg"
                  alt={t.qrTitle}
                  width={128}
                  height={128}
                  className="h-32 w-32"
                  unoptimized
                />
              </div>
              <div className={cn('min-w-0 text-center sm:text-start', isRTL && 'sm:text-right')}>
                <h2
                  className={cn(
                    'inline-flex items-center gap-2 text-base font-semibold text-foreground mb-1.5',
                    isRTL && 'flex-row-reverse font-arabic leading-relaxed'
                  )}
                >
                  <QrCode className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {t.qrTitle}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{t.qrText}</p>
                <p className="text-xs font-mono text-muted-foreground/80 break-all" dir="ltr">
                  {qrTargetUrl}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Note d'inauguration : information de fond, donc en pied de page */}
        <p className="mb-4 text-center text-xs text-muted-foreground/80 leading-relaxed">
          {mosquee.inaugurationNote[locale]}
        </p>

        <div className="text-center">
          <Button asChild variant="ghost" size="sm">
            <Link href={`/${locale}`}>
              {t.backToSite}
              <Arrow className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
