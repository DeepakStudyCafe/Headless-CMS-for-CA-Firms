'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'CA, Sharma & Associates',
      image: '👨‍💼',
      rating: 5,
      text: 'Outstanding service! The website has helped us attract more clients and establish a professional online presence. Highly recommended for CA firms.',
    },
    {
      name: 'Priya Verma',
      role: 'CA, Verma Accounting',
      image: '👩‍💼',
      rating: 5,
      text: 'The template was perfect for our needs. Easy to customize and the support team was incredibly helpful throughout the process.',
    },
    {
      name: 'Amit Gupta',
      role: 'CA, Gupta Tax Advisors',
      image: '👨‍💼',
      rating: 5,
      text: 'Modern, professional, and exactly what we needed. Our clients love the new website and it has significantly improved our online visibility.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subheading"
          >
            Don't just take our word for it - hear from CA firms who transformed their online presence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-200" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
