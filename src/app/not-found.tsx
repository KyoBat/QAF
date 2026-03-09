/**
 * Page 404 globale
 * Retourne un statut HTTP 404 pour que Googlebot identifie correctement les pages inexistantes
 */

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Introuvable',
  description: 'La page demandée n\'existe pas.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Page introuvable
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Accueil
        </Link>
        <Link
          href="/courses"
          className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
        >
          Voir les cours
        </Link>
      </div>
    </div>
  )
}
