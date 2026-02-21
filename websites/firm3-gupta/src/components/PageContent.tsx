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
              <section key={section.id} className="relative h-[70vh] flex items-center bg-black text-white">
                {section.imageUrl && (
                  <div className="absolute inset-0">
                    <Image src={getImageUrl(section.imageUrl)} alt="Hero" fill className="object-cover opacity-40" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                  </div>
                )}

                <div className="relative z-10 max-w-6xl w-full px-6 md:px-12 mx-auto">
                  <div className="max-w-3xl ml-4 md:ml-12 lg:ml-20">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight text-left tracking-tight"
                    >
                      {section.textContent?.heading}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="text-base md:text-lg text-white/95 mb-6 text-left max-w-xl"
                    >
                      {section.textContent?.subheading}
                    </motion.p>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        onClick={() => setIsContactModalOpen(true)}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-7 py-3 rounded-lg text-base font-semibold shadow-xl ring-1 ring-white/10"
                        aria-label={section.textContent?.cta || 'Contact Us'}
                      >
                        {section.textContent?.cta || 'Contact Us'}
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </section>
            )
          }

          // Text + Image Section — professional layout
          if (section.type === 'text-image') {
            return (
              <section key={section.id} className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="md:w-1/2"
                    >
                      <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 leading-tight">
                        {section.textContent?.heading}
                      </h2>
                      {section.textContent?.subheading && (
                        <h3 className="text-lg text-gray-600 mb-4">{section.textContent.subheading}</h3>
                      )}
                      <p className="text-gray-700 leading-relaxed mb-6">{section.textContent?.description}</p>
                      {section.textContent?.features && Array.isArray(section.textContent.features) && (
                        <ul className="grid grid-cols-1 gap-3">
                          {section.textContent.features.map((feature: string, i: number) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.07 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <div className="mt-1 w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                <CheckCircle className="w-4 h-4" />
                              </div>
                              <span className="text-gray-800">{feature}</span>
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
                      className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden border border-gray-100 shadow-md"
                    >
                      {section.imageUrl ? (
                        <Image src={getImageUrl(section.imageUrl)} alt={section.textContent?.heading || 'Section'} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                          <Calculator className="w-20 h-20 text-indigo-400" />
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </section>
            )
          }

          // Features/Services — professional cards
          if (section.type === 'features' || section.type === 'services') {
            const items = section.textContent?.items || []
            return (
              <section key={section.id} className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">{section.textContent?.heading}</h2>
                    {section.textContent?.subheading && <p className="text-sm text-gray-600 max-w-2xl mx-auto">{section.textContent.subheading}</p>}
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((item: any, i: number) => {
                      const Icon = iconMap[item.icon] || Calculator
                      return (
                        <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }} whileHover={{ y: -6 }} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 flex gap-4 items-start">
                          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </section>
            )
          }

          // CTA — split layout with strong CTA
          if (section.type === 'cta') {
            return (
              <section key={section.id} className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <motion.div className="md:col-span-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{section.textContent?.heading}</h2>
                      <p className="text-base md:text-lg opacity-90">{section.textContent?.description}</p>
                    </motion.div>
                    <motion.div className="text-left md:text-right" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                      {section.textContent?.cta && (
                        <motion.button whileHover={{ scale: 1.03 }} onClick={() => setIsContactModalOpen(true)} className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-bold shadow-lg">
                          {section.textContent.cta}
                        </motion.button>
                      )}
                    </motion.div>
                  </div>
                </div>
              </section>
            )
          }

          // Team/Gallery — modern cards with overlay
          if (section.type === 'team' || section.type === 'gallery') {
            const items = section.textContent?.items || []
            return (
              <section key={section.id} className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">{section.textContent?.heading}</h2>
                    {section.textContent?.subheading && <p className="text-sm text-gray-600 max-w-2xl mx-auto">{section.textContent.subheading}</p>}
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item: any, i: number) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }} whileHover={{ y: -6 }} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1">
                        <div className="relative h-56">
                          {item.image ? (
                            <Image src={getImageUrl(item.image)} alt={item.name || 'Gallery'} fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center"><Users className="w-16 h-16 text-indigo-400" /></div>
                          )}
                          {item.role && <div className="absolute left-4 bottom-4 bg-white/90 rounded-full px-3 py-1 shadow-sm"><span className="text-sm font-medium text-gray-900">{item.role}</span></div>}
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )
          }

          // Stats — compact badges
          if (section.type === 'stats') {
            const stats = section.textContent?.stats || []
            return (
              <section key={section.id} className="py-8 md:py-24 bg-gray-100">
                <div className="container mx-auto px-4">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">{section.textContent?.heading}</h2>
                    {section.textContent?.subheading && <p className="text-sm text-gray-600 max-w-2xl mx-auto">{section.textContent.subheading}</p>}
                  </motion.div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat: any, i: number) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="text-center bg-white p-6 rounded-lg shadow-sm">
                        <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
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
