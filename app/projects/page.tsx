import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <>
      <Hero title="Projects" />

      {/* Intro Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mb-12">
            Take a look at the products our team has built, or is currently
            building. Each project represents our commitment to quality,
            innovation, and delivering exceptional results.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              name="Project Alpha"
              description="A revolutionary platform that transforms how businesses manage their operations. Built with cutting-edge technology for maximum performance."
              link="#"
            />
            {/* Additional project cards can be easily added here */}
          </div>
        </div>
      </section>
    </>
  )
}
