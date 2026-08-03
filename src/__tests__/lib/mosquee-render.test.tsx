import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MosqueeDaily } from '@/components/mosquee/MosqueeDaily'
import { arRayaneMosquee } from '@/lib/data/mosquees/ar-rayane'
import { dailyBank } from '@/lib/data/mosquees/daily-bank'
import { resolveEntry, type ResolvedDaily } from '@/lib/data/mosquees/daily'

function resolved(id: string): ResolvedDaily {
  const entry = dailyBank.find(e => e.id === id)!
  const out = resolveEntry(entry)!
  expect(out).not.toBeNull()
  return out
}

const baseProps = {
  mosquee: arRayaneMosquee,
  upcoming: [],
  formattedDate: 'lundi 3 août 2026',
  hijriDate: '20 safar 1448 AH',
  pageUrl: 'https://www.tahalearn.com/fr/mosquees/ar-rayane-batna',
  qrTargetUrl: 'https://www.tahalearn.com/mosquees/ar-rayane-batna',
}

describe('rendu de la page mosquée', () => {
  // Les jours « hadith » sont la moitié de la banque : la citation, sa
  // traduction et son takhrij doivent apparaître.
  it('affiche citation, traduction et source pour une entrée hadith', () => {
    const today = resolved('hadith-niyyah')
    render(<MosqueeDaily locale="fr" today={today} {...baseProps} />)

    expect(screen.getByText(/إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ/)).toBeInTheDocument()
    expect(screen.getByText(/Les actes ne valent que par les intentions/)).toBeInTheDocument()
    expect(screen.getByText(/Sahih al-Bukhari 1/)).toBeInTheDocument()
    expect(screen.getByText('Le hadith du jour')).toBeInTheDocument()
  })

  it('ne duplique pas la traduction en arabe (elle répéterait le texte)', () => {
    const today = resolved('hadith-niyyah')
    const { container } = render(<MosqueeDaily locale="ar" today={today} {...baseProps} />)

    const occurrences = container.querySelectorAll('blockquote')
    expect(occurrences).toHaveLength(1)
    expect(screen.getByText('حديث اليوم')).toBeInTheDocument()
  })

  it('n\'affiche aucune citation pour une entrée de type lesson', () => {
    const today = resolved('salat-masbuq')
    const { container } = render(<MosqueeDaily locale="fr" today={today} {...baseProps} />)

    expect(container.querySelector('blockquote')).toBeNull()
    expect(screen.getByText('La leçon du jour')).toBeInTheDocument()
  })

  it('lie la leçon avec le préfixe de langue courant', () => {
    const today = resolved('salat-masbuq')
    render(<MosqueeDaily locale="en" today={today} {...baseProps} />)

    const link = screen.getByRole('link', { name: /Read the full lesson/ })
    expect(link).toHaveAttribute(
      'href',
      '/en/courses/bases-fiqh-ibadat-salat/lessons/lesson-017'
    )
  })

  it('affiche toujours la question du jour', () => {
    // Les textes contiennent des espaces fines insécables (typographie française).
    // getByText les normalise côté DOM : on normalise donc aussi l'attendu.
    const normalize = (s: string) => s.replace(/\s+/g, ' ').trim()

    for (const locale of ['fr', 'ar', 'en'] as const) {
      const today = resolved('hadith-taqwa')
      const { unmount } = render(<MosqueeDaily locale={locale} today={today} {...baseProps} />)
      expect(screen.getByText(normalize(today.entry.question[locale]))).toBeInTheDocument()
      unmount()
    }
  })
})
