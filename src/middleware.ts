/**
 * Middleware Next.js pour la gestion SEO
 * - Redirection non-www → www (évite le contenu dupliqué)
 * - Redirection HTTP → HTTPS
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { hostname, protocol } = request.nextUrl

  // En développement, ne pas appliquer les redirections
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return NextResponse.next()
  }

  // Redirection non-www → www pour éviter le contenu dupliqué
  if (hostname === 'tahalearn.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'www.tahalearn.com'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  // Redirection /courses?category=xxx → /courses#category-xxx
  // Évite que Google indexe les URLs avec query params comme pages séparées
  if (request.nextUrl.pathname === '/courses' && request.nextUrl.searchParams.has('category')) {
    const category = request.nextUrl.searchParams.get('category')
    const url = request.nextUrl.clone()
    url.searchParams.delete('category')
    url.hash = `category-${category}`
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  // Appliquer le middleware à toutes les routes sauf les fichiers statiques
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icons|images|fonts|sw.js|site.webmanifest).*)',
  ],
}
