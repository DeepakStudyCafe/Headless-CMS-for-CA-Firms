'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Lock, CheckCircle, IndianRupee } from 'lucide-react'

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    template: '',
    plan: 'basic',
    amount: '20000',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const templates = [
    'Sharma & Associates',
    'Verma Accounting Services',
    'Gupta Tax Advisors',
    'Kapoor Financial Services',
    'Singh & Co. Advisors',
    'Patel Consulting',
  ]

  const plans = [
    { id: 'basic', name: 'Basic Plan', price: '20,000', features: ['Website Setup', '1 Year Hosting', 'Email Support'] },
    { id: 'standard', name: 'Standard Plan', price: '35,000', features: ['Website Setup', '2 Years Hosting', 'Priority Support', 'SEO Optimization'] },
    { id: 'premium', name: 'Premium Plan', price: '50,000', features: ['Website Setup', '3 Years Hosting', '24/7 Support', 'SEO Optimization', 'Custom Features'] },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'plan' ? { amount: plans.find(p => p.id === value)?.price.replace(',', '') || '20000' } : {})
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="pt-24 pb-20 gradient-bg min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container-custom max-w-2xl"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Request Submitted!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your interest! Our team will contact you shortly with payment details and next steps.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-3">What's Next?</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>You'll receive a confirmation email within 1 hour</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Our team will contact you to discuss your requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Once payment is confirmed, we'll begin your website setup</span>
                </li>
              </ul>
            </div>
            <a
              href="/"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 gradient-bg min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Your Payment
          </h1>
          <p className="text-xl text-gray-600">
            Choose your plan and get started with your professional website today
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
                  <p className="text-sm text-gray-600">Fill in your information below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company/Firm Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your CA Firm Name"
                  />
                </div>

                {/* Template Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Template *
                  </label>
                  <select
                    name="template"
                    value={formData.template}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Choose a template</option>
                    {templates.map((template) => (
                      <option key={template} value={template}>
                        {template}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Plan Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Plan *
                  </label>
                  <div className="space-y-3">
                    {plans.map((plan) => (
                      <label
                        key={plan.id}
                        className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.plan === plan.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="plan"
                          value={plan.id}
                          checked={formData.plan === plan.id}
                          onChange={handleChange}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-gray-900">{plan.name}</div>
                            <div className="flex items-center gap-1 text-primary-600 font-bold text-lg">
                              <IndianRupee className="w-5 h-5" />
                              {plan.price}
                            </div>
                          </div>
                          <ul className="space-y-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Proceed to Payment
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Selected Plan:</span>
                  <span className="font-semibold text-gray-900">
                    {plans.find(p => p.id === formData.plan)?.name}
                  </span>
                </div>
                {formData.template && (
                  <div className="flex justify-between text-gray-600">
                    <span>Template:</span>
                    <span className="font-semibold text-gray-900 text-right text-sm">
                      {formData.template}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Amount:</span>
                  <div className="flex items-center gap-1 text-2xl font-bold text-primary-600">
                    <IndianRupee className="w-6 h-6" />
                    {formData.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Secure Payment:</span> Your information is protected with 256-bit SSL encryption.
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Instant website setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
