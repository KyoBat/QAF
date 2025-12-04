/**
 * Onboarding Modal Component
 * Modal de bienvenue pour les nouveaux utilisateurs
 */

'use client'

import { useState, useEffect } from 'react'
import { X, BookOpen, Globe, Moon, ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale, useTheme } from '@/components/providers'
import { cn } from '@/lib/utils'
import { locales, type Locale } from '@/locales'

const ONBOARDING_KEY = 'qaf-onboarding-completed'

export function OnboardingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)
  const { locale, setLocale, isRTL } = useLocale()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà vu l'onboarding
    const completed = localStorage.getItem(ONBOARDING_KEY)
    if (!completed) {
      // Petit délai pour que la page se charge d'abord
      const timer = setTimeout(() => setIsOpen(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const completeOnboarding = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true')
    setIsOpen(false)
  }

  const steps = [
    {
      icon: Sparkles,
      title: {
        fr: 'Bienvenue sur Qaf ! 🎉',
        ar: 'مرحباً بك في قاف! 🎉',
        en: 'Welcome to Qaf! 🎉',
      },
      description: {
        fr: 'Votre plateforme gratuite pour apprendre les sciences islamiques. Commençons par personnaliser votre expérience.',
        ar: 'منصتك المجانية لتعلم العلوم الإسلامية. لنبدأ بتخصيص تجربتك.',
        en: 'Your free platform to learn Islamic sciences. Let\'s personalize your experience.',
      },
    },
    {
      icon: Globe,
      title: {
        fr: 'Choisissez votre langue',
        ar: 'اختر لغتك',
        en: 'Choose your language',
      },
      description: {
        fr: 'Le contenu est disponible en français, arabe et anglais.',
        ar: 'المحتوى متاح بالفرنسية والعربية والإنجليزية.',
        en: 'Content is available in French, Arabic and English.',
      },
      action: 'language',
    },
    {
      icon: Moon,
      title: {
        fr: 'Mode clair ou sombre ?',
        ar: 'الوضع الفاتح أو الداكن؟',
        en: 'Light or dark mode?',
      },
      description: {
        fr: 'Choisissez le thème qui vous convient le mieux.',
        ar: 'اختر المظهر الذي يناسبك.',
        en: 'Choose the theme that suits you best.',
      },
      action: 'theme',
    },
    {
      icon: BookOpen,
      title: {
        fr: 'Prêt à apprendre !',
        ar: 'جاهز للتعلم!',
        en: 'Ready to learn!',
      },
      description: {
        fr: 'Explorez nos cours de Fiqh, Tajweed, Aqeedah et plus encore. Votre progression sera sauvegardée automatiquement.',
        ar: 'استكشف دوراتنا في الفقه والتجويد والعقيدة وغيرها. سيتم حفظ تقدمك تلقائياً.',
        en: 'Explore our courses in Fiqh, Tajweed, Aqeedah and more. Your progress will be saved automatically.',
      },
    },
  ]

  const currentStep = steps[step]
  const lang = locale as keyof typeof currentStep.title

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in-0"
        onClick={completeOnboarding}
      />
      
      {/* Modal */}
      <div className={cn(
        "relative bg-card rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in slide-up",
        isRTL && "font-arabic"
      )}>
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Close button */}
        <button
          onClick={completeOnboarding}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="p-8 pt-12">
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <currentStep.icon className="w-8 h-8 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-foreground mb-3">
            {currentStep.title[lang]}
          </h2>

          {/* Description */}
          <p className="text-center text-muted-foreground mb-8">
            {currentStep.description[lang]}
          </p>

          {/* Actions spécifiques à l'étape */}
          {currentStep.action === 'language' && (
            <div className="grid grid-cols-3 gap-3 mb-8">
              {(Object.keys(locales) as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc)}
                  className={cn(
                    "p-4 rounded-xl border-2 transition-all duration-200",
                    locale === loc 
                      ? "border-primary bg-primary/10 text-primary" 
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="block text-2xl mb-1">
                    {loc === 'fr' ? '🇫🇷' : loc === 'ar' ? '🇸🇦' : '🇬🇧'}
                  </span>
                  <span className="text-sm font-medium">
                    {locales[loc].nativeName}
                  </span>
                </button>
              ))}
            </div>
          )}

          {currentStep.action === 'theme' && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => theme === 'dark' && toggleTheme()}
                className={cn(
                  "p-6 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2",
                  theme === 'light' 
                    ? "border-primary bg-primary/10" 
                    : "border-border hover:border-primary/50"
                )}
              >
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg shadow-sm" />
                <span className="font-medium">
                  {locale === 'ar' ? 'فاتح' : locale === 'en' ? 'Light' : 'Clair'}
                </span>
              </button>
              <button
                onClick={() => theme === 'light' && toggleTheme()}
                className={cn(
                  "p-6 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2",
                  theme === 'dark' 
                    ? "border-primary bg-primary/10" 
                    : "border-border hover:border-primary/50"
                )}
              >
                <div className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg" />
                <span className="font-medium">
                  {locale === 'ar' ? 'داكن' : locale === 'en' ? 'Dark' : 'Sombre'}
                </span>
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3">
            {step > 0 && (
              <Button 
                variant="outline" 
                onClick={() => setStep(step - 1)}
                className="flex-1"
              >
                {locale === 'ar' ? 'السابق' : locale === 'en' ? 'Back' : 'Retour'}
              </Button>
            )}
            
            {step < steps.length - 1 ? (
              <Button 
                onClick={() => setStep(step + 1)}
                className={cn("flex-1 gap-2", step === 0 && "w-full")}
              >
                <span>{locale === 'ar' ? 'التالي' : locale === 'en' ? 'Next' : 'Suivant'}</span>
                <ChevronRight className={cn("w-4 h-4", isRTL && "rotate-180")} />
              </Button>
            ) : (
              <Button 
                onClick={completeOnboarding}
                className="flex-1 gap-2"
              >
                <span>{locale === 'ar' ? 'ابدأ التعلم' : locale === 'en' ? 'Start Learning' : 'Commencer'}</span>
                <BookOpen className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 pb-6">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                i === step 
                  ? "w-6 bg-primary" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Étape ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Hook pour reset l'onboarding (utile pour les tests)
 */
export function useResetOnboarding() {
  return () => {
    localStorage.removeItem(ONBOARDING_KEY)
    window.location.reload()
  }
}
