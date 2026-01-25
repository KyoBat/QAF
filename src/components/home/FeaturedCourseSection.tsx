'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ChevronRight, ChevronLeft, Star, Play, Pause } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  rotateVariantsSlow,
  floatVariants,
  floatVariantsSlow,
  pulseVariants,
  viewportOptions
} from '@/lib/utils/motion-variants'
import type { Course } from '@/lib/data/courses/types'

// Lazy load icons
const BookOpen = dynamic(() => import('lucide-react').then(mod => ({ default: mod.BookOpen })), { ssr: false })
const Clock = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Clock })), { ssr: false })
const GraduationCap = dynamic(() => import('lucide-react').then(mod => ({ default: mod.GraduationCap })), { ssr: false })

interface FeaturedCourseSectionProps {
  featuredCourses: Course[]
  locale: 'fr' | 'en' | 'ar'
  isRTL: boolean
  t: (key: string) => string
}

export default function FeaturedCourseSection({ 
  featuredCourses, 
  locale, 
  isRTL, 
  t 
}: FeaturedCourseSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentCourse = featuredCourses[currentIndex]

  // Category emoji mapping
  const categoryEmojis: Record<string, string> = {
    fiqh: '⚖️',
    hadith: '📜',
    aqeedah: '💫',
    seerah: '🌙',
    tafsir: '📖',
    default: '📚'
  }

  const courseEmoji = categoryEmojis[currentCourse.category] || categoryEmojis.default

  // Memoized navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredCourses.length)
  }, [featuredCourses.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length)
  }, [featuredCourses.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || featuredCourses.length <= 1) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // 5 secondes

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, featuredCourses.length, nextSlide])

  // Simplified slide variants for better mobile performance
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.95
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.95
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className={cn('text-center mb-12', isRTL && 'font-arabic')}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>{t('home.featured.title')}</span>
            {featuredCourses.length > 1 && (
              <Badge variant="secondary" className="ml-2 bg-amber-500/20 border-0">
                {currentIndex + 1}/{featuredCourses.length}
              </Badge>
            )}
          </motion.div>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          {featuredCourses.length > 1 && (
            <>
              <motion.button
                onClick={prevSlide}
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors",
                  "hidden md:flex"
                )}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className={cn(
                  "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors",
                  "hidden md:flex"
                )}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </>
          )}

          {/* Course Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
            >
          <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl relative group">
            {/* Animated shimmer effect traversant la carte */}
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-10 pointer-events-none"
              animate={{
                translateX: ['-100%', '300%']
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: 'easeInOut'
              }}
            />
            <div className={cn(
              'grid md:grid-cols-2 gap-0',
              isRTL && 'md:grid-flow-col-dense'
            )}>
              {/* Course Image/Illustration */}
              <motion.div 
                className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 p-8 flex items-center justify-center min-h-[300px] overflow-hidden"
                initial={isRTL ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }}
                whileInView={isRTL ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Main icon container with glow */}
                <div className="text-center relative z-10">
                  <motion.div 
                    className="relative inline-block mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
                      variants={pulseVariants}
                      animate="animate"
                    />
                    <motion.div 
                      className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-6xl">{courseEmoji}</span>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Badge variant="secondary" className="gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {t('home.featured.new')}
                    </Badge>
                  </motion.div>
                </div>
                
                {/* Decorative elements with animation */}
                <motion.div 
                  className="absolute top-4 left-4 w-20 h-20 border border-primary/20 rounded-full"
                  variants={rotateVariantsSlow}
                  animate="animate"
                  whileHover={{ scale: 1.2, borderColor: 'rgba(var(--primary), 0.4)' }}
                />
                <motion.div 
                  className="absolute bottom-4 right-4 w-32 h-32 border border-primary/10 rounded-full"
                  variants={floatVariants}
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div 
                  className="absolute top-1/3 right-8 w-12 h-12 bg-primary/5 rounded-lg"
                  variants={floatVariantsSlow}
                  animate="animate"
                />
                
                {/* Particules flottantes dynamiques */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/20 rounded-full"
                    style={{
                      top: `${20 + i * 12}%`,
                      left: `${15 + i * 10}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, i % 2 === 0 ? 15 : -15, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>

              {/* Course Info */}
              <CardContent className={cn('p-8 flex flex-col justify-center', isRTL && 'text-right')}>
                <motion.div 
                  className="mb-4"
                  initial={isRTL ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
                  whileInView={isRTL ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge variant="outline" className="mb-3 cursor-pointer">
                      {t(`courses.categories.${currentCourse.category}`)}
                    </Badge>
                  </motion.div>
                  <motion.h3 
                    className={cn(
                      'text-2xl sm:text-3xl font-bold text-foreground mb-3',
                      isRTL && 'font-arabic'
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentCourse.title[locale]}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4">
                    {currentCourse.description[locale]}
                  </p>
                  
                  {/* Visual progress indicator */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-primary/60"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={viewportOptions}
                        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                      />
                    </div>
                    <motion.span 
                      className="text-xs font-medium text-primary"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={viewportOptions}
                      transition={{ delay: 1 }}
                    >
                      {currentCourse.lessons.length} leçons
                    </motion.span>
                  </div>
                </motion.div>

                {/* Course Meta */}
                <motion.div 
                  className={cn(
                    'flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground',
                    isRTL && 'flex-row-reverse'
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>{currentCourse.lessons.length} {t('courses.lessons')}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                  >
                    <Clock className="h-4 w-4" />
                    <span>{currentCourse.duration}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>{t(`courses.levels.${currentCourse.level}`)}</span>
                  </motion.div>
                </motion.div>

                {/* Lessons Preview */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {currentCourse.lessons.slice(0, 4).map((lesson, idx) => (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOptions}
                        transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {idx + 1}. {lesson.title[locale].slice(0, 25)}{lesson.title[locale].length > 25 ? '...' : ''}
                        </Badge>
                      </motion.div>
                    ))}
                    {currentCourse.lessons.length > 4 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOptions}
                        transition={{ duration: 0.3, delay: 1 }}
                      >
                        <Badge variant="outline" className="text-xs">
                          +{currentCourse.lessons.length - 4}
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* CTA with pulsing glow effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative"
                >
                  {/* Pulsing glow behind button */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" asChild className="gap-2 w-fit shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
                      <Link href={`/courses/${currentCourse.slug}`}>
                        {/* Gradient animé au hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">{t('home.featured.startNow')}</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          className="relative z-10"
                        >
                          <ChevronRight className={cn('h-5 w-5', isRTL && 'rotate-180')} />
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </div>
          </Card>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators & Controls */}
          {featuredCourses.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Dots Indicators */}
              <div className="flex items-center gap-2">
                {featuredCourses.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === currentIndex 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Play/Pause Button */}
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-8 h-8 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isAutoPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
