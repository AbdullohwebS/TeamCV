import Link from "next/link"

export default function Hero() {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="mb-6">
            Elevate Your Brand with <span className="text-green-500">Stackflowx</span>
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            We're a digital marketing agency focused on helping your business grow through strategic marketing solutions
            tailored to your specific needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact" className="btn-primary">
              Get Started
            </Link>
            <Link href="#services" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-green-200 rounded-full -top-10 -left-10"></div>
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Digital Marketing Experts"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="container-custom mt-20">
        <div className="flex flex-wrap justify-between items-center gap-8 py-8 border-t border-b border-gray-200">
          <div className="text-2xl font-bold text-gray-400">Trusted by leading companies</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {["Company 1", "Company 2", "Company 3", "Company 4"].map((company, index) => (
              <div key={index} className="text-xl font-bold text-gray-500">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
