/**
 * Dynamic OG Image API Route
 * Generates personalized 1200×630 PNG for WhatsApp/social sharing
 *
 * Usage:
 * /api/og?lang=fr&course=adia&lesson=013-dhikr
 *
 * Sécurité : aucun texte ni chemin d'image n'est lu depuis l'URL. Tout est
 * reconstruit depuis les données des cours (voir src/lib/og.ts). Un cours ou
 * une leçon inconnus donnent l'image générique TahaLearn.
 */

import { readFile } from 'fs/promises'
import { join } from 'path'
import { ImageResponse } from 'next/og'
import { type NextRequest } from 'next/server'
import { parseOgLocale, resolveOgContent } from '@/lib/og'

export const runtime = 'nodejs'

const W = 1200
const H = 630

const MAX_SLUG = 120

const TAGLINE = {
  fr: 'Cours gratuit de sciences islamiques',
  ar: 'دروس مجانية في العلوم الشرعية',
  en: 'Free Islamic sciences course',
} as const

/**
 * Polices embarquées. Sans elles, @vercel/og télécharge une police arabe chez
 * Google Fonts que son moteur ne sait pas lire (« lookupType: 5 - substFormat: 3
 * is not yet supported ») : toutes les images en arabe plantaient.
 * La police latine est celle que @vercel/og utilise par défaut (même rendu).
 */
type OgFont = { name: string; data: ArrayBuffer; weight: 400 | 700; style: 'normal' }

const FONT_DIR = join(process.cwd(), 'assets', 'og-fonts')
let fontsPromise: Promise<OgFont[]> | null = null

async function loadFont(file: string): Promise<ArrayBuffer> {
  const buf = await readFile(join(FONT_DIR, file))
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer
}

function loadFonts(): Promise<OgFont[]> {
  fontsPromise ??= Promise.all([
    loadFont('NotoSans-Regular.ttf'),
    loadFont('NotoSansArabic-Regular.ttf'),
    loadFont('NotoSansArabic-Bold.ttf'),
  ]).then(([latin, arabic, arabicBold]) => [
    { name: 'Noto Sans', data: latin, weight: 400, style: 'normal' },
    { name: 'Noto Sans Arabic', data: arabic, weight: 400, style: 'normal' },
    { name: 'Noto Sans Arabic', data: arabicBold, weight: 700, style: 'normal' },
  ])
  fontsPromise.catch(() => { fontsPromise = null })
  return fontsPromise
}

/**
 * Illustration du cours lue sur le disque (chemin déjà validé par lib/og) et
 * embarquée en data URL : pas de requête HTTP vers le site lui-même, que la
 * protection anti-robot de Vercel pouvait bloquer.
 */
async function loadCourseImage(imagePath: string | null): Promise<string | null> {
  if (!imagePath) return null
  try {
    const buf = await readFile(join(process.cwd(), 'public', imagePath))
    const ext = imagePath.split('.').pop()?.toLowerCase()
    const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg'
    return `data:${mime};base64,${buf.toString('base64')}`
  } catch {
    return null
  }
}

function slugParam(value: string | null): string | null {
  if (!value || value.length > MAX_SLUG) return null
  return /^[a-z0-9-]+$/i.test(value) ? value : null
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const locale = parseOgLocale(searchParams.get('lang'))
  const content = await resolveOgContent(
    locale,
    slugParam(searchParams.get('course')),
    slugParam(searchParams.get('lesson')),
  )

  const title = content?.title ?? 'TahaLearn'
  const sub = content?.sub ?? 'Sciences Islamiques Gratuites'
  const badge = content?.badge ?? ''
  const [fonts, courseImageUrl] = await Promise.all([
    loadFonts(),
    loadCourseImage(content?.imagePath ?? null),
  ])

  const shortTitle = title.length > 55 ? title.slice(0, 55) + '…' : title

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          display: 'flex',
          background: 'linear-gradient(135deg, #022c22 0%, #064e3b 55%, #065f46 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -120, right: -120, width: 450, height: 450, borderRadius: '50%', background: 'rgba(16,185,129,0.08)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: -180, right: 160, width: 520, height: 520, borderRadius: '50%', background: 'rgba(16,185,129,0.05)', display: 'flex' }} />

        {/* Left content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '52px 64px', justifyContent: 'space-between' }}>

          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: 'white', fontWeight: 700 }}>
              T
            </div>
            <span style={{ color: '#34d399', fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>
              TahaLearn
            </span>
          </div>

          {/* Main */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {/* Subtitle (category or course name) */}
            <div style={{ color: '#6ee7b7', fontSize: 22, fontWeight: 600, display: 'flex' }}>
              {sub}
            </div>

            {/* Badge */}
            {badge ? (
              <div style={{ display: 'flex' }}>
                <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.35)', color: '#a7f3d0', padding: '5px 18px', borderRadius: 20, fontSize: 17, fontWeight: 500 }}>
                  {badge}
                </span>
              </div>
            ) : null}

            {/* Title */}
            <div style={{ color: 'white', fontSize: shortTitle.length > 40 ? 44 : 56, fontWeight: 800, lineHeight: 1.2, display: 'flex', flexWrap: 'wrap', maxWidth: courseImageUrl ? 660 : 1000 }}>
              {shortTitle}
            </div>

            {/* Subline */}
            <div style={{ color: '#a7f3d0', fontSize: 20, display: 'flex', opacity: 0.8 }}>
              {TAGLINE[locale]}
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#6ee7b7', fontSize: 18, opacity: 0.75 }}>tahalearn.com</span>
          </div>
        </div>

        {/* Right image panel */}
        {courseImageUrl ? (
          <div style={{ width: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 48px 40px 0', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={courseImageUrl} width={260} height={260} style={{ objectFit: 'contain', opacity: 0.88 }} alt="" />
          </div>
        ) : null}
      </div>
    ),
    { width: W, height: H, fonts }
  )
}
