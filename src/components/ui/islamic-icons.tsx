import * as React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

// Icône Mosquée stylisée
export function MosqueIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Dôme central */}
      <path d="M12 3C10 3 9 5 9 7h6c0-2-1-4-3-4z" fill="currentColor" opacity="0.2" />
      {/* Base principale */}
      <rect x="6" y="10" width="12" height="11" rx="1" />
      {/* Minarets */}
      <rect x="4" y="8" width="2" height="13" />
      <rect x="18" y="8" width="2" height="13" />
      {/* Pointes des minarets */}
      <circle cx="5" cy="7" r="1" fill="currentColor" />
      <circle cx="19" cy="7" r="1" fill="currentColor" />
      {/* Croissant */}
      <path d="M12 3.5c0.5 0 1 0.5 1 1.5" />
    </svg>
  )
}

// Icône Livre Islamique
export function IslamicBookIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Livre ouvert */}
      <path d="M12 3L5 6v13l7 3 7-3V6l-7-3z" />
      <path d="M12 22V3" />
      {/* Décoration géométrique */}
      <path d="M8 10h8M8 14h8" opacity="0.5" />
      <circle cx="12" cy="9" r="1" fill="currentColor" />
    </svg>
  )
}

// Icône Étoile Islamique
export function IslamicStarIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Étoile à 8 branches */}
      <path d="M12 2l1.5 3.5L17 7l-3.5 1.5L12 12l-1.5-3.5L7 7l3.5-1.5L12 2z" />
      <path d="M12 12l1.5 3.5L17 17l-3.5 1.5L12 22l-1.5-3.5L7 17l3.5-1.5L12 12z" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

// Icône Prière
export function PrayerIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Personne en prière */}
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v5" />
      <path d="M8 12h8" />
      <path d="M10 12v8M14 12v8" />
      {/* Tapis de prière */}
      <rect x="6" y="19" width="12" height="2" rx="0.5" opacity="0.3" />
    </svg>
  )
}

// Icône Coran
export function QuranIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Livre avec support */}
      <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
      <path d="M4 19h16" />
      <path d="M8 3v16M16 3v16" />
      {/* Décoration arabesque */}
      <path d="M10 8h4M10 12h4" opacity="0.5" />
      <circle cx="12" cy="10" r="0.5" fill="currentColor" />
    </svg>
  )
}

// Icône Croissant et Étoile
export function CrescentStarIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Croissant */}
      <path d="M12 3a9 9 0 1 0 9 9 7 7 0 1 1-9-9z" fill="currentColor" opacity="0.2" />
      <path d="M12 3a9 9 0 1 0 9 9 7 7 0 1 1-9-9z" />
      {/* Étoile */}
      <path d="M18 8l0.5 1.5L20 10l-1.5 0.5L18 12l-0.5-1.5L16 10l1.5-0.5L18 8z" fill="currentColor" />
    </svg>
  )
}

// Icône Pattern Géométrique
export function GeometricPatternIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Pattern octogonal */}
      <path d="M7.76 3h8.48L20 7.76v8.48L16.24 21H7.76L4 16.24V7.76L7.76 3z" />
      <path d="M7.76 3L12 12L16.24 3" opacity="0.3" />
      <path d="M20 7.76L12 12L20 16.24" opacity="0.3" />
      <path d="M16.24 21L12 12L7.76 21" opacity="0.3" />
      <path d="M4 16.24L12 12L4 7.76" opacity="0.3" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}

// Icône Minaret
export function MinaretIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Tour du minaret */}
      <rect x="10" y="6" width="4" height="15" />
      {/* Balcon */}
      <rect x="8" y="12" width="8" height="1" opacity="0.5" />
      {/* Dôme */}
      <path d="M9 6c0-1.5 1-3 3-3s3 1.5 3 3" fill="currentColor" opacity="0.2" />
      {/* Croissant au sommet */}
      <circle cx="12" cy="2" r="1" fill="currentColor" />
      {/* Base */}
      <rect x="8" y="21" width="8" height="1" />
    </svg>
  )
}

// Icône Lanterne
export function LanternIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Haut de la lanterne */}
      <path d="M12 2v2" />
      <path d="M9 4h6l1 2H8l1-2z" />
      {/* Corps de la lanterne */}
      <path d="M8 6l-1 10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2L16 6" />
      {/* Décoration */}
      <path d="M10 10h4M10 14h4" opacity="0.5" />
      {/* Flamme */}
      <path d="M12 12c0-1 .5-2 .5-2s.5 1 .5 2-.5 2-.5 2-.5-1-.5-2z" fill="currentColor" opacity="0.3" />
      {/* Bas */}
      <path d="M12 18v2" />
    </svg>
  )
}
