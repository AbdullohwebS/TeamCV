"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`py-6 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Stackflowx<span className="text-green-500">.</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="hover:text-green-500 transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-green-500 transition-colors">
            Services
          </Link>
          <Link href="#work" className="hover:text-green-500 transition-colors">
            Work
          </Link>
          <Link href="#team" className="hover:text-green-500 transition-colors">
            Team
          </Link>
          <Link href="#contact" className="btn-primary">
            Contact us
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white p-5 shadow-md">
            <nav className="flex flex-col gap-4">
              <Link
                href="#about"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#work"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="#team"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link href="#contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                Contact us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
