'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImageUrl } from '@/lib/api'
import { ContactFormModal } from './ContactFormModal'
import { Calculator, FileText, Users, TrendingUp, Shield, CheckCircle, BookOpen } from 'lucide-react'
import { useState } from 'react'

const iconMap: any = {
  calculator: Calculator,
  file: FileText,
  users: Users,
  trending: TrendingUp,
  shield: Shield,
  check: CheckCircle,
  book: BookOpen,
}

export function PageContent({ page }: { page: any }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Us"
      />
      <div className="min-h-screen">
      {page.sections.map((section: any, index: number) => {
        const isEven = index % 2 === 0

        // Hero Section
        if (section.type === 'hero') {
          return (
            <section key={section.id} className="relative h-[70vh] flex items-center justify-center bg-black text-white">
              {section.imageUrl && (
                <div className="absolute inset-0">
                  <Image src={getImageUrl(section.imageUrl)} alt="Hero" fill className="object-cover opacity-40" priority />
                </div>
              )}
              <div className="relative z-10 text-center max-w-3xl px-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-5xl md:text-6xl font-light mb-4"
                >
                  {section.textContent?.heading}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.2 }} 
                  className="text-lg md:text-xl font-light opacity-90"
                >
                  {section.textContent?.subheading}
                </motion.p>
                {section.textContent?.cta && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsContactModalOpen(true)}
                    className="mt-8 bg-white text-black px-8 py-3 font-light hover:bg-gray-100 transition-all"
                  >
                    {section.textContent.cta}
                  </motion.button>
                )}
              </div>
            </section>
          )
        }

        // Text + Image Section
        if (section.type === 'text-image') {
          return (
            <section key={section.id} className={`py-16 md:py-24 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="container mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={!isEven ? 'md:order-2' : ''}
                  >
                    <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                      {section.textContent?.heading}
                    </h2>
                    {section.textContent?.subheading && (
                      <h3 className="text-xl font-light text-gray-700 mb-4">
                        {section.textContent.subheading}
                      </h3>
                    )}
                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      {section.textContent?.description}
                    </p>
                    {section.textContent?.features && Array.isArray(section.textContent.features) && (
                      <ul className="space-y-2">
                        {section.textContent.features.map((feature: string, i: number) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center text-gray-700 font-light"
                          >
                            <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative h-64 md:h-80 ${!isEven ? 'md:order-1' : ''}`}
                  >
                    {section.imageUrl ? (
                      <Image 
                        src={getImageUrl(section.imageUrl)} 
                        alt={section.textContent?.heading || 'Section'} 
                        fill 
                        className="object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <Calculator className="w-20 h-20 text-gray-400" />
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </section>
          )
        }

        // Features/Services Section
        if (section.type === 'features' || section.type === 'services') {
          const items = section.textContent?.items || []
          return (
            <section key={section.id} className="py-16 md:py-24 bg-gray-50">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
                    {section.textContent?.heading}
                  </h2>
                  {section.textContent?.subheading && (
                    <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
                      {section.textContent.subheading}
                    </p>
                  )}
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item: any, i: number) => {
                    const Icon = iconMap[item.icon] || Calculator
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 hover:shadow-lg transition-all"
                      >
                        <Icon className="w-10 h-10 text-black mb-4" />
                        <h3 className="text-xl font-light mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 font-light">{item.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        }

        // CTA Section
        if (section.type === 'cta') {
          return (
            <section key={section.id} className="py-16 md:py-24 bg-gray-900 text-white">
              <div className="container mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="text-3xl md:text-4xl font-light mb-6">
                    {section.textContent?.heading}
                  </h2>
                  <p className="text-lg md:text-xl font-light mb-8 opacity-90">
                    {section.textContent?.description}
                  </p>
                  {section.textContent?.cta && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setIsContactModalOpen(true)}
                      className="bg-white text-black px-8 py-3 font-light hover:bg-gray-100 transition-all"
                    >
                      {section.textContent.cta}
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </section>
          )
        }

        // Team/Gallery Section
        if (section.type === 'team' || section.type === 'gallery') {
          const items = section.textContent?.items || []
          return (
            <section key={section.id} className="py-16 md:py-24 bg-white">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
                    {section.textContent?.heading}
                  </h2>
                  {section.textContent?.description && (
                    <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
                      {section.textContent.description}
                    </p>
                  )}
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {items.map((item: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 overflow-hidden hover:shadow-lg transition-all"
                    >
                      <div className="relative h-48">
                        {item.image ? (
                          <Image
                            src={getImageUrl(item.image)}
                            alt={item.name || item.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <Users className="w-16 h-16 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-light text-gray-900 mb-1">
                          {item.name || item.title}
                        </h3>
                        {item.role && (
                          <p className="text-sm text-gray-600 mb-2">{item.role}</p>
                        )}
                        {item.description && (
                          <p className="text-sm text-gray-600 font-light">{item.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )
        }

        // Stats Section
        if (section.type === 'stats') {
          const stats = section.textContent?.stats || []
          return (
            <section key={section.id} className="py-16 md:py-24 bg-black text-white">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-light mb-4">
                    {section.textContent?.heading}
                  </h2>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-4xl md:text-5xl font-light mb-2">{stat.value}</div>
                      <div className="text-lg font-light opacity-80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )
        }

        return null
      })}
    </div>
    </>
  )
}
