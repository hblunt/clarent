'use client'

import AnimatedGradient from './AnimatedGradient'

interface HeroProps {
  title: string
}

export default function Hero({ title }: HeroProps) {
  return (
    <section className="relative bg-black text-white h-[60vh]">
      <AnimatedGradient />
      <div className="sticky top-[calc(60vh-12rem)] md:top-[calc(60vh-14rem)] h-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
            {title}
            <span className="text-clarent-orange">*</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
