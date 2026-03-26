'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/forms/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || '',
          subject: formData.subject,
          message: formData.message,
          website: 'showcase-website'
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        }, 3000);
      } else {
        alert(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@studycafe.in',
      link: 'mailto:support@studycafe.in',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9625080264',
      link: 'tel:+919625080264',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '1003, 10th Floor, Modi Tower 98, Nehruplace, Delhi 110019',
      link: null,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Sat: 11:00 AM - 6:00 PM',
      link: null,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ]

  return (
    <div className="pb-20 hero-bg" style={{ ['--hero-image' as any]: "url(/about.jpeg)" }}>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto pt-24"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/80 leading-relaxed">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 text-center"
                >
                  <div className={`w-14 h-14 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-7 h-7 ${info.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700" placeholder="John Doe" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700" placeholder="john@example.com" />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700" placeholder="+91 9625080264" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="template">Template Questions</option>
                        <option value="pricing">Pricing & Plans</option>
                        <option value="technical">Technical Support</option>
                        <option value="custom">Custom Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-gray-700" placeholder="Tell us more about your requirements..."></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Talk</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">Whether you have a question about our templates, pricing, or anything else, our team is ready to answer all your questions.</p>
                <p className="text-lg text-gray-600 leading-relaxed">We're committed to providing exceptional service and support to help your CA practice succeed online.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response Time</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="text-gray-700">Email inquiries: Within 2 hours</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="text-gray-700">Phone calls: Immediate response</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="text-gray-700">Support tickets: Within 24 hours</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Prefer to Schedule a Call?</h3>
                <p className="mb-6 opacity-90">Book a free consultation with our team to discuss your needs in detail.</p>
                <a href="/schedule-call" className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Schedule Now</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
