'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface AutoScrollSectionProps {
  children: ReactNode
  className?: string
}

export default function AutoScrollSection({ children, className = '' }: AutoScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const hasScrolled = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (hasScrolled.current) return

      const sectionTop = sectionRef.current?.getBoundingClientRect().top || 0
      const sectionBottom = sectionRef.current?.getBoundingClientRect().bottom || 0
      const nextSection = sectionRef.current?.nextElementSibling
      const prevSection = sectionRef.current?.previousElementSibling

      // If scrolling down and we're near the bottom of this section
      if (e.deltaY > 0 && sectionBottom < window.innerHeight * 1.2 && sectionBottom > window.innerHeight * 0.5) {
        e.preventDefault()
        hasScrolled.current = true

        // Smooth scroll to next section
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' })

          setTimeout(() => {
            hasScrolled.current = false
          }, 1000)
        }
      }

      // If scrolling up and we're near the top of this section
      if (e.deltaY < 0 && sectionTop >= -window.innerHeight * 0.2 && sectionTop < window.innerHeight * 0.5) {
        e.preventDefault()
        hasScrolled.current = true

        // Smooth scroll to previous section
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: 'smooth', block: 'center' })

          setTimeout(() => {
            hasScrolled.current = false
          }, 1000)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  )
}
