const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Digital marketing expert with over 15 years of experience helping businesses grow.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Williams",
    role: "SEO Specialist",
    bio: "Search engine optimization guru who has helped hundreds of businesses improve their rankings.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "Social Media Director",
    bio: "Creative strategist with a passion for building engaging social media campaigns.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emma Rodriguez",
    role: "Content Strategist",
    bio: "Talented writer and content expert who knows how to create compelling narratives.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-green-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">The talented people behind our successful marketing strategies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg text-center group">
              <div className="overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-green-500 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
