'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Palette, Code, Headphones, TrendingUp } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Admin Panel Included',
      description: 'Every template comes with a powerful admin dashboard to manage all your website content easily.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Shield,
      title: 'Content Management',
      description: 'Update pages, services, team members, and blog posts without any technical knowledge required.',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: Palette,
      title: 'Request Changes',
      description: 'Site owners can submit content update requests through the admin panel for quick processing.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Code,
      title: 'Template Choices',
      description: 'Choose from Professionally designed templates, each with unique style and features.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
    {
      icon: Headphones,
      title: 'Complete Control',
      description: 'Full access to manage your website\'s content, without depending on developers for updates.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
    },
    {
      icon: TrendingUp,
      title: 'Easy to Use',
      description: 'Intuitive interface designed for CA professionals - no technical expertise needed.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-100',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-white/50" id="features">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            Why Choose Our Templates?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subheading"
          >
            Everything you need to establish a strong online presence and grow your CA practice
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 group"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
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
        </motion.div>
      </div>
    </section>
  )
}
