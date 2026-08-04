/**
 * Page mosquée — la leçon de la semaine
 *
 * Server component, à une exception près : le bouton de partage.
 * Un seul bloc domine : la leçon et sa question. Le parcours est du contexte,
 * pas un bouton concurrent — l'objectif est qu'on lise, pas qu'on choisisse.
 */

import Link from 'next/link'
import Image from 'next/image'
import {
  BookOpen,
  Clock,
  MapPin,
  ArrowLeft,
  ArrowRight,
  QrCode,
  Moon,
  CalendarRange,
  Route,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Locale } from '@/locales'
import type { Mosquee } from '@/lib/data/mosquees/types'
import type { WeeklyLesson } from '@/lib/data/mosquees/weekly'
import { ShareWeekly } from './ShareWeekly'

interface MosqueeWeeklyProps {
  locale: Locale
  mosquee: Mosquee
  lesson: WeeklyLesson
  upcoming: WeeklyLesson[]
  weekRange: string
  hijriDate: string
  /** URL canonique de la page, partagée telle quelle */
  pageUrl: string
  /** URL encodée dans le QR code affiché */
  qrTargetUrl: string
}

const ui = {
  fr: {
    lessonOfWeek: 'La leçon de la semaine',
    parcoursPosition: (name: string, n: number, total: number) => `${name} · ${n} / ${total}`,
    thinkAbout: 'La question de la semaine',
    readLesson: 'Lire la leçon',
    wholeCourse: 'Voir tout le parcours',
    rhythm: 'Une nouvelle leçon chaque vendredi — elle reste affichée toute la semaine.',
    upcomingTitle: 'Les prochaines semaines',
    upcomingNote:
      'Sauf pendant les mois où un sujet s’impose (Ramadan, Dhul-Hijja…), la série reprend ensuite où elle s’était arrêtée.',
    allCourses: 'Voir les 29 cours gratuits',
    qrTitle: 'Afficher cette page à la mosquée',
    qrText:
      'Imprimez ce code pour le panneau d’affichage. Il ouvre la page directement dans la langue du visiteur.',
    shareTitle: 'La leçon de la semaine',
    backToSite: 'Découvrir TahaLearn',
  },
  ar: {
    lessonOfWeek: 'درس الأسبوع',
    parcoursPosition: (name: string, n: number, total: number) => `${name} · ${n} من ${total}`,
    thinkAbout: 'سؤال الأسبوع',
    readLesson: 'اقرأ الدرس',
    wholeCourse: 'تصفَّح المسار كاملًا',
    rhythm: 'درسٌ جديد كلَّ جمعة — ويبقى معروضًا طوال الأسبوع.',
    upcomingTitle: 'الأسابيع القادمة',
    upcomingNote:
      'إلّا في الأشهر التي يفرض فيها موضوعٌ نفسَه (رمضان، ذو الحجّة…)، فتستأنف السلسلةُ بعدها من حيث توقّفت.',
    allCourses: 'تصفَّح 29 دورة مجانية',
    qrTitle: 'اعرض هذه الصفحة في المسجد',
    qrText: 'اطبع هذا الرمز لتعليقه على لوحة الإعلانات. يفتح الصفحةَ مباشرةً بلغة الزائر.',
    shareTitle: 'درس الأسبوع',
    backToSite: 'تعرَّف على منصّة طه للتعلّم',
  },
  en: {
    lessonOfWeek: 'Lesson of the week',
    parcoursPosition: (name: string, n: number, total: number) => `${name} · ${n} of ${total}`,
    thinkAbout: 'Question of the week',
    readLesson: 'Read the lesson',
    wholeCourse: 'See the whole track',
    rhythm: 'A new lesson every Friday — it stays up all week.',
    upcomingTitle: 'Coming weeks',
    upcomingNote:
      'Except during months that call for a specific topic (Ramadan, Dhul-Hijja…), the series then resumes where it left off.',
    allCourses: 'Browse all 29 free courses',
    qrTitle: 'Display this page at the mosque',
    qrText:
      'Print this code for the noticeboard. It opens the page directly in the visitor’s language.',
    shareTitle: 'Lesson of the week',
    backToSite: 'Discover TahaLearn',
  },
} as const

export function MosqueeWeekly({
  locale,
  mosquee,
  lesson,
  upcoming,
  weekRange,
  hijriDate,
  pageUrl,
  qrTargetUrl,
}: MosqueeWeeklyProps) {
  const isRTL = locale === 'ar'
  const t = ui[locale]
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const { entry } = lesson

  // Ce qui part dans WhatsApp : la citation si elle existe, sinon le titre,
  // puis toujours la question — c'est elle l'accroche.
  const shareText = [
    entry.quote ? entry.quote.ar : lesson.lessonTitle[locale],
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

          <p
            className={cn(
              'mt-3 text-sm text-muted-foreground leading-relaxed',
              isRTL && 'leading-loose'
            )}
          >
            {mosquee.intro[locale]}
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Repère temporel */}
        <div
          className={cn(
            'flex flex-wrap items-center gap-x-3 gap-y-1.5 py-4 text-sm',
            isRTL && 'flex-row-reverse'
          )}
        >
          <span
            className={cn(
              'inline-flex items-center gap-1.5 font-medium text-foreground',
              isRTL && 'flex-row-reverse'
            )}
          >
            <CalendarRange className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {weekRange}
          </span>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-primary/80',
              isRTL && 'flex-row-reverse'
            )}
          >
            <Moon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {hijriDate}
          </span>
        </div>

        {/* ── LA LEÇON DE LA SEMAINE — le seul bloc qui compte ── */}
        <Card className="mb-6 border-primary/25 shadow-lg ring-1 ring-primary/10 bg-gradient-to-b from-primary/[0.07] to-card overflow-hidden">
          <CardContent className="p-5 sm:p-8">
            <div
              className={cn(
                'flex flex-wrap items-center gap-x-3 gap-y-2 mb-5',
                isRTL && 'flex-row-reverse'
              )}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                {t.lessonOfWeek}
              </span>
              {/* Le parcours : contexte et progression, pas une action */}
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-xs text-muted-foreground',
                  isRTL && 'flex-row-reverse'
                )}
              >
                <Route className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {t.parcoursPosition(
                  lesson.parcoursName[locale],
                  lesson.positionInParcours,
                  lesson.parcoursLength
                )}
              </span>
            </div>

            {/* Pourquoi ce sujet maintenant — seulement quand le mois l'impose */}
            {lesson.seasonalReason && (
              <p
                className={cn(
                  'mb-5 rounded-lg bg-primary/[0.08] px-4 py-3 text-sm font-medium text-primary leading-relaxed',
                  isRTL ? 'border-e-4 border-e-primary' : 'border-s-4 border-s-primary'
                )}
              >
                {lesson.seasonalReason[locale]}
              </p>
            )}

            <h2
              className={cn(
                'text-2xl sm:text-3xl font-bold text-foreground mb-4',
                isRTL && 'font-arabic leading-relaxed'
              )}
            >
              {lesson.lessonTitle[locale]}
            </h2>

            {/* Citation : le cœur émotionnel des semaines « hadith » */}
            {entry.quote && (
              <figure className="mb-6">
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
                'rounded-xl border border-primary/20 bg-background/70 p-5 sm:p-6 mb-6',
                isRTL ? 'border-e-4 border-e-primary' : 'border-s-4 border-s-primary'
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

            <div className={cn('flex flex-wrap items-center gap-3', isRTL && 'flex-row-reverse')}>
              <Button asChild size="lg" className="flex-1 sm:flex-none">
                <Link href={`/${locale}${lesson.path}`}>
                  {t.readLesson}
                  <Arrow className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <ShareWeekly
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
                <bdi dir="ltr">{lesson.lessonDuration}</bdi>
              </span>
            </div>

            {/* Le cours entier reste accessible, mais en lien discret */}
            <p className="mt-5 text-sm text-muted-foreground">
              <Link
                href={`/${locale}${lesson.coursePath}`}
                className="font-medium text-primary hover:underline"
              >
                {t.wholeCourse}
              </Link>
              {' — '}
              {lesson.courseTitle[locale]}
            </p>
          </CardContent>
        </Card>

        <p className="mb-10 text-center text-sm text-muted-foreground">{t.rhythm}</p>

        {/* ── Prochaines semaines ────────────────────────────── */}
        {upcoming.length > 0 && (
          <section className="mb-10" aria-labelledby="upcoming-title">
            <h2
              id="upcoming-title"
              className={cn(
                'text-base font-semibold text-foreground mb-1.5',
                isRTL && 'font-arabic leading-relaxed'
              )}
            >
              {t.upcomingTitle}
            </h2>
            <p className="mb-3 text-xs text-muted-foreground leading-relaxed">{t.upcomingNote}</p>

            <ul className="divide-y divide-border rounded-lg border border-border">
              {upcoming.map(item => (
                <li key={item.path}>
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
                        {item.parcoursName[locale]} · <bdi dir="ltr">{item.lessonDuration}</bdi>
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

        {/* ── QR code : destiné à l'affichage, pas au lecteur hebdomadaire ── */}
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
