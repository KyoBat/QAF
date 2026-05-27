/**
 * Middleware Next.js pour la gestion i18n et SEO
 * - Détection langue depuis Accept-Language header pour les nouvelles visites
 * - Redirection non-www → www
 * - Nettoyage des query params inutiles
 * - Header canonical sur toutes les pages HTML localisées
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['fr', 'ar', 'en'] as const
type Locale = typeof LOCALES[number]
const DEFAULT_LOCALE: Locale = 'fr'

function detectLocale(request: NextRequest): Locale {
  // 1. Cookie de préférence sauvegardée
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && LOCALES.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }

  // 2. Accept-Language header
  const acceptLang = request.headers.get('Accept-Language') ?? ''
  for (const part of acceptLang.split(',')) {
    const lang = part.trim().split(';')[0].split('-')[0].toLowerCase()
    if (LOCALES.includes(lang as Locale)) return lang as Locale
  }

  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { hostname, pathname, protocol } = request.nextUrl

  // Dev: skip redirections
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return NextResponse.next()
  }

  // Redirection non-www → www (fallback du next.config.mjs)
  if (hostname === 'tahalearn.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'www.tahalearn.com'
    url.protocol = 'https'
    return NextResponse.redirect(url, 308)
  }

  // Si la route commence déjà par un locale connu, appliquer le cleaning SEO
  const pathLocale = pathname.split('/')[1]
  if (LOCALES.includes(pathLocale as Locale)) {
    // Supprimer les query params inutiles (canonical propre)
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid', 'category', 'search']
    const hasParam = utmParams.some(p => request.nextUrl.searchParams.has(p))
    if (hasParam) {
      const url = request.nextUrl.clone()
      utmParams.forEach(p => url.searchParams.delete(p))
      return NextResponse.redirect(url, 301)
    }

    // Ajouter header Link canonical
    const response = NextResponse.next()
    const canonicalUrl = `https://www.tahalearn.com${pathname}`
    response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`)
    return response
  }

  // Route sans préfixe locale (ex: ancienne URL encore indexée non couverte par next.config redirects)
  // → détecter la langue et rediriger
  if (pathname === '/' || !pathname.startsWith('/_next') && !pathname.startsWith('/api') && !pathname.includes('.')) {
    const locale = detectLocale(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(url, 302)
  }

  return NextResponse.next()
}

export const config = {
  // Appliquer le middleware à toutes les routes sauf les fichiers statiques
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icons|images|fonts|sw.js|site.webmanifest|api).*)',
  ],
}
