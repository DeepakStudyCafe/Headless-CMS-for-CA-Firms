'use client'

import { motion } from 'framer-motion'
import { Check, Phone, IndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function PricingContent() {
  const plans = [
    {
      name: 'Special Offer',
      originalPrice: '40,000',
      price: '20,000 + 18%',
      duration: '/ one Year',
      description: 'One simple plan for CA firms — everything you need to go live',
      features: [
        'Choice of premium templates',
        'Custom domain setup',
        'hosting included',
        'Cross-browser compatibility',
        'Mobile responsive design',
        'Contact form integration',
        'Modern UI/UX design',
        'SSL certificate',
        'Basic on-page SEO setup',
        'Social media integration',
        'Clean & professional layout',

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
    <div className="pt-16 pb-10 min-h-screen" style={{ ['--hero-image' as any]: "url(/about.jpeg)", backgroundImage: 'url(/about.jpeg)' }}>
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
      <section className="py-10 bg-white min-h-[52vh] flex items-center justify-center">
        <div className="container-custom w-full flex items-center justify-center">
          <div className="flex justify-center items-center w-full">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white shadow-lg rounded-2xl border border-gray-200 px-6 py-4 flex flex-col md:flex-row md:items-stretch md:gap-6 min-h-[240px] max-w-5xl w-full mx-auto ${plan.popular ? 'ring-2 ring-primary-400 scale-105 z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow border-2 border-white">Most Popular</span>
                  </div>
                )}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-4 md:mb-0 md:border-r md:border-gray-100 md:pr-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">Best Value</span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Limited Offer</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-wide">{plan.name}</h3>
                  <p className="text-gray-600 text-xs mb-3 text-center md:text-left">{plan.description}</p>
                  <div className="mb-2 w-full">
                    <div className="flex items-center gap-3 md:gap-2 flex-wrap">
                      <span className="text-base text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                      <div className="flex items-center gap-2 text-primary-700 text-2xl font-extrabold">
                        <IndianRupee className="w-6 h-6" />
                        <span>20,000</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded">+ 18% GST</span>
                      <span className="text-xs font-medium text-gray-500">{plan.duration}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2">Setup in 5-7 business days. Support included.</p>
                  <Link
                    href="/payment"
                    className={`mt-4 inline-flex items-center justify-center w-full md:w-auto text-center py-2 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-sm ${plan.popular ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">What is included</h4>
                    <span className="text-[11px] text-gray-500">All essentials</span>
                  </div>
                  <div className="w-full h-px bg-gray-100 mb-3" />
                  <div className="flex flex-wrap md:justify-start justify-center gap-1">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-2 py-1 rounded-full text-xs text-gray-700 shadow-sm mb-1"
                      >
                        <Check className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
            {([
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
                a: 'You can renew hosting after your period ends. We\'ll notify you well in advance before expiration.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.',
              },
              {
                q: 'Can I switch templates after purchase?',
                a: 'Yes, you can switch to a different template within 30 days of purchase at no additional cost.',
              },
            ]).map((faq, index) => (
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
