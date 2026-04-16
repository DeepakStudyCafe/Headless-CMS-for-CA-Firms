'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Phone, IndianRupee, X } from 'lucide-react'
import Link from 'next/link'

export default function PricingContent() {
  const features = [
    'Free Domain Name (.com,.in,.co.in)',
    'Hosting Space',
    'SEO Ready Website',
    'Responsive Mobile-Friendly Layout',
    'Enquiry Form',
    'Social Media Integration',
    'Due Date Reminder',
    'Updates and Notifications',
    'Latest News (GST, Income tax)',
    'Visitor Counter',
    'Google Map',
    'QR Code Scanner',
    'Live Chat Integration',
    'WhatsApp Chat Integration',
    'Enquiry Form Popup',
    'Client Reviews and Testimonials',
    'Image Gallery',
    'Optimized Code for Speed Fast Loading',
  ]

  const standardCells: (boolean | string)[] = [
    true,
    '1GB',
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
  ]

  const premiumCells: (boolean | string)[] = [
    true,
    
    '2GB',
    ...new Array(features.length - 3).fill(true),
  ]

  return (
    <div className="pt-16 pb-10 min-h-screen" style={{ backgroundImage: 'url(/about.jpeg)' }}>
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

      <section className="py-10 bg-white">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-700">Best Prices for a CA Firm Website Development Company</h2>
            <p className="text-sm text-gray-600 mt-3">Transparent one-time pricing — choose the plan that fits your firm.</p>
          </motion.div>

          <div className="w-full">
            <div className="w-full rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              {/* Header row */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 p-4 md:p-6 items-center">
                <div className="text-sm md:text-base font-semibold">Feature</div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">STANDARD</div>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <IndianRupee className="w-4 h-4 text-primary-700" />
                    <div className="text-lg font-extrabold">15,000.00</div>
                  </div>
                  <div className="text-xs text-gray-500">One-time</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">PREMIUM</div>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <IndianRupee className="w-4 h-4 text-blue-700" />
                    <div className="text-lg font-extrabold">20,000.00</div>
                  </div>
                  <div className="text-xs text-gray-500">One-time + priority support</div>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-100">
                {features.map((label, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-3 items-center px-4 md:px-6 py-3">
                    <div className="text-sm md:text-base text-gray-700">{label}</div>
                    <div className="text-center text-sm md:text-base">
                      {typeof standardCells[idx] === 'string' ? (
                        <span className="font-semibold">{standardCells[idx]}</span>
                      ) : standardCells[idx] ? (
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 mx-auto" />
                      )}
                    </div>
                    <div className="text-center text-sm md:text-base">
                      {typeof premiumCells[idx] === 'string' ? (
                        <span className="font-semibold">{premiumCells[idx]}</span>
                      ) : premiumCells[idx] ? (
                        <Check className="w-4 h-4 text-blue-700 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 mx-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 bg-white">
                <div />
                <div className="text-center">
                  <Link href="/payment" className="inline-block w-full md:w-40 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md font-semibold shadow">Buy Now</Link>
                </div>
                <div className="text-center">
                  <Link href="/payment" className="inline-block w-full md:w-40 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold shadow">Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {([
              { q: 'Are there any monthly fees?', a: 'No! All our plans are one-time payments. Hosting is included for the duration specified in your plan.' },
              { q: 'Can I upgrade my plan later?', a: "Yes, you can upgrade to a higher plan anytime. We'll adjust the pricing based on what you've already paid." },
              { q: 'What happens after the hosting period expires?', a: "You can renew hosting after your period ends. We'll notify you well in advance before expiration." },
              { q: 'Do you offer refunds?', a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service." },
              { q: 'Can I switch templates after purchase?', a: 'Yes, you can switch to a different template within 30 days of purchase at no additional cost.' },
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

      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8">Schedule a free consultation to discuss your needs and get personalized recommendations</p>
            <Link href="/schedule-call" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5" />
              Schedule a Free Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
