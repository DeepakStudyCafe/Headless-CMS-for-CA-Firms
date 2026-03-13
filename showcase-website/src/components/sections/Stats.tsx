'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Award, TrendingUp } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Globe,
      number: '100+',
      label: 'Websites Deployed',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Award,
      number: '10+',
      label: 'Premium Templates',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: TrendingUp,
      number: '99%',
      label: 'Client Satisfaction',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
