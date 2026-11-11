/**
 * Page d'arrivée après le clic dans le mail de double confirmation Brevo
 * (redirectionUrl envoyée par /api/newsletter). Non indexée.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import type { Locale } from '@/locales'

const LOCALES: Locale[] = ['fr', 'ar', 'en']

export async function generateStaticParams() {
  return LOCALES.map(lang => ({ lang }))
}

const TEXTS: Record<Locale, { title: string; message: string; cta: string }> = {
  fr: {
    title: 'Inscription confirmée !',
    message: 'Merci, votre adresse est confirmée. Vous recevrez nos nouveaux cours et rappels, au maximum un email par semaine. Barak Allahu fikum !',
    cta: 'Découvrir les cours',
  },
  ar: {
    title: 'تم تأكيد اشتراكك!',
    message: 'شكراً لك، تم تأكيد بريدك الإلكتروني. ستصلك دوراتنا الجديدة وتذكيراتنا، بحد أقصى رسالة واحدة في الأسبوع. بارك الله فيكم!',
    cta: 'اكتشف الدورات',
  },
  en: {
    title: 'Subscription confirmed!',
    message: "Thank you, your email is confirmed. You'll receive our new courses and reminders, at most one email a week. Barak Allahu feekum!",
    cta: 'Browse the courses',
  },
}

function toLocale(lang: string): Locale {
  return (LOCALES.includes(lang as Locale) ? lang : 'fr') as Locale
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: TEXTS[toLocale(lang)].title,
    robots: { index: false, follow: false },
  }
}

export default async function NewsletterConfirmedPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = toLocale(lang)
  const text = TEXTS[locale]
  const isRTL = locale === 'ar'

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-4 p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className={`text-2xl sm:text-3xl font-bold text-emerald-800 dark:text-emerald-200 ${isRTL ? 'font-arabic' : ''}`}>
          {text.title}
        </h1>
        <p className={`text-emerald-700/90 dark:text-emerald-300/90 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
          {text.message}
        </p>
        <Link
          href={`/${locale}/courses`}
          className="mt-2 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {text.cta}
        </Link>
      </div>
    </div>
  )
}
