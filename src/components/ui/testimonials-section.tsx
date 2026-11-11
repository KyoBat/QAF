'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'

interface Testimonial {
  id: number
  name: string
  role: string
  course: string
  quote: string
  rating: number
  avatar: string
}

// Données de témoignages (à terme, venir d'une API ou fichier de données)
const testimonials: Record<string, Testimonial[]> = {
  fr: [
    {
      id: 1,
      name: 'Ahmed B.',
      role: 'Étudiant',
      course: 'Fiqh de la Prière',
      quote: 'Une plateforme exceptionnelle qui m\'a permis de comprendre en profondeur les règles de la prière. Les explications sont claires et les sources authentiques.',
      rating: 5,
      avatar: '🧔'
    },
    {
      id: 2,
      name: 'Fatima Z.',
      role: 'Étudiante',
      course: 'Aqida',
      quote: 'Enfin une plateforme gratuite qui prend au sérieux l\'enseignement religieux. Le contenu est de qualité et accessible à tous.',
      rating: 5,
      avatar: '👩'
    },
    {
      id: 3,
      name: 'Youssef M.',
      role: 'Étudiant',
      course: 'Hadith',
      quote: 'J\'apprécie particulièrement le fait que chaque hadith soit vérifié et sourcé. Cela donne confiance dans le contenu enseigné.',
      rating: 5,
      avatar: '👨'
    }
  ],
  en: [
    {
      id: 1,
      name: 'Ahmed B.',
      role: 'Student',
      course: 'Fiqh of Prayer',
      quote: 'An exceptional platform that helped me deeply understand the rules of prayer. The explanations are clear and the sources authentic.',
      rating: 5,
      avatar: '🧔'
    },
    {
      id: 2,
      name: 'Fatima Z.',
      role: 'Student',
      course: 'Aqeedah',
      quote: 'Finally a free platform that takes religious education seriously. The content is high quality and accessible to everyone.',
      rating: 5,
      avatar: '👩'
    },
    {
      id: 3,
      name: 'Youssef M.',
      role: 'Student',
      course: 'Hadith',
      quote: 'I particularly appreciate that each hadith is verified and sourced. It gives confidence in the content taught.',
      rating: 5,
      avatar: '👨'
    }
  ],
  ar: [
    {
      id: 1,
      name: 'أحمد ب.',
      role: 'طالب',
      course: 'فقه الصلاة',
      quote: 'منصة استثنائية ساعدتني على فهم أحكام الصلاة بعمق. الشروحات واضحة والمصادر موثقة.',
      rating: 5,
      avatar: '🧔'
    },
    {
      id: 2,
      name: 'فاطمة ز.',
      role: 'طالبة',
      course: 'العقيدة',
      quote: 'أخيراً منصة مجانية تأخذ التعليم الديني على محمل الجد. المحتوى ذو جودة عالية ومتاح للجميع.',
      rating: 5,
      avatar: '👩'
    },
    {
      id: 3,
      name: 'يوسف م.',
      role: 'طالب',
      course: 'الحديث',
      quote: 'أقدر بشكل خاص أن كل حديث مُتحقق منه ومُصدر. هذا يعطي ثقة في المحتوى المُدرس.',
      rating: 5,
      avatar: '👨'
    }
  ]
}

export default function TestimonialsSection() {
  const { locale, t, isRTL } = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const currentTestimonials = testimonials[locale] || testimonials.fr
  const testimonial = currentTestimonials[currentIndex]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={cn('text-center mb-12 animate-fade-in-up', isRTL && 'font-arabic')}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('home.testimonials.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('home.testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <Card className="relative overflow-hidden border-2 border-primary/20 hover-lift animate-fade-in animation-delay-300">
            {/* Quote icon background */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="h-24 w-24 text-primary" />
            </div>

            <CardContent className="relative pt-16 pb-12 px-8 sm:px-16">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-amber-400 text-amber-400 animate-scale-in" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className={cn(
                'text-lg sm:text-xl text-foreground text-center mb-8 leading-relaxed',
                isRTL && 'font-arabic'
              )}>
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Avatar & Info */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl animate-scale-in animation-delay-500">
                  {testimonial.avatar}
                </div>
                <div className="text-center">
                  <p className={cn('font-semibold text-foreground', isRTL && 'font-arabic')}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.course}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className={cn(
            'flex items-center justify-center gap-4 mt-8',
            isRTL && 'flex-row-reverse'
          )}>
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover-lift"
              aria-label={isRTL ? 'السابق' : 'Previous'}
            >
              <ChevronLeft className={cn('h-5 w-5', isRTL && 'rotate-180')} />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover-lift"
              aria-label={isRTL ? 'التالي' : 'Next'}
            >
              <ChevronRight className={cn('h-5 w-5', isRTL && 'rotate-180')} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
