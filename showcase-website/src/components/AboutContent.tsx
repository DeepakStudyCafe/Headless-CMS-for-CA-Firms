// Replaced with a cleaned, syntactically-safe version preserving layout and styles.
// Kept card classes and sizes intact; arranged team as requested.

"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, Linkedin } from "lucide-react"
import Link from "next/link"

export default function AboutContent() {
  const values = [
    { icon: Target, title: "Our Mission", description: "To empower Chartered Accountants with professional, modern websites that help them grow their practice and serve clients better." },
    { icon: Eye, title: "Our Vision", description: "To become the leading provider of website solutions for CA firms across India, setting the standard for professional online presence." },
    { icon: Award, title: "Our Values", description: "Quality, reliability, and customer satisfaction are at the core of everything we do. We believe in building long-term relationships." },
  ]

  const team = [
    { name: "Deepak Gupta", role: "Founder & CEO", image: "/Deepak-gupta.jpeg", linkedin: "https://www.linkedin.com/in/ca-deepak-gupta-/" },
    { name: "Raja Mehta", role: "Manager", image: "/Raja.jpeg", linkedin: "" },
    { name: "Deepak Sharma", role: "Software Developer", image: "/Deepak.webp", linkedin: "" },
    { name: "Janvi", role: "Digital Marketing Executive", image: "/janvi.jpeg", linkedin: "" },
    { name: "Mahima Gupta", role: "Sales operations manager", image: "/Mahima.png", linkedin: "" },
    { name: "Deepanshi Rohilla", role: "Digital Marketing Executive", image: "/dipancy.jpeg", linkedin: "" },
    { name: "Kirtika", role: "Digital Marketing Executive", image: "/Kirtika.jpeg", linkedin: "" },
    { name: "Chanchal", role: "Support", image: "/chanchal.jpeg", linkedin: "" },
  ]

  const stats = [
    { number: "10+", label: "Premium Templates" },
    { number: "500+", label: "Happy Clients" },
    { number: "100+", label: "Websites Launched" },
    { number: "Admin", label: "Panel in Every Site" },
  ]

  return (
    <div className="pb-20 min-h-screen" style={{ backgroundImage: "url('/about.jpeg')" }}>
      <section className="py-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Webcafe</h1>
            <p className="text-xl text-white/80 leading-relaxed">We're passionate about helping Chartered Accountants establish a strong online presence. Our mission is to provide professional, affordable, and effective website solutions tailored specifically for CA firms.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <p className="text-gray-600 leading-relaxed mb-6">Webcafe was founded in 2026 with a simple yet powerful vision: to help Chartered Accountants establish a professional online presence with full control over their website content through integrated admin panels.</p>
                <p className="text-gray-600 leading-relaxed mb-6">Having worked closely with numerous CA firms, we understood their unique needs and challenges. We realized that CA professionals needed not just beautiful websites, but also the ability to manage and update content themselves without technical knowledge.</p>
                <p className="text-gray-600 leading-relaxed">This insight led us to create a collection of <span className="font-bold text-gray-900">Professionally designed templates</span>, each with a built-in admin panel.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{s.number}</div>
                <div className="text-white/90">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A dedicated group of professionals committed to your success</p>
          </motion.div>

          <div className="space-y-8">
            {team[0] && (
              <div className="flex justify-center">
                <div className="w-full lg:w-1/4">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="card relative overflow-hidden h-80 flex flex-col justify-end p-0 group w-full">
                    {team[0].image ? (<img src={team[0].image} alt={team[0].name} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" draggable="false" />) : (<div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />)}
                    <div className="relative z-10 bg-black/60 w-full p-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{team[0].name}</h3>
                        <p className="text-gray-200 text-sm">{team[0].role}</p>
                      </div>
                      <a href={(team[0] as any).linkedin || '#'} target="_blank" rel="noopener noreferrer" className="ml-4 text-white/90 hover:text-primary-300 transition-colors" aria-label={`Open ${team[0].name} on LinkedIn`}><Linkedin className="w-5 h-5" /></a>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {team.length > 1 && (
              <div className="flex justify-center">
                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {team.slice(1, 4).map((member, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="card relative overflow-hidden h-80 flex flex-col justify-end p-0 group">
                      {member.image ? (<img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" draggable="false" />) : (<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-400 to-blue-500"><Users className="w-12 h-12 text-white" /></div>)}
                      <div className="relative z-10 bg-black/60 w-full p-4 flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                          <p className="text-gray-200 text-sm">{member.role}</p>
                        </div>
                        <a href={(member as any).linkedin || '#'} target="_blank" rel="noopener noreferrer" className="ml-4 text-white/90 hover:text-primary-300 transition-colors" aria-label={`Open ${member.name} on LinkedIn`}><Linkedin className="w-5 h-5" /></a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {team.length > 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.slice(4).map((member, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="card relative overflow-hidden h-80 flex flex-col justify-end p-0 group">
                    {member.image ? (<img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" draggable="false" />) : (<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-400 to-blue-500"><Users className="w-12 h-12 text-white" /></div>)}
                    <div className="relative z-10 bg-black/60 w-full p-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-gray-200 text-sm">{member.role}</p>
                      </div>
                      <a href={(member as any).linkedin || '#'} target="_blank" rel="noopener noreferrer" className="ml-4 text-white/90 hover:text-primary-300 transition-colors" aria-label={`Open ${member.name} on LinkedIn`}><Linkedin className="w-5 h-5" /></a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">Let's work together to create the perfect website for your CA practice</p>
            <Link href="/schedule-call" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105">Schedule a Free Consultation</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
