'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle2, AlertCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useLocale } from '@/components/providers'
import { cn } from '@/lib/utils'
import { fadeInUp, scaleIn, viewportOptions } from '@/lib/utils/motion-variants'

interface NewsletterHomeProps {
  className?: string
}

export default function NewsletterHome({ className }: NewsletterHomeProps) {
  const { t, isRTL } = useLocale()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMessage(t('newsletter.errorInvalid'))
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        // Reset after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(t('newsletter.errorGeneric'))
      }
    } catch {
      setStatus('error')
      setErrorMessage(t('newsletter.errorGeneric'))
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
      >
        <Card className={cn('border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10', className)}>
          <CardContent className="py-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
            </motion.div>
            <h3 className={cn('text-2xl font-bold text-foreground mb-2', isRTL && 'font-arabic')}>
              {t('newsletter.successTitle')}
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {t('newsletter.successMessage')}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
    >
      <Card className={cn('relative overflow-hidden border-2 border-primary/20 hover:border-primary/30 transition-all duration-300', className)}>
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      
      <CardContent className="relative py-12 px-6 sm:px-12">
        <div className={cn(
          'grid md:grid-cols-2 gap-8 items-center',
          isRTL && 'md:grid-flow-col-dense'
        )}>
          {/* Left side - Content */}
          <motion.div 
            className={cn('text-center md:text-left', isRTL && 'md:text-right')}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 }}
          >
            {/* Badge with social proof */}
            <Badge variant="secondary" className="mb-4 gap-2 bg-primary/10 text-primary border-0">
              <Users className="h-4 w-4" />
              {t('newsletter.home.socialProof')}
            </Badge>

            {/* Title */}
            <h2 className={cn(
              'text-3xl sm:text-4xl font-bold text-foreground mb-4',
              isRTL && 'font-arabic'
            )}>
              {t('newsletter.home.title')}
            </h2>

            {/* Subtitle */}
            <p className="text-muted-foreground text-lg mb-6">
              {t('newsletter.home.subtitle')}
            </p>

            {/* Incentive */}
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-2 text-primary font-medium mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🎁</span>
              <span>{t('newsletter.home.incentive')}</span>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={cn(
              'flex flex-col sm:flex-row gap-3',
              isRTL && 'sm:flex-row-reverse'
            )}>
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className={cn(
                    'h-12 bg-background',
                    status === 'error' && 'border-destructive focus-visible:ring-destructive',
                    isRTL && 'text-right'
                  )}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className="gap-2 h-12 px-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t('newsletter.loading')}
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      {t('newsletter.subscribe')}
                    </>
                  )}
                </Button>
              </motion.div>
            </form>

            {/* Error message */}
            {status === 'error' && (
              <motion.div 
                className="mt-3 flex items-center gap-2 text-destructive text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="h-4 w-4" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Privacy */}
            <p className="mt-4 text-xs text-muted-foreground">
              {t('newsletter.privacy')}
            </p>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div 
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64">
              {/* Decorative circles */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-4 bg-gradient-to-tl from-primary/10 to-transparent rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(var(--primary), 0.4)',
                      '0 0 0 20px rgba(var(--primary), 0)',
                      '0 0 0 0 rgba(var(--primary), 0)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Mail className="h-12 w-12 text-primary" />
                </motion.div>
              </div>

              {/* Floating icons */}
              <motion.div 
                className="absolute top-8 right-8 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                <span className="text-2xl">📚</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-12 left-4 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <span className="text-xl">✨</span>
              </motion.div>
              <motion.div 
                className="absolute top-1/3 left-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
                animate={{
                  y: [0, -12, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7
                }}
              >
                <span className="text-lg">🎓</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  )
}
