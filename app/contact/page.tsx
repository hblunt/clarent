import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Hero title="Contact" />

      {/* Contact Form Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              Ready to bring your ideas to life? Fill out the form below and
              we'll get back to you as soon as possible.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
