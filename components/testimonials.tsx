"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Working with Positivus transformed our online presence. Their strategic approach to digital marketing helped us achieve a 150% increase in leads within just 6 months.",
    author: "Jennifer Smith",
    company: "CEO, TechStart Inc.",
  },
  {
    quote:
      "The team at Positivus truly understands digital marketing. They developed a comprehensive strategy that significantly improved our brand awareness and conversion rates.",
    author: "David Wilson",
    company: "Marketing Director, GrowthBrand",
  },
  {
    quote:
      "Positivus delivered exceptional results for our e-commerce business. Their SEO and PPC campaigns drove a 200% increase in revenue year-over-year.",
    author: "Michelle Johnson",
    company: "Founder, StyleShop",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl border-2 border-black relative overflow-hidden">
          <div className="absolute -top-6 left-12 text-green-500">
            <Quote size={48} />
          </div>

          <div
            ref={testimonialRef}
            className={`pt-6 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
          >
            <p className="text-xl md:text-2xl mb-8 italic">{testimonials[currentIndex].quote}</p>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="font-bold text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-gray-600">{testimonials[currentIndex].company}</div>
              </div>

              <div className="flex gap-4 mt-4 md:mt-0">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
