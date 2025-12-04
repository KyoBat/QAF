/**
 * LessonContent Component
 * Affiche le contenu d'une leçon avec le markdown parsé
 * Utilise UNIQUEMENT les design tokens
 */

'use client'

import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import type { Lesson } from '@/lib/schemas'
import { getMindMapForLesson } from '@/lib/data/mindmaps'

// Import dynamique du MindMap pour éviter les erreurs SSR
const CollapsibleMindMap = dynamic(
  () => import('@/components/mindmap/CollapsibleMindMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center my-6">
        <div className="animate-pulse text-slate-500">جاري تحميل الخريطة الذهنية...</div>
      </div>
    ),
  }
)

interface LessonContentProps {
  lesson: Lesson
  className?: string
}

export function LessonContent({ lesson, className }: LessonContentProps) {
  const { locale, isRTL } = useLocale()
  const content = lesson.content[locale as keyof typeof lesson.content] || lesson.content.fr
  
  // Get MindMap data for this lesson with current locale
  const mindMapData = getMindMapForLesson(lesson.id, locale)
  
  // Title for mind map based on locale
  const mindMapTitle = locale === 'ar' 
    ? 'الخريطة الذهنية التفاعلية' 
    : locale === 'en' 
      ? 'Interactive Mind Map' 
      : 'Carte Mentale Interactive'

  return (
    <div className={cn('prose-content', isRTL && 'text-right', className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className={cn(
              'text-3xl font-bold text-foreground mb-6 mt-8',
              isRTL && 'font-arabic'
            )}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={cn(
              'text-2xl font-semibold text-foreground mb-4 mt-6',
              isRTL && 'font-arabic'
            )}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={cn(
              'text-xl font-semibold text-foreground mb-3 mt-4',
              isRTL && 'font-arabic'
            )}>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className={cn(
              'list-disc mb-4 space-y-2',
              isRTL ? 'mr-6' : 'ml-6'
            )}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className={cn(
              'list-decimal mb-4 space-y-2',
              isRTL ? 'mr-6' : 'ml-6'
            )}
            style={{ counterReset: 'list-item' }}
            >
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className={cn(
              'text-muted-foreground',
              '[&>ul]:mt-2 [&>ol]:mt-2'
            )}>
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className={cn(
              'italic my-4 text-muted-foreground bg-muted/50 py-2 rounded-lg',
              isRTL 
                ? 'border-r-4 border-primary pr-4 pl-4' 
                : 'border-l-4 border-primary pl-4 pr-4'
            )}>
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isInline = !className
            if (isInline) {
              return (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              )
            }
            return (
              <code className={className}>{children}</code>
            )
          },
          pre: ({ children }) => (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className={cn(
              'border border-border px-4 py-2 bg-muted font-semibold',
              isRTL ? 'text-right' : 'text-left'
            )}>
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className={cn(
              'border border-border px-4 py-2',
              isRTL ? 'text-right' : 'text-left'
            )}>
              {children}
            </td>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          a: ({ children, href }) => (
            <a 
              href={href} 
              className="text-primary hover:underline"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
        }}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
      
      {/* Interactive MindMap at the end of lesson */}
      {mindMapData && (
        <div className="mt-10 pt-8 border-t border-border">
          <CollapsibleMindMap 
            data={mindMapData}
            title={mindMapTitle}
            defaultExpanded={false}
            locale={locale}
          />
        </div>
      )}
    </div>
  )
}

export type { LessonContentProps }
