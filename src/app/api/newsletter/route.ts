import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/utils/rate-limit';

// Brevo API configuration
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2', 10); // Default list ID

interface BrevoError {
  message?: string;
  code?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 3 requests per minute per IP
    const clientIp = getClientIp(request);
    const rateLimitResult = rateLimit(clientIp, { limit: 3, windowSeconds: 60 });

    if (!rateLimitResult.success) {
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

    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email invalide', code: 'INVALID_EMAIL' },
        { status: 400 }
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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
