'use client'

import { useState } from 'react'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add backend integration
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-clarent-orange focus:border-transparent outline-none"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-clarent-orange focus:border-transparent outline-none"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-clarent-orange focus:border-transparent outline-none resize-none"
        />
      </div>

      <Button variant="filled" className="w-full">
        Submit
      </Button>
    </form>
  )
}
