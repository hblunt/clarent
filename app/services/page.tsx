import Hero from '@/components/Hero'
import ServiceSlideshow from '@/components/ServiceSlideshow'

export default function Services() {
  return (
    <>
      <Hero title="Services" textPosition="bottom-[40vh]" enableAutoScroll={true} />
      <ServiceSlideshow />
    </>
  )
}
