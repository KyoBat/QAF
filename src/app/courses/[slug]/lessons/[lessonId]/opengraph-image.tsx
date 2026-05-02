/**
 * Dynamic OG Image for lesson pages
 * Renders a personalized 1200×630 PNG with lesson title + course name + branding
 * Used by WhatsApp, Twitter, Facebook when sharing a lesson link
 */

import { ImageResponse } from 'next/og'
import { getLesson } from '@/lib/data'

export const alt = 'TahaLearn - Leçon de Sciences Islamiques'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface ImageProps {
  params: Promise<{ slug: string; lessonId: string }>
}

export default async function Image({ params }: ImageProps) {
  const { slug, lessonId } = await params
  const data = await getLesson(slug, lessonId)

  const lessonTitle = data?.lesson.title.fr ?? 'Leçon'
  const courseTitle = data?.course.title.fr ?? 'TahaLearn'
  const lessonNumber = data?.lessonNumber ?? 1
  const totalLessons = data?.totalLessons ?? 1
  const courseImage = data?.course.image
    ? `https://www.tahalearn.com${data.course.image.replace(/\.svg$/, '.png')}`
    : null

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
        {/* Decorative circles */}
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
            <span style={{ color: '#34d399', fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>
              TahaLearn
            </span>
          </div>

          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Course name (above the lesson title) */}
            <div
              style={{
                color: '#6ee7b7',
                fontSize: 22,
                fontWeight: 600,
                display: 'flex',
              }}
            >
              {courseTitle}
            </div>

            {/* Lesson number badge */}
            <div style={{ display: 'flex' }}>
              <span
                style={{
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.35)',
                  color: '#a7f3d0',
                  padding: '5px 18px',
                  borderRadius: 20,
                  fontSize: 17,
                  fontWeight: 500,
                }}
              >
                {`Leçon ${lessonNumber} / ${totalLessons}`}
              </span>
            </div>

            {/* Lesson title */}
            <div
              style={{
                color: 'white',
                fontSize: lessonTitle.length > 50 ? 40 : lessonTitle.length > 30 ? 48 : 56,
                fontWeight: 800,
                lineHeight: 1.2,
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: 680,
              }}
            >
              {lessonTitle}
            </div>

            {/* Subline */}
            <div
              style={{
                color: '#a7f3d0',
                fontSize: 20,
                display: 'flex',
                opacity: 0.85,
              }}
            >
              Cours gratuit de sciences islamiques
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#6ee7b7', fontSize: 18, opacity: 0.8 }}>
              tahalearn.com
            </span>
          </div>
        </div>

        {/* Right course image panel */}
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
              width={260}
              height={260}
              style={{ objectFit: 'contain', opacity: 0.85 }}
              alt=""
            />
          </div>
        )}
      </div>
    ),
    { ...size }
  )
}
