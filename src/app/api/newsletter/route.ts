import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/utils/rate-limit';
import { isSpamEmail, verifyTurnstile, logRejection, hashIp } from '@/lib/utils/antispam';

// Brevo API configuration
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2', 10); // Default list ID

const LOCALES = ['fr', 'ar', 'en'];
const MAX_EMAIL_LENGTH = 254;

interface BrevoError {
  message?: string;
  code?: string;
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const ipHash = hashIp(clientIp);

    const body: unknown = await request.json().catch(() => null);
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { error: 'Requête invalide', code: 'INVALID_BODY' },
        { status: 400 }
      );
    }
    const { email: rawEmail, locale: rawLocale, website, token } = body as Record<string, unknown>;
    // Seules des chaînes sont acceptées (un tableau ou un objet passerait sinon la regex)
    const email = typeof rawEmail === 'string' ? rawEmail.trim() : '';
    const locale = typeof rawLocale === 'string' && LOCALES.includes(rawLocale) ? rawLocale : 'fr';

    // ── Couche honeypot : champ caché rempli = bot → succès factice (ne pas révéler le filtre)
    if (website) {
      logRejection('honeypot', 'champ_rempli', { ipHash });
      return NextResponse.json(
        { success: true, message: 'Inscription réussie !', mode: 'honeypot' },
        { status: 200 }
      );
    }

    // ── Couche rate-limit : 3 requêtes par minute par IP
    const rateLimitResult = rateLimit(clientIp, { limit: 3, windowSeconds: 60 });
    if (!rateLimitResult.success) {
      logRejection('rate_limit', 'limite_depassee', { ipHash });
      return NextResponse.json(
        {
          error: 'Trop de requêtes. Veuillez réessayer plus tard.',
          code: 'RATE_LIMIT_EXCEEDED',
          retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)),
            'X-RateLimit-Limit': '3',
            'X-RateLimit-Remaining': String(rateLimitResult.remaining),
            'X-RateLimit-Reset': String(rateLimitResult.resetAt),
          },
        }
      );
    }

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email invalide', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    // ── Couche heuristiques : blocklist / domaines jetables / structure → succès factice
    const spam = isSpamEmail(email);
    if (spam.spam) {
      logRejection('heuristics', spam.reason || 'spam', { ipHash });
      return NextResponse.json(
        { success: true, message: 'Inscription réussie !', mode: 'filtered' },
        { status: 200 }
      );
    }

    // ── Couche Turnstile (opt-in) : active seulement si TURNSTILE_SECRET_KEY est défini
    const turnstileOk = await verifyTurnstile(typeof token === 'string' ? token : null, clientIp);
    if (!turnstileOk) {
      logRejection('turnstile', 'echec_verification', { ipHash });
      return NextResponse.json(
        { error: 'Validation anti-robot échouée. Rechargez la page et réessayez.', code: 'TURNSTILE_FAILED' },
        { status: 422 }
      );
    }

    // Check if Brevo is configured
    if (!BREVO_API_KEY) {
      console.warn('Brevo API key not configured, storing locally only');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Inscription enregistrée (mode local)',
          mode: 'local'
        },
        { status: 200 }
      );
    }

    // Add contact to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true, // Update if contact already exists
        attributes: {
          SOURCE: 'website_newsletter',
          SIGNUP_DATE: new Date().toISOString(),
          LANGUE: locale,
        },
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Inscription réussie !',
          mode: 'brevo'
        },
        { status: 200 }
      );
    }

    // Handle specific Brevo errors
    const errorData: BrevoError = await response.json().catch(() => ({}));
    
    // Contact already exists - treat as success
    if (response.status === 400 && errorData.code === 'duplicate_parameter') {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Vous êtes déjà inscrit(e) !',
          mode: 'brevo',
          alreadySubscribed: true
        },
        { status: 200 }
      );
    }

    console.error('Brevo API error:', response.status, errorData);
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription', code: 'BREVO_ERROR' },
      { status: 500 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  if (email.length > MAX_EMAIL_LENGTH) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
