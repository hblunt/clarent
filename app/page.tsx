import Hero from '@/components/Hero'
import Button from '@/components/Button'
import FadeInSection from '@/components/FadeInSection'
import AutoScrollSection from '@/components/AutoScrollSection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="WEB & SOFTWARE DEVELOPMENT" fullHeight={true} textPosition="bottom-[10vh]" enableAutoScroll={true} />

      {/* Intro Section */}
      <AutoScrollSection className="relative z-10 bg-zinc-950 min-h-screen flex items-center justify-center">
        <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="font-[family-name:var(--font-family-display)] text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
              ANYTHING,{' '}
              <span className="text-clarent-orange">FAST.</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                We build premium software at rapid speed, from simple website
                redesigns to complex custom systems.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                We aim to make all of our software fast, easy-to-use, and with unique design, to
                generate maximum business impact.
              </p>
            </div>
          </div>
        </FadeInSection>
      </AutoScrollSection>

      {/* What We Do Section */}
      <AutoScrollSection className="relative z-10 bg-zinc-950 min-h-screen flex items-center justify-center">
        <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            {/* Left Column - Development Services */}
            <div className="space-y-6">
              <p className="text-sm text-gray-400 uppercase tracking-wider">What We Do - 01</p>
              <h2 className="font-[family-name:var(--font-unifraktur)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Development Services
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Website development, custom tools, commercial apps, whatever you can
                  imagine, we'll help build it. SEO and marketing services also
                  available.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whatever you can imagine, we can help you build, launch,
                  and commercialise it.
                </p>
              </div>
              <Button href="/services" variant="outline">
                View Services
              </Button>
            </div>

            {/* Right Column - Internal Projects */}
            <div className="space-y-6">
              <p className="text-sm text-gray-400 uppercase tracking-wider">What We Do - 02</p>
              <h2 className="font-[family-name:var(--font-unifraktur)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Internal Projects
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Take a look at the products our team has built, or is currently
                building.
              </p>
              <Button href="/projects" variant="outline">
                View Projects
              </Button>
            </div>
          </div>
        </FadeInSection>
      </AutoScrollSection>
    </>
  )
}
