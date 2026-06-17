'use client'

import { useEffect, useRef } from 'react'

/**
 * Widget Cloudflare Turnstile (OPT-IN).
 * Ne s'affiche QUE si NEXT_PUBLIC_TURNSTILE_SITE_KEY est défini — sinon retourne
 * null et reste totalement transparent. Charge le script CF une seule fois.
 *
 * NB : on lit process.env directement (pas via antispam.ts) pour éviter de tirer
 * le module node `crypto` dans le bundle client.
 */

interface TurnstileApi {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string
      callback: (token: string) => void
      'expired-callback'?: () => void
      'error-callback'?: () => void
      theme?: 'light' | 'dark' | 'auto'
    },
  ) => string
  reset: (id?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

export function Turnstile({ onToken }: { onToken: (token: string) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

  useEffect(() => {
    if (!siteKey) return
    let cancelled = false
    let poll: ReturnType<typeof setInterval> | undefined

    const renderWidget = () => {
      if (cancelled || !ref.current || !window.turnstile || widgetId.current) return
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: siteKey,
        callback: (t) => onToken(t),
        'expired-callback': () => onToken(''),
        'error-callback': () => onToken(''),
        theme: 'auto',
      })
    }

    if (window.turnstile) {
      renderWidget()
    } else if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement('script')
      s.src = SCRIPT_SRC
      s.async = true
      s.defer = true
      s.onload = renderWidget
      document.head.appendChild(s)
    } else {
      poll = setInterval(() => {
        if (window.turnstile) {
          if (poll) clearInterval(poll)
          renderWidget()
        }
      }, 200)
    }

    return () => {
      cancelled = true
      if (poll) clearInterval(poll)
    }
  }, [siteKey, onToken])

  if (!siteKey) return null
  return <div ref={ref} className="my-2" />
}
