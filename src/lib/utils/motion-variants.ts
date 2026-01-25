/**
 * Framer Motion Variants Library
 * Centralized animation variants for consistent motion design across the application
 * 
 * Animation Principles:
 * - Subtle and smooth (not too flashy)
 * - Natural easing (not linear)
 * - Stagger for multiple items
 * - Respect prefers-reduced-motion
 */

import { Variants } from "framer-motion";

// ============================================================================
// FADE ANIMATIONS
// ============================================================================

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 40
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] // Custom cubic bezier (smooth)
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0,
    y: -40
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0,
    x: -40
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0,
    x: 40
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// ============================================================================
// SCALE ANIMATIONS
// ============================================================================

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const scaleInSpring: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

// ============================================================================
// SLIDE ANIMATIONS
// ============================================================================

export const slideInUp: Variants = {
  hidden: { 
    y: 60
  },
  visible: { 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const slideInDown: Variants = {
  hidden: { 
    y: -60
  },
  visible: { 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// ============================================================================
// STAGGER CONTAINER
// ============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// ============================================================================
// STAGGER ITEMS (to use inside staggerContainer)
// ============================================================================

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// ============================================================================
// HOVER & TAP ANIMATIONS
// ============================================================================

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
};

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

export const tapScale = {
  scale: 0.95
};

// ============================================================================
// CARD VARIANTS (commonly used)
// ============================================================================

export const cardVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// ============================================================================
// PARALLAX SCROLL EFFECT
// ============================================================================

export const parallaxVariants = (speed: number = 50): Variants => ({
  hidden: { y: speed },
  visible: { 
    y: -speed,
    transition: {
      duration: 0,
    }
  }
});

// ============================================================================
// VIEWPORT OPTIONS (for whileInView)
// ============================================================================

export const viewportOptions = {
  once: true, // Animate only once when entering viewport
  amount: 0.3, // Trigger when 30% of element is visible
  margin: "0px 0px -100px 0px" // Start animation 100px before entering viewport
};

export const viewportOptionsRepeat = {
  once: false, // Animate every time
  amount: 0.3
};

// ============================================================================
// PAGE TRANSITIONS
// ============================================================================

export const pageTransition: Variants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// ============================================================================
// FLOAT ANIMATION (for decorative elements)
// ============================================================================

export const floatVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatVariantsSlow: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ============================================================================
// ROTATE ANIMATION (for decorative elements)
// ============================================================================

export const rotateVariants: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const rotateVariantsSlow: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// ============================================================================
// PULSE ANIMATION
// ============================================================================

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ============================================================================
// DRAW SVG PATH ANIMATION
// ============================================================================

export const drawPath = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { 
        duration: 2,
        ease: "easeInOut"
      },
      opacity: { 
        duration: 0.3 
      }
    }
  }
};

// ============================================================================
// ADVANCED: TEXT REVEAL (character by character)
// ============================================================================

export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2
    }
  }
};

export const textRevealChar: Variants = {
  hidden: { 
    opacity: 0,
    y: 10
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Helper to create custom stagger with configurable delay
 */
export const createStagger = (staggerDelay: number = 0.1, delayChildren: number = 0.2): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
});

/**
 * Helper to create custom fade with direction
 */
export const createFade = (direction: "up" | "down" | "left" | "right" | "none", distance: number = 40, duration: number = 0.6): Variants => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {}
  };

  return {
    hidden: { 
      opacity: 0,
      ...directions[direction]
    },
    visible: { 
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
};
