import { describe, it, expect } from 'vitest'
import { coursesData } from '@/lib/data'
import { ogImageUrl, parseOgLocale, resolveOgContent, safeCourseImagePath } from '@/lib/og'

describe('safeCourseImagePath', () => {
  it('accepte une image locale et convertit le SVG en PNG', () => {
    expect(safeCourseImagePath('/images/courses/fiqh/hajj.svg'))
      .toBe('/images/courses/fiqh/hajj.png')
  })

  it("retombe sur l'image par défaut sans image", () => {
    expect(safeCourseImagePath(undefined)).toBe('/og-image.png')
  })

  it.each([
    '.evil.com/x.png',
    '@evil.com/x.png',
    '//evil.com/x.png',
    '/images/../../etc/passwd.png',
    '/images/x.png?u=https://evil.com',
    'https://evil.com/x.png',
  ])('refuse un chemin dangereux : %s', (path) => {
    expect(safeCourseImagePath(path)).toBeNull()
  })
})

describe('parseOgLocale', () => {
  it('garde une langue connue, sinon fr', () => {
    expect(parseOgLocale('ar')).toBe('ar')
    expect(parseOgLocale('xx')).toBe('fr')
    expect(parseOgLocale(null)).toBe('fr')
  })
})

describe('resolveOgContent', () => {
  const course = coursesData.find((c) => c.published && c.lessons.length > 0)!

  it('reconstruit les textes du cours depuis les données', async () => {
    const content = await resolveOgContent('fr', course.slug, null)
    expect(content?.title).toBe(course.title.fr)
    expect(content?.badge).toMatch(/leçons? gratuites?/)
  })

  it('reconstruit les textes de la leçon depuis les données', async () => {
    const lesson = course.lessons[0]
    const content = await resolveOgContent('en', course.slug, lesson.id)
    expect(content?.title).toBe(lesson.title.en ?? lesson.title.fr)
    expect(content?.badge).toBe(`Lesson 1 / ${course.lessons.length}`)
  })

  it('renvoie null pour un cours ou une leçon inconnus', async () => {
    expect(await resolveOgContent('fr', 'cours-inexistant', null)).toBeNull()
    expect(await resolveOgContent('fr', course.slug, 'lecon-inexistante')).toBeNull()
    expect(await resolveOgContent('fr', null, null)).toBeNull()
  })
})

describe('ogImageUrl', () => {
  it("ne transporte que la langue et les identifiants", () => {
    expect(ogImageUrl('ar', 'hajj', '009-sacrifice-lapidation'))
      .toBe('https://www.tahalearn.com/api/og?lang=ar&course=hajj&lesson=009-sacrifice-lapidation')
  })
})
