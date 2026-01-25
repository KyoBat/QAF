'use client'

import Link from 'next/link'
import { CheckCircle2, ChevronRight, Heart, Shield, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

const differentiators = [
  { icon: Shield, key: 'authentic' },
  { icon: TrendingUp, key: 'progressive' },
  { icon: Users, key: 'community' },
  { icon: CheckCircle2, key: 'lifetime' }
]

export default function WhyRziSection() {
  const { t, isRTL } = useLocale()

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-gradient" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle animation-delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={cn('text-center mb-16 animate-fade-in-up', isRTL && 'font-arabic')}>
          <Badge variant="secondary" className="mb-4 gap-2 bg-primary/10 text-primary border-0">
            <Heart className="h-4 w-4 fill-current" />
            {t('home.whyRzi.mission.title')}
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('home.whyRzi.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('home.whyRzi.subtitle')}
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-all duration-300 animate-fade-in-up animation-delay-200">
          <CardContent className="py-8 px-6 sm:px-12">
            <div className={cn(
              'flex flex-col md:flex-row items-center gap-6 text-center md:text-left',
              isRTL && 'md:flex-row-reverse md:text-right'
            )}>
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 animate-scale-in animation-delay-300">
                <Heart className="h-10 w-10 text-primary fill-current" />
              </div>
              <div>
                <h3 className={cn('text-2xl font-bold text-foreground mb-3', isRTL && 'font-arabic')}>
                  {t('home.whyRzi.mission.title')}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('home.whyRzi.mission.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentiators.map(({ icon: Icon, key }, index) => (
            <Card
              key={key}
              className={cn(
                'relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-in-up',
                `animation-delay-${(index + 4) * 100}`
              )}
            >
              <div className="absolute inset-0 hover-glow" />
              
              <CardContent className="relative pt-8 pb-6 px-6">
                <div className={cn(
                  'flex flex-col items-center text-center',
                  isRTL && 'font-arabic'
                )}>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(`home.whyRzi.differentiators.${key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`home.whyRzi.differentiators.${key}.description`)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up animation-delay-1000">
          <Button size="lg" asChild className="gap-2 hover-lift animate-pulse-glow">
            <Link href="/courses">
              <span>{t('home.whyRzi.cta')}</span>
              <ChevronRight className={cn('h-5 w-5', isRTL && 'rotate-180')} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
