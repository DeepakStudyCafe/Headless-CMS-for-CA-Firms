'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { submitContactForm, getWebsiteData } from '@/lib/api'

interface ContactContent {
  heroTitle?: string
  heroSubtitle?: string
  phone2?: string
  email2?: string
  mapUrl?: string
}
interface WebsiteData {
  name?: string
  phone?: string
  email?: string
  address?: string
  workingHours?: string
  themeConfig?: { contactContent?: ContactContent }
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null)

  useEffect(() => {
    getWebsiteData().then(setWebsiteData).catch(() => {})
  }, [])

  const cc: ContactContent = (websiteData?.themeConfig?.contactContent) || {}

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const contactData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        website: 'firm2-verma'
      }
      await submitContactForm(contactData)
      alert('Message sent successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      alert('Failed to send message. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8">
              {cc.heroTitle || websiteData?.name || 'Contact Us'}
            </h1>
            <div className="w-24 h-[1px] bg-black mx-auto mb-8"></div>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {cc.heroSubtitle || 'Reach out to our team of financial experts for personalized consultation and professional services.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="group p-8 border border-gray-100 hover:border-black transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin className="h-8 w-8 text-gray-900 mb-6" />
              <h3 className="text-xl font-light text-gray-900 mb-4">Address</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {websiteData?.address}
              </p>
            </motion.div>

            <motion.div 
              className="group p-8 border border-gray-100 hover:border-black transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Phone className="h-8 w-8 text-gray-900 mb-6" />
              <h3 className="text-xl font-light text-gray-900 mb-4">Phone</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {websiteData?.phone}
                {cc.phone2 && <><br />{cc.phone2}</>}
              </p>
            </motion.div>

            <motion.div 
              className="group p-8 border border-gray-100 hover:border-black transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Mail className="h-8 w-8 text-gray-900 mb-6" />
              <h3 className="text-xl font-light text-gray-900 mb-4">Email</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {websiteData?.email}
                {cc.email2 && <><br />{cc.email2}</>}
              </p>
            </motion.div>

            <motion.div 
              className="group p-8 border border-gray-100 hover:border-black transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Clock className="h-8 w-8 text-gray-900 mb-6" />
              <h3 className="text-xl font-light text-gray-900 mb-4">Hours</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {websiteData?.workingHours}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">Visit Our Office</h2>
            <div className="w-16 h-[1px] bg-black mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map */}
            <motion.div 
              className="lg:col-span-2 h-96 bg-gray-200 overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <iframe
                src={cc.mapUrl || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4157719392995!2d77.06192631507845!3d28.459496082475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2dcf9c8a54de8af6!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1642678912345!5m2!1sen!2sin'}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Quick Contact */}
            <motion.div 
              className="bg-white p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="mb-6">
                <MessageSquare className="h-8 w-8 text-gray-900 mb-4" />
                <h3 className="text-2xl font-light text-gray-900 mb-4">Quick Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black outline-none font-light bg-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black outline-none font-light bg-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black outline-none font-light bg-transparent"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black outline-none font-light bg-transparent"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black outline-none font-light bg-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 py-3 px-6 border border-black text-black hover:bg-black hover:text-white disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500 transition-colors font-light uppercase tracking-wider text-sm"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-3xl font-light text-gray-900 mb-8">Why Choose Verma & Co.?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-light text-gray-900 mb-3">Expert Guidance</h4>
                <p className="text-gray-600 font-light">Professional advice from certified experts with years of experience.</p>
              </div>
              <div>
                <h4 className="text-xl font-light text-gray-900 mb-3">Personalized Service</h4>
                <p className="text-gray-600 font-light">Tailored solutions designed to meet your specific business needs.</p>
              </div>
              <div>
                <h4 className="text-xl font-light text-gray-900 mb-3">Timely Delivery</h4>
                <p className="text-gray-600 font-light">Efficient processes ensuring all deadlines are met without compromise.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}