/**
 * Command Palette Component (⌘K)
 * Recherche globale dans l'application
 */

'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Search, BookOpen, FileText, X, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

interface SearchResult {
  id: string
  type: 'course' | 'lesson'
  title: string
  description?: string
  href: string
  courseTitle?: string
}

interface CommandProps {
  courses: {
    slug: string
    title: { fr: string; ar: string; en: string }
    description: { fr: string; ar: string; en: string }
    lessons: {
      id: string
      title: { fr: string; ar: string; en: string }
    }[]
  }[]
}

export function Command({ courses }: CommandProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const router = useRouter()
  const { locale, t, isRTL } = useLocale()
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Keyboard shortcut ⌘K / Ctrl+K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Focus input when opened
  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0)
    } else {
      setQuery('')
      setSelectedIndex(0)
    }
  }, [open])

  // Search results
  const results = React.useMemo<SearchResult[]>(() => {
    if (!query.trim()) return []

    const searchLower = query.toLowerCase()
    const items: SearchResult[] = []

    courses.forEach((course) => {
      const courseTitle = course.title[locale as keyof typeof course.title] || course.title.fr
      const courseDesc = course.description[locale as keyof typeof course.description] || course.description.fr

      // Search in course
      if (
        courseTitle.toLowerCase().includes(searchLower) ||
        courseDesc.toLowerCase().includes(searchLower) ||
        course.title.ar.includes(query)
      ) {
        items.push({
          id: `course-${course.slug}`,
          type: 'course',
          title: courseTitle,
          description: courseDesc,
          href: `/courses/${course.slug}`,
        })
      }

      // Search in lessons
      course.lessons.forEach((lesson) => {
        const lessonTitle = lesson.title[locale as keyof typeof lesson.title] || lesson.title.fr

        if (
          lessonTitle.toLowerCase().includes(searchLower) ||
          lesson.title.ar.includes(query)
        ) {
          items.push({
            id: `lesson-${course.slug}-${lesson.id}`,
            type: 'lesson',
            title: lessonTitle,
            courseTitle: courseTitle,
            href: `/courses/${course.slug}/lessons/${lesson.id}`,
          })
        }
      })
    })

    return items.slice(0, 10) // Limit results
  }, [query, courses, locale])

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault()
        router.push(results[selectedIndex].href)
        setOpen(false)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, results, selectedIndex, router])

  // Reset selected index when results change
  React.useEffect(() => {
    setSelectedIndex(0)
  }, [results])

  const placeholderText = locale === 'ar' 
    ? 'ابحث في الدورات والدروس...'
    : locale === 'en'
    ? 'Search courses and lessons...'
    : 'Rechercher cours et leçons...'

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          'flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground',
          'border border-border rounded-lg hover:bg-muted transition-colors',
          'hidden sm:flex'
        )}
      >
        <Search className="h-4 w-4" />
        <span>{t('nav.search')}</span>
        <kbd className="hidden md:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label={t('nav.search')}
      >
        <Search className="h-5 w-5 text-muted-foreground" />
      </button>

      {/* Command Dialog */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in-0" />
          <Dialog.Content
            className={cn(
              'fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%]',
              'bg-background border border-border rounded-xl shadow-2xl',
              'animate-in fade-in-0 zoom-in-95',
              'max-h-[60vh] overflow-hidden'
            )}
          >
            {/* Search Input */}
            <div className={cn(
              'flex items-center gap-3 px-4 py-3 border-b border-border',
              isRTL && 'flex-row-reverse'
            )}>
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholderText}
                className={cn(
                  'flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground',
                  isRTL && 'text-right font-arabic'
                )}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded hover:bg-muted"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {query && results.length === 0 && (
                <div className={cn(
                  'py-8 text-center text-muted-foreground',
                  isRTL && 'font-arabic'
                )}>
                  {locale === 'ar' 
                    ? 'لا توجد نتائج' 
                    : locale === 'en' 
                    ? 'No results found'
                    : 'Aucun résultat trouvé'
                  }
                </div>
              )}

              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => {
                    router.push(result.href)
                    setOpen(false)
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors',
                    index === selectedIndex ? 'bg-primary/10 text-primary' : 'hover:bg-muted',
                    isRTL && 'flex-row-reverse text-right'
                  )}
                >
                  <div className={cn(
                    'flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center',
                    result.type === 'course' ? 'bg-primary/10' : 'bg-muted'
                  )}>
                    {result.type === 'course' ? (
                      <BookOpen className="h-4 w-4 text-primary" />
                    ) : (
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  
                  <div className={cn('flex-1 min-w-0', isRTL && 'font-arabic')}>
                    <div className="font-medium text-foreground truncate">
                      {result.title}
                    </div>
                    {result.courseTitle && (
                      <div className="text-sm text-muted-foreground truncate">
                        {result.courseTitle}
                      </div>
                    )}
                    {result.type === 'course' && result.description && (
                      <div className="text-sm text-muted-foreground truncate">
                        {result.description}
                      </div>
                    )}
                  </div>

                  <ArrowRight className={cn(
                    'h-4 w-4 text-muted-foreground flex-shrink-0',
                    isRTL && 'rotate-180'
                  )} />
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className={cn(
              'flex items-center justify-between px-4 py-2 border-t border-border text-xs text-muted-foreground',
              isRTL && 'flex-row-reverse'
            )}>
              <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
                <kbd className="px-1.5 py-0.5 bg-muted rounded">↑↓</kbd>
                <span>{locale === 'ar' ? 'للتنقل' : locale === 'en' ? 'to navigate' : 'naviguer'}</span>
              </div>
              <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
                <kbd className="px-1.5 py-0.5 bg-muted rounded">↵</kbd>
                <span>{locale === 'ar' ? 'للفتح' : locale === 'en' ? 'to open' : 'ouvrir'}</span>
              </div>
              <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
                <kbd className="px-1.5 py-0.5 bg-muted rounded">esc</kbd>
                <span>{locale === 'ar' ? 'للإغلاق' : locale === 'en' ? 'to close' : 'fermer'}</span>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export type { CommandProps, SearchResult }
