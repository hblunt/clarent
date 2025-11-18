import Hero from '@/components/Hero'
import PricingCard from '@/components/PricingCard'

export default function Services() {
  return (
    <>
      <Hero title="Services" />

      {/* Intro Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl">
            We build premium software at rapid speed, from simple website
            redesigns to complex custom systems. We aim to make all of our
            software to be fast, easy-to-use, and with unique design, to
            generate maximum business impact. Imagine it, build it with us.
          </p>
        </div>
      </section>

      {/* Base Offerings Section */}
      <section className="relative z-10 bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
            Base Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              tier="Tier 1"
              price="$2,497"
              description="For individuals"
              features={[
                '5-page static website (Home, Services, About, Projects, Contact)',
                'Mobile-responsive design',
                'Basic contact form (email only)',
                'Fast delivery',
                'Clean, modern design',
              ]}
            />

            <PricingCard
              tier="Tier 2"
              price="$5,497"
              description="For medium teams"
              featured={true}
              features={[
                'All Tier 1 features',
                'Custom design system',
                'Advanced animations',
                'CMS integration',
                'SEO optimization',
                'Analytics setup',
              ]}
            />

            <PricingCard
              tier="Tier 3"
              price="$14,997"
              description="For large teams"
              features={[
                'All Tier 2 features',
                'Custom backend development',
                'User authentication system',
                'Database integration',
                'API development',
                'Ongoing support (3 months)',
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
