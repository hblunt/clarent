'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const services = [
  {
    id: 1,
    tag: 'Service 01',
    title: 'Website Development',
    price: '$2,497 AUD',
    description: 'Custom website design and development tailored to your brand, optmised for results. We develop websites specific to your industry, business goals and bottlenecks. Design and branding services also available.'
  },
  {
    id: 2,
    tag: 'Service 02',
    title: 'Commercial App Development',
    price: '$3,997 AUD + equity deals available',
    description: 'Scalable commercial web and mobile apps. Developed with design, user experience, and performance at the forefront. We are also available to assist with launch and go-to-market strategy. '
  },
  {
    id: 3,
    tag: 'Service 03',
    title: 'Internal Tools',
    price: '$297 AUD',
    description: 'Optimise your business operations with custom internal software tools.'
  },
  {
    id: 4,
    tag: 'Service 04',
    title: 'AI Integrations',
    price: '$497 AUD',
    description: 'Leverage AI to enhance your products and services. From simple integrations to custom machine learning models trained on your data.'
  }
]

export default function ServiceSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  }

  return (
    <section className="relative z-10 bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Service Slideshow */}
          <div className="relative min-h-[500px] flex items-center overflow-hidden py-8">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                {/* Dots and Tag */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Dots */}
                  <div className="flex gap-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index === currentIndex
                            ? 'bg-clarent-orange'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to service ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Tag */}
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    {services[currentIndex].tag}
                  </p>
                </div>

                {/* Heading */}
                <h2 className="font-[family-name:var(--font-unifraktur)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                  {services[currentIndex].title}
                </h2>

                {/* Pricing */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">starting at</p>
                  <p className="text-2xl md:text-3xl font-bold text-clarent-orange">
                    {services[currentIndex].price}
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  {services[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Static Description */}
          <div>
            <div className="max-w-xl space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                We build premium software at rapid speed, from simple website
                redesigns to complex custom systems. Whatever you can imagine, we can help you build, launch,
                and commercialise it.
              </p>
              <Button href="/contact" variant="filled">
                Contact Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
