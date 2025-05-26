import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Boosting Organic Traffic by 200%",
    client: "E-commerce Brand",
    description: "How we helped an online retailer increase their organic search traffic and improve conversion rates.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Social Media Campaign Success",
    client: "Fashion Startup",
    description: "A strategic social media approach that generated buzz and increased brand awareness.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Lead Generation Transformation",
    client: "B2B Software Company",
    description: "Implementing a multi-channel strategy that doubled qualified leads within 3 months.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600">
              Explore how we've helped businesses like yours achieve remarkable results through strategic digital
              marketing.
            </p>
          </div>
          <Link
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center font-medium text-green-500 hover:text-green-600 transition-colors"
          >
            View all case studies <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group">
              <div className="overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-green-500 font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center font-medium text-black hover:text-green-500 transition-colors"
                >
                  Read case study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
