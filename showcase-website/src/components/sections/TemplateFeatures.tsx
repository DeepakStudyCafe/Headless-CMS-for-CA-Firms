'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Monitor, Settings, Edit, FileText, Users, Mail, ArrowRight } from 'lucide-react'

export default function TemplateFeatures() {
  const features = [
    {
      icon: Monitor,
      title: 'Professional Design',
      description: 'Beautifully crafted templates with modern layouts and professional aesthetics',
    },
    {
      icon: Settings,
      title: 'Admin Panel Included',
      description: 'Built-in admin dashboard to manage your entire website content without technical knowledge',
    },
    {
      icon: Edit,
      title: 'Easy Content Management',
      description: 'Update pages, services, team members, and blog posts directly from your admin panel',
    },
    {
      icon: FileText,
      title: 'Request Content Changes',
      description: 'Site owners can submit content update requests through the admin panel for team review',
    },
    {
      icon: Users,
      title: 'Client Portal',
      description: 'Dedicated section for your clients to access resources and stay updated',
    },
    {
      icon: Mail,
      title: 'Contact Form Integration',
      description: 'Receive client inquiries directly in your admin panel with email notifications',
    },
  ]

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            What's Included in Every Template?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subheading"
          >
            All Templates come with powerful admin features to manage your website effortlessly
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 group"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Admin Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Control with Admin Panel
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every template includes a powerful admin dashboard where you, as the site owner, can:
              </p>
              <ul className="space-y-3">
                {[
                  'Manage all website pages and content',
                  'Add, edit, or remove services offered',
                  'Update team member information',
                  'Publish blog posts and articles',
                  'View and respond to contact inquiries',
                  'Submit content update requests',
                  'Monitor website analytics',
                  'Upload images and documents',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-6 border-4 border-primary-200">
                <div className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-lg p-6 text-white mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-8 h-8" />
                    <div>
                      <h4 className="font-bold text-lg">Admin Dashboard</h4>
                      <p className="text-sm text-white/80">Manage Everything</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/20 rounded p-3">
                      <div className="font-bold mb-1">Pages</div>
                      <div className="text-2xl font-bold">16+</div>
                    </div>
                    <div className="bg-white/20 rounded p-3">
                      <div className="font-bold mb-1">Services</div>
                      <div className="text-2xl font-bold">20+</div>
                    </div>
                    <div className="bg-white/20 rounded p-3">
                      <div className="font-bold mb-1">Inquiries</div>
                      <div className="text-2xl font-bold">New</div>
                    </div>
                    <div className="bg-white/20 rounded p-3">
                      <div className="font-bold mb-1">Requests</div>
                      <div className="text-2xl font-bold">Pending</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  ✨ No technical knowledge required - Easy to use interface
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            View All Templates
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
