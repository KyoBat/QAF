'use client'

import { motion } from 'framer-motion'

interface AnimatedIslamicPatternProps {
  className?: string
}

export function AnimatedIslamicPattern({ className }: AnimatedIslamicPatternProps) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center octagon */}
      <motion.path
        d="M 100 30 L 130 45 L 145 75 L 145 125 L 130 155 L 100 170 L 70 155 L 55 125 L 55 75 L 70 45 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Outer octagon */}
      <motion.path
        d="M 100 10 L 145 30 L 170 75 L 170 125 L 145 170 L 100 190 L 55 170 L 30 125 L 30 75 L 55 30 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{ pathLength: 1, rotate: 360 }}
        transition={{ 
          pathLength: { duration: 2, ease: "easeInOut" },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Inner decorative star */}
      <motion.circle
        cx="100"
        cy="100"
        r="15"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: "backOut" }}
      />

      {/* Decorative lines from center */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 100 + Math.cos(rad) * 20
        const y1 = 100 + Math.sin(rad) * 20
        const x2 = 100 + Math.cos(rad) * 40
        const y2 = 100 + Math.sin(rad) * 40
        
        return (
          <motion.line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5 + index * 0.1,
              ease: "easeOut" 
            }}
          />
        )
      })}

      {/* Small decorative circles at corners */}
      {[
        { x: 100, y: 30 },
        { x: 145, y: 75 },
        { x: 145, y: 125 },
        { x: 100, y: 170 },
        { x: 55, y: 125 },
        { x: 55, y: 75 }
      ].map((pos, index) => (
        <motion.circle
          key={index}
          cx={pos.x}
          cy={pos.y}
          r="3"
          fill="currentColor"
          opacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ 
            duration: 0.6, 
            delay: 2 + index * 0.1,
            ease: "backOut" 
          }}
        />
      ))}

      {/* Animated glow effect */}
      <motion.circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.5],
          opacity: [0.3, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </svg>
  )
}

export function AnimatedBookIcon({ className }: AnimatedIslamicPatternProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Book pages */}
      <motion.rect
        x="25"
        y="20"
        width="50"
        height="60"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Book spine */}
      <motion.line
        x1="30"
        y1="20"
        x2="30"
        y2="80"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Decorative lines (text) */}
      {[35, 45, 55, 65].map((y, index) => (
        <motion.line
          key={y}
          x1="40"
          y1={y}
          x2="65"
          y2={y}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
        />
      ))}

      {/* Bookmark */}
      <motion.path
        d="M 55 15 L 55 40 L 50 35 L 45 40 L 45 15 Z"
        fill="currentColor"
        opacity="0.4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "backOut" }}
      />

      {/* Glow effect */}
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0"
        animate={{ 
          scale: [1, 1.5],
          opacity: [0.2, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </svg>
  )
}

export function AnimatedMoonIcon({ className }: AnimatedIslamicPatternProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crescent moon */}
      <motion.path
        d="M 50 20 A 25 25 0 1 0 50 80 A 20 20 0 1 1 50 20"
        fill="currentColor"
        opacity="0.3"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
      />

      {/* Star */}
      <motion.path
        d="M 70 30 L 73 37 L 80 38 L 75 43 L 76 50 L 70 46 L 64 50 L 65 43 L 60 38 L 67 37 Z"
        fill="currentColor"
        opacity="0.4"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: 1,
          rotate: 360
        }}
        transition={{ 
          scale: { duration: 0.8, delay: 0.8, ease: "backOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Sparkle effect */}
      {[
        { x: 35, y: 25, delay: 1.2 },
        { x: 45, y: 75, delay: 1.4 },
        { x: 75, y: 60, delay: 1.6 }
      ].map((sparkle, index) => (
        <motion.g key={index}>
          <motion.line
            x1={sparkle.x}
            y1={sparkle.y - 3}
            x2={sparkle.x}
            y2={sparkle.y + 3}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0"
            animate={{ 
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 2,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.line
            x1={sparkle.x - 3}
            y1={sparkle.y}
            x2={sparkle.x + 3}
            y2={sparkle.y}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0"
            animate={{ 
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 2,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.g>
      ))}
    </svg>
  )
}
