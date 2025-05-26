import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import CaseStudies from "@/components/case-studies"
import WorkProcess from "@/components/work-process"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <WorkProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
