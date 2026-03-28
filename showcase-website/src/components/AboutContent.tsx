'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Code, TrendingUp, User, Linkedin } from 'lucide-react'
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
    { name: 'Deepak Gupta', role: 'Founder & CEO', image: '/Deepak-gupta.jpeg', linkedin: 'https://www.linkedin.com/in/ca-deepak-gupta-/' },
    { name: 'Raja Mehta', role: 'Manager', image: '/Raja.jpeg', linkedin: '' },
    { name: 'Deepak Sharma', role: 'Software Developer', image: '/Deepak.webp', linkedin: 'https://www.linkedin.com/in/deepak-sharma-588b33231?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'Sagar Gupta', role: 'Software Developer', image: '/sagar.jpeg', linkedin: '' },
    { name: 'Mahima Gupta', role: 'Sales operations manager', image: '/Mahima.png', linkedin: 'https://www.linkedin.com/in/mahima-gupta-39562b244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Deepanshi Rohilla', role: 'Digital Marketing Executive', image: '/dipancy.jpeg', linkedin: 'https://www.linkedin.com/in/deepanshi-rohilla-206657290?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'Kirtika', role: 'Digital Marketing Executive', image: '/Kirtika.jpeg', linkedin: 'https://www.linkedin.com/in/kirtika-prajapati-61087537b?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    
    { name: 'Chanchal', role: 'Client Relations Specialist', image: '/chanchal.jpeg', linkedin: 'https://www.linkedin.com/in/chanchal-sharma-668190396?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  ]

  const stats = [
    { number: '10+', label: 'Premium Templates' },
    { number: '500+', label: 'Happy Clients' },
    { number: '100+', label: 'Websites Launched' },
    { number: 'Admin', label: 'Panel in Every Site' },
  ]

  return (
    <div
      className="pb-20 min-h-screen"
      style={{
        ['--hero-image' as any]: "url('/about.jpeg')",
        backgroundImage: "url('/about.jpeg')"
      }}
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto pt-24"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Webcafe
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
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
                  Webcafe was founded in 2026 with a simple yet powerful vision: to help Chartered Accountants establish a professional online presence with full control over their website content through integrated admin panels.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Having worked closely with numerous CA firms, we understood their unique needs and challenges. We realized that CA professionals needed not just beautiful websites, but also the ability to manage and update content themselves without technical knowledge.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This insight led us to create a collection of <span className="font-bold text-gray-900">Professionally designed templates</span>, each with a built-in admin panel. Site owners can manage pages, services, team members, blog posts, and even submit content change requests - all without touching a single line of code.
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
                className="card relative overflow-hidden h-80 flex flex-col justify-end p-0 group"
              >
                {member.image ? (
                  <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" draggable="false" />
                ) : (
                  (() => {
                    const Icon = (member as any).icon || Users
                    return <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-400 to-blue-500"><Icon className="w-12 h-12 text-white" /></div>
                  })()
                )}
                <div className="relative z-10 bg-black/60 w-full p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gray-200 text-sm">{member.role}</p>
                  </div>
                  <a
                    href={ (member as any).linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-white/90 hover:text-primary-300 transition-colors"
                    aria-label={`Open ${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
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
