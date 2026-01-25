'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
  onComplete?: () => void
}

export function CountUp({ 
  end, 
  duration = 2000, 
  suffix = '', 
  className,
  onComplete 
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOut * end)
      
      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
        onComplete?.()
      }
    }

    requestAnimationFrame(updateCount)
  }, [isVisible, end, duration, onComplete])

  return (
    <div ref={countRef} className={cn('tabular-nums', className)}>
      {count}{suffix}
    </div>
  )
}

interface AnimatedStatsProps {
  stats: Array<{
    value: number
    label: string
    suffix?: string
  }>
  isRTL?: boolean
}

export default function AnimatedStats({ stats, isRTL }: AnimatedStatsProps) {
  return (
    <div className={cn(
      'mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto',
      isRTL && 'direction-rtl'
    )}>
      {stats.map((stat, index) => (
        <div key={index} className={cn('text-center animate-scale-in', `stagger-${index + 1}`)}>
          <CountUp
            end={stat.value}
            suffix={stat.suffix || ''}
            duration={2000 + index * 200}
            className="text-3xl sm:text-4xl font-bold text-primary mb-1"
          />
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
