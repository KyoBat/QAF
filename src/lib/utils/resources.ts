/**
 * Utilitaires pour les ressources
 */

import { CourseResource } from '@/lib/schemas'
import { 
  Video, 
  FileText, 
  Link, 
  Headphones,
  type LucideIcon 
} from 'lucide-react'

export function getResourceIcon(type: CourseResource['type']): LucideIcon {
  const icons: Record<CourseResource['type'], LucideIcon> = {
    video: Video,
    article: FileText,
    pdf: FileText,
    link: Link,
    audio: Headphones,
  }
  return icons[type] || Link
}

export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

export function isYouTubeUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  
  return null
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const videoId = extractYouTubeId(url)
  if (!videoId) return null
  return `https://www.youtube.com/embed/${videoId}`
}

export function getResourceTypeLabel(type: CourseResource['type'], locale: string): string {
  const labels: Record<CourseResource['type'], Record<string, string>> = {
    video: { fr: 'Vidéo', ar: 'فيديو', en: 'Video' },
    article: { fr: 'Article', ar: 'مقال', en: 'Article' },
    pdf: { fr: 'PDF', ar: 'PDF', en: 'PDF' },
    link: { fr: 'Lien', ar: 'رابط', en: 'Link' },
    audio: { fr: 'Audio', ar: 'صوتي', en: 'Audio' },
  }
  return labels[type]?.[locale] || labels[type]?.en || type
}
