'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Code, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AboutContent() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower Chartered Accountants with professional, modern websites that help them grow their practice and serve clients better.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the leading provider of website solutions for CA firms across India, setting the standard for professional online presence.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Quality, reliability, and customer satisfaction are at the core of everything we do. We believe in building long-term relationships.',
    },
  ]

  const team = [
    { name: 'Deepak Gupta', role: 'Founder & CEO', emoji: '👨‍💼' },
    { name: 'Priya Sharma', role: 'Lead Designer', emoji: '👩‍💻' },
    { name: 'Rahul Verma', role: 'Tech Lead', emoji: '👨‍💻' },
    { name: 'Anjali Patel', role: 'Customer Success', emoji: '👩‍💼' },
  ]

  const stats = [
    { number: '6', label: 'Premium Templates' },
    { number: '50+', label: 'Happy Clients' },
    { number: '100+', label: 'Websites Launched' },
    { number: 'Admin', label: 'Panel in Every Site' },
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Webtel
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're passionate about helping Chartered Accountants establish a strong online presence. Our mission is to provide professional, affordable, and effective website solutions tailored specifically for CA firms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Webtel was founded in 2021 with a simple yet powerful vision: to help Chartered Accountants establish a professional online presence with full control over their website content through integrated admin panels.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Having worked closely with numerous CA firms, we understood their unique needs and challenges. We realized that CA professionals needed not just beautiful websites, but also the ability to manage and update content themselves without technical knowledge.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This insight led us to create a collection of <span className="font-bold text-gray-900">6 professionally designed templates</span>, each with a built-in admin panel. Site owners can manage pages, services, team members, blog posts, and even submit content change requests - all without touching a single line of code.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to serve over 50 CA firms across India, helping them grow their practice through effective online presence with complete content control. Our commitment to quality, user-friendly admin features, and continuous improvement drives everything we do.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated group of professionals committed to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's work together to create the perfect website for your CA practice
            </p>
            <Link
              href="/schedule-call"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
