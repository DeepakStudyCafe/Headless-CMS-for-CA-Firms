'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Phone, CheckCircle, Video } from 'lucide-react'

export default function ScheduleCallContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    callType: 'phone',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/forms/schedule`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          website: 'showcase-website'
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        alert(data.message || 'Failed to schedule call');
      }
    } catch (error) {
      console.error('Schedule form error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="pb-20  min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container-custom max-w-2xl"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Call Scheduled Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for scheduling a call with us. You'll receive a confirmation email shortly with call details.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Date</p>
                  <p className="font-bold text-gray-900">{new Date(formData.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Time</p>
                  <p className="font-bold text-gray-900">{formData.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Call Type</p>
                  <p className="font-bold text-gray-900 capitalize">{formData.callType} Call</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Contact</p>
                  <p className="font-bold text-gray-900">{formData.phone}</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>A calendar invite will be sent to your email</span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>We'll call you at the scheduled time</span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>You can reschedule or cancel anytime</span>
              </div>
            </div>
            <a
              href="/"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pb-20 hero-bg min-h-screen" style={{ ['--hero-image' as any]: "url(/about.jpeg)" }}>
      <div className="container-custom pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4">Schedule a Free Consultation</h1>
          <p className="text-xl text-white/80">Book a call with our team to discuss your website needs. We're here to help you succeed!</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scheduling Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Book Your Call</h2>
                  <p className="text-sm text-gray-600">Fill in the details below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company/Firm Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700"
                    placeholder="Your CA Firm Name"
                  />
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white text-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full text-gray-700 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="text-gray-800">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What would you like to discuss?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-gray-700"
                    placeholder="Tell us about your requirements, questions, or any specific templates you're interested in..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Scheduling...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Schedule Call
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">15-30 minute consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Discuss your website needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Review template options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Get pricing information</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Ask any questions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-2xl p-6 text-white">
              <Clock className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Available Hours</h3>
              <p className="text-white/90 mb-4">
                Monday - Saturday<br />
                11:00 AM - 6:00 PM IST
              </p>
              <p className="text-sm text-white/80">
                We'll confirm your appointment within 2 hours
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Need Immediate Help?</h3>
              <div className="space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  +91 9625080264
                </a>
                <a
                  href="mailto:support@studycafe.in"
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  support@studycafe.in
                </a>
                <a
                  href="mailto:marketing@studycafe.in"
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  marketing@studycafe.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
