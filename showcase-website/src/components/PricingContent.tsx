'use client'

import { motion } from 'framer-motion'
import { Check, Phone, IndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function PricingContent() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '20,000',
      duration: '/ one-time',
      description: 'Perfect for solo practitioners and small firms getting started online',
      features: [
        'Choice of 6 premium templates',
        'Custom domain setup',
        '1 year hosting included',
        'SSL certificate',
        'Mobile responsive design',
        'Contact form integration',
        'Email support',
        'Basic SEO setup',
        '5 pages included',
        'Social media integration',
      ],
      cta: 'Get Started',
      popular: false,
      color: 'primary',
    },
    {
      name: 'Standard Plan',
      price: '35,000',
      duration: '/ one-time',
      description: 'Ideal for growing firms looking for more features and support',
      features: [
        'Everything in Basic, plus:',
        '2 years hosting included',
        'Priority email support',
        'Advanced SEO optimization',
        '10 pages included',
        'Blog setup included',
        'Google Analytics integration',
        'Monthly performance reports',
        'Custom forms (up to 3)',
        'Live chat integration',
        '2 rounds of revisions',
      ],
      cta: 'Choose Standard',
      popular: true,
      color: 'primary',
    },
    {
      name: 'Premium Plan',
      price: '50,000',
      duration: '/ one-time',
      description: 'Complete solution for established firms wanting the best',
      features: [
        'Everything in Standard, plus:',
        '3 years hosting included',
        '24/7 priority support',
        'Premium SEO package',
        'Unlimited pages',
        'Custom features development',
        'CRM integration',
        'Appointment booking system',
        'Client portal',
        'Advanced analytics',
        'Unlimited revisions',
        'Dedicated account manager',
      ],
      cta: 'Go Premium',
      popular: false,
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
    <div className="pt-24 pb-20  min-h-screen" style={{ ['--hero-image' as any]: "url(/about.jpeg)", backgroundImage: 'url(/about.jpeg)'}}>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-white/80 leading-relaxed">Choose the perfect plan for your CA firm. No hidden fees, no surprises. All prices are one-time payments.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card p-8 relative ${
                  plan.popular ? 'ring-4 ring-primary-600 shadow-2xl scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center gap-1">
                    <IndianRupee className="w-8 h-8 text-primary-600" />
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{plan.duration}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/payment"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
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

      {/* Add-ons Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your website with these additional services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addons.map((addon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="font-semibold text-gray-900">{addon.name}</span>
                    <span className="text-primary-600 font-bold">{addon.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
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
