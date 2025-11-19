'use client'

import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { TextureLoader } from 'three'

interface ImageCarouselProps {
  images?: string[]
  radius?: number
  imageWidth?: number
  imageHeight?: number
  cornerRadius?: number
  bendAmount?: number
  centerOpacity?: number
  adjacentOpacity?: number
  farOpacity?: number
  friction?: number
  wheelSensitivity?: number
  dragSensitivity?: number
  enableSnapping?: boolean
}

export const ImageCarousel = ({
  images = [],
  radius = 5,
  imageWidth = 3,
  imageHeight = 4,
  cornerRadius = 0.15,
  bendAmount = 0.3,
  centerOpacity = 1.0,
  adjacentOpacity = 0.7,
  farOpacity = 0.3,
  friction = 0.95,
  wheelSensitivity = 0.002,
  dragSensitivity = 0.005,
  enableSnapping = true,
}: ImageCarouselProps) => {
  const groupRef = useRef<THREE.Group>(null)
  const { gl } = useThree()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Smooth rotation state
  const rotationRef = useRef(0)
  const velocityRef = useRef(0)
  const isDragging = useRef(false)
  const lastMouseX = useRef(0)
  const targetRotationRef = useRef(0)
  const isSnapping = useRef(false)

  const textures = useLoader(TextureLoader, images, (loader) => {
    loader.crossOrigin = 'anonymous'
  })

  // Set correct colorSpace for all textures
  textures.forEach((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace
  })

  // Mouse wheel handler
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault()
    const wheelForce = event.deltaY * wheelSensitivity * 0.00001
    velocityRef.current += wheelForce
    isSnapping.current = false
  }

  // Mouse drag handlers
  const handleMouseDown = (event: MouseEvent) => {
    isDragging.current = true
    lastMouseX.current = event.clientX
    gl.domElement.style.cursor = 'grabbing'
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging.current) return

    const deltaX = event.clientX - lastMouseX.current
    const dragForce = deltaX * dragSensitivity * 0.00001
    velocityRef.current += dragForce
    lastMouseX.current = event.clientX
    isSnapping.current = false
  }

  const handleMouseUp = () => {
    isDragging.current = false
    gl.domElement.style.cursor = 'grab'
  }

  // Touch handlers for mobile
  const handleTouchStart = (event: TouchEvent) => {
    isDragging.current = true
    lastMouseX.current = event.touches[0].clientX
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (!isDragging.current) return

    const deltaX = event.touches[0].clientX - lastMouseX.current
    const dragForce = deltaX * dragSensitivity * 0.00001
    velocityRef.current += dragForce
    lastMouseX.current = event.touches[0].clientX
  }

  const handleTouchEnd = () => {
    isDragging.current = false
  }

  // Event listeners setup
  useEffect(() => {
    const canvas = gl.domElement

    canvas.style.cursor = 'grab'
    canvas.addEventListener('wheel', handleWheel, { passive: false })
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseUp)

    // Touch events
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true })
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true })
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      canvas.removeEventListener('wheel', handleWheel)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseUp)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [gl.domElement])

  // Smooth animation with friction and snapping
  useFrame((state, delta) => {
    if (groupRef.current) {
      const velocityThreshold = 0.002

      // Apply friction
      const frictionFactor = Math.pow(friction, delta * 60)
      velocityRef.current *= frictionFactor

      // Check if we should start snapping
      if (
        enableSnapping &&
        !isDragging.current &&
        !isSnapping.current &&
        Math.abs(velocityRef.current) < velocityThreshold
      ) {
        const anglePerImage = (Math.PI * 2) / images.length
        const currentRotation = rotationRef.current

        const currentAngle = -currentRotation
        const normalizedAngle =
          ((currentAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)

        const imageFloat = normalizedAngle / anglePerImage
        const nearestImageIndex = Math.round(imageFloat) % images.length

        const targetRotation = -(nearestImageIndex * anglePerImage)

        let bestTargetRotation = targetRotation
        const diff1 = Math.abs(targetRotation - currentRotation)
        const diff2 = Math.abs(targetRotation + Math.PI * 2 - currentRotation)
        const diff3 = Math.abs(targetRotation - Math.PI * 2 - currentRotation)

        if (diff2 < diff1 && diff2 < diff3) {
          bestTargetRotation = targetRotation + Math.PI * 2
        } else if (diff3 < diff1 && diff3 < diff2) {
          bestTargetRotation = targetRotation - Math.PI * 2
        }

        targetRotationRef.current = bestTargetRotation
        isSnapping.current = true
        velocityRef.current = 0
      }

      // Handle snapping animation
      if (isSnapping.current) {
        let diff = targetRotationRef.current - rotationRef.current

        if (Math.abs(diff) > Math.PI) {
          if (diff > 0) {
            diff -= Math.PI * 2
          } else {
            diff += Math.PI * 2
          }
        }

        const snapSpeed = 0.15

        if (Math.abs(diff) < 0.005) {
          rotationRef.current = targetRotationRef.current
          isSnapping.current = false
        } else {
          rotationRef.current += diff * snapSpeed
        }
      } else {
        rotationRef.current += velocityRef.current * delta * 60
      }

      groupRef.current.rotation.y = rotationRef.current

      // Update current index
      const anglePerImage = (Math.PI * 2) / images.length
      const currentAngle = -rotationRef.current
      const normalizedAngle =
        ((currentAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
      const newIndex =
        Math.round(normalizedAngle / anglePerImage) % images.length

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }
  })

  interface ImagePlaneProps {
    texture: THREE.Texture
    index: number
    total: number
  }

  const ImagePlane = ({ texture: imageTexture, index, total }: ImagePlaneProps) => {
    const meshRef = useRef<THREE.Mesh>(null)
    const angle = (index * Math.PI * 2) / total
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius

    const getImagePosition = () => {
      const totalImages = images.length
      let distance = Math.abs(index - currentIndex)

      if (distance > totalImages / 2) {
        distance = totalImages - distance
      }

      return distance
    }

    const getOpacity = () => {
      const position = getImagePosition()
      if (position === 0) return centerOpacity
      if (position === 1) return adjacentOpacity
      return farOpacity
    }

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.lookAt(0, meshRef.current.position.y, 0)
      }
    })

    const material = useMemo(() => {
      return new THREE.MeshBasicMaterial({
        map: imageTexture,
        transparent: true,
        opacity: getOpacity(),
        side: THREE.DoubleSide,
      })
    }, [imageTexture])

    // Update opacity
    material.opacity = getOpacity()

    return (
      <mesh ref={meshRef} position={[x, 0, z]} material={material}>
        <planeGeometry args={[imageWidth, imageHeight, 32, 32]} />
      </mesh>
    )
  }

  if (!images.length) return null

  return (
    <group ref={groupRef}>
      {images.map((image, index) => (
        <ImagePlane
          key={`${image}-${index}`}
          texture={textures[index]}
          index={index}
          total={images.length}
        />
      ))}

      {/* Lighting */}
      <pointLight position={[0, 2, 0]} intensity={0.5} />
      <ambientLight intensity={0.3} />
    </group>
  )
}
