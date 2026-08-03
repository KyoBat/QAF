/**
 * Page mosquée — hadith / leçon du jour
 *
 * Server component volontaire : aucun state, aucun JS envoyé au client.
 * La langue vient du segment [lang] de l'URL, pas du provider client.
 */

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Clock, MapPin, CalendarDays, ArrowLeft, ArrowRight, QrCode } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Locale } from '@/locales'
import type { Mosquee } from '@/lib/data/mosquees/types'
import type { ResolvedDaily } from '@/lib/data/mosquees/daily'

interface MosqueeDailyProps {
  locale: Locale
  mosquee: Mosquee
  today: ResolvedDaily
  upcoming: ResolvedDaily[]
  formattedDate: string
  /** URL encodée dans le QR code affiché */
  qrTargetUrl: string
}

const ui = {
  fr: {
    todayBadge: 'Aujourd’hui',
    hadithOfDay: 'Le hadith du jour',
    lessonOfDay: 'La leçon du jour',
    thinkAbout: 'La question du jour',
    readLesson: 'Lire la leçon complète',
    fromCourse: 'Tiré du cours',
    upcomingTitle: 'Les prochains jours',
    upcomingIntro: 'Un nouveau hadith ou une nouvelle leçon chaque jour, à retrouver ici après chaque prière.',
    allCourses: 'Voir les 29 cours gratuits',
    howTitle: 'Comment utiliser cette page',
    howIntro: 'Trois minutes après la prière suffisent : lisez la citation, gardez la question en tête, puis ouvrez la leçon quand vous avez un moment.',
    how1: 'Chaque jour à minuit, le hadith ou la leçon change automatiquement.',
    how2: 'La question n’attend pas de réponse écrite : elle sert à vous donner envie d’ouvrir la leçon.',
    how3: 'Tous les cours sont gratuits, sans inscription, en arabe, français et anglais.',
    qrTitle: 'Partager cette page à la mosquée',
    qrText: 'Scannez ou imprimez ce code pour l’afficher au panneau de la mosquée. Il ouvre cette page directement dans la langue du visiteur.',
    inaugurated: 'Inaugurée le',
    backToSite: 'Découvrir TahaLearn',
  },
  ar: {
    todayBadge: 'اليوم',
    hadithOfDay: 'حديث اليوم',
    lessonOfDay: 'درس اليوم',
    thinkAbout: 'سؤال اليوم',
    readLesson: 'اقرأ الدرس كاملًا',
    fromCourse: 'من دورة',
    upcomingTitle: 'الأيام القادمة',
    upcomingIntro: 'حديثٌ جديد أو درسٌ جديد كلَّ يوم، تجده هنا بعد كلِّ صلاة.',
    allCourses: 'تصفَّح 29 دورة مجانية',
    howTitle: 'كيف تستفيد من هذه الصفحة',
    howIntro: 'ثلاث دقائق بعد الصلاة تكفي: اقرأ النصّ، واحمل السؤال معك، ثمّ افتح الدرس حين يتيسّر لك.',
    how1: 'يتغيّر الحديثُ أو الدرسُ تلقائيًّا كلَّ يوم عند منتصف الليل.',
    how2: 'السؤال لا ينتظر جوابًا مكتوبًا، وإنّما يدفعك إلى فتح الدرس.',
    how3: 'جميع الدروس مجّانيّة بلا تسجيل، بالعربية والفرنسية والإنجليزية.',
    qrTitle: 'شارك هذه الصفحة في المسجد',
    qrText: 'امسح هذا الرمز أو اطبعه لتعليقه على لوحة إعلانات المسجد. يفتح الصفحةَ مباشرةً بلغة الزائر.',
    inaugurated: 'افتُتح في',
    backToSite: 'تعرَّف على منصّة طه للتعلّم',
  },
  en: {
    todayBadge: 'Today',
    hadithOfDay: 'Hadith of the day',
    lessonOfDay: 'Lesson of the day',
    thinkAbout: 'Question of the day',
    readLesson: 'Read the full lesson',
    fromCourse: 'From the course',
    upcomingTitle: 'Coming up',
    upcomingIntro: 'A new hadith or lesson every day, here after each prayer.',
    allCourses: 'Browse all 29 free courses',
    howTitle: 'How to use this page',
    howIntro: 'Three minutes after the prayer is enough: read the text, keep the question in mind, then open the lesson when you have a moment.',
    how1: 'The hadith or lesson changes automatically every day at midnight.',
    how2: 'The question expects no written answer — it is there to make you want to open the lesson.',
    how3: 'Every course is free, with no sign-up, in Arabic, French and English.',
    qrTitle: 'Share this page at the mosque',
    qrText: 'Scan or print this code to pin it on the mosque noticeboard. It opens this page directly in the visitor’s language.',
    inaugurated: 'Inaugurated on',
    backToSite: 'Discover TahaLearn',
  },
} as const

export function MosqueeDaily({
  locale,
  mosquee,
  today,
  upcoming,
  formattedDate,
  qrTargetUrl,
}: MosqueeDailyProps) {
  const isRTL = locale === 'ar'
  const t = ui[locale]
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const { entry } = today

  const lessonHref = `/${locale}${today.path}`
  const inauguratedLabel = new Intl.DateTimeFormat(
    locale === 'ar' ? 'ar-DZ' : locale === 'en' ? 'en-GB' : 'fr-FR',
    { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
  ).format(new Date(mosquee.inauguratedAt))

  return (
    <div className={cn('py-8 lg:py-12', isRTL && 'text-right')} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── En-tête mosquée ───────────────────────────────── */}
        <header className="mb-10">
          {/* En arabe le h1 porte déjà le nom arabe : ne pas l'afficher deux fois */}
          {!isRTL && (
            <p
              className="text-3xl sm:text-4xl font-bold text-primary mb-3 font-arabic leading-relaxed text-left"
              dir="rtl"
              lang="ar"
            >
              {mosquee.nameArabic}
            </p>
          )}
          <h1
            className={cn(
              'font-bold text-foreground mb-4',
              isRTL
                ? 'text-3xl sm:text-4xl font-arabic leading-relaxed'
                : 'text-2xl sm:text-3xl'
            )}
          >
            {mosquee.name[locale]}
          </h1>

          <div
            className={cn(
              'flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4',
              isRTL && 'flex-row-reverse justify-end'
            )}
          >
            <span className={cn('inline-flex items-center gap-1.5', isRTL && 'flex-row-reverse')}>
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {mosquee.address[locale]} — {mosquee.city[locale]}, {mosquee.country[locale]}
            </span>
            <span className={cn('inline-flex items-center gap-1.5', isRTL && 'flex-row-reverse')}>
              <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
              {t.inaugurated} {inauguratedLabel}
            </span>
          </div>

          <p className={cn('text-lg text-muted-foreground leading-relaxed', isRTL && 'leading-loose')}>
            {mosquee.intro[locale]}
          </p>
        </header>

        {/* ── Contenu du jour ───────────────────────────────── */}
        <Card className="mb-8 border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <div
              className={cn(
                'flex flex-wrap items-center gap-3 mb-5',
                isRTL && 'flex-row-reverse justify-end'
              )}
            >
              <Badge variant="default">{t.todayBadge}</Badge>
              <span className="text-sm text-muted-foreground">{formattedDate}</span>
            </div>

            <h2
              className={cn(
                'text-xl sm:text-2xl font-semibold text-foreground mb-5',
                isRTL && 'font-arabic leading-relaxed'
              )}
            >
              {entry.kind === 'hadith' ? t.hadithOfDay : t.lessonOfDay}
            </h2>

            {/* Citation arabe + traduction, uniquement pour les hadiths */}
            {entry.quote && (
              <figure className="mb-6">
                <blockquote
                  /* dir=rtl : inline-start = droite, donc la barre longe bien le début du texte arabe */
                  className="text-xl sm:text-2xl font-arabic leading-loose text-foreground text-right border-s-4 border-primary/40 ps-4"
                  dir="rtl"
                  lang="ar"
                >
                  {entry.quote.ar}
                </blockquote>

                {/* En arabe la traduction répète le texte : on ne l'affiche pas deux fois */}
                {locale !== 'ar' && (
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed italic">
                    {entry.quote.translation[locale]}
                  </p>
                )}

                <figcaption className="mt-3 text-sm font-medium text-primary">
                  {entry.quote.source[locale]}
                </figcaption>
              </figure>
            )}

            {/* La question — cœur de la page */}
            <div className="rounded-lg border border-primary/20 bg-background/60 p-4 sm:p-5 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                {t.thinkAbout}
              </p>
              <p
                className={cn(
                  'text-base sm:text-lg text-foreground leading-relaxed',
                  isRTL && 'font-arabic leading-loose'
                )}
              >
                {entry.question[locale]}
              </p>
            </div>

            {/* Renvoi vers la leçon */}
            <div className={cn('space-y-3', isRTL && 'text-right')}>
              <p className="text-sm text-muted-foreground">
                {t.fromCourse} <span className="font-medium text-foreground">{today.courseTitle[locale]}</span>
              </p>
              <p
                className={cn(
                  'text-lg font-semibold text-foreground',
                  isRTL && 'font-arabic leading-relaxed'
                )}
              >
                {today.lessonTitle[locale]}
              </p>
              <div
                className={cn(
                  'flex flex-wrap items-center gap-4',
                  isRTL && 'flex-row-reverse justify-end'
                )}
              >
                <Button asChild size="lg">
                  <Link href={lessonHref}>
                    {t.readLesson}
                    <Arrow className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
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
            </div>
          </CardContent>
        </Card>

        {/* ── Mode d'emploi ─────────────────────────────────── */}
        <section className="mb-8" aria-labelledby="how-title">
          <h2
            id="how-title"
            className={cn(
              'text-xl font-semibold text-foreground mb-3',
              isRTL && 'font-arabic leading-relaxed'
            )}
          >
            {t.howTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">{t.howIntro}</p>
          <ul
            className={cn(
              'space-y-2 text-sm text-muted-foreground list-disc',
              isRTL ? 'me-5' : 'ms-5'
            )}
          >
            <li>{t.how1}</li>
            <li>{t.how2}</li>
            <li>{t.how3}</li>
          </ul>
        </section>

        {/* ── Aperçu des jours suivants ─────────────────────── */}
        {upcoming.length > 0 && (
          <section className="mb-8" aria-labelledby="upcoming-title">
            <h2
              id="upcoming-title"
              className={cn(
                'text-xl font-semibold text-foreground mb-2',
                isRTL && 'font-arabic leading-relaxed'
              )}
            >
              {t.upcomingTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.upcomingIntro}</p>

            <ul className="space-y-3">
              {upcoming.map(item => (
                <li key={item.entry.id}>
                  <Link
                    href={`/${locale}${item.path}`}
                    className={cn(
                      'flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50',
                      isRTL && 'flex-row-reverse text-right'
                    )}
                  >
                    <BookOpen className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                    <span className="min-w-0">
                      <span
                        className={cn(
                          'block font-medium text-foreground',
                          isRTL && 'font-arabic leading-relaxed'
                        )}
                      >
                        {item.lessonTitle[locale]}
                      </span>
                      <span className="block text-sm text-muted-foreground mt-1">
                        {item.courseTitle[locale]} — <bdi dir="ltr">{item.lessonDuration}</bdi>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={cn('mt-5', isRTL && 'text-right')}>
              <Button asChild variant="outline">
                <Link href={`/${locale}/courses`}>
                  {t.allCourses}
                  <Arrow className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </section>
        )}

        {/* ── QR code ───────────────────────────────────────── */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div
              className={cn(
                'flex flex-col sm:flex-row items-center gap-6',
                isRTL && 'sm:flex-row-reverse'
              )}
            >
              <div className="shrink-0 rounded-lg bg-white p-3">
                <Image
                  src="/images/mosquees/ar-rayane-qr.svg"
                  alt={t.qrTitle}
                  width={160}
                  height={160}
                  className="h-40 w-40"
                  unoptimized
                />
              </div>
              <div className={cn('min-w-0', isRTL && 'text-right')}>
                <h2
                  className={cn(
                    'inline-flex items-center gap-2 text-xl font-semibold text-foreground mb-2',
                    isRTL && 'flex-row-reverse font-arabic leading-relaxed'
                  )}
                >
                  <QrCode className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {t.qrTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">{t.qrText}</p>
                <p className="text-sm font-mono text-muted-foreground break-all" dir="ltr">
                  {qrTargetUrl}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className={cn(isRTL && 'text-right')}>
          <Button asChild variant="ghost">
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
