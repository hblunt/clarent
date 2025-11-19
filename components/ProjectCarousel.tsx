'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ImageCarousel } from './ImageCarousel3D'

interface ProjectCarouselProps {
  images: string[]
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#09090b']} />
        <Suspense fallback={null}>
          <ImageCarousel
            images={images}
            radius={4.5}
            imageWidth={1.9}
            imageHeight={1.4}
            cornerRadius={0.05}
            bendAmount={0.1}
            centerOpacity={1.0}
            adjacentOpacity={0.9}
            farOpacity={0.8}
            friction={0.9}
            wheelSensitivity={100}
            dragSensitivity={300}
            enableSnapping={true}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
