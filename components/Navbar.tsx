'use client'

import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="w-full max-w-6xl bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        <div className="flex justify-between items-center h-18 px-8">
          <Link href="/" className="text-3xl font-bold" onClick={() => setIsMenuOpen(false)}>
            <span className="text-white font-[family-name:var(--font-unifraktur)] hover:text-clarent-orange transition-colors">clarent</span><span className="font-[family-name:var(--font-family-display)] text-clarent-orange">*</span>
          </Link>

          {/* Desktop menu */}
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

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-clarent-orange transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-24 left-4 right-4 bg-black/95 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col py-4">
            <Link
              href="/services"
              className="text-white hover:text-clarent-orange transition-colors text-lg px-8 py-4 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-clarent-orange transition-colors text-lg px-8 py-4 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <div className="px-8 py-4">
              <Button
                href="/contact"
                variant="filled"
                className="w-full text-base py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Inquire
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
