import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MosqueeWeekly } from '@/components/mosquee/MosqueeWeekly'
import { arRayaneMosquee } from '@/lib/data/mosquees/ar-rayane'
import { parcoursSequence } from '@/lib/data/mosquees/weekly-plan'
import { resolveEntry, getWeeklyLesson, type WeeklyLesson } from '@/lib/data/mosquees/weekly'

/** Construit une leçon de série à partir de son id d'entrée. */
function lessonFor(entryId: string): WeeklyLesson {
  const out = resolveEntry(entryId, parcoursSequence[0], 1, null)!
  expect(out, `entrée introuvable : ${entryId}`).not.toBeNull()
  return out
}

/** Semaine imposée par le mois (Rajab). */
const seasonalLesson = getWeeklyLesson(new Date('2026-12-11T10:00:00Z'))

const baseProps = {
  mosquee: arRayaneMosquee,
  upcoming: [],
  weekRange: 'vendredi 7 août → jeudi 13 août',
  hijriDate: '22 safar 1448 AH',
  pageUrl: 'https://www.tahalearn.com/fr/mosquees/ar-rayane-batna',
  qrTargetUrl: 'https://www.tahalearn.com/mosquees/ar-rayane-batna',
}

describe('rendu de la page mosquée', () => {
  it('affiche la leçon de la semaine, sa question et son parcours', () => {
    const lesson = lessonFor('aqeedah-piliers-foi')
    render(<MosqueeWeekly locale="fr" lesson={lesson} {...baseProps} />)

    expect(screen.getByText('La leçon de la semaine')).toBeInTheDocument()
    expect(screen.getByText(lesson.lessonTitle.fr)).toBeInTheDocument()
    expect(screen.getByText(/Parcours Aqida · 1 \/ 6/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Lire la leçon/ })).toHaveAttribute(
      'href',
      `/fr${lesson.path}`
    )
  })

  // Le cours reste accessible, mais ne doit pas concurrencer la lecture.
  it('renvoie vers le cours entier par un lien discret, pas un bouton', () => {
    const lesson = lessonFor('aqeedah-piliers-foi')
    render(<MosqueeWeekly locale="fr" lesson={lesson} {...baseProps} />)

    const courseLink = screen.getByRole('link', { name: 'Voir tout le parcours' })
    expect(courseLink).toHaveAttribute('href', `/fr${lesson.coursePath}`)
    expect(courseLink.className).not.toMatch(/bg-primary/)
  })

  it('affiche citation, traduction et source pour une entrée hadith', () => {
    render(<MosqueeWeekly locale="fr" lesson={lessonFor('hadith-niyyah')} {...baseProps} />)

    expect(screen.getByText(/إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ/)).toBeInTheDocument()
    expect(screen.getByText(/Les actes ne valent que par les intentions/)).toBeInTheDocument()
    expect(screen.getByText(/Sahih al-Bukhari 1/)).toBeInTheDocument()
  })

  it('ne duplique pas la traduction en arabe (elle répéterait le texte)', () => {
    const { container } = render(
      <MosqueeWeekly locale="ar" lesson={lessonFor('hadith-niyyah')} {...baseProps} />
    )

    expect(container.querySelectorAll('blockquote')).toHaveLength(1)
    expect(screen.getByText('درس الأسبوع')).toBeInTheDocument()
  })

  it("n'affiche aucune citation pour une entrée sans quote", () => {
    const { container } = render(
      <MosqueeWeekly locale="fr" lesson={lessonFor('salat-masbuq')} {...baseProps} />
    )

    expect(container.querySelector('blockquote')).toBeNull()
  })

  it('affiche la raison du mois quand le calendrier impose le sujet', () => {
    const { unmount } = render(
      <MosqueeWeekly locale="fr" lesson={seasonalLesson} {...baseProps} />
    )
    expect(screen.getByText(seasonalLesson.seasonalReason!.fr)).toBeInTheDocument()
    unmount()

    render(<MosqueeWeekly locale="fr" lesson={lessonFor('hadith-niyyah')} {...baseProps} />)
    expect(screen.queryByText(seasonalLesson.seasonalReason!.fr)).toBeNull()
  })

  it('lie la leçon avec le préfixe de langue courant', () => {
    render(<MosqueeWeekly locale="en" lesson={lessonFor('salat-masbuq')} {...baseProps} />)

    expect(screen.getByRole('link', { name: /Read the lesson/ })).toHaveAttribute(
      'href',
      '/en/courses/bases-fiqh-ibadat-salat/lessons/lesson-017'
    )
  })

  it('affiche toujours la question de la semaine', () => {
    // Les textes contiennent des espaces fines insécables (typographie française).
    // getByText les normalise côté DOM : on normalise donc aussi l'attendu.
    const normalize = (s: string) => s.replace(/\s+/g, ' ').trim()

    for (const locale of ['fr', 'ar', 'en'] as const) {
      const lesson = lessonFor('hadith-taqwa')
      const { unmount } = render(
        <MosqueeWeekly locale={locale} lesson={lesson} {...baseProps} />
      )
      expect(screen.getByText(normalize(lesson.entry.question[locale]))).toBeInTheDocument()
      unmount()
    }
  })
})
