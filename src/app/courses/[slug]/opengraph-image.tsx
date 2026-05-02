/**
 * Dynamic OG Image for course pages
 * Renders a personalized 1200×630 PNG with course name + branding
 * Used by WhatsApp, Twitter, Facebook when sharing a course link
 */

import { ImageResponse } from 'next/og'
import { getCourseBySlug } from '@/lib/data'

export const runtime = 'nodejs'
export const alt = 'TahaLearn - Cours de Sciences Islamiques'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const categoryLabels: Record<string, string> = {
  tajweed: 'Tajweed',
  fiqh: 'Fiqh',
  aqeedah: 'Aqeedah',
  seerah: 'Seerah',
  hadith: 'Hadith',
  history: 'Histoire Islamique',
  spirituality: 'Spiritualité',
}

interface ImageProps {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  const title = course?.title.fr ?? 'TahaLearn'
  const description = course?.description.fr ?? 'Apprenez les sciences islamiques gratuitement'
  const category = course?.category ? (categoryLabels[course.category] ?? course.category) : 'Cours'
  const lessonsCount = course?.lessons.length ?? 0
  const courseImage = course?.image
    ? `https://www.tahalearn.com${course.image.replace(/\.svg$/, '.png')}`
    : null

  const shortDescription =
    description.length > 115 ? description.slice(0, 115) + '…' : description

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: 'linear-gradient(135deg, #022c22 0%, #064e3b 55%, #065f46 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles background */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 450,
            height: 450,
            borderRadius: '50%',
            background: 'rgba(16,185,129,0.08)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            right: 160,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'rgba(16,185,129,0.05)',
            display: 'flex',
          }}
        />

        {/* Left content column */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '52px 64px',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                color: 'white',
                fontWeight: 700,
              }}
            >
              T
            </div>
            <span
              style={{
                color: '#34d399',
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              TahaLearn
            </span>
          </div>

          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {/* Category badge */}
            <div style={{ display: 'flex' }}>
              <span
                style={{
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.35)',
                  color: '#6ee7b7',
                  padding: '5px 18px',
                  borderRadius: 20,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {category}
              </span>
            </div>

            {/* Course title */}
            <div
              style={{
                color: 'white',
                fontSize: title.length > 50 ? 40 : title.length > 30 ? 48 : 56,
                fontWeight: 800,
                lineHeight: 1.2,
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: 680,
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                color: '#a7f3d0',
                fontSize: 21,
                lineHeight: 1.55,
                display: 'flex',
                maxWidth: 680,
              }}
            >
              {shortDescription}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ color: '#6ee7b7', fontSize: 18, opacity: 0.8 }}>
              tahalearn.com
            </span>
            {lessonsCount > 0 && (
              <span
                style={{
                  color: '#34d399',
                  fontSize: 17,
                  background: 'rgba(16,185,129,0.12)',
                  padding: '6px 18px',
                  borderRadius: 20,
                  border: '1px solid rgba(16,185,129,0.25)',
                }}
              >
                {lessonsCount} {lessonsCount === 1 ? 'leçon' : 'leçons'} gratuites
              </span>
            )}
          </div>
        </div>

        {/* Right image panel */}
        {courseImage && (
          <div
            style={{
              width: 340,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 48px 40px 0',
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={courseImage}
              width={270}
              height={270}
              style={{ objectFit: 'contain', opacity: 0.9 }}
              alt=""
            />
          </div>
        )}
      </div>
    ),
    { ...size }
  )
}
