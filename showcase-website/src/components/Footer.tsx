import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300">
      <div className="container-custom px-2 md:px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {/* Company Info */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/webcafe-white.png" alt="Webcafe Logo" className="w-44 object-contain" />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm text-justify">
              High-quality, conversion-focused website solutions crafted for Chartered Accountant firms — helping you build trust, generate qualified leads, and establish a strong digital presence.
            </p>
            <div className="flex gap-3 mt-auto">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col min-w-0 ml-10">
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
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
          <div className="flex flex-col min-w-0">
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
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

          {/* Legal & Policies */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Legal & Policies</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-primary-400 transition-colors duration-300 text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation-and-refund" className="hover:text-primary-400 transition-colors duration-300 text-sm">
                  Cancellation and Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-and-delivery" className="hover:text-primary-400 transition-colors duration-300 text-sm">
                  Shipping and Delivery Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col min-w-0">
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:support@studycafe.in" className="hover:text-primary-400 transition-colors duration-300 text-sm">
                    support@studycafe.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:marketing@studycafe.in" className="hover:text-primary-400 transition-colors duration-300 text-sm">
                    marketing@studycafe.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919625080264" className="hover:text-primary-400 transition-colors duration-300 text-sm">
                    +91 9625080264
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    1003, 10th Floor, Modi Tower <br />
                    98, Nehruplace, Delhi 110019
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
            <p className="text-gray-400 mb-2 md:mb-0 text-xs">
              &copy; {currentYear} Webcafe. All rights reserved. 
              <span className="mx-2">|</span>
              <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors duration-300 ml-1 text-xs">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms-and-conditions" className="hover:text-primary-400 transition-colors duration-300 ml-1 text-xs">
                Terms
              </Link>
            </p>
            <p className="text-gray-400 text-xs mt-3 md:mt-0">
              Powered By <a href="https://studycafe.in/" target="_blank" rel="noopener" className="underline hover:text-primary-400">Studycafe</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
