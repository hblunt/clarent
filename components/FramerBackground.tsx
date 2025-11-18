'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

export default function FramerBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Script
        src="https://framer.com/m/AnimatedLiquidBackground-Prod-vIhm.js@ghH1aHLmGZ0iE7qXDFVk"
        strategy="afterInteractive"
        type="module"
        onLoad={() => setIsLoaded(true)}
        onError={(e) => console.error('Failed to load Framer component', e)}
      />
      <div ref={containerRef} className="absolute inset-0" id="framer-background" />
    </>
  )
}
