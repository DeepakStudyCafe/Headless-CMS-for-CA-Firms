'use client'

import { motion } from 'framer-motion'
import { Monitor, Code, Search, Headphones, Server, Palette, Smartphone, Lock, Settings, Edit } from 'lucide-react'
import Link from 'next/link'

export default function ServicesContent() {
  const services = [
    {
      icon: Monitor,
      title: 'Website Templates',
      description: 'Professionally designed templates with admin panels for easy content management and site control.',
      features: [
        'Choice of 50+ premium designs',
        'Built-in admin dashboard',
        'Responsive across all devices',
        'SEO-optimized structure',
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Settings,
      title: 'Admin Panel Setup',
      description: 'Powerful admin dashboard included with every template for complete website control.',
      features: [
        'Content management system',
        'Page and service editor',
        'Contact form management',
        'Analytics dashboard',
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    // {
    //   icon: Edit,
    //   title: 'Content Request System',
    //   description: 'Site owners can submit content update requests directly through the admin panel.',
    //   features: [
    //     'Request content changes',
    //     'Track request status',
    //     'Communication portal',
    //     'Quick turnaround time',
    //   ],
    //   color: 'text-green-600',
    //   bgColor: 'bg-green-100',
    // },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored web solutions and custom features beyond standard templates.',
      features: [
        'Custom features development',
        'Third-party integrations',
        'Database design',
        'API development',
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO services to improve your website\'s visibility and rank higher in search engine results.',
      features: [
        'Keyword research',
        'On-page SEO',
        'Technical SEO',
        'Content optimization',
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Create a strong brand identity with custom logos, color schemes, and consistent visual elements.',
      features: [
        'Logo design',
        'Brand guidelines',
        'Marketing materials',
        'Visual identity',
      ],
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Ensure your website looks perfect and functions flawlessly on all devices and screen sizes.',
      features: [
        'Mobile-first design',
        'Touch-friendly interface',
        'Fast loading times',
        'Cross-browser compatibility',
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: Server,
      title: 'Hosting & Maintenance',
      description: 'Reliable hosting services with regular maintenance, updates, and backups to keep your site running smoothly.',
      features: [
        'Fast SSD hosting',
        'Daily backups',
        'Security updates',
        '99.9% uptime guarantee',
      ],
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
    },
    {
      icon: Lock,
      title: 'Security Services',
      description: 'Protect your website and client data with enterprise-grade security measures and SSL certificates.',
      features: [
        'SSL certificates',
        'Malware scanning',
        'Firewall protection',
        'Regular security audits',
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock support from our dedicated team to help you with any questions or technical issues.',
      features: [
        'Email support',
        'Phone support',
        'Live chat',
        'Priority assistance',
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Web Solutions with Admin Control
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Choose from 6 professional templates, each featuring a built-in admin panel that lets site owners manage content, submit update requests, and control their website effortlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  className="card p-6 group"
                >
                  <div className={`w-14 h-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to deliver your website quickly and efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Template', description: 'Select from Professionally designed templates for CA firms.' },
              { step: '02', title: 'Get Admin Access', description: 'Receive your admin dashboard credentials to manage your site.' },
              { step: '03', title: 'Manage Content', description: 'Update content and submit change requests through admin panel.' },
              { step: '04', title: 'Launch & Grow', description: 'Go live and easily maintain your website with admin control.' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help you achieve your online goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule-call"
                className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Call
              </Link>
              <Link
                href="/pricing"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-lg border-2 border-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
