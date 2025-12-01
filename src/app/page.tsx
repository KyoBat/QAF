'use client'

import Link from 'next/link'
import { BookOpen, Users, GraduationCap, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

export default function HomePage() {
  const { locale, t, isRTL } = useLocale()

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
    { value: '5+', label: locale === 'ar' ? 'دورات' : locale === 'en' ? 'Courses' : 'Cours' },
    { value: '15+', label: locale === 'ar' ? 'دروس' : locale === 'en' ? 'Lessons' : 'Leçons' },
    { value: '3', label: locale === 'ar' ? 'لغات' : locale === 'en' ? 'Languages' : 'Langues' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        
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
                {locale === 'ar' 
                  ? 'اكتشف مجموعة متنوعة من الدورات في العلوم الإسلامية' 
                  : locale === 'en'
                  ? 'Discover a variety of courses in Islamic sciences'
                  : 'Découvrez une variété de cours en sciences islamiques'
                }
              </p>
            </div>
            <Button variant="outline" asChild className="gap-2">
              <Link href="/courses">
                <span>{locale === 'ar' ? 'عرض الكل' : locale === 'en' ? 'View All' : 'Voir tout'}</span>
                <ChevronRight className={cn('h-4 w-4', isRTL && 'rotate-180')} />
              </Link>
            </Button>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: 'tajweed', emoji: '📖', count: 1 },
              { key: 'fiqh', emoji: '⚖️', count: 1 },
              { key: 'aqeedah', emoji: '💫', count: 1 },
              { key: 'seerah', emoji: '🌙', count: 1 },
            ].map((category) => (
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
                    {category.count} {category.count > 1 ? t('courses.lessons') : t('courses.lesson')}
                  </p>
                </Card>
              </Link>
            ))}
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
            {locale === 'ar' 
              ? 'ابدأ رحلتك التعليمية اليوم' 
              : locale === 'en'
              ? 'Start Your Learning Journey Today'
              : 'Commencez votre parcours d\'apprentissage aujourd\'hui'
            }
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            {locale === 'ar'
              ? 'انضم إلى الآلاف من الطلاب الذين يتعلمون العلوم الإسلامية'
              : locale === 'en'
              ? 'Join thousands of students learning Islamic sciences'
              : 'Rejoignez des milliers d\'étudiants qui apprennent les sciences islamiques'
            }
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
