import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MosqueeWeekly } from '@/components/mosquee/MosqueeWeekly'
import { arRayaneMosquee } from '@/lib/data/mosquees/ar-rayane'
import { hadithBank } from '@/lib/data/mosquees/hadith-bank'
import {
  resolveEntry,
  getWeeklyCourse,
  type WeeklyHadith,
  type WeeklyCourse,
} from '@/lib/data/mosquees/weekly'

const ANCHOR = new Date('2026-08-07T10:00:00Z')

function hadithFor(id: string): WeeklyHadith {
  const entry = hadithBank.find(e => e.id === id)!
  const out = resolveEntry(entry)!
  expect(out).not.toBeNull()
  return out
}

/** Cours de série (semaine d'amorçage) et cours imposé par le mois. */
const seriesCourse: WeeklyCourse = getWeeklyCourse(ANCHOR)
const seasonalCourse: WeeklyCourse = getWeeklyCourse(new Date('2026-09-04T10:00:00Z'))

const baseProps = {
  mosquee: arRayaneMosquee,
  upcomingCourses: [],
  weekRange: 'vendredi 7 août → jeudi 13 août',
  hijriDate: '22 safar 1448 AH',
  pageUrl: 'https://www.tahalearn.com/fr/mosquees/ar-rayane-batna',
  qrTargetUrl: 'https://www.tahalearn.com/mosquees/ar-rayane-batna',
}

describe('rendu de la page mosquée', () => {
  it('affiche le cours de la semaine et son accroche', () => {
    render(
      <MosqueeWeekly
        locale="fr"
        course={seriesCourse}
        hadith={hadithFor('hadith-niyyah')}
        {...baseProps}
      />
    )

    expect(screen.getByText('Le cours de la semaine')).toBeInTheDocument()
    expect(screen.getByText(seriesCourse.title.fr)).toBeInTheDocument()
    expect(screen.getByText(seriesCourse.hook.fr)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Commencer le cours/ })).toHaveAttribute(
      'href',
      `/fr/courses/${seriesCourse.slug}`
    )
  })

  it('montre le rang dans la série, mais pas quand le mois impose le cours', () => {
    const { unmount } = render(
      <MosqueeWeekly
        locale="fr"
        course={seriesCourse}
        hadith={hadithFor('hadith-niyyah')}
        {...baseProps}
      />
    )
    expect(screen.getByText(/Série ·/)).toBeInTheDocument()
    unmount()

    render(
      <MosqueeWeekly
        locale="fr"
        course={seasonalCourse}
        hadith={hadithFor('hadith-niyyah')}
        {...baseProps}
      />
    )
    expect(screen.queryByText(/Série ·/)).toBeNull()
    expect(screen.getByText(seasonalCourse.seasonalReason!.fr)).toBeInTheDocument()
  })

  // Les semaines « hadith » sont la moitié de la banque : la citation, sa
  // traduction et son takhrij doivent apparaître.
  it('affiche citation, traduction et source pour une entrée hadith', () => {
    render(
      <MosqueeWeekly
        locale="fr"
        course={seriesCourse}
        hadith={hadithFor('hadith-niyyah')}
        {...baseProps}
      />
    )

    expect(screen.getByText(/إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ/)).toBeInTheDocument()
    expect(screen.getByText(/Les actes ne valent que par les intentions/)).toBeInTheDocument()
    expect(screen.getByText(/Sahih al-Bukhari 1/)).toBeInTheDocument()
    expect(screen.getByText('Le hadith de la semaine')).toBeInTheDocument()
  })

  it('ne duplique pas la traduction en arabe (elle répéterait le texte)', () => {
    const { container } = render(
      <MosqueeWeekly
        locale="ar"
        course={seriesCourse}
        hadith={hadithFor('hadith-niyyah')}
        {...baseProps}
      />
    )

    expect(container.querySelectorAll('blockquote')).toHaveLength(1)
    expect(screen.getByText('حديث الأسبوع')).toBeInTheDocument()
  })

  it("n'affiche aucune citation pour une entrée de type lesson", () => {
    const { container } = render(
      <MosqueeWeekly
        locale="fr"
        course={seriesCourse}
        hadith={hadithFor('salat-masbuq')}
        {...baseProps}
      />
    )

    expect(container.querySelector('blockquote')).toBeNull()
    expect(screen.getByText('La leçon de la semaine')).toBeInTheDocument()
  })

  it('lie la leçon du hadith avec le préfixe de langue courant', () => {
    render(
      <MosqueeWeekly
        locale="en"
        course={seriesCourse}
        hadith={hadithFor('salat-masbuq')}
        {...baseProps}
      />
    )

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
      const hadith = hadithFor('hadith-taqwa')
      const { unmount } = render(
        <MosqueeWeekly locale={locale} course={seriesCourse} hadith={hadith} {...baseProps} />
      )
      expect(screen.getByText(normalize(hadith.entry.question[locale]))).toBeInTheDocument()
      unmount()
    }
  })
})
