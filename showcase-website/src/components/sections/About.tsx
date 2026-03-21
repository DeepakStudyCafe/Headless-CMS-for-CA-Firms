'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export default function About() {
  const benefits = [
    'Professionally  templates',
    'Admin panel for site owners',
    'Content request system',
    'Easy content management',
    'No technical skills required',
    'Mobile-responsive layouts',
    'Regular updates included',
    '24/7 customer support',
  ]

  return (
    <section className="py-20 gradient-bg" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Templates with Full Admin Control
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Each of our Professionally designed templates includes a powerful admin panel that puts you in complete control of your website. As a site owner, you can manage all aspects of your website - from updating services and team information to publishing blog posts and responding to client inquiries.
            </p>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/templates" className="btn-primary">
                Explore Templates
              </Link>
              <Link href="/schedule-call" className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 p-8 md:p-12 text-white">
                <div className="space-y-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Built-in Admin Dashboard</h3>
                    <p className="text-white/90">
                      Every template comes with a complete admin panel for managing website content effortlessly.
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Content Request System</h3>
                    <p className="text-white/90">
                      Site owners can request content updates directly through the admin panel - no emails needed.
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Beautiful Designs</h3>
                    <p className="text-white/90">
                      Choose from Premium templates designed specifically for CA firms and professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-200 rounded-full -z-10 opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full -z-10 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
