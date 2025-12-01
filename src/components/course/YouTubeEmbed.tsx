/**
 * YouTubeEmbed Component
 * Lecteur vidéo YouTube responsive
 * Utilise UNIQUEMENT les design tokens
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { extractYouTubeId } from '@/lib/utils/resources'

interface YouTubeEmbedProps {
  url: string
  title?: string
  className?: string
}

export function YouTubeEmbed({ url, title = 'Video', className }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoId = extractYouTubeId(url)

  if (!videoId) {
    return (
      <div className={cn(
        'aspect-video bg-muted rounded-xl flex items-center justify-center',
        className
      )}>
        <p className="text-muted-foreground">Invalid video URL</p>
      </div>
    )
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`

  return (
    <div className={cn('relative aspect-video rounded-xl overflow-hidden bg-muted', className)}>
      {!isLoaded ? (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail */}
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            unoptimized
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/30 group-hover:bg-background/20 transition-colors" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  )
}

export type { YouTubeEmbedProps }
