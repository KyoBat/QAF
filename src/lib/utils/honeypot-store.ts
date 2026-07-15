/**
 * Persistance best-effort des hits honeypot dans un store Redis
 * (Vercel KV / Upstash). Objectif : transformer les `console.warn('[honeypot]')`
 * — éphémères et non agrégés — en statistiques cumulées (hits/jour, top ASN,
 * nombre d'IP fautives distinctes) consultables via /api/trap/stats.
 *
 * ⚠️ 100 % fail-open : si le store n'est pas configuré (variables d'env absentes)
 * ou indisponible/lent, TOUTES les fonctions deviennent des no-op silencieux.
 * Le honeypot continue de logguer + renvoyer 403 sans jamais casser ni ralentir
 * dangereusement (timeout dur). Voir ANTI-SCRAPING.md.
 *
 * Aucune dépendance npm : on parle à l'API REST Upstash via `fetch`. Les
 * variables d'env sont injectées automatiquement par l'intégration Vercel KV /
 * Upstash for Redis (on accepte les deux conventions de nommage).
 */

const REST_URL =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || ''
const REST_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ''

/** Le store est-il configuré ? (sinon toutes les fonctions sont des no-op) */
export function isStoreConfigured(): boolean {
  return Boolean(REST_URL && REST_TOKEN)
}

// Rétention des clés journalières : 90 jours glissants.
const DAY_TTL = 60 * 60 * 24 * 90
// Coupe-circuit : on n'attend jamais le store plus de 2 s.
const TIMEOUT_MS = 2000

// Clés Redis
const KEY_DAY = (day: string) => `honeypot:day:${day}`
const KEY_ASN_DAY = (asn: string, day: string) => `honeypot:asn:${asn}:${day}`
const KEY_ASN_TOTAL = 'honeypot:asn:total' // sorted set : ASN -> total hits
const KEY_IPS = 'honeypot:ips' // set : ipHash distincts

type Cmd = (string | number)[]

/**
 * Envoie un pipeline de commandes à l'API REST Upstash.
 * Renvoie la liste des `result` (dans l'ordre) ou `null` si non configuré /
 * erreur / timeout — jamais d'exception propagée.
 */
async function pipeline(commands: Cmd[]): Promise<unknown[] | null> {
  if (!isStoreConfigured() || commands.length === 0) return null
  try {
    const res = await fetch(`${REST_URL}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${REST_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commands),
      cache: 'no-store',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
    if (!res.ok) return null
    const data = (await res.json()) as Array<{ result?: unknown; error?: string }>
    return data.map((d) => (d && 'result' in d ? d.result : null))
  } catch {
    return null // fail-open : store lent/indispo/absent
  }
}

/** Jour courant au format YYYY-MM-DD (UTC, cohérent avec les logs). */
function today(): string {
  return new Date().toISOString().slice(0, 10)
}

/**
 * Enregistre un hit honeypot (best-effort). À `await` dans le handler : en
 * serverless, un fire-and-forget serait perdu quand l'instance gèle après la
 * réponse. La latence ajoutée est sans importance (c'est un bot) et bornée par
 * TIMEOUT_MS.
 */
export async function recordHoneypotHit(params: {
  ipHash: string
  asn: string
}): Promise<void> {
  if (!isStoreConfigured()) return
  const day = today()
  const asn = params.asn || 'unknown'
  const dayKey = KEY_DAY(day)
  const asnDayKey = KEY_ASN_DAY(asn, day)

  const commands: Cmd[] = [
    ['INCR', dayKey],
    ['EXPIRE', dayKey, DAY_TTL],
    ['INCR', asnDayKey],
    ['EXPIRE', asnDayKey, DAY_TTL],
    ['ZINCRBY', KEY_ASN_TOTAL, 1, asn],
  ]
  // ipHash peut être vide (IP inconnue) : ne pas polluer le set dans ce cas.
  if (params.ipHash) commands.push(['SADD', KEY_IPS, params.ipHash])

  await pipeline(commands)
}

export interface HoneypotStats {
  configured: true
  generatedAt: string
  windowDays: number
  totalOverWindow: number
  uniqueIpHashes: number
  byDay: Array<{ day: string; hits: number }>
  topAsn: Array<{ asn: string; hits: number }>
}

/** Liste des `n` derniers jours (UTC), du plus ancien au plus récent. */
function lastNDays(n: number): string[] {
  const out: string[] = []
  const now = Date.now()
  for (let i = n - 1; i >= 0; i--) {
    out.push(new Date(now - i * 86_400_000).toISOString().slice(0, 10))
  }
  return out
}

/**
 * Lit les statistiques agrégées. Renvoie `null` si le store n'est pas
 * configuré ou en cas d'erreur de lecture.
 */
export async function readHoneypotStats(
  days = 14,
): Promise<HoneypotStats | null> {
  if (!isStoreConfigured()) return null
  const daysList = lastNDays(days)
  const dayKeys = daysList.map(KEY_DAY)

  const res = await pipeline([
    ['MGET', ...dayKeys],
    ['ZREVRANGE', KEY_ASN_TOTAL, 0, 19, 'WITHSCORES'],
    ['SCARD', KEY_IPS],
  ])
  if (!res) return null

  const [mget, zrange, scard] = res as [
    Array<string | null> | null,
    string[] | null,
    number | null,
  ]

  const byDay = daysList.map((day, i) => ({
    day,
    hits: Number(mget?.[i] ?? 0) || 0,
  }))
  const totalOverWindow = byDay.reduce((sum, d) => sum + d.hits, 0)

  // ZREVRANGE WITHSCORES : tableau plat [member, score, member, score, ...]
  const flat = zrange ?? []
  const topAsn: HoneypotStats['topAsn'] = []
  for (let i = 0; i + 1 < flat.length; i += 2) {
    topAsn.push({ asn: String(flat[i]), hits: Number(flat[i + 1]) || 0 })
  }

  return {
    configured: true,
    generatedAt: new Date().toISOString(),
    windowDays: days,
    totalOverWindow,
    uniqueIpHashes: Number(scard ?? 0) || 0,
    byDay,
    topAsn,
  }
}
