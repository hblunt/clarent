'use client'

import { useEffect, useRef } from 'react'
import VantaBackground from './VantaBackground'

interface HeroProps {
  title: string
  fullHeight?: boolean
  textPosition?: string
  enableAutoScroll?: boolean
}

export default function Hero({ title, fullHeight = false, textPosition = 'bottom-[36vh]', enableAutoScroll = false }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const hasScrolled = useRef(false)

  useEffect(() => {
    if (!enableAutoScroll) return

    const handleWheel = (e: WheelEvent) => {
      if (hasScrolled.current) return

      const heroBottom = heroRef.current?.getBoundingClientRect().bottom || 0
      const nextSection = heroRef.current?.nextElementSibling
      const nextSectionTop = nextSection?.getBoundingClientRect().top || 0

      // If scrolling down and still in hero section
      if (e.deltaY > 0 && heroBottom > window.innerHeight * 0.5) {
        e.preventDefault()
        hasScrolled.current = true

        // Smooth scroll to next section
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

          // Reset after animation completes
          setTimeout(() => {
            hasScrolled.current = false
          }, 1000)
        }
      }

      // If scrolling up from the first section after hero, scroll back to hero
      if (e.deltaY < 0 && nextSectionTop >= 0 && nextSectionTop < window.innerHeight * 0.3 && window.scrollY > 0) {
        e.preventDefault()
        hasScrolled.current = true

        // Smooth scroll back to hero (top of page)
        window.scrollTo({ top: 0, behavior: 'smooth' })

        // Reset after animation completes
        setTimeout(() => {
          hasScrolled.current = false
        }, 1000)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [enableAutoScroll])

  const handleArrowClick = () => {
    const nextSection = heroRef.current?.nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section ref={heroRef} className={`relative bg-black text-white ${fullHeight ? 'h-screen' : 'h-[60vh]'}`}>
      <VantaBackground />
      <div className={`fixed ${textPosition} left-[2vw] z-10 max-w-[45vw]`}>
        <h1 className="font-display text-[8vw] md:text-[6vw] font-bold leading-tight">
          {title}
          <span className="text-clarent-orange">*</span>
        </h1>
      </div>

      {/* Down Arrow */}
      <button
        onClick={handleArrowClick}
        className="fixed bottom-8 right-8 z-10 text-clarent-orange hover:text-yellow-400 transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </section>
  )
}
