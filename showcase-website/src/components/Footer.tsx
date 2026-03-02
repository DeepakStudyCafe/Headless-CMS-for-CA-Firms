import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-2xl font-bold text-white">Webtel</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Professional website templates designed specifically for Chartered Accountant firms. Elevate your practice with our modern, responsive designs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-primary-400 transition-colors duration-300">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-400 transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors duration-300">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors duration-300">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors duration-300">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors duration-300">
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors duration-300">
                  Hosting & Support
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-primary-400 transition-colors duration-300">
                  Online Payment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@webtel.in" className="hover:text-primary-400 transition-colors duration-300">
                    info@webtel.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    123 Business Park, Tech City,<br />
                    Bangalore - 560001, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Webtel. All rights reserved. | 
            <Link href="/privacy" className="hover:text-primary-400 transition-colors duration-300 ml-2">
              Privacy Policy
            </Link> | 
            <Link href="/terms" className="hover:text-primary-400 transition-colors duration-300 ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
