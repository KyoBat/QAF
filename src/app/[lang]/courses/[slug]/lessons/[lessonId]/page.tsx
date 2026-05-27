import { notFound } from 'next/navigation'
import { getLesson, coursesData } from '@/lib/data'
import { LessonPageClient } from '@/app/courses/[slug]/lessons/[lessonId]/LessonPageClient'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo'
import type { Locale } from '@/locales'
import { buildHreflangAlternates } from '@/lib/utils'

const LOCALES: Locale[] = ['fr', 'ar', 'en']

interface LessonPageProps {
  params: Promise<{ lang: string; slug: string; lessonId: string }>
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string; lessonId: string }[] = []
  LOCALES.forEach(lang => {
    coursesData
      .filter(course => course.published)
      .forEach(course => {
        course.lessons.forEach(lesson => {
          params.push({ lang, slug: course.slug, lessonId: lesson.id })
        })
      })
  })
  return params
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { lang, slug, lessonId } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
  const data = await getLesson(slug, lessonId)

  if (!data) {
    return {
      title: locale === 'ar' ? 'الدرس غير موجود' : locale === 'en' ? 'Lesson Not Found' : 'Leçon Introuvable',
    }
  }

  const lessonAny = data.lesson as typeof data.lesson & { description?: { fr?: string; ar?: string; en?: string } }
  const lessonTitle = data.lesson.title[locale] ?? data.lesson.title.fr
  const courseTitle = data.course.title[locale] ?? data.course.title.fr
  const lessonDescription = lessonAny.description?.[locale] ?? lessonAny.description?.fr
  const description = lessonDescription
    ? `${lessonDescription} — ${locale === 'ar' ? `درس ${data.lessonNumber}/${data.totalLessons}` : locale === 'en' ? `Lesson ${data.lessonNumber}/${data.totalLessons}` : `Leçon ${data.lessonNumber}/${data.totalLessons}`} "${courseTitle}".`
    : locale === 'ar'
      ? `درس ${data.lessonNumber} من ${data.totalLessons} في دورة "${courseTitle}".`
      : locale === 'en'
        ? `Lesson ${data.lessonNumber} of ${data.totalLessons} in "${courseTitle}".`
        : `Leçon ${data.lessonNumber} sur ${data.totalLessons} du cours "${courseTitle}". Apprenez ${lessonTitle} avec preuves du Coran et Sunna.`

  const badge = locale === 'ar'
    ? `درس ${data.lessonNumber} / ${data.totalLessons}`
    : `Lesson ${data.lessonNumber} / ${data.totalLessons}`

  const ogImageUrl = `https://www.tahalearn.com/api/og?${new URLSearchParams({
    title: lessonTitle,
    sub: courseTitle,
    img: (data.course.image ?? '/og-image.png').replace(/\.svg$/, '.png'),
    badge,
  }).toString()}`

  return {
    title: `${lessonTitle} | ${courseTitle}`,
    description,
    keywords: [...data.course.tags, data.course.category, lessonTitle],
    alternates: {
      canonical: `https://www.tahalearn.com/${locale}/courses/${slug}/lessons/${lessonId}`,
      languages: buildHreflangAlternates(`/courses/${slug}/lessons/${lessonId}`),
    },
    openGraph: {
      title: `${lessonTitle} | ${courseTitle}`,
      description,
      url: `https://www.tahalearn.com/${locale}/courses/${slug}/lessons/${lessonId}`,
      siteName: 'TahaLearn',
      type: 'article',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: lessonTitle }],
    },
    twitter: { card: 'summary_large_image', title: `${lessonTitle} | ${courseTitle}`, description, images: [ogImageUrl] },
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lang, slug, lessonId } = await params
  const locale = (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
  const data = await getLesson(slug, lessonId)

  if (!data) notFound()

  const lightData = {
    ...data,
    course: {
      ...data.course,
      lessons: data.course.lessons.map(l => ({
        id: l.id, title: l.title, order: l.order, duration: l.duration,
        videoUrl: l.videoUrl || '',
        content: l.id === lessonId ? l.content : { fr: '', ar: '', en: '' },
      })),
    },
    prevLesson: data.prevLesson ? { id: data.prevLesson.id, title: data.prevLesson.title, order: data.prevLesson.order, duration: data.prevLesson.duration, videoUrl: data.prevLesson.videoUrl || '', content: { fr: '', ar: '', en: '' } } : null,
    nextLesson: data.nextLesson ? { id: data.nextLesson.id, title: data.nextLesson.title, order: data.nextLesson.order, duration: data.nextLesson.duration, videoUrl: data.nextLesson.videoUrl || '', content: { fr: '', ar: '', en: '' } } : null,
  }

  const localTitle = data.course.title[locale] ?? data.course.title.fr
  const localLessonTitle = data.lesson.title[locale] ?? data.lesson.title.fr

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: locale === 'ar' ? 'الرئيسية' : locale === 'en' ? 'Home' : 'Accueil', url: `/${locale}` },
        { name: locale === 'ar' ? 'الدورات' : locale === 'en' ? 'Courses' : 'Cours', url: `/${locale}/courses` },
        { name: localTitle, url: `/${locale}/courses/${slug}` },
        { name: localLessonTitle },
      ]} />
      <LearningResourceJsonLd
        lesson={data.lesson}
        course={data.course}
        lessonNumber={data.lessonNumber}
        totalLessons={data.totalLessons}
        slug={slug}
        lessonId={lessonId}
      />
      <LessonPageClient data={lightData} />
    </>
  )
}
