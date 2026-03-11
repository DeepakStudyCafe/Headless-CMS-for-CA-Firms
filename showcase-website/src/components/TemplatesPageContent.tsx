'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Check, ChevronLeft, ChevronRight, Settings, Mouse, ChevronDown, Edit, RefreshCw, Zap } from 'lucide-react'
import Link from 'next/link'

export default function TemplatesPageContent() {
    const [currentPage, setCurrentPage] = useState(1)
    const [activeFilter, setActiveFilter] = useState('all')
    const templatesPerPage = 6

    const templates = [
        {
            id: 1,
            name: 'Sharma & Associates',
            slug: 'sharma-associates',
            theme: 'Professional Blue',
            category: 'Professional',
            color: '#1e40af',
            bgGradient: 'from-blue-900 to-blue-700',
            description: 'Classic professional design perfect for established firms',
            url: 'https://sadgurushakti.org',
            image: '/sagartask.png',
            pages: 16,
        },

         {
            id: 10,
            name: 'Template-4',
            slug: 'Template-4',
            theme: 'Emerald Green',
            category: 'Professional',
            color: '#059669',
            bgGradient: 'from-emerald-900 to-emerald-700',
            description: 'Template-4 preview',
            url: 'http://localhost:8083/',
            image: '/Template-4.png',
            pages: 16,
        },
        {
            id: 2,
            name: 'Verma Accounting Services',
            slug: 'verma-accounting',
            theme: 'Modern Minimal',
            category: 'Modern',
            color: '#000000',
            bgGradient: 'from-gray-900 to-gray-700',
            description: 'Clean, modern layout for contemporary practices',
            url: 'https://automatepractice.com',
            image: '/automatepractice.png',
            pages: 14,
        },
        {
            id: 3,
            name: 'Gupta Tax Advisors',
            slug: 'gupta-tax-advisors',
            theme: 'Creative Purple',
            category: 'Creative',
            color: '#8b5cf6',
            bgGradient: 'from-purple-900 to-purple-700',
            description: 'Bold and creative design for innovative firms',
            url: 'https://cadeepakgupta.com',
            image: '/capracticeautomation.png',
            pages: 11,
        },
        {
            id: 8,
            name: 'Template-2',
            slug: 'Template-2',
            theme: 'Modern Minimal',
            category: 'Modern',
            color: '#0f172a',
            bgGradient: 'from-gray-900 to-gray-700',
            description: 'Template-2 preview',
            url: 'http://localhost:8081/',
            image: '/Template-2.png',
            pages: 10,
        },
        {
            id: 4,
            name: 'Kapoor Financial Services',
            slug: 'kapoor-financial',
            theme: 'Emerald Green',
            category: 'Professional',
            color: '#059669',
            bgGradient: 'from-emerald-900 to-emerald-700',
            description: 'Fresh emerald theme conveying growth and trust',
            url: 'https://capracticeautomation.com',
            image: '/practovia.png',
            pages: 16,
        },
        {
            id: 5,
            name: 'Singh & Co. Advisors',
            slug: 'singh-co-advisors',
            theme: 'Vibrant Orange',
            category: 'Modern',
            color: '#ea580c',
            bgGradient: 'from-orange-900 to-orange-700',
            description: 'Energetic design that stands out from the crowd',
            url: 'https://practovia.com',
            image: '/digitechai.png',
            pages: 16,
        },
        {
            id: 6,
            name: 'Patel Consulting',
            slug: 'patel-consulting',
            theme: 'Teal Blue',
            category: 'Professional',
            color: '#0d9488',
            bgGradient: 'from-teal-900 to-teal-700',
            description: 'Sophisticated teal theme for consulting firms',
            url: 'https://digitechai.in',
            image: '/cadeepakgupta.png',
            pages: 16,
        },
        // New templates (added per request) - do not modify the existing entries above
        {
            id: 7,
            name: 'Template-1',
            slug: 'Template-1',
            theme: 'Professional Blue',
            category: 'Professional',
            color: '#1e40af',
            bgGradient: 'from-blue-900 to-blue-700',
            description: 'Template-1 preview',
            url: 'http://localhost:8080/',
            image: '/Template-1.png',
            pages: 12,
        },
        
        {
            id: 9,
            name: 'Template-3',
            slug: 'Template-3',
            theme: 'Creative Purple',
            category: 'Creative',
            color: '#8b5cf6',
            bgGradient: 'from-purple-900 to-purple-700',
            description: 'Template-3 preview',
            url: 'http://localhost:8082/',
            image: '/Template-3.png',
            pages: 14,
        },
       
    ]

    const filteredTemplates = activeFilter === 'all'
        ? templates
        : templates.filter(t => t.category.toLowerCase() === activeFilter)

    const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage)
    const startIndex = (currentPage - 1) * templatesPerPage
    const endIndex = startIndex + templatesPerPage
    const currentTemplates = filteredTemplates.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        setCurrentPage(1)
    }

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="  min-h-[500px]" style={{ ['--hero-image' as any]: "url('/about.jpeg')", backgroundImage: "url('/about.jpeg')" }}>
                <div className="container-custom py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto mb-12 pt-24"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Premium Website Templates</h1>
                        <p className="text-xl text-white/80 leading-relaxed">Each template includes admin panel, content management system, and powerful features for CA firms</p>
                    </motion.div>
                </div>
            </section>

            <div className="container-custom py-8">
                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-12"
                >
                    <div className="inline-flex bg-white rounded-lg shadow-lg p-1">
                        {['all', 'professional', 'modern', 'creative'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => handleFilterChange(filter)}
                                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-primary-600 text-white shadow-md'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {filter === 'all' ? 'All Templates' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Templates Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {currentTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card overflow-hidden group"
                        >
                            {/* Template Image Preview (hover to scroll) */}
                            <div className="relative h-96 overflow-hidden">
                                <div className="relative h-96 overflow-hidden group">
                                    <HoverScrollImage src={template.image} alt={template.theme} wide />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-xl px-4 pt-3" style={{ backdropFilter: 'blur(2px)' }}>
                                            <Mouse className="w-8 h-8 text-white opacity-80" />
                                            <ChevronDown className="w-7 h-7 text-white opacity-80 animate-bounce mt-1" style={{ animationDuration: '1.2s' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Template Info */}
                            <div className="p-6">

                                {/* description removed per request */}

                                <div className="flex gap-24 justify-center">

                                    <Link
                                        href="/payment"
                                        className="inline-flex items-center justify-center gap-1 px-2 py-1 text-xs bg-white hover:bg-gray-50 text-primary-600 font-semibold rounded border border-primary-600 transition-all duration-300"
                                    >
                                        Choose
                                    </Link>
                                    <a
                                        href={template.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1 px-2 py-1 text-xs bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded transition-all duration-300 group"
                                    >
                                        View Demo
                                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center items-center gap-2"
                    >
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg bg-white border-2 border-gray-200 hover:border-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${currentPage === index + 1
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-600'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg bg-white border-2 border-gray-200 hover:border-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 text-center bg-gradient-to-br from-primary-600 to-blue-700 rounded-2xl p-12 text-white"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Need Help Choosing?
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                        Schedule a free consultation to find the perfect template for your CA firm
                    </p>
                    <Link
                        href="/schedule-call"
                        className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Schedule Free Consultation
                    </Link>
                </motion.div>

                {/* Admin Features Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 bg-white rounded-2xl shadow-xl p-8"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Settings className="w-4 h-4" />
                            Admin Panel Features
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Every Template Includes Full Admin Control
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            As a site owner, you get complete access to manage your website through an intuitive admin dashboard
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Content Management',
                                description: 'Edit pages, services, team members, and blog posts directly from your dashboard',
                                icon: Edit,
                            },
                            {
                                title: 'Request Changes',
                                description: 'Submit content update requests and track their status in real-time',
                                icon: RefreshCw,
                            },
                            {
                                title: 'Easy Updates',
                                description: 'No technical knowledge required - update your website with just a few clicks',
                                icon: Zap,
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center">
                                <div className="mb-3">
                                    {typeof feature.icon === 'string' ? (
                                        <div className="text-4xl">{feature.icon}</div>
                                    ) : (
                                        // lucide-react icon component
                                        (() => {
                                            const Icon = feature.icon as any
                                            return <Icon className="w-8 h-8 mx-auto text-primary-600" />
                                        })()
                                    )}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

function HoverScrollImage({ src, alt, wide }: { src: string; alt?: string; wide?: boolean }) {
    return (
        <div
            className="relative h-96 w-full overflow-y-auto hide-scrollbar cursor-pointer"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
            <img
                src={src}
                alt={alt}
                style={{ height: '140%', width: wide ? '70%' : 'auto', maxWidth: wide ? '70%' : '100%', display: 'block', margin: '0 auto' }}
            />
        </div>
    );
}
