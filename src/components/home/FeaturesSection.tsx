'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardVariants,
  viewportOptions,
  hoverLift
} from '@/lib/utils/motion-variants'
import type { LucideIcon } from 'lucide-react'

// Lazy load icons
const Gift = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Gift })), { ssr: false })
const ShieldCheck = dynamic(() => import('lucide-react').then(mod => ({ default: mod.ShieldCheck })), { ssr: false })
const Clock = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Clock })), { ssr: false })
const GraduationCap = dynamic(() => import('lucide-react').then(mod => ({ default: mod.GraduationCap })), { ssr: false })
const Globe = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Globe })), { ssr: false })

interface FeaturesSectionProps {
  isRTL: boolean
  t: (key: string) => string
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  isRTL: boolean
}

function FeatureCard({ icon: Icon, title, description, isRTL }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors duration-300 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className={cn(
            'flex flex-col gap-4',
            isRTL && 'font-arabic'
          )}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function FeaturesSection({ isRTL, t }: FeaturesSectionProps) {
  const features = [
    { icon: ShieldCheck, title: t('home.features.quality.title'), description: t('home.features.quality.description') },
    { icon: Clock, title: t('home.features.accessible.title'), description: t('home.features.accessible.description') },
    { icon: GraduationCap, title: t('home.features.structured.title'), description: t('home.features.structured.description') },
    { icon: Globe, title: t('home.features.multilingual.title'), description: t('home.features.multilingual.description') }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className={cn('text-center mb-12', isRTL && 'font-arabic')}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('home.features.title')}
          </h2>
        </motion.div>

        {/* Main Feature: Free */}
        <motion.div 
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="py-8">
                <div className={cn(
                  'flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-start',
                  isRTL && 'font-arabic md:flex-row-reverse'
                )}>
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Gift className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-primary">
                        {t('home.features.free.title')}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                        ✨
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-xl">
                      {t('home.features.free.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  translateX: ['-100%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: 'easeInOut'
                }}
              />
            </Card>
          </motion.div>
        </motion.div>

        {/* Other Features Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isRTL={isRTL}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
