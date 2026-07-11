import { NextRequest, NextResponse } from 'next/server';
import { getClientIp } from '@/lib/utils/rate-limit';
import { hashIp } from '@/lib/utils/antispam';

/**
 * Honeypot (piège à scrapers).
 *
 * Cette route n'est liée QUE par un lien caché dans le footer (invisible pour
 * un humain) et elle est explicitement interdite dans robots.txt. Donc :
 *   - un visiteur humain ne la voit jamais ;
 *   - un crawler respectueux (Googlebot, Bingbot…) ne la suit pas (robots.txt) ;
 *   - un scraper qui moissonne aveuglément tous les <a href> et ignore
 *     robots.txt finit ici → on l'identifie.
 *
 * Enforcement : cette route se contente de JOURNALISER l'IP fautive (hachée,
 * jamais en clair) et de renvoyer 403. Le bannissement durable se fait au
 * niveau du WAF Vercel (règle « path = /api/trap → block/challenge »,
 * voir ANTI-SCRAPING.md), car l'app serverless n'a pas d'état partagé
 * fiable entre instances.
 */
function handle(request: NextRequest) {
  const ipHash = hashIp(getClientIp(request));
  const ua = request.headers.get('user-agent') ?? '';
  const asn = request.headers.get('x-vercel-ip-asn') ?? '';

  // Log structuré, récupérable dans les logs Vercel → à réinjecter dans le WAF.
  console.warn(
    '[honeypot] hit',
    JSON.stringify({ ipHash, ua, asn, at: new Date().toISOString() }),
  );

  return NextResponse.json(
    { error: 'Forbidden' },
    { status: 403, headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
  );
}

export const GET = handle;
export const POST = handle;
export const HEAD = handle;
