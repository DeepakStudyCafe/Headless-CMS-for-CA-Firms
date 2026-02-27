'use client'
import React from 'react'
import { getBackendImageUrl } from '../utils/imageUrl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ContactFormModal } from './ContactFormModal'
import { ArrowRight, CheckCircle, Star, Users, Target, TrendingUp, Award, Shield, Globe } from 'lucide-react'
import { UpdatesTicker, TickerPost } from './UpdatesTicker'

export function PageContent({ page, tickerPosts = [] }: { page: any; tickerPosts?: TickerPost[] }) {
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
    <div className="min-h-screen bg-white">
      {[...( page.sections?.filter((s: any) => s.type === 'hero') ?? []), ...( page.sections?.filter((s: any) => s.type === 'features' || s.type === 'services') ?? []), ...( page.sections?.filter((s: any) => s.type !== 'hero' && s.type !== 'features' && s.type !== 'services') ?? [])].map((section: any, idx: number) => {
        switch (section.type) {
          case 'hero':
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative min-h-[72vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-100"
                style={{
                  backgroundImage: section.imageUrl ? `url(${getBackendImageUrl(section.imageUrl)})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
                  >
                    {section.textContent?.heading}
                  </motion.h1>
                  {section.textContent?.subheading && (
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-lg md:text-xl mb-6 text-gray-100 max-w-3xl mx-auto"
                    >
                      {section.textContent.subheading}
                    </motion.p>
                  )}
                  {section.textContent?.cta && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="flex justify-center mt-3"
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
                className="py-16 bg-gray-50"
              >
                <div className="max-w-6xl mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className={idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                      <h2 className="text-3xl md:text-4xl font-semibold text-primary-900 mb-4">
                        {section.textContent?.heading}
                      </h2>
                      {section.textContent?.subheading && (
                        <h3 className="text-lg text-accent-600 mb-3">
                          {section.textContent.subheading}
                        </h3>
                      )}
                      {section.textContent?.description && (
                        <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-2xl">
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
                        src={getBackendImageUrl(section.imageUrl) || 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800'}
                        alt={section.textContent?.heading || 'Section image'}
                        className="w-full h-80 md:h-96 object-cover rounded-lg ring-1 ring-gray-100"
                        whileHover={{ scale: 1.03 }}
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
                className="py-16 bg-white"
              >
                <div className="max-w-6xl mx-auto px-6">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary-900 mb-4">
                      {section.textContent?.heading}
                    </h2>
                    {section.textContent?.subheading && (
                      <p className="text-base text-gray-600 max-w-3xl mx-auto">
                        {section.textContent.subheading}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className="flex-1 grid md:grid-cols-2 xl:grid-cols-3 gap-6 min-w-0">
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
                          className="bg-white rounded-xl p-6 border border-gray-100 border-l-4 border-primary-500 hover:shadow-lg transition-transform transform hover:-translate-y-2"
                        >
                          <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-semibold text-primary-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                      )
                    })}
                    </div>
                    {tickerPosts.length > 0 && (
                      <aside className="hidden lg:block w-72 flex-shrink-0 self-stretch" aria-label="Latest updates">
                        <UpdatesTicker posts={tickerPosts} />
                      </aside>
                    )}
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
                className="py-16 bg-gray-50 text-primary-900"
              >
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    {section.textContent?.heading}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {section.textContent?.stats?.map((stat: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center bg-white rounded-lg p-6 border border-gray-100"
                      >
                        <div className="text-3xl md:text-4xl font-bold text-primary-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )

          case 'team':
          case 'gallery':
            const teamItems = section.textContent?.members || section.textContent?.items || []
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="py-12 md:py-16 bg-white"
              >
                <div className="max-w-6xl mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-primary-900">
                      {section.textContent?.heading}
                    </h2>
                    {section.textContent?.description && (
                      <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                        {section.textContent.description}
                      </p>
                    )}
                  </motion.div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teamItems.map((item: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-lg overflow-hidden border border-gray-100 transition-shadow hover:shadow-lg"
                      >
                        <div className="relative h-48">
                          {item.image ? (
                            // use plain img to keep API-agnostic
                            <img
                              src={getBackendImageUrl(item.image)}
                              alt={item.name || item.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                              <Users className="w-16 h-16 text-primary-600 opacity-50" />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-medium text-primary-900 mb-1">{item.name || item.title}</h3>
                          {item.role && (
                            <p className="text-xs text-gray-500 mb-2">{item.role}</p>
                          )}
                          {item.description && (
                            <p className="text-xs text-gray-600">{item.description}</p>
                          )}
                        </div>
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
                className="py-16 bg-gradient-to-r from-primary-600 to-accent-500 text-white"
              >
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    {section.textContent?.heading}
                  </h2>
                  {section.textContent?.description && (
                    <p className="text-base mb-6 max-w-2xl mx-auto text-white/90">
                      {section.textContent.description}
                    </p>
                  )}
                  <div className="flex justify-center">
                    <ContactFormModal />
                  </div>
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
                className="py-12 bg-white"
              >
                <div className="max-w-6xl mx-auto px-6">
                  <div className="rounded-lg p-6 border border-gray-100 bg-white">
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
                          <li key={i} className="flex items-start text-gray-700">
                            <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                            <span>{feature}</span>
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
