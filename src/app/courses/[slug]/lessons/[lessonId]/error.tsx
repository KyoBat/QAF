'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function LessonError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error('Lesson page error:', error)
  }, [error])

  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">📖</div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Erreur de chargement
        </h2>
        <p className="text-muted-foreground mb-6">
          Impossible de charger cette leçon. Veuillez réessayer.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            Réessayer
          </Button>
          <Button onClick={() => window.history.back()} variant="outline">
            Retour
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left text-sm text-muted-foreground bg-muted p-4 rounded-lg">
            <summary className="cursor-pointer font-medium">Détails de l&apos;erreur</summary>
            <pre className="mt-2 overflow-auto">{error.message}</pre>
          </details>
        )}
      </div>
    </div>
  )
}
