// @vitest-environment node
/**
 * Comportement du proxy (ex-middleware) (i18n + SEO), testé en appel direct :
 * en `next start` local l'hôte vu est toujours localhost, ce qui court-circuite
 * toute la logique. Ces tests sont le filet de la migration Next 16 (middleware → proxy).
 */
import { describe, it, expect } from 'vitest'
import { NextRequest } from 'next/server'
import { proxy as handler, config } from '@/proxy'

function run(url: string, headers: Record<string, string> = {}) {
  return handler(new NextRequest(url, { headers }))
}

const isNext = (res: Response) => res.headers.get('x-middleware-next') === '1'

describe('proxy', () => {
  it('laisse passer localhost sans rien toucher', () => {
    const res = run('http://localhost:3000/inconnu?utm_source=x')
    expect(isNext(res)).toBe(true)
    expect(res.headers.get('link')).toBeNull()
  })

  it('redirige l’apex vers www en 308, racine → locale détectée', () => {
    const res = run('https://tahalearn.com/', { 'accept-language': 'ar-DZ,ar;q=0.9' })
    expect(res.status).toBe(308)
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/ar')
  })

  it('apex : garde chemin et query, sans ajouter de locale', () => {
    const res = run('https://tahalearn.com/fr/courses?x=1')
    expect(res.status).toBe(308)
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/fr/courses?x=1')
  })

  it('apex racine sans préférence → /fr', () => {
    const res = run('https://tahalearn.com/')
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/fr')
  })

  it('le cookie NEXT_LOCALE prime sur Accept-Language', () => {
    const res = run('https://tahalearn.com/', { cookie: 'NEXT_LOCALE=en', 'accept-language': 'ar' })
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/en')
  })

  it('cookie NEXT_LOCALE invalide ignoré', () => {
    const res = run('https://tahalearn.com/', { cookie: 'NEXT_LOCALE=de', 'accept-language': 'de-DE, en;q=0.5' })
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/en')
  })

  it('retire les paramètres de tracking en 301 et garde les autres', () => {
    const res = run('https://www.tahalearn.com/fr/courses?utm_source=fb&keep=1&gclid=z')
    expect(res.status).toBe(301)
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/fr/courses?keep=1')
  })

  it.each(['fbclid', 'category', 'search', 'utm_term'])('retire %s', p => {
    const res = run(`https://www.tahalearn.com/ar?${p}=1`)
    expect(res.status).toBe(301)
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/ar')
  })

  it('ajoute le Link canonical sur une page localisée', () => {
    const res = run('https://www.tahalearn.com/en/courses/x?keep=1')
    expect(isNext(res)).toBe(true)
    expect(res.headers.get('link')).toBe('<https://www.tahalearn.com/en/courses/x>; rel="canonical"')
  })

  it('chemin sans locale → 302 vers la locale détectée', () => {
    const res = run('https://www.tahalearn.com/inconnu/page', { 'accept-language': 'en-US,en;q=0.9' })
    expect(res.status).toBe(302)
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/en/inconnu/page')
  })

  it('racine www sans locale → 302 /fr par défaut', () => {
    const res = run('https://www.tahalearn.com/')
    expect(res.status).toBe(302)
    expect(res.headers.get('location')).toBe('https://www.tahalearn.com/fr')
  })

  it('ne touche pas aux fichiers ni à /api', () => {
    expect(isNext(run('https://www.tahalearn.com/og-image.png'))).toBe(true)
    expect(isNext(run('https://www.tahalearn.com/api/og'))).toBe(true)
  })

  it('matcher inchangé', () => {
    expect(config.matcher).toEqual([
      '/((?!_next/static|_next/image|favicon.ico|icons|images|fonts|sw.js|site.webmanifest|api).*)',
    ])
  })
})
