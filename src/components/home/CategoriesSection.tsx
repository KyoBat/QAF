'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleIn,
  hoverLift,
  viewportOptions
} from '@/lib/utils/motion-variants'

interface CategoriesSectionProps {
  categories: Array<{
    key: string
    emoji: string
    comingSoon: boolean
  }>
  coursesPerCategory: Record<string, number>
  isRTL: boolean
  t: (key: string) => string
}

export default function CategoriesSection({ 
  categories, 
  coursesPerCategory, 
  isRTL, 
  t 
}: CategoriesSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className={cn(
            'flex flex-col sm:flex-row items-center justify-between mb-12 gap-4',
            isRTL && 'flex-row-reverse'
          )}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
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
          <motion.div
            whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" asChild className="gap-2">
              <Link href="/courses">
                <span>{t('courses.viewAll')}</span>
                <ChevronRight className={cn('h-4 w-4', isRTL && 'rotate-180')} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Category Cards */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {categories.map((category) => {
            const count = coursesPerCategory[category.key] || 0
            
            return (
              <CategoryCard
                key={category.key}
                category={category}
                count={count}
                isRTL={isRTL}
                t={t}
              />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  category: {
    key: string
    emoji: string
    comingSoon: boolean
  }
  count: number
  isRTL: boolean
  t: (key: string) => string
}

function CategoryCard({ category, count, isRTL, t }: CategoryCardProps) {
  const cardContent = (
    <motion.div
      variants={staggerItem}
      whileHover={category.comingSoon ? {} : { 
        scale: 1.05, 
        y: -8,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      }}
      whileTap={category.comingSoon ? {} : { scale: 0.98 }}
    >
      <Card className={cn(
        'p-6 text-center transition-all duration-300 relative',
        category.comingSoon 
          ? 'opacity-60 border-dashed cursor-not-allowed' 
          : 'hover:border-primary/30 cursor-pointer'
      )}>
        {category.comingSoon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Badge 
              variant="secondary" 
              className="absolute top-2 right-2 text-xs bg-amber-500/20 text-amber-600 dark:text-amber-400 border-0"
            >
              {t('common.comingSoon')}
            </Badge>
          </motion.div>
        )}
        
        <motion.div 
          className="text-4xl mb-3"
          whileHover={category.comingSoon ? {} : { 
            scale: 1.2, 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          {category.emoji}
        </motion.div>
        
        <motion.h3 
          className={cn(
            'font-semibold text-foreground mb-1 transition-colors',
            !category.comingSoon && 'group-hover:text-primary',
            isRTL && 'font-arabic'
          )}
          whileHover={category.comingSoon ? {} : { scale: 1.05 }}
        >
          {t(`courses.categories.${category.key}`)}
        </motion.h3>
        
        <p className="text-sm text-muted-foreground">
          {category.comingSoon 
            ? t('common.inDevelopment')
            : `${count} ${count > 1 ? t('courses.courses') : t('courses.course')}`
          }
        </p>
      </Card>
    </motion.div>
  )
  
  if (category.comingSoon) {
    return cardContent
  }
  
  return (
    <Link 
      href={`/courses?category=${category.key}`}
      className="group"
    >
      {cardContent}
    </Link>
  )
}
