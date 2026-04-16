import Image from 'next/image'
import Link from 'next/link'
import ClientsGrid from '@/components/ClientsGrid'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Rocket, Settings, TrendingUp } from 'lucide-react'
import { getSeoMetadata } from '@/lib/seoHelper';

export async function generateMetadata(): Promise<Metadata> {
    const meta = await getSeoMetadata('clients');
    return {
        title: meta.title,
        description: meta.description,
    };
}

export default function OurClientPage() {
    const clients = [
        // { name: 'Monika S', url: 'https://monikas.in/', img: '/abhishekrajaram.png', description: 'Specialized in providing comprehensive financial solutions to businesses of all sizes.' },
        { name: 'Abhishek Raja Ram & Co', url: 'https://abhishekrajaram.in/', img: '/abhishekrajaram.png', description: 'Specialized in providing comprehensive financial solutions to businesses of all sizes.' },
        { name: 'PD Gupta & CO', url: 'https://pdgupta.com/', img: '/client-1.png', description: 'Full-service CA firm offering taxation, audit and advisory with modern client portal.' },
        { name: 'Arvind Gupta & Associates', url: 'https://caasgupta.in/', img: '/client-2.png', description: 'Specialized in SME tax planning and accounting; mobile-friendly site with contact forms.' },
        { name: 'Vineet Taral & Associates', url: 'https://vineettaral.in/', img: '/vineettaral.png', description: 'Supporting small businesses with smart tax strategies and financial solutions; modern website with simple inquiry forms.' },
        
        { name: 'Monika S & Associates', url: 'https://monikasassociates.in/', img: '/monikaS.png', description: 'Helping small businesses with tax strategy and financial services; modern website with convenient inquiry forms.' },
        { name: 'I S K & Co', url: 'https://iskco.in/', img: '/isko-and-co.png', description: 'Focused on small business tax strategy and financial management; responsive website with easy inquiry forms.' },
        { name: 'CA Mohan C Chartered Accountant', url: 'https://camohanc.in/', img: '/camohan.png', description: 'Supporting small businesses with smart tax strategies and financial solutions; modern website with simple inquiry forms.' },
        
        { name: 'S B Bhavi & CO.', url: 'https://casbbhavi.in/', img: '/casbbhavi.png', description: 'Empowering small businesses through smart tax planning and financial services; modern website with easy contact forms.' },
        { name: 'Ajoy Goyal & Associates  CO.', url: 'https://ajoygoyalassociates.com/', img: '/ajoygoyalassociates.png', description: 'Helping small businesses with smart tax planning and financial solutions; modern website with simple contact forms and quick response support.' },
        { name: 'Agarwal Financial Consultancy.', url: 'https://afcadvisory.in/', img: '/afcadvisory.png', description: 'Helping small businesses with expert FEMA and indirect tax solutions; modern website with easy contact forms and fast response support.' },
        { name: 'R Mugunthan', url: 'https://carmugunthan.in/', img: '/carmugunthan.png', description: 'Helping growing businesses with smart compliance and indirect tax services; modern website with simple inquiry forms and quick support response.' },
        
        // { name: 'Kapoor Advisors', url: 'https://kapoor.example', img: '/client-4.png' },
        // { name: 'Singh Partners', url: 'https://singh.example', img: '/client-5.png' },
        // { name: 'Patel Group', url: 'https://patel.example', img: '/client-6.png' },
    ]



    return (
        <main className="min-h-screen bg-white text-slate-800">
            <Navbar />

            {/* Hero with banner image */}
            <section className="relative h-72 md:h-[520px] w-full">
                <Image src="/our-client-banner.avif" alt="Showcase banner" fill style={{ objectFit: 'cover' }} priority />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-blue-900/5 to-blue-300/10 flex items-center">
                    <div className="max-w-6xl mx-auto px-6 text-white">
                        <div className="max-w-3xl mt-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">Featured Clients</h1>
                            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow">Discover CA firm websites built with Webcafe templates — elegant, fast, and conversion-focused. See examples and get inspired.</p>
                            <div className="mt-6 flex items-center gap-4">
                                <Link href="/templates" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-lg font-semibold shadow-md transition">Explore Templates</Link>
                                <Link href="/schedule-call" className="inline-block border border-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-white/10 transition">Schedule a Call</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative floating card row */}

            </section>

            {/* Clients grid — show 3 cards per row on md+ */}
            <section id="our-clients" className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Clients</h2>
                <p className="text-slate-600 mb-16 text-center">Trusted CA firms and finance consultants who chose Webcafe for a professional online presence.</p>

                <ClientsGrid clients={clients} />
            </section>

            {/* Why Choose Us (replaces Case Studies) */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Webcafe</h2>
                <p className="text-slate-600 mb-16 text-center">Built for Chartered Accountants — fast, manageable, and optimized for results.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 border border-transparent hover:border-primary-100">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full flex items-center justify-center mb-4">
                            <Rocket className="w-6 h-6 text-primary-700" />
                        </div>
                        <h4 className="font-semibold mb-2 text-lg">Fast Launch</h4>
                        <p className="text-slate-600 text-sm">Launch a professional, responsive website quickly using our CA-focused templates and setup process.</p>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 border border-transparent hover:border-primary-100">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full flex items-center justify-center mb-4">
                            <Settings className="w-6 h-6 text-primary-700" />
                        </div>
                        <h4 className="font-semibold mb-2 text-lg">Easy Admin</h4>
                        <p className="text-slate-600 text-sm">Full admin panel to update services, team, blogs and manage content without technical help.</p>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 border border-transparent hover:border-primary-100">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-primary-700" />
                        </div>
                        <h4 className="font-semibold mb-2 text-lg">SEO & Conversion</h4>
                        <p className="text-slate-600 text-sm">Templates and content structure designed for search visibility and higher conversion rates.</p>
                    </div>
                </div>
            </section>

            {/* CTA (full-width background) */}
            <section className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-3xl font-bold">Want a website like this?</h3>
                            <p className="mt-2 opacity-90">We build and launch CA firm websites quickly — with an admin panel included.</p>
                        </div>
                        <div>
                            <Link href="/schedule-call" className="bg-white text-primary-700 px-5 py-3 rounded font-semibold">Schedule a Call</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
 
export const dynamic = 'force-dynamic';
