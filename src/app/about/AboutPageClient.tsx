'use client'

import Link from 'next/link'
import { Heart, Users, BookOpen, Globe, Target, Sparkles, Mail, ChevronRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

interface AboutPageClientProps {
  totalCourses: number
  totalLessons: number
}

export default function AboutPageClient({ totalCourses, totalLessons }: AboutPageClientProps) {
  const { t, isRTL } = useLocale()

  const values = [
    {
      icon: Heart,
      title: t('about.values.sincerity.title'),
      description: t('about.values.sincerity.description'),
    },
    {
      icon: BookOpen,
      title: t('about.values.authenticity.title'),
      description: t('about.values.authenticity.description'),
    },
    {
      icon: Users,
      title: t('about.values.accessibility.title'),
      description: t('about.values.accessibility.description'),
    },
    {
      icon: Globe,
      title: t('about.values.universality.title'),
      description: t('about.values.universality.description'),
    },
  ]

  const stats = [
    { value: totalCourses.toString(), label: t('about.stats.courses') },
    { value: `${totalLessons}+`, label: t('about.stats.lessons') },
    { value: '3', label: t('about.stats.languages') },
    { value: '100%', label: t('about.stats.free') },
  ]

  const features = [
    t('about.features.quran'),
    t('about.features.hadith'),
    t('about.features.references'),
    t('about.features.trilingual'),
    t('about.features.progressive'),
    t('about.features.noAds'),
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 gap-2">
            <Sparkles className="h-4 w-4" />
            {t('about.badge')}
          </Badge>
          
          <h1 className={cn(
            'text-4xl sm:text-5xl font-bold text-foreground mb-6',
            isRTL && 'font-arabic leading-relaxed'
          )}>
            {t('about.hero.title')}
          </h1>
          
          <p className={cn(
            'text-xl text-muted-foreground max-w-2xl mx-auto mb-8',
            isRTL && 'font-arabic'
          )}>
            {t('about.hero.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-2 text-primary font-arabic text-2xl">
            <span>وَقُل رَّبِّ زِدْنِي عِلْمًا</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? 'order-2' : ''}>
              <Badge variant="outline" className="mb-4">
                <Target className="h-4 w-4 mr-2" />
                {t('about.mission.badge')}
              </Badge>
              <h2 className={cn(
                'text-3xl font-bold text-foreground mb-4',
                isRTL && 'font-arabic'
              )}>
                {t('about.mission.title')}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('about.mission.description')}
              </p>
              <div className="space-y-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={cn('grid grid-cols-2 gap-4', isRTL ? 'order-1' : '')}>
              {stats.map((stat, idx) => (
                <Card key={idx} className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={cn(
              'text-3xl font-bold text-foreground mb-4',
              isRTL && 'font-arabic'
            )}>
              {t('about.values.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center p-6 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className={cn(
                  'text-lg font-semibold text-foreground mb-2',
                  isRTL && 'font-arabic'
                )}>
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={cn(
            'text-3xl font-bold text-foreground mb-6',
            isRTL && 'font-arabic'
          )}>
            {t('about.whyFree.title')}
          </h2>
          <blockquote className="text-xl text-muted-foreground italic mb-4 font-arabic">
            {`"مَنْ سُئِلَ عَنْ عِلْمٍ فَكَتَمَهُ أُلْجِمَ بِلِجَامٍ مِنْ نَارٍ يَوْمَ الْقِيَامَةِ"`}
          </blockquote>
          <p className="text-sm text-muted-foreground mb-6">
            {t('about.whyFree.hadith')}
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('about.whyFree.description')}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={cn(
            'text-3xl font-bold text-primary-foreground mb-4',
            isRTL && 'font-arabic'
          )}>
            {t('about.cta.title')}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            {t('about.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="gap-2">
              <Link href="/courses">
                <span>{t('about.cta.courses')}</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="mailto:tahalearnacademy@gmail.com">
                <Mail className="h-5 w-5" />
                <span>{t('about.cta.contact')}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
