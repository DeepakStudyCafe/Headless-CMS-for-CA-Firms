'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <>
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-bg pt-16">
                {/* Local video background (place your video file in public/hero-bg.mp4) */}
                <video className="absolute inset-0 z-0 w-full h-full object-cover" autoPlay muted loop playsInline poster="/sagartask-in.png">
                    <source src="/showcase-banner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* subtle overlay above video for readability */}
                <div className="absolute inset-0 z-10 bg-black/30" />
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-200"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-400"></div>
                </div>

                <div className="container-custom relative z-20 py-12">
                    <div className="text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                                <Sparkles className="w-4 h-4" />
                                Premium Website Templates for CA Firms
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-5xl font-bold text-blue-300 mb-6 leading-tight"
                        >
                            Transform Your CA Practice with
                            <span className="gradient-text"> Professional Websites</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-l md:text-1xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
                        >
                            Launch your professional website with built-in admin panel to manage content easily. Choose from our <span className="font-bold text-blue-600">premium templates</span> designed specifically for CA firms with complete control over your website.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Link href="/templates" className="btn-primary flex items-center gap-2 group">
                                View Templates
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/schedule-call" className="btn-secondary flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Schedule a Call
                            </Link>
                        </motion.div>

                        {/* stats moved below hero */}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Stats banner placed below the hero */}
            <section className="relative py-8 -mt-24 md:-mt-24 lg:-mt-24 ">
                <div className="container-custom relative z-20 ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative z-30 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-md"
                    >
                        {[
                            { number: '10+', label: 'Premium Templates' },
                            { number: 'Admin', label: 'Panel Included' },
                            { number: '24/7', label: 'Support Available' },
                            { number: '50+', label: 'Happy Clients' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}
