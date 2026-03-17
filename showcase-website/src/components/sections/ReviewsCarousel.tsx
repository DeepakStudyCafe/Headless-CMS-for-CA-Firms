'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star,  CheckCircle } from 'lucide-react'

const reviewsData = [
  {
    id: 1,
    name: 'Satyarth Kapoor',
    date: '2 weeks ago',
    rating: 5,
    text: 'Fantastic templates! My CA firm website went live in record time. The SEO benefits are already showing.',
  },
  {
    id: 2,
    name: 'Manoj Tiwari',
    date: '1 month ago',
    rating: 5,
    text: 'Value for money is perfect. A custom website would easily cost 50k INR+, but here it is affordable and better!',
  },
  {
    id: 3,
    name: 'Rajat Bhatia',
    date: '3 weeks ago',
    rating: 4,
    text: 'Very professional layouts for Chartered Accountants. Love the built-in integrations and how easy it is to update pages.',
  },
  {
    id: 4,
    name: 'Sunita Menon',
    date: '2 months ago',
    rating: 5,
    text: 'Amazing support service! The team answered all my doubts regarding domain and hosting. My clients love the new site.',
  },
  {
    id: 5,
    name: 'Deepak Chawla',
    date: '1 week ago',
    rating: 5,
    text: 'Highly optimized templates. The site load speed is excellent, and it looks brilliant on mobile devices too.',
  }
]

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length)
  }, [])

  useEffect(() => {
    // Offset standard timer slightly from testimonials
    const timer = setInterval(() => {
      handleNext()
    }, 3500)
    return () => clearInterval(timer)
  }, [handleNext])

  const getVisibleReviews = () => {
    return [
      reviewsData[currentIndex],
      reviewsData[(currentIndex + 1) % reviewsData.length],
      reviewsData[(currentIndex + 2) % reviewsData.length],
    ]
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold mb-4">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>Trusted by 500+ Indian Professionals</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Recent Client Reviews</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile view (1 card) */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    {reviewsData[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{reviewsData[currentIndex].name}</h5>
                    <p className="text-xs text-gray-500">{reviewsData[currentIndex].date}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm">"{reviewsData[currentIndex].text}"</p>
            </motion.div>
          </div>

          {/* Desktop/Tablet view (3 cards) */}
          <div className="hidden md:flex gap-6 items-stretch justify-center px-4">
            <AnimatePresence mode="popLayout">
              {getVisibleReviews().map((review, idx) => (
                <motion.div
                  key={`${review.id}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 w-1/3 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{review.name}</h5>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm flex-1 leading-relaxed">"{review.text}"</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  )
}
