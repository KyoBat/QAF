import { describe, it, expect } from 'vitest'
import { coursesData } from '@/lib/data/courses/index'
import { lessonEntries } from '@/lib/data/mosquees/lesson-entries'
import {
  parcoursSequence,
  seasonalPlan,
  PRIMING_SEQUENCE_WEEKS,
} from '@/lib/data/mosquees/weekly-plan'
import {
  getWeekIndex,
  getHijriMonth,
  getWeeklyLesson,
  getUpcomingLessons,
  resolveEntry,
  SEQUENCE_LENGTH,
} from '@/lib/data/mosquees/weekly'

const LOCALES = ['fr', 'ar', 'en'] as const

/** Vendredi d'origine du planning. */
const ANCHOR = new Date('2026-08-07T10:00:00Z')
const WEEK_MS = 7 * 24 * 60 * 60 * 1000

function weeksAfterAnchor(n: number): Date {
  return new Date(ANCHOR.getTime() + n * WEEK_MS)
}

const allPlannedIds = [
  ...parcoursSequence.flatMap(p => p.entryIds),
  ...Object.values(seasonalPlan).flatMap(s => s.parcours.entryIds),
]

describe('catalogue de leçons', () => {
  it('ne contient aucun id dupliqué', () => {
    const ids = lessonEntries.map(e => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  // Un slug ou un lessonId mal recopié produirait un lien mort affiché en
  // évidence sur la page. On vérifie toutes les entrées.
  it.each(lessonEntries.map(e => [e.id, e] as const))(
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
    for (const entry of lessonEntries) {
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
  // Le plan référence les entrées par id : une faute de frappe passerait
  // silencieusement sans cette vérification.
  it.each(Array.from(new Set(allPlannedIds)).map(id => [id] as const))(
    "l'id %s référencé par le plan existe au catalogue",
    id => {
      expect(lessonEntries.find(e => e.id === id), `id inconnu : ${id}`).toBeDefined()
    }
  )

  it('ne diffuse pas deux fois la même leçon dans la série', () => {
    const ids = parcoursSequence.flatMap(p => p.entryIds)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('nomme chaque parcours dans les 3 langues', () => {
    const all = [...parcoursSequence, ...Object.values(seasonalPlan).map(s => s.parcours)]
    for (const parcours of all) {
      expect(parcours.entryIds.length, `${parcours.id} est vide`).toBeGreaterThan(0)
      for (const locale of LOCALES) {
        expect(parcours.name[locale]?.trim(), `${parcours.id}.name.${locale}`).toBeTruthy()
      }
    }
  })

  it('explique chaque mois imposé dans les 3 langues', () => {
    for (const [month, slot] of Object.entries(seasonalPlan)) {
      for (const locale of LOCALES) {
        expect(slot.reason[locale]?.trim(), `mois ${month}.reason.${locale}`).toBeTruthy()
      }
    }
  })

  it('commence par le parcours Aqida puis le parcours Hadith', () => {
    expect(parcoursSequence[0].id).toBe('aqida')
    expect(parcoursSequence[1].id).toBe('hadith')
  })

  // L'amorçage doit couvrir le parcours Aqida en entier, sinon le calendrier
  // le coupe en plein milieu.
  it('couvre le parcours Aqida entier par la période d’amorçage', () => {
    expect(PRIMING_SEQUENCE_WEEKS).toBe(parcoursSequence[0].entryIds.length)
  })
})

describe('rotation hebdomadaire', () => {
  it('garde la même leçon du vendredi au jeudi suivant', () => {
    const friday = new Date('2026-08-07T06:00:00Z')
    const thursday = new Date('2026-08-13T21:00:00Z')
    expect(getWeekIndex(friday)).toBe(getWeekIndex(thursday))
    expect(getWeeklyLesson(friday).path).toBe(getWeeklyLesson(thursday).path)
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

  it('résout toujours une leçon affichable', () => {
    const lesson = getWeeklyLesson(ANCHOR)
    expect(lesson.path).toMatch(/^\/courses\/[\w-]+\/lessons\/[\w-]+$/)
    expect(lesson.coursePath).toMatch(/^\/courses\/[\w-]+$/)
    for (const locale of LOCALES) {
      expect(lesson.lessonTitle[locale]).toBeTruthy()
      expect(lesson.parcoursName[locale]).toBeTruthy()
    }
  })

  it('renvoie null pour un id absent du catalogue', () => {
    expect(
      resolveEntry('id-inexistant', parcoursSequence[0], 1, null)
    ).toBeNull()
  })
})

describe('leçon de la semaine', () => {
  it('déroule le parcours Aqida en entier au lancement, sans interruption', () => {
    const aqida = parcoursSequence[0]

    for (let w = 0; w < aqida.entryIds.length; w++) {
      const lesson = getWeeklyLesson(weeksAfterAnchor(w))
      expect(lesson.entry.id, `semaine ${w}`).toBe(aqida.entryIds[w])
      expect(lesson.parcoursName.fr).toBe('Parcours Aqida')
      expect(lesson.positionInParcours).toBe(w + 1)
      expect(lesson.seasonalReason).toBeNull()
    }
  })

  it("enchaîne sur le parcours Hadith juste après la aqida", () => {
    const lesson = getWeeklyLesson(weeksAfterAnchor(PRIMING_SEQUENCE_WEEKS))
    expect(lesson.parcoursName.fr).toBe('Parcours Hadith')
    expect(lesson.positionInParcours).toBe(1)
  })

  it("laisse le calendrier reprendre la main une fois l'amorçage passé", () => {
    // Décembre 2026 = Rajab : le mois s'impose
    const rajab = new Date('2026-12-11T10:00:00Z')
    expect(getWeekIndex(rajab)).toBeGreaterThanOrEqual(PRIMING_SEQUENCE_WEEKS)
    expect(getHijriMonth(rajab)).toBe(7)
    expect(getWeeklyLesson(rajab).seasonalReason).not.toBeNull()
  })

  // Le point central du modèle demandé : le calendrier prime sur la série.
  it('impose le jeûne pendant Ramadan', () => {
    const ramadan = new Date('2027-02-15T10:00:00Z')
    expect(getHijriMonth(ramadan)).toBe(9)

    const lesson = getWeeklyLesson(ramadan)
    expect(seasonalPlan[9].parcours.entryIds).toContain(lesson.entry.id)
    expect(lesson.seasonalReason).not.toBeNull()
  })

  it('impose le pèlerinage pendant Dhul-Hijja', () => {
    const dhulHijja = new Date('2027-05-15T10:00:00Z')
    expect(getHijriMonth(dhulHijja)).toBe(12)
    expect(seasonalPlan[12].parcours.entryIds).toContain(getWeeklyLesson(dhulHijja).entry.id)
  })

  // Un mois couvre 4 à 5 semaines : la page ne doit pas rester figée dessus.
  it("fait tourner les leçons à l'intérieur d'un mois imposé", () => {
    const ramadanLessons: string[] = []
    for (let w = PRIMING_SEQUENCE_WEEKS; w < 120; w++) {
      const d = weeksAfterAnchor(w)
      if (getHijriMonth(d) === 9) ramadanLessons.push(getWeeklyLesson(d).entry.id)
    }

    expect(ramadanLessons.length).toBeGreaterThan(1)
    expect(new Set(ramadanLessons).size).toBeGreaterThan(1)
  })

  // Sans cela, un long mois imposé ferait « sauter » plusieurs leçons.
  it('ne fait pas avancer la série pendant les semaines imposées', () => {
    let seasonalWeek = -1
    for (let w = PRIMING_SEQUENCE_WEEKS; w < 120; w++) {
      if (getWeeklyLesson(weeksAfterAnchor(w)).seasonalReason) {
        seasonalWeek = w
        break
      }
    }
    expect(seasonalWeek, 'aucune semaine saisonnière trouvée').toBeGreaterThan(0)

    const before = getUpcomingLessons(1, weeksAfterAnchor(seasonalWeek - 1))[0]
    const during = getUpcomingLessons(1, weeksAfterAnchor(seasonalWeek))[0]
    expect(during.path).toBe(before.path)
  })

  it('parcourt toute la série sans répétition sur un cycle complet', () => {
    // On ne compte que les semaines de série : les mois imposés n'avancent pas.
    const seen = new Set<string>()
    for (let w = 0; w < 400 && seen.size < SEQUENCE_LENGTH; w++) {
      const lesson = getWeeklyLesson(weeksAfterAnchor(w))
      if (!lesson.seasonalReason) seen.add(lesson.entry.id)
    }
    expect(seen.size).toBe(SEQUENCE_LENGTH)
  })

  it('propose 3 leçons à venir, toutes distinctes et différentes de la courante', () => {
    const current = getWeeklyLesson(ANCHOR)
    const upcoming = getUpcomingLessons(3, ANCHOR)

    expect(upcoming).toHaveLength(3)
    expect(new Set(upcoming.map(l => l.path)).size).toBe(3)
    expect(upcoming.map(l => l.path)).not.toContain(current.path)
  })
})
