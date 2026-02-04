import React, { useState } from 'react'

export function ContactFormModal() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold shadow hover:from-primary-700 hover:to-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400"
        onClick={() => setOpen(true)}
      >
        Contact Us
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-accent-700 hover:text-primary-600"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-primary-700 mb-4">Contact Us</h2>
            <form className="flex flex-col gap-4">
              <input className="border rounded px-3 py-2 focus:ring-2 focus:ring-accent-400" placeholder="Name" required />
              <input className="border rounded px-3 py-2 focus:ring-2 focus:ring-accent-400" placeholder="Email" type="email" required />
              <textarea className="border rounded px-3 py-2 focus:ring-2 focus:ring-accent-400" placeholder="Message" required />
              <button type="submit" className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-2 rounded font-semibold hover:from-primary-700 hover:to-accent-600">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
