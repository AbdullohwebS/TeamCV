const steps = [
  {
    number: "01",
    title: "Research & Strategy",
    description:
      "We begin by understanding your business, audience, and goals to develop a tailored marketing strategy.",
  },
  {
    number: "02",
    title: "Implementation",
    description: "Our team executes the strategy across all relevant channels with precision and creativity.",
  },
  {
    number: "03",
    title: "Optimization",
    description: "We continuously monitor performance and make data-driven adjustments to maximize results.",
  },
  {
    number: "04",
    title: "Reporting & Analysis",
    description: "Regular detailed reports keep you informed of progress and the impact on your business goals.",
  },
]

export default function WorkProcess() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Our Work Process</h2>
          <p className="text-lg text-gray-600">
            A systematic approach to delivering exceptional results for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border-2 border-black relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
