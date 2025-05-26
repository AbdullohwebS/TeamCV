"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black text-white py-16 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold mb-6 block">
              Positivus<span className="text-green-500">.</span>
            </Link>
            <p className="text-gray-400 mb-6">
              A digital marketing agency focused on helping your business grow through strategic marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-green-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-green-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-gray-400 hover:text-green-500 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-green-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  PPC Advertising
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">Join our newsletter to stay up to date on features and releases.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">By subscribing you agree to with our Privacy Policy.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Positivus. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-green-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-green-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
