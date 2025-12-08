/**
 * LessonContent Component
 * Affiche le contenu d'une leçon avec le markdown parsé
 * Utilise UNIQUEMENT les design tokens
 */

'use client'

import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import type { Lesson } from '@/lib/schemas'
import { getMindMapForLesson, generationalChainData, getMethodData, allMethodsData } from '@/lib/data/mindmaps'

// Import dynamique du TreeChart pour éviter les erreurs SSR
const TreeChart = dynamic(
  () => import('@/components/mindmap/TreeChart'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[300px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center my-6">
        <div className="animate-pulse text-slate-500">جاري تحميل الشجرة...</div>
      </div>
    ),
  }
)

// Import dynamique du GenerationalChain pour éviter les erreurs SSR
const GenerationalChain = dynamic(
  () => import('@/components/mindmap/GenerationalChain'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center my-6">
        <div className="animate-pulse text-slate-500">جاري تحميل التسلسل...</div>
      </div>
    ),
  }
)

// Import dynamique du MethodFlowchart pour éviter les erreurs SSR
const MethodFlowchart = dynamic(
  () => import('@/components/mindmap/MethodFlowchart').then(mod => mod.MethodFlowchart),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center my-6">
        <div className="animate-pulse text-slate-500">جاري تحميل المنهج...</div>
      </div>
    ),
  }
)

// Import dynamique du MethodComparison pour éviter les erreurs SSR  
const MethodComparison = dynamic(
  () => import('@/components/mindmap/MethodFlowchart').then(mod => mod.MethodComparison),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center my-6">
        <div className="animate-pulse text-slate-500">جاري تحميل المقارنة...</div>
      </div>
    ),
  }
)

interface LessonContentProps {
  lesson: Lesson
  courseSlug?: string
  className?: string
}

export function LessonContent({ lesson, courseSlug, className }: LessonContentProps) {
  const { locale, isRTL } = useLocale()
  const content = lesson.content[locale as keyof typeof lesson.content] || lesson.content.fr
  
  // Get MindMap data for this lesson with current locale and course context
  const mindMapData = getMindMapForLesson(lesson.id, locale, courseSlug)
  
  // Title for mind map based on locale
  const mindMapTitle = locale === 'ar' 
    ? 'شجرة الأسانيد' 
    : locale === 'en' 
      ? 'Chain of Transmission' 
      : 'Arbre de Transmission'

  // Title for generational chain based on locale
  const chainTitle = locale === 'ar' 
    ? 'التسلسل الجيلي للأئمة' 
    : locale === 'en' 
      ? 'Generational Chain of Imams' 
      : 'Chaîne Générationnelle des Imams'

  // Check if content has inline mindmap marker
  const hasInlineMindMap = content.includes('<!-- MINDMAP -->')
  
  // Check if content has inline chain marker
  const hasInlineChain = content.includes('<!-- CHAIN -->')
  
  // Check for method markers
  const methodMarkerRegex = /<!-- METHOD:(hanafi|maliki|shafii|hanbali|all) -->/g
  const hasMethodMarker = methodMarkerRegex.test(content)
  
  // Split content at mindmap marker if present
  const contentParts = hasInlineMindMap 
    ? content.split('<!-- MINDMAP -->') 
    : [content]
  
  // Further split for chain marker
  const splitForChain = (text: string) => {
    if (text.includes('<!-- CHAIN -->')) {
      return text.split('<!-- CHAIN -->')
    }
    return [text]
  }
  
  // Split and render with method markers
  const renderWithMethodMarkers = (text: string): React.ReactNode => {
    const methodRegex = /<!-- METHOD:(hanafi|maliki|shafii|hanbali|all) -->/
    const match = text.match(methodRegex)
    
    if (!match) {
      return renderMarkdown(text)
    }
    
    const [before, after] = text.split(match[0])
    const school = match[1] as 'hanafi' | 'maliki' | 'shafii' | 'hanbali' | 'all'
    
    return (
      <>
        {before && renderMarkdown(before)}
        <div className="my-8">
          {school === 'all' ? (
            <MethodComparison methods={allMethodsData} locale={locale} />
          ) : (
            <MethodFlowchart data={getMethodData(school)} locale={locale} />
          )}
        </div>
        {after && renderWithMethodMarkers(after)}
      </>
    )
  }

  // Render markdown content
  const renderMarkdown = (markdownContent: string) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[rehypeRaw]}
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
      >
        {markdownContent}
      </ReactMarkdown>
  )

  // Render content section with potential chain marker and method markers
  const renderContentSection = (sectionContent: string): React.ReactNode => {
    // First check for method markers
    if (/<!-- METHOD:(hanafi|maliki|shafii|hanbali|all) -->/.test(sectionContent)) {
      return renderWithMethodMarkers(sectionContent)
    }
    
    // Then check for chain markers
    const chainParts = splitForChain(sectionContent)
    
    if (chainParts.length > 1) {
      return (
        <>
          {renderWithMethodMarkers(chainParts[0])}
          <div className="my-8">
            <GenerationalChain 
              data={generationalChainData}
              title={chainTitle}
              locale={locale}
            />
          </div>
          {chainParts[1] && renderWithMethodMarkers(chainParts[1])}
        </>
      )
    }
    return renderWithMethodMarkers(sectionContent)
  }

  return (
    <div className={cn('prose-content', isRTL && 'text-right', className)}>
      {hasInlineMindMap && mindMapData ? (
        <>
          {/* Content before mindmap marker */}
          {renderContentSection(contentParts[0])}
          
          {/* Inline Tree Chart */}
          <div className="my-8">
            <TreeChart 
              data={mindMapData}
              title={mindMapTitle}
              defaultExpanded={true}
              locale={locale}
            />
          </div>
          
          {/* Content after mindmap marker */}
          {contentParts[1] && renderContentSection(contentParts[1])}
        </>
      ) : hasInlineChain || hasMethodMarker ? (
        <>
          {/* Content with chain marker or method markers */}
          {renderContentSection(content)}
        </>
      ) : (
        <>
          {renderMarkdown(content)}
          
          {/* Tree Chart at the end of lesson (fallback) */}
          {mindMapData && (
            <div className="mt-10 pt-8 border-t border-border">
              <TreeChart 
                data={mindMapData}
                title={mindMapTitle}
                defaultExpanded={true}
                locale={locale}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export type { LessonContentProps }
