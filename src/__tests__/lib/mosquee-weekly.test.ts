import { describe, it, expect } from 'vitest'
import { coursesData } from '@/lib/data/courses/index'
import { hadithBank } from '@/lib/data/mosquees/hadith-bank'
import {
  courseHooks,
  courseSequence,
  seasonalPlan,
  PRIMING_SEQUENCE_WEEKS,
} from '@/lib/data/mosquees/weekly-plan'
import {
  getWeekIndex,
  getHijriMonth,
  getWeeklyEntry,
  getWeeklyHadith,
  getWeeklyCourse,
  getUpcomingCourses,
  resolveEntry,
} from '@/lib/data/mosquees/weekly'

const LOCALES = ['fr', 'ar', 'en'] as const

/** Vendredi d'origine du planning. */
const ANCHOR = new Date('2026-08-07T10:00:00Z')
const WEEK_MS = 7 * 24 * 60 * 60 * 1000

function weeksAfterAnchor(n: number): Date {
  return new Date(ANCHOR.getTime() + n * WEEK_MS)
}

describe('banque hebdomadaire', () => {
  it('ne contient aucun id dupliqué', () => {
    const ids = hadithBank.map(e => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  // Un slug ou un lessonId mal recopié produirait un lien mort affiché en
  // évidence sur la page. On vérifie toutes les entrées.
  it.each(hadithBank.map(e => [e.id, e] as const))(
    "l'entrée %s pointe vers une leçon publiée",
    (_id, entry) => {
      const course = coursesData.find(c => c.slug === entry.courseSlug)
      expect(course, `cours introuvable : ${entry.courseSlug}`).toBeDefined()
      expect(course!.published, `cours dépublié : ${entry.courseSlug}`).toBe(true)

      const lesson = course!.lessons.find(l => l.id === entry.lessonId)
      expect(lesson, `leçon introuvable : ${entry.courseSlug}/${entry.lessonId}`).toBeDefined()
    }
  )

  it('fournit question et citation dans les 3 langues', () => {
    for (const entry of hadithBank) {
      for (const locale of LOCALES) {
        expect(entry.question[locale]?.trim(), `${entry.id}.question.${locale}`).toBeTruthy()
      }

      if (entry.kind === 'hadith') {
        expect(entry.quote, `${entry.id} est de type hadith mais n'a pas de citation`).toBeDefined()
        expect(entry.quote!.ar.trim()).toBeTruthy()
        for (const locale of LOCALES) {
          expect(entry.quote!.translation[locale]?.trim()).toBeTruthy()
          expect(entry.quote!.source[locale]?.trim()).toBeTruthy()
        }
      }
    }
  })
})

describe('plan hebdomadaire', () => {
  it.each(courseSequence.map(slug => [slug] as const))(
    'le cours %s de la série est publié',
    slug => {
      const course = coursesData.find(c => c.slug === slug)
      expect(course, `cours introuvable : ${slug}`).toBeDefined()
      expect(course!.published, `cours dépublié : ${slug}`).toBe(true)
    }
  )

  it.each(Object.entries(seasonalPlan))(
    'les cours du mois hégirien %s sont publiés',
    (_month, slot) => {
      expect(slot.courseSlugs.length).toBeGreaterThan(0)

      for (const slug of slot.courseSlugs) {
        const course = coursesData.find(c => c.slug === slug)
        expect(course, `cours introuvable : ${slug}`).toBeDefined()
        expect(course!.published, `cours dépublié : ${slug}`).toBe(true)
      }

      for (const locale of LOCALES) {
        expect(slot.reason[locale]?.trim()).toBeTruthy()
      }
    }
  )

  it('ne place aucun doublon dans la série', () => {
    expect(new Set(courseSequence).size).toBe(courseSequence.length)
  })

  // Le cours PRINCIPAL d'un mois reviendrait deux fois par cycle s'il était
  // aussi dans la série. Les cours secondaires du mois, eux, peuvent y figurer :
  // les revoir au bon moment de l'année est voulu.
  it('ne met aucun cours principal de mois dans la série', () => {
    const primarySlugs = Object.values(seasonalPlan).map(s => s.courseSlugs[0])
    for (const slug of courseSequence) {
      expect(primarySlugs, `${slug} est à la fois cours principal d'un mois et dans la série`).not.toContain(slug)
    }
  })

  it('fournit un hook en 3 langues pour chaque cours du plan', () => {
    const all = [...courseSequence, ...Object.values(seasonalPlan).flatMap(s => s.courseSlugs)]
    for (const slug of Array.from(new Set(all))) {
      expect(courseHooks[slug], `hook manquant : ${slug}`).toBeDefined()
      for (const locale of LOCALES) {
        expect(courseHooks[slug][locale]?.trim(), `${slug}.hook.${locale}`).toBeTruthy()
      }
    }
  })

  it('commence la série par la aqida puis les sciences du hadith', () => {
    expect(courseSequence.slice(0, 4)).toEqual([
      'aqeedah-islamique',
      'aqeedah-niveau-2',
      'aqeedah-avancee',
      'sectes-refutations',
    ])
    expect(courseSequence.slice(4, 6)).toEqual(['sciences-hadith', 'mustalah-hadith'])
  })
})

describe('rotation hebdomadaire', () => {
  it('garde le même contenu du vendredi au jeudi suivant', () => {
    const friday = new Date('2026-08-07T06:00:00Z')
    const thursday = new Date('2026-08-13T21:00:00Z')
    expect(getWeekIndex(friday)).toBe(getWeekIndex(thursday))
    expect(getWeeklyEntry(friday).id).toBe(getWeeklyEntry(thursday).id)
  })

  it('bascule le vendredi suivant, pas avant', () => {
    // Jeudi 23h00 heure de Batna = 22h00 UTC : encore la semaine 0
    const beforeSwitch = new Date('2026-08-13T22:00:00Z')
    // Vendredi 00h30 heure de Batna = 23h30 UTC le jeudi : semaine 1
    const afterSwitch = new Date('2026-08-13T23:30:00Z')
    expect(getWeekIndex(beforeSwitch)).toBe(0)
    expect(getWeekIndex(afterSwitch)).toBe(1)
  })

  it("reste sur la semaine 0 avant la date d'origine", () => {
    expect(getWeekIndex(new Date('2026-07-01T10:00:00Z'))).toBe(0)
  })

  it('couvre toute la banque sur un cycle complet, sans répétition', () => {
    const seen = new Set<string>()
    for (let w = 0; w < hadithBank.length; w++) {
      seen.add(getWeeklyEntry(weeksAfterAnchor(w)).id)
    }
    expect(seen.size).toBe(hadithBank.length)
  })

  it('résout toujours un hadith affichable', () => {
    const resolved = getWeeklyHadith(ANCHOR)
    expect(resolved.path).toMatch(/^\/courses\/[\w-]+\/lessons\/[\w-]+$/)
    for (const locale of LOCALES) {
      expect(resolved.lessonTitle[locale]).toBeTruthy()
    }
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

describe('cours de la semaine', () => {
  it('démarre par le premier cours de aqida', () => {
    // Août 2026 = Safar, mois sans cours imposé : la série démarre
    expect(getHijriMonth(ANCHOR)).toBe(2)
    const course = getWeeklyCourse(ANCHOR)
    expect(course.slug).toBe('aqeedah-islamique')
    expect(course.positionInSequence).toBe(1)
    expect(course.seasonalReason).toBeNull()
  })

  // L'amorçage garantit que les 4 cours de aqida passent en entier, même si
  // un mois imposé tombe juste après le lancement (c'est le cas : Rabi' I).
  it('enchaîne les 4 cours de aqida au lancement, sans interruption', () => {
    expect(getWeeklyCourse(weeksAfterAnchor(0)).slug).toBe('aqeedah-islamique')
    expect(getWeeklyCourse(weeksAfterAnchor(1)).slug).toBe('aqeedah-niveau-2')
    expect(getWeeklyCourse(weeksAfterAnchor(2)).slug).toBe('aqeedah-avancee')
    expect(getWeeklyCourse(weeksAfterAnchor(3)).slug).toBe('sectes-refutations')

    for (let w = 0; w < PRIMING_SEQUENCE_WEEKS; w++) {
      expect(getWeeklyCourse(weeksAfterAnchor(w)).seasonalReason).toBeNull()
    }
  })

  it("laisse le calendrier reprendre la main après l'amorçage", () => {
    // Semaine 4 = septembre 2026 = Rabi' al-Awwal : le mois s'impose
    const afterPriming = weeksAfterAnchor(PRIMING_SEQUENCE_WEEKS)
    expect(getHijriMonth(afterPriming)).toBe(3)
    expect(getWeeklyCourse(afterPriming).seasonalReason).not.toBeNull()
  })

  // Le point central du modèle demandé : le calendrier prime sur la série.
  it('impose le cours du jeûne pendant Ramadan', () => {
    const ramadan = new Date('2027-02-15T10:00:00Z')
    expect(getHijriMonth(ramadan)).toBe(9)

    const course = getWeeklyCourse(ramadan)
    expect(seasonalPlan[9].courseSlugs).toContain(course.slug)
    expect(course.seasonalReason).not.toBeNull()
    expect(course.positionInSequence).toBeNull()
  })

  // Un mois couvre 4 à 5 semaines : la page ne doit pas rester figée dessus.
  it('fait tourner les cours à l\'intérieur d\'un mois imposé', () => {
    const ramadanWeeks: string[] = []
    for (let w = PRIMING_SEQUENCE_WEEKS; w < 120; w++) {
      const d = weeksAfterAnchor(w)
      if (getHijriMonth(d) === 9) ramadanWeeks.push(getWeeklyCourse(d).slug)
    }

    expect(ramadanWeeks.length).toBeGreaterThan(1)
    expect(new Set(ramadanWeeks).size).toBeGreaterThan(1)
  })

  it('impose le cours du pèlerinage pendant Dhul-Hijja', () => {
    const dhulHijja = new Date('2027-05-15T10:00:00Z')
    expect(getHijriMonth(dhulHijja)).toBe(12)
    expect(seasonalPlan[12].courseSlugs).toContain(getWeeklyCourse(dhulHijja).slug)
  })

  // Sans cela, un long mois imposé ferait « sauter » plusieurs cours.
  it('ne fait pas avancer la série pendant les semaines imposées', () => {
    let seasonalWeek = -1
    for (let w = PRIMING_SEQUENCE_WEEKS; w < 120; w++) {
      if (getWeeklyCourse(weeksAfterAnchor(w)).seasonalReason) {
        seasonalWeek = w
        break
      }
    }
    expect(seasonalWeek, 'aucune semaine saisonnière trouvée en 120 semaines').toBeGreaterThan(0)

    const before = getUpcomingCourses(1, weeksAfterAnchor(seasonalWeek - 1))[0]
    const during = getUpcomingCourses(1, weeksAfterAnchor(seasonalWeek))[0]
    expect(during.slug).toBe(before.slug)
  })

  it('propose 3 cours à venir, tous distincts', () => {
    const upcoming = getUpcomingCourses(3, ANCHOR)
    expect(upcoming).toHaveLength(3)
    expect(new Set(upcoming.map(c => c.slug)).size).toBe(3)
  })

  it('ne propose pas le cours déjà affiché cette semaine', () => {
    const current = getWeeklyCourse(ANCHOR)
    const upcoming = getUpcomingCourses(3, ANCHOR)
    expect(upcoming.map(c => c.slug)).not.toContain(current.slug)
  })
})
