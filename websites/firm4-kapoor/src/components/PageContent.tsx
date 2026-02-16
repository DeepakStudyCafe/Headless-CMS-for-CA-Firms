'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImageUrl } from '@/lib/api'
import { ContactFormModal } from './ContactFormModal'
import { Building2, Users, Award, TrendingUp, Shield, FileText, CheckCircle, Briefcase, Calculator, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface Section {
  id: string
  type: string
  imageUrl: string | null
  textContent: any
  order: number
}

interface Page {
  id: string
  title: string
  slug: string
  sections: Section[]
}

const iconMap: any = {
  building: Building2,
  users: Users,
  award: Award,
  trending: TrendingUp,
  shield: Shield,
  file: FileText,
  check: CheckCircle,
  briefcase: Briefcase,
  calculator: Calculator,
  sparkles: Sparkles,
}

export function PageContent({ page }: { page: Page }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Us"
      />
      <div className="min-h-screen">
      {page.sections.map((section, index) => {
        const isEven = index % 2 === 0

        if (section.type === 'hero') {
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white "
            >
              {section.imageUrl && (
                <div className="absolute inset-0 z-0 ">
                  <Image
                    src={getImageUrl(section.imageUrl)}
                    alt="Hero"
                    fill
                    className="object-cover "
                    priority
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
                </div>
              )}
              <div className="relative z-10 text-center max-w-4xl px-4">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-2xl lg:text-4xl font-bold mb-6 "
                >
                  {section.textContent?.heading}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl mb-8 leading-relaxed text-white"
                >
                  {section.textContent?.subheading}
                </motion.p>
                {section.textContent?.cta && (
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-emerald-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-400 transition-all shadow-lg hover:shadow-xl"
                  >
                    {section.textContent.cta}
                  </motion.button>
                )}
              </div>
            </motion.section>
          )
        }

        if (section.type === 'text-image') {
          return (
            <section key={section.id} className={`py-16 md:py-20 ${isEven ? 'bg-white' : 'bg-emerald-50'}`}>
              <div className="container mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={!isEven ? 'md:order-2' : ''}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900">
                      {section.textContent?.heading}
                    </h2>
                    {section.textContent?.subheading && (
                      <h3 className="text-xl text-emerald-700 mb-4 font-semibold">
                        {section.textContent.subheading}
                      </h3>
                    )}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {section.textContent?.description}
                    </p>
                    {section.textContent?.features && Array.isArray(section.textContent.features) && (
                      <ul className="space-y-3">
                        {section.textContent.features.map((feature: string, i: number) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center text-gray-700"
                          >
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl ${!isEven ? 'md:order-1' : ''}`}
                  >
                    {section.imageUrl ? (
                      <Image
                        src={getImageUrl(section.imageUrl)}
                        alt={section.textContent?.heading || 'Section image'}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                        <Building2 className="w-24 h-24 text-emerald-600 opacity-50" />
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </section>
          )
        }

        if (section.type === 'features' || section.type === 'services') {
          const items = section.textContent?.items || []
          return (
            <section key={section.id} className="py-16 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
                    {section.textContent?.heading}
                  </h2>
                  {section.textContent?.subheading && (
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {section.textContent.subheading}
                    </p>
                  )}
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item: any, i: number) => {
                    const Icon = iconMap[item.icon] || Building2
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-emerald-100"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        }

        if (section.type === 'cta') {
          return (
            <section key={section.id} className="py-16 md:py-20 bg-gray-50 text-emerald-900">
              <div className="container mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {section.textContent?.heading}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-gray-800">
                    {section.textContent?.description}
                  </p>
                  {section.textContent?.cta && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsContactModalOpen(true)}
                      className="bg-white text-emerald-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg"
                    >
                      {section.textContent.cta}
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </section>
          )
        }

        if (section.type === 'team' || section.type === 'gallery') {
          const items = section.textContent?.items || []
          return (
            <section key={section.id} className="py-16 md:py-20 bg-emerald-50">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
                    {section.textContent?.heading}
                  </h2>
                  {section.textContent?.description && (
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {section.textContent.description}
                    </p>
                  )}
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {items.map((item: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
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
                          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                            <Users className="w-16 h-16 text-emerald-600 opacity-50" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {item.name || item.title}
                        </h3>
                        {item.role && (
                          <p className="text-sm text-emerald-600 mb-2">{item.role}</p>
                        )}
                        {item.description && (
                          <p className="text-sm text-gray-600">{item.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )
        }

        if (section.type === 'stats') {
          const stats = section.textContent?.stats || []
          return (
            <section key={section.id} className="py-16 md:py-20 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {section.textContent?.heading}
                  </h2>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-4xl md:text-5xl font-bold mb-2 text-emerald-300">{stat.value}</div>
                      <div className="text-lg text-emerald-100">{stat.label}</div>
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
