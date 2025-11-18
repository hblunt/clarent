import Hero from '@/components/Hero'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="WEB & SOFTWARE DEVELOPMENT" />

      {/* Intro Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                We build premium software at rapid speed, from simple website
                redesigns to complex custom systems. We aim to make all of our
                software to be fast, easy-to-use, and with unique design, to
                generate maximum business impact. Imagine it, build it with us.
              </p>
            </div>
            <div>
              <p className="font-display text-5xl md:text-6xl font-bold leading-tight">
                ANYTHING,{' '}
                <span className="text-clarent-orange">FAST.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Work Section */}
      <section className="relative z-10 bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Client Work
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Website development, custom tools, commercial apps, whatever you can
            imagine, we'll help build it. SEO and marketing services also
            available. Whatever you can imagine, we can help you build, launch,
            and commercialise it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="filled">
              Inquire Now
            </Button>
            <Button href="/services" variant="outline">
              View Offerings
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Projects Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Internal Projects
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Take a look at the products our team has built, or is currently
            building.
          </p>
          <Button href="/projects" variant="outline">
            View Projects
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Contact
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">
            Ready to start your project? Get in touch with us today.
          </p>
          <Button href="/contact" variant="filled">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}
