'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ContactFormModal } from './ContactFormModal'
import { ArrowRight, CheckCircle, Star, Users, Target, TrendingUp, Award, Shield, Globe } from 'lucide-react'

export function PageContent({ page }: { page: any }) {
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">The requested page could not be found.</p>
          <Link href="/" className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-600 transition-all">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {page.sections?.map((section: any, idx: number) => {
        switch (section.type) {
          case 'hero':
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-100"
                style={{
                  backgroundImage: section.imageUrl ? `url(${section.imageUrl})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                  >
                    {section.textContent?.heading}
                  </motion.h1>
                  {section.textContent?.subheading && (
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-xl md:text-2xl mb-8 text-gray-200"
                    >
                      {section.textContent.subheading}
                    </motion.p>
                  )}
                  {section.textContent?.cta && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="flex justify-center"
                    >
                      <ContactFormModal />
                    </motion.div>
                  )}
                </div>
              </motion.section>
            )

          case 'text-image':
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 bg-white"
              >
                <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                      <h2 className="text-4xl font-bold text-primary-900 mb-6">
                        {section.textContent?.heading}
                      </h2>
                      {section.textContent?.subheading && (
                        <h3 className="text-xl text-accent-600 mb-4">
                          {section.textContent.subheading}
                        </h3>
                      )}
                      {section.textContent?.description && (
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          {section.textContent.description}
                        </p>
                      )}
                      {section.textContent?.features && (
                        <ul className="space-y-3">
                          {section.textContent.features.map((feature: string, i: number) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1, duration: 0.6 }}
                              viewport={{ once: true }}
                              className="flex items-center text-gray-700"
                            >
                              <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className={idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                      <motion.img
                        src={section.imageUrl || 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800'}
                        alt={section.textContent?.heading || 'Section image'}
                        className="w-full h-96 object-cover rounded-2xl shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.section>
            )

          case 'services':
            const serviceIcons = {
              'target': Target,
              'refresh-cw': TrendingUp,
              'trending-up': TrendingUp,
              'briefcase': Users,
              'globe': Globe,
              'award': Award,
              'shield': Shield,
            }
            
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 bg-gradient-to-br from-primary-50 to-accent-100"
              >
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-primary-900 mb-6">
                      {section.textContent?.heading}
                    </h2>
                    {section.textContent?.subheading && (
                      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        {section.textContent.subheading}
                      </p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.textContent?.items?.map((item: any, i: number) => {
                      const Icon = serviceIcons[item.icon as keyof typeof serviceIcons] || Target
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -10 }}
                          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-500"
                        >
                          <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-6">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-900 mb-4">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.section>
            )

          case 'stats':
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 bg-gradient-to-r from-primary-900 to-accent-800 text-white"
              >
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold mb-16">
                    {section.textContent?.heading}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section.textContent?.stats?.map((stat: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="text-5xl font-bold text-accent-400 mb-2">
                          {stat.value}
                        </div>
                        <div className="text-xl text-gray-300">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )

          case 'team':
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 bg-white"
              >
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-primary-900 mb-6">
                      {section.textContent?.heading}
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.textContent?.members?.map((member: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center bg-gradient-to-br from-primary-50 to-accent-100 rounded-2xl p-8 shadow-lg"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary-500"
                        />
                        <h3 className="text-2xl font-bold text-primary-900 mb-2">{member.name}</h3>
                        <p className="text-accent-600 font-semibold mb-4">{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )

          case 'cta':
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 bg-gray-50 text-primary-600"
              >
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-5xl font-bold mb-6">
                    {section.textContent?.heading}
                  </h2>
                  {section.textContent?.description && (
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
                      {section.textContent.description}
                    </p>
                  )}
                  <ContactFormModal />
                </div>
              </motion.section>
            )

          default:
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-16 bg-white"
              >
                <div className="container mx-auto px-4">
                  <div className="bg-white/80 rounded-xl shadow-lg p-8 border-l-4 border-primary-500">
                    {section.textContent?.heading && (
                      <h2 className="text-3xl font-bold text-primary-900 mb-4">
                        {section.textContent.heading}
                      </h2>
                    )}
                    {section.textContent?.subheading && (
                      <h3 className="text-xl text-accent-600 mb-4">
                        {section.textContent.subheading}
                      </h3>
                    )}
                    {section.textContent?.description && (
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {section.textContent.description}
                      </p>
                    )}
                    {section.textContent?.body && (
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {section.textContent.body}
                      </p>
                    )}
                    {section.textContent?.features && (
                      <ul className="space-y-2">
                        {section.textContent.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.textContent?.list && (
                      <ul className="list-disc ml-6 text-gray-600">
                        {section.textContent.list.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.section>
            )
        }
      })}
    </div>
  )
}
