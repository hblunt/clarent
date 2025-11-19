'use client'

import { useState } from 'react'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add backend integration
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isFieldActive = (fieldName: string) => {
    return focusedField === fieldName || formData[fieldName as keyof typeof formData] !== ''
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-12">
      {/* Name Field */}
      <div className="relative">
        <label
          htmlFor="name"
          className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${
            isFieldActive('name')
              ? 'text-base text-gray-400 -top-6'
              : 'text-xl text-gray-400 top-2'
          }`}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          required
          className={`w-full bg-transparent border-b-2 pb-2 pt-2 text-xl text-white outline-none transition-colors duration-300 ${
            focusedField === 'name' ? 'border-white' : 'border-gray-600'
          }`}
        />
      </div>

      {/* Email Field */}
      <div className="relative">
        <label
          htmlFor="email"
          className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${
            isFieldActive('email')
              ? 'text-base text-gray-400 -top-6'
              : 'text-xl text-gray-400 top-2'
          }`}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          required
          className={`w-full bg-transparent border-b-2 pb-2 pt-2 text-xl text-white outline-none transition-colors duration-300 ${
            focusedField === 'email' ? 'border-white' : 'border-gray-600'
          }`}
        />
      </div>

      {/* Message Field */}
      <div className="relative">
        <label
          htmlFor="message"
          className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${
            isFieldActive('message')
              ? 'text-base text-gray-400 -top-6'
              : 'text-xl text-gray-400 top-2'
          }`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          required
          rows={6}
          className={`w-full bg-transparent border-b-2 pb-2 pt-8 text-xl text-white outline-none resize-none transition-colors duration-300 ${
            focusedField === 'message' ? 'border-white' : 'border-gray-600'
          }`}
        />
      </div>

      <div className="space-y-8">
        <Button variant="filled" className="w-full">
          Submit
        </Button>
        <p className="text-center text-sm text-gray-400">
          or email{' '}
          <a
            href="mailto:holly@clarent.io"
            className="text-clarent-orange underline hover:text-yellow-400 transition-colors"
          >
            holly@clarent.io
          </a>
          {' '}directly
        </p>
      </div>
    </form>
  )
}
