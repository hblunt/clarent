import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-black">
            clarent
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-black hover:text-clarent-orange transition-colors"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-black hover:text-clarent-orange transition-colors"
            >
              Projects
            </Link>
            <Button href="/contact" variant="filled">
              Inquire
            </Button>
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Button href="/contact" variant="filled" className="text-sm px-4 py-2">
              Inquire
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
