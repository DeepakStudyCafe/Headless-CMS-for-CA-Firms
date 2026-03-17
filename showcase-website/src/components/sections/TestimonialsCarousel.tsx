'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'CA Rajesh Sharma',
    firm: 'Sharma & Associates, New Delhi',
    image: 'RS',
    content: 'AutomationCafe has completely transformed how our firm manages its online presence. The premium CA templates are perfectly tailored for Indian practices. Setting it up was seamless.',
  },
  {
    id: 2,
    name: 'CA Neha Gupta',
    firm: 'Gupta Tax Advisors, Mumbai',
    image: 'NG',
    content: 'We used to struggle with an outdated website. With this platform, we got a modern, responsive website in just 3 days! Our clients love the new client portal feature.',
  },
  {
    id: 3,
    name: 'CA Ankit Verma',
    firm: 'Verma Accounting Services, Bengaluru',
    image: 'AV',
    content: 'The custom domain setup and built-in contact forms have significantly increased our leads. The templates look incredibly professional and trustworthy.',
  },
  {
    id: 4,
    name: 'CA Priya Patel',
    firm: 'Patel Consulting, Ahmedabad',
    image: 'PP',
    content: 'Excellent support from the team. They helped us choose the best template and customize it with our branding. Highly recommend for any growing CA firm in India.',
  },
  {
    id: 5,
    name: 'CA Vikram Singh',
    firm: 'Singh & Co. Advisors, Pune',
    image: 'VS',
    content: 'A cost-effective and highly professional solution. The mobile-responsive design means our clients can easily reach out to us on their phones anytime.',
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 4000)
    return () => clearInterval(timer)
  }, [handleNext])

  // Get 3 consecutive items for desktop view
  const getVisibleCards = () => {
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length],
    ]
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Chartered Accountants Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from top CA practices across India who have transformed their digital presence with our platform.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile view (1 card) */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <Quote className="w-10 h-10 text-primary-200 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonials[currentIndex].content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].firm}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop/Tablet view (3 cards) */}
          <div className="hidden md:flex gap-6 items-stretch justify-center">
            <AnimatePresence mode="popLayout">
              {getVisibleCards().map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 w-1/3 flex flex-col justify-between"
                >
                  <div>
                    <Quote className="w-10 h-10 text-primary-200 mb-4" />
                    <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  </div>
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg">
                        {testimonial.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 truncate">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 truncate">{testimonial.firm}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
