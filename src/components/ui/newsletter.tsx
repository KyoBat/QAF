'use client'

import { useState } from 'react'
import { Mail, CheckCircle2, Loader2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  variant?: 'default' | 'compact' | 'hero'
  className?: string
}

export function NewsletterForm({ variant = 'default', className }: NewsletterFormProps) {
  const { t, isRTL } = useLocale()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setErrorMessage(t('newsletter.errorInvalid'))
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setErrorMessage(data.error || t('newsletter.errorGeneric'))
      }
    } catch {
      setStatus('error')
      setErrorMessage(t('newsletter.errorGeneric'))
    }
  }

  // Version compacte pour le footer
  if (variant === 'compact') {
    return (
      <div className={cn('w-full', className)}>
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm">{t('newsletter.success')}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                className={cn(
                  "w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600",
                  "bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                  "placeholder:text-gray-400 dark:placeholder:text-gray-500",
                  isRTL && "text-right pr-10 pl-4"
                )}
                disabled={status === 'loading'}
              />
            </div>
            <Button 
              type="submit" 
              size="sm"
              disabled={status === 'loading'}
              className="shrink-0"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
              )}
            </Button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
        )}
      </div>
    )
  }

  // Version hero pour la page d'accueil
  if (variant === 'hero') {
    return (
      <div className={cn(
        "w-full max-w-xl mx-auto",
        className
      )}>
        {status === 'success' ? (
          <div className="flex flex-col items-center gap-3 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-lg font-medium text-emerald-700 dark:text-emerald-300">
              {t('newsletter.successTitle')}
            </p>
            <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 text-center">
              {t('newsletter.successMessage')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className={cn(
                  "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400",
                  isRTL ? "right-4" : "left-4"
                )} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  className={cn(
                    "w-full py-4 text-base rounded-xl border-2 border-gray-200 dark:border-gray-700",
                    "bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",
                    "placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all",
                    isRTL ? "pr-12 pl-4 text-right" : "pl-12 pr-4"
                  )}
                  disabled={status === 'loading'}
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={status === 'loading'}
                className="gap-2 px-8 py-4 h-auto text-base"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>{t('newsletter.loading')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('newsletter.subscribe')}</span>
                    <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
                  </>
                )}
              </Button>
            </div>
            {status === 'error' && (
              <p className="text-sm text-red-500 text-center">{errorMessage}</p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {t('newsletter.privacy')}
            </p>
          </form>
        )}
      </div>
    )
  }

  // Version par défaut
  return (
    <div className={cn("w-full", className)}>
      {status === 'success' ? (
        <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div>
            <p className="font-medium text-emerald-700 dark:text-emerald-300">
              {t('newsletter.successTitle')}
            </p>
            <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">
              {t('newsletter.successMessage')}
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Mail className={cn(
              "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400",
              isRTL ? "right-3" : "left-3"
            )} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              className={cn(
                "w-full py-3 rounded-lg border border-gray-300 dark:border-gray-600",
                "bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                "placeholder:text-gray-400 dark:placeholder:text-gray-500",
                isRTL ? "pr-10 pl-4 text-right" : "pl-10 pr-4"
              )}
              disabled={status === 'loading'}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full gap-2"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>{t('newsletter.loading')}</span>
              </>
            ) : (
              <>
                <span>{t('newsletter.subscribe')}</span>
                <ArrowRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
              </>
            )}
          </Button>
          {status === 'error' && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {t('newsletter.privacy')}
          </p>
        </form>
      )}
    </div>
  )
}
