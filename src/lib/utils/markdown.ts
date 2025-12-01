/**
 * Utilitaires pour le markdown
 */

import { remark } from 'remark'
import html from 'remark-html'

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function extractHeadings(markdown: string): { level: number; text: string; id: string }[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings: { level: number; text: string; id: string }[] = []
  
  let match
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
    
    headings.push({ level, text, id })
  }
  
  return headings
}
