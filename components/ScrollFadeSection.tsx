'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollFadeSectionProps {
  children: ReactNode
  className?: string
}

export default function ScrollFadeSection({ children, className = '' }: ScrollFadeSectionProps) {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Fade in as section enters viewport, fade out as it leaves
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  // Subtle scale effect for "magical" appearance
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  )

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className={`relative z-10 min-h-screen flex items-center justify-center scroll-snap-align-start ${className}`}
    >
      {children}
    </motion.section>
  )
}
