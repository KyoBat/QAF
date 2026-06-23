/**
 * Layout for localized routes: /fr/*, /ar/*, /en/*
 * Reads [lang] param from URL and initialises LocaleProvider with it.
 */

import { notFound } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from '@/components/providers'
import { Header, Footer } from '@/components/layout'
import { DocumentShell } from '@/components/DocumentShell'
import { coursesData } from '@/lib/data/courses/index'
import { locales, type Locale } from '@/locales'

const VALID_LOCALES = Object.keys(locales) as Locale[]

// Lightweight search data for Command palette (server-side to avoid 12MB client bundle)
function getCommandCourses() {
  return coursesData
    .filter(c => c.published)
    .map(course => ({
      slug: course.slug,
      title: course.title,
      description: course.description,
      lessons: course.lessons.map(lesson => ({
        id: lesson.id,
        title: lesson.title,
      })),
    }))
}

interface LangLayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params

  if (!VALID_LOCALES.includes(lang as Locale)) {
    notFound()
  }

  const locale = lang as Locale
  const commandCourses = getCommandCourses()

  return (
    <DocumentShell lang={locale} dir={locales[locale].dir}>
      <Providers initialLocale={locale}>
        <Header commandCourses={commandCourses} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </Providers>
    </DocumentShell>
  )
}
