import { describe, it, expect } from 'vitest'
import { coursesData } from '@/lib/data/courses/index'
import { dailyBank } from '@/lib/data/mosquees/daily-bank'
import {
  getAlgeriaDayNumber,
  getDailyEntry,
  getResolvedDaily,
  getUpcoming,
  resolveEntry,
} from '@/lib/data/mosquees/daily'

const LOCALES = ['fr', 'ar', 'en'] as const

describe('banque quotidienne mosquée', () => {
  it('ne contient aucun id dupliqué', () => {
    const ids = dailyBank.map(e => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  // Le point critique : un slug ou un lessonId mal recopié produirait un lien
  // mort affiché en évidence sur la page. On vérifie les 32 entrées.
  it.each(dailyBank.map(e => [e.id, e] as const))(
    'l\'entrée %s pointe vers une leçon publiée',
    (_id, entry) => {
      const course = coursesData.find(c => c.slug === entry.courseSlug)
      expect(course, `cours introuvable : ${entry.courseSlug}`).toBeDefined()
      expect(course!.published, `cours dépublié : ${entry.courseSlug}`).toBe(true)

      const lesson = course!.lessons.find(l => l.id === entry.lessonId)
      expect(
        lesson,
        `leçon introuvable : ${entry.courseSlug}/${entry.lessonId}`
      ).toBeDefined()
    }
  )

  it('fournit question et citation dans les 3 langues', () => {
    for (const entry of dailyBank) {
      for (const locale of LOCALES) {
        expect(entry.question[locale]?.trim(), `${entry.id}.question.${locale}`).toBeTruthy()
      }

      if (entry.kind === 'hadith') {
        expect(entry.quote, `${entry.id} est de type hadith mais n'a pas de citation`).toBeDefined()
        expect(entry.quote!.ar.trim()).toBeTruthy()
        for (const locale of LOCALES) {
          expect(entry.quote!.translation[locale]?.trim(), `${entry.id}.translation.${locale}`).toBeTruthy()
          expect(entry.quote!.source[locale]?.trim(), `${entry.id}.source.${locale}`).toBeTruthy()
        }
      }
    }
  })
})

describe('rotation quotidienne', () => {
  it('renvoie la même entrée pour deux instants du même jour', () => {
    const morning = new Date('2026-08-03T06:00:00Z')
    const evening = new Date('2026-08-03T20:00:00Z')
    expect(getDailyEntry(morning).id).toBe(getDailyEntry(evening).id)
  })

  it('change d\'entrée d\'un jour au suivant', () => {
    const day1 = new Date('2026-08-03T10:00:00Z')
    const day2 = new Date('2026-08-04T10:00:00Z')
    expect(getDailyEntry(day1).id).not.toBe(getDailyEntry(day2).id)
  })

  it('bascule à minuit heure de Batna (UTC+1), pas à minuit UTC', () => {
    // 23h30 UTC = 00h30 à Batna le lendemain → jour suivant
    const beforeUtcMidnight = new Date('2026-08-03T23:30:00Z')
    const afterUtcMidnight = new Date('2026-08-03T22:30:00Z')
    expect(getAlgeriaDayNumber(beforeUtcMidnight)).toBe(
      getAlgeriaDayNumber(afterUtcMidnight) + 1
    )
  })

  it('couvre toute la banque sur un cycle complet, sans répétition', () => {
    const start = new Date('2026-08-03T10:00:00Z')
    const seen = new Set<string>()

    for (let i = 0; i < dailyBank.length; i++) {
      const date = new Date(start.getTime() + i * 24 * 60 * 60 * 1000)
      seen.add(getDailyEntry(date).id)
    }

    expect(seen.size).toBe(dailyBank.length)
  })

  it('résout toujours une entrée affichable', () => {
    const resolved = getResolvedDaily(new Date('2026-08-03T10:00:00Z'))
    expect(resolved.path).toMatch(/^\/courses\/[\w-]+\/lessons\/[\w-]+$/)
    for (const locale of LOCALES) {
      expect(resolved.lessonTitle[locale]).toBeTruthy()
      expect(resolved.courseTitle[locale]).toBeTruthy()
    }
  })

  it('propose 3 entrées à venir, différentes de celle du jour', () => {
    const now = new Date('2026-08-03T10:00:00Z')
    const today = getResolvedDaily(now)
    const upcoming = getUpcoming(3, now)

    expect(upcoming).toHaveLength(3)
    expect(upcoming.map(u => u.entry.id)).not.toContain(today.entry.id)
  })

  it('renvoie null pour une entrée pointant vers une leçon inexistante', () => {
    expect(
      resolveEntry({
        id: 'test',
        courseSlug: 'sciences-hadith',
        lessonId: 'lesson-inexistante',
        kind: 'lesson',
        question: { fr: 'q', ar: 'q', en: 'q' },
      })
    ).toBeNull()
  })
})
