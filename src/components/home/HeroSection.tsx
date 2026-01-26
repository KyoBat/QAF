'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import AnimatedStats from '@/components/ui/animated-stats'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  floatVariants,
  floatVariantsSlow,
  pulseVariants,
  rotateVariantsSlow,
  viewportOptions
} from '@/lib/utils/motion-variants'
import type { Course } from '@/lib/data/courses/types'

interface HeroSectionProps {
  featuredCourse: Course | null
  stats: Array<{
    value: number
    label: string
    suffix: string
  }>
  isRTL: boolean
  t: (key: string) => string
}

export default function HeroSection({ featuredCourse, stats, isRTL, t }: HeroSectionProps) {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Decorative floating elements with Framer Motion */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-32 right-16 w-32 h-32 border border-primary/10 rounded-full"
        variants={floatVariantsSlow}
        animate="animate"
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 rounded-full"
        variants={pulseVariants}
        animate="animate"
      />
      
      {/* Rotating geometric pattern - top left */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 opacity-10"
        variants={rotateVariantsSlow}
        animate="animate"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        </svg>
      </motion.div>

      {/* Rotating geometric pattern - bottom right */}
      <motion.div
        className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10"
        animate={{
          rotate: [0, -360]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,15 85,75 15,75" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <polygon points="50,25 75,65 25,65" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <polygon points="50,35 65,55 35,55" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        </svg>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className={cn(
            'flex flex-col items-center text-center',
            isRTL && 'font-arabic'
          )}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            variants={staggerItem}
          >
            <Star className="h-3.5 w-3.5" />
            <span>{t('app.tagline')}</span>
          </motion.div>

          {/* Title with stagger */}
          <motion.h1 
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight',
              isRTL && 'leading-relaxed'
            )}
            variants={staggerItem}
          >
            {t('home.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-6"
            variants={staggerItem}
          >
            {t('home.hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className={cn(
              'flex flex-col sm:flex-row gap-4',
              isRTL && 'flex-row-reverse'
            )}
            variants={staggerItem}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                <Link href={featuredCourse ? `/courses/${featuredCourse.slug}` : '/courses'}>
                  <span>{t('home.hero.cta')}</span>
                  <ChevronRight className={cn('h-5 w-5', isRTL && 'rotate-180')} />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">
                  {t('nav.courses')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats inline - compact version */}
        <motion.div
          className="flex items-center justify-center gap-6 sm:gap-10 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
