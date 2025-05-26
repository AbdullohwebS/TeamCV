import { Search, BarChart3, Megaphone, Mail, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Search className="w-10 h-10" />,
    title: "Search Engine Optimization",
    description: "Improve your visibility in search results and drive more organic traffic to your website.",
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Pay-per-Click Advertising",
    description: "Create targeted ad campaigns that deliver immediate results and maximize your ROI.",
  },
  {
    icon: <Megaphone className="w-10 h-10" />,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with your audience across all social platforms.",
  },
  {
    icon: <Mail className="w-10 h-10" />,
    title: "Email Marketing",
    description: "Nurture leads and maintain customer relationships with strategic email campaigns.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Content Marketing",
    description: "Create valuable content that attracts and engages your target audience.",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Analytics & Reporting",
    description: "Track performance and gain insights to continuously improve your marketing strategy.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of digital marketing services to help your business thrive in the digital
            landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border-2 border-black hover:bg-green-50 transition-colors group"
            >
              <div className="mb-4 text-green-500">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="#"
                className="inline-flex items-center font-medium text-black group-hover:text-green-500 transition-colors"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
