import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="w-full max-w-6xl bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        <div className="flex justify-between items-center h-18 px-8">
          <Link href="/" className="text-3xl font-bold">
            <span className="text-white font-[family-name:var(--font-unifraktur)] hover:text-clarent-orange transition-colors">clarent</span><span className="font-[family-name:var(--font-family-display)] text-clarent-orange">*</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-white hover:text-clarent-orange transition-colors text-base"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-clarent-orange transition-colors text-base"
            >
              Projects
            </Link>
            <Button href="/contact" variant="filled" className="text-base px-6 py-2.5">
              Inquire
            </Button>
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Button href="/contact" variant="filled" className="text-base px-5 py-2.5">
              Inquire
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}
