'use client'

import dynamic from 'next/dynamic'
import { useLocale } from '@/components/providers'
import NewsletterHome from '@/components/ui/newsletter-home'
import TestimonialsSection from '@/components/ui/testimonials-section'
import HeroSection from '@/components/home/HeroSection'
import ValuePropositionSection from '@/components/home/ValuePropositionSection'
import FeaturedCourseSection from '@/components/home/FeaturedCourseSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import type { Course } from '@/lib/data/courses/types'

interface HomePageClientProps {
  featuredCourses: Course[]
  totalCourses: number
  totalLessons: number
  coursesPerCategory: Record<string, number>
}

export default function HomePageClient({ 
  featuredCourses, 
  totalCourses, 
  totalLessons,
  coursesPerCategory 
}: HomePageClientProps) {
  const { locale, t, isRTL } = useLocale()

  const stats = [
    { value: totalCourses, label: t('home.stats.courses'), suffix: '' },
    { value: totalLessons, label: t('home.stats.lessons'), suffix: '+' },
    { value: 3, label: t('home.stats.languages'), suffix: '' },
  ]

  const categories = [
    { key: 'hadith', emoji: '📜', comingSoon: false },
    { key: 'fiqh', emoji: '⚖️', comingSoon: false },
    { key: 'aqeedah', emoji: '💫', comingSoon: false },
    { key: 'seerah', emoji: '🌙', comingSoon: false },
    { key: 'history', emoji: '🕌', comingSoon: false },
    { key: 'spirituality', emoji: '🤲', comingSoon: false },
  ]

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section - Attention & Promise */}
      <HeroSection 
        featuredCourse={featuredCourses[0] || null}
        stats={stats}
        isRTL={isRTL}
        t={t}
      />

      {/* 2. Categories Preview - Quick Navigation (High Priority) */}
      <CategoriesSection
        categories={categories}
        coursesPerCategory={coursesPerCategory}
        isRTL={isRTL}
        t={t}
      />

      {/* 3. Featured Courses Carousel - Quick Access for Mobile Users */}
      {featuredCourses.length > 0 && (
        <FeaturedCourseSection
          featuredCourses={featuredCourses}
          locale={locale}
          isRTL={isRTL}
          t={t}
        />
      )}

      {/* 4. Testimonials - Social Proof (Show first) */}
      <TestimonialsSection />

      {/* 5. Newsletter CTA - Capture before explaining */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterHome />
        </div>
      </section>

      {/* 6. Value Proposition - Mission + Benefits (Explain last) */}
      <ValuePropositionSection isRTL={isRTL} t={t} />
    </div>
  )
}
