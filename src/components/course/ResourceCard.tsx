/**
 * ResourceCard Component
 * Affiche une ressource de cours (vidéo, PDF, lien, etc.)
 * Utilise UNIQUEMENT les design tokens
 */

'use client'

import { ExternalLink, Download, Play, Video, FileText, Headphones, Link as LinkIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import { 
  isExternalUrl,
  getResourceTypeLabel 
} from '@/lib/utils/resources'
import type { CourseResource } from '@/lib/schemas'

interface ResourceCardProps {
  resource: CourseResource
  className?: string
}

/** Composant déclaré au niveau du module : l'icône vient d'une table fixe. */
function ResourceIcon({ type, className }: { type: CourseResource['type']; className?: string }) {
  switch (type) {
    case 'video': return <Video className={className} />
    case 'article':
    case 'pdf': return <FileText className={className} />
    case 'audio': return <Headphones className={className} />
    default: return <LinkIcon className={className} />
  }
}

export function ResourceCard({ resource, className }: ResourceCardProps) {
  const { locale, isRTL } = useLocale()
  
  const typeLabel = getResourceTypeLabel(resource.type, locale)
  const isExternal = isExternalUrl(resource.url)
  const isVideo = resource.type === 'video'
  const isPdf = resource.type === 'pdf'

  return (
    <Card className={cn(
      'p-4 flex items-start gap-4 hover:border-primary/30 transition-colors',
      isRTL && 'flex-row-reverse',
      className
    )}>
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <ResourceIcon type={resource.type} className="h-5 w-5 text-primary" />
      </div>

      {/* Content */}
      <div className={cn('flex-1 min-w-0', isRTL && 'text-right')}>
        <div className={cn(
          'flex items-center gap-2 mb-1',
          isRTL && 'flex-row-reverse'
        )}>
          <h4 className="font-medium text-foreground truncate">
            {resource.title}
          </h4>
          <Badge variant="secondary" className="text-xs flex-shrink-0">
            {typeLabel}
          </Badge>
        </div>
        
        {resource.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {resource.description}
          </p>
        )}
      </div>

      {/* Action */}
      <div className="flex-shrink-0">
        <Button 
          variant="ghost" 
          size="icon"
          asChild
        >
          <a 
            href={resource.url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            download={isPdf && !isExternal ? true : undefined}
            aria-label={resource.title}
          >
            {isVideo ? (
              <Play className="h-4 w-4" />
            ) : isPdf ? (
              <Download className="h-4 w-4" />
            ) : (
              <ExternalLink className="h-4 w-4" />
            )}
          </a>
        </Button>
      </div>
    </Card>
  )
}

export type { ResourceCardProps }
