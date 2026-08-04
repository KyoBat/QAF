/**
 * Partage du contenu de la semaine.
 *
 * Seul îlot client de la page : sur mobile, navigator.share ouvre WhatsApp —
 * c'est le chemin de diffusion réel entre fidèles d'une même mosquée.
 * ShareButton n'est pas réutilisé ici : ses libellés sont en dur en français.
 */

'use client'

import { useState } from 'react'
import { Share2, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Locale } from '@/locales'

interface ShareWeeklyProps {
  locale: Locale
  /** Titre du partage (nom de la mosquée + semaine en cours) */
  title: string
  /** Corps du message : cours, citation et question de la semaine */
  text: string
  url: string
}

const labels: Record<Locale, { share: string; copied: string }> = {
  fr: { share: 'Partager', copied: 'Lien copié' },
  ar: { share: 'مشاركة', copied: 'نُسخ الرابط' },
  en: { share: 'Share', copied: 'Link copied' },
}

export function ShareWeekly({ locale, title, text, url }: ShareWeeklyProps) {
  const [copied, setCopied] = useState(false)
  const t = labels[locale]

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text, url })
        return
      } catch {
        // Annulé par l'utilisateur ou non supporté : on retombe sur le presse-papier
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Presse-papier refusé (contexte non sécurisé) : on ne fait rien de visible
    }
  }

  return (
    <Button variant="outline" size="lg" onClick={handleShare} className="gap-2">
      {copied ? (
        <>
          <Check className="h-4 w-4 text-primary" aria-hidden="true" />
          {t.copied}
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" aria-hidden="true" />
          {t.share}
        </>
      )}
    </Button>
  )
}
