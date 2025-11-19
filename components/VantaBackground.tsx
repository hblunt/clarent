'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      // Dynamically import Vanta FOG
      import('vanta/dist/vanta.fog.min').then((VANTA_FOG) => {
        const effect = (VANTA_FOG as any).default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xc4c4c4,
          midtoneColor: 0x575757,
          lowlightColor: 0x3e3e3e,
          baseColor: 0x0,
          blurFactor: 0.23,
          speed: 0.80,
          zoom: 1.00
        })
        setVantaEffect(effect)
      }).catch(err => {
        console.error('Vanta loading error:', err)
      })
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }
  }, [vantaEffect])

  return <div ref={vantaRef} className="fixed inset-0 w-full h-screen" />
}
