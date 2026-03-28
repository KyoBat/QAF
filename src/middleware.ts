/**
 * Middleware Next.js pour la gestion SEO
 * - Redirection non-www → www (évite le contenu dupliqué)
 * - Nettoyage des query params (category, search)
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { hostname, protocol } = request.nextUrl

  // En développement, ne pas appliquer les redirections
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return NextResponse.next()
  }

  // Redirection non-www → www (fallback)
  // La redirection principale est dans next.config.mjs (compilée dans les règles Vercel)
  // Ce fallback gère les cas où la config redirect ne s'applique pas
  if (hostname === 'tahalearn.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'www.tahalearn.com'
    url.protocol = 'https'
    return NextResponse.redirect(url, 308)
  }

  // Redirection /courses?category=xxx → /courses (canonical propre)
  // Évite que Google indexe les URLs avec query params comme pages séparées
  if (request.nextUrl.pathname === '/courses' && request.nextUrl.searchParams.has('category')) {
    const url = request.nextUrl.clone()
    url.searchParams.delete('category')
    return NextResponse.redirect(url, 301)
  }

  // Bloquer toute URL avec query params inutiles (UTM, etc.)
  if (request.nextUrl.searchParams.has('search')) {
    const url = request.nextUrl.clone()
    url.searchParams.delete('search')
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
