import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { isStoreConfigured, readHoneypotStats } from '@/lib/utils/honeypot-store';

/**
 * Tableau de bord JSON du honeypot : hits/jour, top ASN, IP distinctes.
 * Lit les agrégats persistés par /api/trap (voir honeypot-store.ts).
 *
 * Accès protégé par un token secret (HONEYPOT_STATS_TOKEN) : sans token valide
 * on renvoie 404 (on ne révèle même pas l'existence de la route). Interdit dans
 * robots.txt (sous /api/) et jamais lié → invisible pour les crawlers.
 *
 * Usage :
 *   curl -H "Authorization: Bearer $TOKEN" \
 *     https://www.tahalearn.com/api/trap/stats?days=14
 */
export const dynamic = 'force-dynamic';

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  // timingSafeEqual exige des longueurs égales ; la garde évite un throw et une
  // fuite de longueur.
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function authorized(request: NextRequest): boolean {
  const expected = process.env.HONEYPOT_STATS_TOKEN;
  if (!expected) return false; // pas de token configuré = accès fermé
  const auth = request.headers.get('authorization') ?? '';
  const bearer = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  const token = bearer || request.nextUrl.searchParams.get('token') || '';
  if (!token) return false;
  return safeEqual(token, expected);
}

export async function GET(request: NextRequest) {
  const notFound = NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (!authorized(request)) return notFound;

  if (!isStoreConfigured()) {
    return NextResponse.json(
      {
        error: 'store_not_configured',
        hint: 'Crée un store Vercel KV / Upstash for Redis et ajoute KV_REST_API_URL + KV_REST_API_TOKEN aux variables d’environnement.',
      },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  const daysParam = parseInt(request.nextUrl.searchParams.get('days') ?? '14', 10);
  const days = Math.min(Math.max(Number.isNaN(daysParam) ? 14 : daysParam, 1), 90);

  const stats = await readHoneypotStats(days);
  return NextResponse.json(stats ?? { error: 'read_failed' }, {
    status: stats ? 200 : 502,
    headers: {
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  });
}
