'use client'

import Link from 'next/link'
import { BookOpen, Users, GraduationCap, ChevronRight, Star, Clock, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import { coursesData, getFeaturedCourses } from '@/lib/data/courses/index'

export default function HomePage() {
  const { locale, t, isRTL } = useLocale()

  // Récupération des cours publiés
  const allCourses = coursesData.filter(c => c.published)
  
  // Calcul dynamique des stats
  const totalCourses = allCourses.length
  const totalLessons = allCourses.reduce((acc, course) => acc + course.lessons.length, 0)
  
  // Cours à la une (premier cours featured ou le cours Fiqh Salat)
  const featuredCourses = getFeaturedCourses()
  const featuredCourse = featuredCourses[0] || allCourses.find(c => c.slug === 'fiqh-salat') || allCourses[0]

  const features = [
    {
      icon: BookOpen,
      title: t('home.features.quality.title'),
      description: t('home.features.quality.description'),
    },
    {
      icon: Users,
      title: t('home.features.accessible.title'),
      description: t('home.features.accessible.description'),
    },
    {
      icon: GraduationCap,
      title: t('home.features.structured.title'),
      description: t('home.features.structured.description'),
    },
  ]

  const stats = [
    { value: totalCourses.toString(), label: t('home.stats.courses') },
    { value: `${totalLessons}+`, label: t('home.stats.lessons') },
    { value: '3', label: t('home.stats.languages') },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-30 dark:hidden" />
        <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] bg-repeat opacity-25 hidden dark:block" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'flex flex-col items-center text-center',
            isRTL && 'font-arabic'
          )}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>{t('app.tagline')}</span>
            </div>

            {/* Title */}
            <h1 className={cn(
              'text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight',
              isRTL && 'leading-relaxed'
            )}>
              {t('home.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
              {t('home.hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className={cn(
              'flex flex-col sm:flex-row gap-4',
              isRTL && 'flex-row-reverse'
            )}>
              <Button size="lg" asChild className="gap-2">
                <Link href="/courses">
                  <span>{t('home.hero.cta')}</span>
                  <ChevronRight className={cn('h-5 w-5', isRTL && 'rotate-180')} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">
                  {t('nav.courses')}
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className={cn(
            'mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto',
            isRTL && 'direction-rtl'
          )}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn('text-center mb-12', isRTL && 'font-arabic')}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('home.features.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className={cn(
                    'flex flex-col items-center text-center',
                    isRTL && 'font-arabic'
                  )}>
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      {featuredCourse && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cn('text-center mb-12', isRTL && 'font-arabic')}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                <span>{t('home.featured.title')}</span>
              </div>
            </div>

            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className={cn(
                'grid md:grid-cols-2 gap-0',
                isRTL && 'md:grid-flow-col-dense'
              )}>
                {/* Course Image/Illustration */}
                <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="text-8xl mb-4">⚖️</div>
                    <Badge variant="secondary" className="gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {t('home.featured.new')}
                    </Badge>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 border border-primary/20 rounded-full" />
                  <div className="absolute bottom-4 right-4 w-32 h-32 border border-primary/10 rounded-full" />
                </div>

                {/* Course Info */}
                <CardContent className={cn('p-8 flex flex-col justify-center', isRTL && 'text-right')}>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3">
                      {t(`courses.categories.${featuredCourse.category}`)}
                    </Badge>
                    <h3 className={cn(
                      'text-2xl sm:text-3xl font-bold text-foreground mb-3',
                      isRTL && 'font-arabic'
                    )}>
                      {featuredCourse.title[locale]}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {featuredCourse.description[locale]}
                    </p>
                  </div>

                  {/* Course Meta */}
                  <div className={cn(
                    'flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground',
                    isRTL && 'flex-row-reverse'
                  )}>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{featuredCourse.lessons.length} {t('courses.lessons')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredCourse.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>{t(`courses.levels.${featuredCourse.level}`)}</span>
                    </div>
                  </div>

                  {/* Lessons Preview */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {featuredCourse.lessons.slice(0, 4).map((lesson, idx) => (
                        <Badge key={lesson.id} variant="secondary" className="text-xs">
                          {idx + 1}. {lesson.title[locale].slice(0, 25)}{lesson.title[locale].length > 25 ? '...' : ''}
                        </Badge>
                      ))}
                      {featuredCourse.lessons.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{featuredCourse.lessons.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button size="lg" asChild className="gap-2 w-fit">
                    <Link href={`/courses/${featuredCourse.slug}`}>
                      <span>{t('home.featured.startNow')}</span>
                      <ChevronRight className={cn('h-5 w-5', isRTL && 'rotate-180')} />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'flex flex-col sm:flex-row items-center justify-between mb-12 gap-4',
            isRTL && 'flex-row-reverse'
          )}>
            <div className={isRTL ? 'text-right' : ''}>
              <h2 className={cn(
                'text-3xl sm:text-4xl font-bold text-foreground mb-2',
                isRTL && 'font-arabic'
              )}>
                {t('courses.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('home.categoriesPreview.subtitle')}
              </p>
            </div>
            <Button variant="outline" asChild className="gap-2">
              <Link href="/courses">
                <span>{t('courses.viewAll')}</span>
                <ChevronRight className={cn('h-4 w-4', isRTL && 'rotate-180')} />
              </Link>
            </Button>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: 'tajweed', emoji: '📖' },
              { key: 'fiqh', emoji: '⚖️' },
              { key: 'aqeedah', emoji: '💫' },
              { key: 'seerah', emoji: '🌙' },
            ].map((category) => {
              const count = allCourses.filter(c => c.category === category.key).length
              return (
                <Link 
                  key={category.key}
                  href={`/courses?category=${category.key}`}
                  className="group"
                >
                  <Card className="p-6 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <div className="text-4xl mb-3">{category.emoji}</div>
                    <h3 className={cn(
                      'font-semibold text-foreground mb-1 group-hover:text-primary transition-colors',
                      isRTL && 'font-arabic'
                    )}>
                      {t(`courses.categories.${category.key}`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {count} {count > 1 ? t('courses.courses') : t('courses.course')}
                    </p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={cn(
            'text-3xl sm:text-4xl font-bold text-primary-foreground mb-4',
            isRTL && 'font-arabic'
          )}>
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            asChild 
            className="gap-2"
          >
            <Link href="/courses">
              <span>{t('home.hero.cta')}</span>
              <ChevronRight className={cn('h-5 w-5', isRTL && 'rotate-180')} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
