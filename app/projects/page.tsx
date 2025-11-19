import Hero from '@/components/Hero'
// import ProjectCarousel from '@/components/ProjectCarousel'
import AutoScrollSection from '@/components/AutoScrollSection'

export default function Projects() {
  // Sample project images - replace with actual project images
  // const projectImages = [
  //   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop',
  //   'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=1000&fit=crop',
  //   'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=1000&fit=crop',
  //   'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1000&fit=crop',
  //   'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop',
  //   'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=1000&fit=crop',
  // ]

  return (
    <>
      <Hero title="Projects" textPosition="bottom-[40vh]" enableAutoScroll={true} />

      {/* Projects Section */}
      <AutoScrollSection className="relative z-10 bg-zinc-950 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-3xl md:text-4xl text-gray-300 text-center">
            In-house projects will be visible here soon.
          </p>
        </div>
      </AutoScrollSection>
    </>
  )
}
