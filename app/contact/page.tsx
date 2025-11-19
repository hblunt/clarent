import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import AutoScrollSection from '@/components/AutoScrollSection'

export default function Contact() {
  return (
    <>
      <Hero title="Contact" textPosition="bottom-[40vh]" enableAutoScroll={true} />

      {/* Contact Form Section */}
      <AutoScrollSection className="relative z-10 bg-zinc-950 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ContactForm />
        </div>
      </AutoScrollSection>
    </>
  )
}
