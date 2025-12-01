import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Locale } from '@/locales'

interface LocaleState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: 'fr',
      setLocale: (locale) => set({ locale }),
    }),
    { name: 'locale-storage' }
  )
)

interface ThemeState {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'theme-storage' }
  )
)

interface ProgressState {
  completedLessons: Record<string, string[]>
  markLessonComplete: (courseSlug: string, lessonId: string) => void
  isLessonCompleted: (courseSlug: string, lessonId: string) => boolean
  getCourseProgress: (courseSlug: string, totalLessons: number) => number
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: {},
      markLessonComplete: (courseSlug, lessonId) => set((state) => ({
        completedLessons: {
          ...state.completedLessons,
          [courseSlug]: [...(state.completedLessons[courseSlug] || []), lessonId].filter(
            (v, i, a) => a.indexOf(v) === i
          ),
        },
      })),
      isLessonCompleted: (courseSlug, lessonId) => {
        const lessons = get().completedLessons[courseSlug] || []
        return lessons.includes(lessonId)
      },
      getCourseProgress: (courseSlug, totalLessons) => {
        const completed = get().completedLessons[courseSlug]?.length || 0
        return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0
      },
    }),
    { name: 'progress-storage' }
  )
)
