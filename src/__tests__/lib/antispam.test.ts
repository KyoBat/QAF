import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import {
  isSpamEmail,
  hashIp,
  turnstileEnabled,
  verifyTurnstile,
  ANTISPAM_LAYERS,
  BLOCKLIST_DOMAINS,
  DISPOSABLE_DOMAINS,
} from '@/lib/utils/antispam'

describe('antispam — isSpamEmail (heuristiques)', () => {
  it('laisse passer une adresse légitime', () => {
    expect(isSpamEmail('etudiant@gmail.com').spam).toBe(false)
    expect(isSpamEmail('Prenom.Nom@proton.me').spam).toBe(false)
  })

  it('bloque les domaines de la blocklist', () => {
    const r = isSpamEmail(`lead@${BLOCKLIST_DOMAINS[0]}`)
    expect(r.spam).toBe(true)
    expect(r.reason).toBe('domaine_blocklist')
  })

  it('bloque les domaines jetables', () => {
    const r = isSpamEmail(`x@${DISPOSABLE_DOMAINS[0]}`)
    expect(r.spam).toBe(true)
    expect(r.reason).toBe('domaine_jetable')
  })

  it('est insensible à la casse', () => {
    expect(isSpamEmail(`X@${DISPOSABLE_DOMAINS[0].toUpperCase()}`).spam).toBe(true)
  })

  it('bloque une structure invalide (pas de @)', () => {
    expect(isSpamEmail('pasdarobase').spam).toBe(true)
  })

  it('bloque une partie locale anormalement longue', () => {
    const r = isSpamEmail('a'.repeat(70) + '@gmail.com')
    expect(r.spam).toBe(true)
    expect(r.reason).toBe('local_part_anormale')
  })

  it('bloque une adresse au-delà de 254 caractères', () => {
    const r = isSpamEmail('a'.repeat(250) + '@x.com')
    expect(r.spam).toBe(true)
    expect(r.reason).toBe('email_trop_long')
  })
})

describe('antispam — hashIp', () => {
  it('retourne une chaîne vide pour une IP vide/unknown', () => {
    expect(hashIp('')).toBe('')
    expect(hashIp('unknown')).toBe('')
  })

  it('est déterministe et non réversible (hex 64)', () => {
    const a = hashIp('203.0.113.7')
    const b = hashIp('203.0.113.7')
    expect(a).toBe(b)
    expect(a).toMatch(/^[0-9a-f]{64}$/)
    expect(a).not.toContain('203.0.113.7')
  })

  it('produit des hashs différents pour des IP différentes', () => {
    expect(hashIp('1.1.1.1')).not.toBe(hashIp('8.8.8.8'))
  })
})

describe('antispam — Turnstile (opt-in)', () => {
  const original = process.env.TURNSTILE_SECRET_KEY

  beforeEach(() => {
    delete process.env.TURNSTILE_SECRET_KEY
  })
  afterEach(() => {
    if (original === undefined) delete process.env.TURNSTILE_SECRET_KEY
    else process.env.TURNSTILE_SECRET_KEY = original
  })

  it('désactivé sans clé secrète', () => {
    expect(turnstileEnabled()).toBe(false)
  })

  it('verifyTurnstile retourne true (transparent) quand désactivé', async () => {
    await expect(verifyTurnstile('peu importe', '1.2.3.4')).resolves.toBe(true)
  })

  it('activé quand la clé secrète est présente', () => {
    process.env.TURNSTILE_SECRET_KEY = 'secret'
    expect(turnstileEnabled()).toBe(true)
  })

  it('refuse un token vide quand activé', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'secret'
    await expect(verifyTurnstile('', '1.2.3.4')).resolves.toBe(false)
  })
})

describe('antispam — couches', () => {
  it('expose les couches attendues', () => {
    expect(ANTISPAM_LAYERS).toEqual(['honeypot', 'rate_limit', 'heuristics', 'turnstile'])
  })
})
