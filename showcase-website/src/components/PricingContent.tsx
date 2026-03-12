'use client'

import { motion } from 'framer-motion'
import { Check, Phone, IndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function PricingContent() {
  const plans = [
    {
      name: 'Special Offer',
      originalPrice: '40,000',
      price: '20,000',
      duration: '/ one Year',
      description: 'One simple plan for CA firms — everything you need to go live',
      features: [
        'Choice of premium templates',
        'Custom domain setup',
        'hosting included',
        'SSL certificate',
        'Mobile responsive design',
        'Contact form integration',
      ],
      cta: 'Get Started',
      popular: true,
      color: 'primary',
    },
  ]

  const addons = [
    { name: 'Additional Pages', price: '₹2,000 per page' },
    { name: 'Custom Logo Design', price: '₹5,000' },
    { name: 'Extra Hosting Year', price: '₹3,000/year' },
    { name: 'E-commerce Integration', price: '₹15,000' },
    { name: 'Content Writing', price: '₹1,500 per page' },
    { name: 'Email Marketing Setup', price: '₹8,000' },
  ]

  return (
    <div className="pt-16 pb-10 min-h-screen" style={{ ['--hero-image' as any]: "url(/about.jpeg)", backgroundImage: 'url(/about.jpeg)'}}>
      {/* Hero Section */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-white/80 leading-relaxed">Choose the perfect plan for your CA firm. No hidden fees, no surprises. All prices are one-time payments.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card p-6 relative rounded-2xl border border-gray-200 bg-white shadow-md ${
                  plan.popular ? 'ring-2 ring-primary-500 shadow-xl scale-105 z-10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">Most Popular</span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-600 text-xs mb-2">{plan.description}</p>
                  <div className="flex items-end justify-center gap-2 mb-1">
                    <span className="flex items-center gap-1 text-gray-400 text-base line-through">
                      <IndianRupee className="w-4 h-4" />
                      {plan.originalPrice}
                    </span>
                    <span className="flex items-center gap-1 text-primary-600 text-3xl font-bold">
                      <IndianRupee className="w-6 h-6" />
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">{plan.duration}</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-xs text-gray-700 shadow-sm"
                      >
                        <Check className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/payment"
                  className={`block w-full text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Are there any monthly fees?',
                a: 'No! All our plans are one-time payments. Hosting is included for the duration specified in your plan.',
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Yes, you can upgrade to a higher plan anytime. We\'ll adjust the pricing based on what you\'ve already paid.',
              },
              {
                q: 'What happens after the hosting period expires?',
                a: 'You can renew hosting at ₹3,000/year. We\'ll notify you well in advance before expiration.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.',
              },
              {
                q: 'Can I switch templates after purchase?',
                a: 'Yes, you can switch to a different template within 30 days of purchase at no additional cost.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free consultation to discuss your needs and get personalized recommendations
            </p>
            <Link
              href="/schedule-call"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Schedule a Free Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
