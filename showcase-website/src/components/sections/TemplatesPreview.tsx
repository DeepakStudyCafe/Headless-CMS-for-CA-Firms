'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function TemplatesPreview() {
  const templates = [
    {
      id: 1,
      name: 'Sharma & Associates',
      theme: 'Professional Blue',
      color: '#1e40af',
      description: 'Classic professional design perfect for established firms',
      url: 'https://sadgurushakti.org',
      pages: 16,
    },
    {
      id: 2,
      name: 'Verma Accounting Services',
      theme: 'Modern Minimal',
      color: '#000000',
      description: 'Clean, modern layout for contemporary practices',
      url: 'https://automatepractice.com',
      pages: 14,
    },
    {
      id: 3,
      name: 'Gupta Tax Advisors',
      theme: 'Creative Purple',
      color: '#8b5cf6',
      description: 'Bold and creative design for innovative firms',
      url: 'https://cadeepakgupta.com',
      pages: 11,
    },
    {
      id: 4,
      name: 'Kapoor Financial Services',
      theme: 'Emerald Green',
      color: '#059669',
      description: 'Fresh emerald theme conveying growth and trust',
      url: 'https://capracticeautomation.com',
      pages: 16,
    },
    {
      id: 5,
      name: 'Singh & Co. Advisors',
      theme: 'Vibrant Orange',
      color: '#ea580c',
      description: 'Energetic design that stands out from the crowd',
      url: 'https://practovia.com',
      pages: 16,
    },
    {
      id: 6,
      name: 'Patel Consulting',
      theme: 'Teal Blue',
      color: '#0d9488',
      description: 'Sophisticated teal theme for consulting firms',
      url: 'https://digitechai.in',
      pages: 16,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-white" id="templates">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            Choose Your Perfect Template
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subheading"
          >
            Six beautifully crafted templates, each designed with CA firms in mind
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              variants={itemVariants}
              className="card p-0 overflow-hidden group"
            >
              {/* Template Preview */}
              <div
                className="h-48 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${template.color} 0%, ${template.color}dd 100%)`,
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-3xl font-bold mb-2">{template.name.split(' ')[0]}</div>
                    <div className="text-sm opacity-90">{template.theme}</div>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{template.pages} Pages</span>
                  <span className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: template.color }}
                    ></div>
                    {template.theme}
                  </span>
                </div>
                <a
                  href={template.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 group"
                >
                  View Live Demo
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to View All Templates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
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
