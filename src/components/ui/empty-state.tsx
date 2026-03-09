/**
 * Empty State Component
 * États vides engageants avec suggestions
 */

'use client'

import Link from 'next/link'
import { BookOpen, Search, RefreshCw, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  type: 'no-results' | 'no-courses' | 'no-lessons' | 'error'
  searchTerm?: string
  onReset?: () => void
  suggestions?: { label: string; href: string }[]
  className?: string
}

export function EmptyState({ 
  type, 
  searchTerm, 
  onReset, 
  suggestions,
  className 
}: EmptyStateProps) {
  const { locale, isRTL } = useLocale()

  const content = {
    'no-results': {
      icon: Search,
      emoji: '🔍',
      title: {
        fr: 'Aucun résultat trouvé',
        ar: 'لم يتم العثور على نتائج',
        en: 'No results found',
      },
      description: {
        fr: searchTerm 
          ? `Aucun cours ne correspond à "${searchTerm}". Essayez avec d'autres mots-clés.`
          : 'Aucun cours ne correspond à vos critères de recherche.',
        ar: searchTerm 
          ? `لا توجد دورات مطابقة لـ "${searchTerm}". جرب كلمات أخرى.`
          : 'لا توجد دورات تطابق معايير البحث.',
        en: searchTerm 
          ? `No courses match "${searchTerm}". Try different keywords.`
          : 'No courses match your search criteria.',
      },
      action: {
        fr: 'Effacer les filtres',
        ar: 'مسح الفلاتر',
        en: 'Clear filters',
      },
    },
    'no-courses': {
      icon: BookOpen,
      emoji: '📚',
      title: {
        fr: 'Aucun cours disponible',
        ar: 'لا توجد دورات متاحة',
        en: 'No courses available',
      },
      description: {
        fr: 'De nouveaux cours seront bientôt disponibles. Revenez nous voir !',
        ar: 'ستتوفر دورات جديدة قريباً. عد لزيارتنا!',
        en: 'New courses will be available soon. Come back later!',
      },
      action: {
        fr: 'Retour à l\'accueil',
        ar: 'العودة للرئيسية',
        en: 'Back to home',
      },
    },
    'no-lessons': {
      icon: Compass,
      emoji: '🧭',
      title: {
        fr: 'Aucune leçon dans ce cours',
        ar: 'لا توجد دروس في هذه الدورة',
        en: 'No lessons in this course',
      },
      description: {
        fr: 'Le contenu est en cours de préparation. Explorez d\'autres cours en attendant.',
        ar: 'المحتوى قيد الإعداد. استكشف دورات أخرى في الانتظار.',
        en: 'Content is being prepared. Explore other courses in the meantime.',
      },
      action: {
        fr: 'Voir tous les cours',
        ar: 'عرض جميع الدورات',
        en: 'View all courses',
      },
    },
    'error': {
      icon: RefreshCw,
      emoji: '⚠️',
      title: {
        fr: 'Oups ! Une erreur est survenue',
        ar: 'عفواً! حدث خطأ',
        en: 'Oops! Something went wrong',
      },
      description: {
        fr: 'Nous n\'avons pas pu charger le contenu. Veuillez réessayer.',
        ar: 'لم نتمكن من تحميل المحتوى. يرجى المحاولة مرة أخرى.',
        en: 'We couldn\'t load the content. Please try again.',
      },
      action: {
        fr: 'Réessayer',
        ar: 'إعادة المحاولة',
        en: 'Try again',
      },
    },
  }

  const current = content[type]
  const lang = locale as keyof typeof current.title
  const Icon = current.icon

  // Suggestions par défaut
  const defaultSuggestions = [
    { 
      label: locale === 'ar' ? 'الفقه' : locale === 'en' ? 'Fiqh' : 'Fiqh', 
      href: '/courses#category-fiqh' 
    },
    { 
      label: locale === 'ar' ? 'التجويد' : locale === 'en' ? 'Tajweed' : 'Tajweed', 
      href: '/courses#category-tajweed' 
    },
    { 
      label: locale === 'ar' ? 'العقيدة' : locale === 'en' ? 'Aqeedah' : 'Aqeedah', 
      href: '/courses#category-aqeedah' 
    },
  ]

  const displaySuggestions = suggestions || (type === 'no-results' ? defaultSuggestions : [])

  return (
    <div className={cn(
      "flex flex-col items-center justify-center py-16 px-4 text-center",
      isRTL && "font-arabic",
      className
    )}>
      {/* Illustration */}
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
          <span className="text-5xl">{current.emoji}</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Text */}
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {current.title[lang]}
      </h3>
      <p className="text-muted-foreground max-w-md mb-6">
        {current.description[lang]}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        {type === 'no-results' && onReset ? (
          <Button onClick={onReset} variant="default" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            {current.action[lang]}
          </Button>
        ) : type === 'error' && onReset ? (
          <Button onClick={onReset} variant="default" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            {current.action[lang]}
          </Button>
        ) : (
          <Button asChild variant="default">
            <Link href="/courses">{current.action[lang]}</Link>
          </Button>
        )}
      </div>

      {/* Suggestions */}
      {displaySuggestions.length > 0 && (
        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-3">
            {locale === 'ar' ? 'جرب هذه الفئات:' : locale === 'en' ? 'Try these categories:' : 'Essayez ces catégories :'}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {displaySuggestions.map((suggestion, i) => (
              <Link
                key={i}
                href={suggestion.href}
                className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary text-sm font-medium transition-colors"
              >
                {suggestion.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
