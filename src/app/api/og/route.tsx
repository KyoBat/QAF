/**
 * Dynamic OG Image API Route
 * Generates personalized 1200×630 PNG for WhatsApp/social sharing
 *
 * Usage:
 * /api/og?title=Dhikr+et+Glorification&sub=Adhkar+et+Invocations&img=/images/courses/adia.png&badge=Leçon+13+%2F+13
 */

import { ImageResponse } from 'next/og'
import { type NextRequest } from 'next/server'

export const runtime = 'nodejs'

const W = 1200
const H = 630

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const title = searchParams.get('title') ?? 'TahaLearn'
  const sub = searchParams.get('sub') ?? 'Sciences Islamiques Gratuites'
  const imgPath = searchParams.get('img') // e.g. /images/courses/adia.png
  const badge = searchParams.get('badge') ?? ''

  const courseImageUrl = imgPath
    ? `https://www.tahalearn.com${imgPath}`
    : null

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
              Cours gratuit de sciences islamiques
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
    { width: W, height: H }
  )
}
