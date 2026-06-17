/**
 * Anti-spam partagé pour les formulaires publics (newsletter, futurs formulaires).
 *
 * Stratégie en couches (portée du projet AECJ/Rallyo, adaptée à Next.js) :
 *   1. rate_limit  → rate-limit.ts (déjà en place côté route)
 *   2. honeypot    → champ caché rempli par les bots (vérifié côté route)
 *   3. heuristics  → isSpamEmail() : blocklist + domaines jetables + structure
 *   4. turnstile   → Cloudflare Turnstile (OPT-IN via clés env)
 *
 * Plus une journalisation par couche (logRejection) pour mesurer l'efficacité.
 * Turnstile ne s'active QUE si TURNSTILE_SECRET_KEY est défini : sans clé, tout
 * reste transparent (seules honeypot + heuristiques + rate-limit jouent).
 */

import { createHmac } from 'crypto'

/** Couches reconnues — garde-fou contre les libellés divergents. */
export const ANTISPAM_LAYERS = ['honeypot', 'rate_limit', 'heuristics', 'turnstile'] as const
export type AntispamLayer = (typeof ANTISPAM_LAYERS)[number]

/** Domaines email connus pour le spam / lead-gen (extensible). */
export const BLOCKLIST_DOMAINS = ['callboxinc.com', 'callbox.com']

/** Domaines d'emails jetables courants (extensible). */
export const DISPOSABLE_DOMAINS = [
  'mailinator.com',
  'guerrillamail.com',
  'guerrillamail.info',
  '10minutemail.com',
  'tempmail.com',
  'temp-mail.org',
  'yopmail.com',
  'trashmail.com',
  'getnada.com',
  'sharklasers.com',
  'maildrop.cc',
  'throwawaymail.com',
  'fakeinbox.com',
  'dispostable.com',
]

export interface SpamCheck {
  spam: boolean
  reason?: string
}

/**
 * Heuristique de spam sur une adresse email (formulaire email-only).
 * Conservateur volontairement : on évite les faux positifs sur une newsletter.
 */
export function isSpamEmail(email: string): SpamCheck {
  const e = email.trim().toLowerCase()

  // Longueur RFC max
  if (e.length > 254) {
    return { spam: true, reason: 'email_trop_long' }
  }

  const at = e.lastIndexOf('@')
  if (at < 1) {
    return { spam: true, reason: 'structure_invalide' }
  }
  const local = e.slice(0, at)
  const domain = e.slice(at + 1)

  if (BLOCKLIST_DOMAINS.includes(domain)) {
    return { spam: true, reason: 'domaine_blocklist' }
  }
  if (DISPOSABLE_DOMAINS.includes(domain)) {
    return { spam: true, reason: 'domaine_jetable' }
  }
  // Partie locale anormalement longue = jeton aléatoire de bot
  if (local.length > 64) {
    return { spam: true, reason: 'local_part_anormale' }
  }

  return { spam: false }
}

/** Turnstile est-il configuré (clé secrète présente) ? */
export function turnstileEnabled(): boolean {
  return !!process.env.TURNSTILE_SECRET_KEY
}

/** Clé publique (site) — vide si non configurée. */
export function turnstileSiteKey(): string {
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''
}

/**
 * Vérifie un token Turnstile auprès de Cloudflare.
 *  - Turnstile désactivé (pas de clé) → true (transparent)
 *  - Token vide                       → false
 *  - Erreur réseau vers Cloudflare    → true (fail-open : ne pas bloquer un humain
 *                                       sur une panne CF ; les autres couches restent)
 */
export async function verifyTurnstile(token: string | undefined | null, ip: string): Promise<boolean> {
  if (!turnstileEnabled()) {
    return true
  }
  const t = (token || '').trim()
  if (t === '') {
    return false
  }

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY as string,
        response: t,
        remoteip: ip,
      }),
      // Garde-fou : ne pas bloquer la requête si Cloudflare traîne
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) {
      console.warn('[antispam] Turnstile HTTP non-OK (fail-open):', res.status)
      return true
    }
    const json = (await res.json()) as { success?: boolean }
    return !!json.success
  } catch (err) {
    console.warn('[antispam] Turnstile réseau KO (fail-open):', (err as Error).message)
    return true // fail-open
  }
}

/**
 * Hash salé d'une IP : HMAC-SHA256(ip, sel).
 * Le sel vient de ANTISPAM_SALT (env) ; à défaut, un sel statique propre au projet.
 * On ne journalise JAMAIS l'IP en clair (anti rainbow-table).
 */
export function hashIp(ip: string): string {
  if (!ip || ip === 'unknown') {
    return ''
  }
  const salt = process.env.ANTISPAM_SALT || 'tahalearn-antispam-fallback-salt'
  return createHmac('sha256', salt).update(ip).digest('hex')
}

/**
 * Journalise un rejet anti-spam, couche par couche (observation pure, non bloquant).
 * Pas de DB ici : log structuré (récupérable via les logs de la plateforme).
 * Ne doit JAMAIS modifier le comportement de rejet (codes HTTP, UX).
 */
export function logRejection(
  layer: AntispamLayer,
  reason = '',
  meta: Record<string, unknown> = {},
): void {
  try {
    console.warn(
      '[antispam] rejet',
      JSON.stringify({ layer, reason, ...meta, at: new Date().toISOString() }),
    )
  } catch {
    /* observation pure : ne jamais interrompre la requête */
  }
}
