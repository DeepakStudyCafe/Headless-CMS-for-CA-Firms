'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImageUrl } from '@/lib/api'
import { ContactFormModal } from './ContactFormModal'
import { Briefcase, Users, Award, TrendingUp, Shield, FileText, CheckCircle, Calculator } from 'lucide-react'
import { useState } from 'react'

const iconMap: any = {
  briefcase: Briefcase,
  users: Users,
  award: Award,
  trending: TrendingUp,
  shield: Shield,
  file: FileText,
  check: CheckCircle,
  calculator: Calculator,
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
                    className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent"
                  >
                    {section.textContent?.heading}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.2 }} 
                    className="text-lg md:text-xl opacity-90"
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
                      className="mt-8 bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-700 transition-all"
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
              <section key={section.id} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-blue-50">
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                        {section.textContent?.heading}
                      </h2>
                      {section.textContent?.subheading && (
                        <h3 className="text-xl text-blue-700 mb-4">
                          {section.textContent.subheading}
                        </h3>
                      )}
                      <p className="text-gray-600 leading-relaxed mb-6">
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
                              className="flex items-center text-black-700"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="relative h-64 md:h-80"
                    >
                      {section.imageUrl ? (
                        <Image 
                          src={getImageUrl(section.imageUrl)} 
                          alt={section.textContent?.heading || 'Section'} 
                          fill 
                          className="object-cover rounded-xl shadow-2xl" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-100 rounded-xl flex items-center justify-center">
                          <Calculator className="w-20 h-20 text-blue-400" />
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
              <section key={section.id} className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                      {section.textContent?.heading}
                    </h2>
                    {section.textContent?.subheading && (
                      <p className="text-lg text-blue-600 max-w-2xl mx-auto">
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
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-black-800">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
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
              <section key={section.id} className="py-16 md:py-24 bg-blue-50  text-blue-800">
                <div className="container mx-auto px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      {section.textContent?.heading}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90 text-gray-800">
                      {section.textContent?.description}
                    </p>
                    {section.textContent?.cta && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-100 transition-all shadow-lg"
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
              <section key={section.id} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-blue-50">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                      {section.textContent?.heading}
                    </h2>
                    {section.textContent?.subheading && (
                      <p className="text-lg text-blue-600 max-w-2xl mx-auto">
                        {section.textContent.subheading}
                      </p>
                    )}
                  </motion.div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                      >
                        {item.image && (
                          <div className="relative h-48">
                            <Image 
                              src={getImageUrl(item.image)} 
                              alt={item.name || 'Team member'} 
                              fill 
                              className="object-cover" 
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-blue-800">{item.name}</h3>
                          {item.role && <p className="text-black-600 font-medium">{item.role}</p>}
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
              <section key={section.id} className="py-8 md:py-24 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {section.textContent?.heading}
                    </h2>
                    {section.textContent?.subheading && (
                      <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        {section.textContent.subheading}
                      </p>
                    )}
                  </motion.div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="text-4xl md:text-4xl font-semibold mb-2">{stat.value}</div>
                        <div className="text-lg opacity-90">{stat.label}</div>
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
