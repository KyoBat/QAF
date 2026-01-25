'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Gift, 
  Shield, 
  Clock, 
  Globe, 
  Users, 
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  cardVariants,
  viewportOptions
} from '@/lib/utils/motion-variants'

interface ValuePropositionSectionProps {
  isRTL: boolean
  t: (key: string) => string
}

// 6 points de valeur uniques (fusion + déduplication)
const valuePoints = [
  { icon: Gift, key: 'free', highlight: true },           // 100% Gratuit (mise en avant)
  { icon: Shield, key: 'authentic' },                      // Contenu authentique vérifié
  { icon: Clock, key: 'accessible' },                      // Apprenez quand vous voulez
  { icon: Users, key: 'community' },                       // Communauté active
  { icon: Globe, key: 'multilingual' },                    // 3 langues
  { icon: CheckCircle2, key: 'lifetime' }                  // Accès à vie
]

export default function ValuePropositionSection({ isRTL, t }: ValuePropositionSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className={cn('text-center mb-12', isRTL && 'font-arabic')}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <Badge variant="secondary" className="mb-4 gap-2 bg-primary/10 text-primary border-0">
            <Heart className="h-4 w-4 fill-current" />
            <span>{t('home.whyRzi.mission.title')}</span>
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('home.whyRzi.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('home.whyRzi.subtitle')}
          </p>
        </motion.div>

        {/* Hero Card: Mission + 100% Gratuit */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <CardContent className="py-8 px-6 sm:px-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Mission */}
                <motion.div 
                  className={cn(
                    'flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left',
                    isRTL && 'sm:flex-row-reverse sm:text-right'
                  )}
                  variants={isRTL ? fadeInRight : fadeInLeft}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="h-8 w-8 text-primary fill-current" />
                  </div>
                  <div>
                    <h3 className={cn('text-xl font-bold text-foreground mb-2', isRTL && 'font-arabic')}>
                      {t('home.whyRzi.mission.title')}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('home.whyRzi.mission.description')}
                    </p>
                  </div>
                </motion.div>

                {/* Divider */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

                {/* 100% Gratuit */}
                <motion.div 
                  className={cn(
                    'flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left',
                    isRTL && 'sm:flex-row-reverse sm:text-right'
                  )}
                  variants={isRTL ? fadeInLeft : fadeInRight}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Gift className="h-8 w-8 text-emerald-500" />
                  </motion.div>
                  <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-emerald-500">
                        {t('home.features.free.title')}
                      </h3>
                      <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-500 border-0">
                        <Sparkles className="h-3 w-3" />
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('home.features.free.description')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
            
            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ translateX: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
            />
          </Card>
        </motion.div>

        {/* Value Points Grid (5 remaining) */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {valuePoints.filter(p => !p.highlight).map(({ icon: Icon, key }) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 bg-card/80 backdrop-blur-sm group">
                <CardContent className="p-5">
                  <div className={cn(
                    'flex flex-col items-center text-center gap-3',
                    isRTL && 'font-arabic'
                  )}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {t(`home.value.${key}.title`)}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t(`home.value.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <Button size="lg" asChild className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/courses">
              <span>{t('home.whyRzi.cta')}</span>
              <ChevronRight className={cn('h-5 w-5 transition-transform group-hover:translate-x-1', isRTL && 'rotate-180')} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
