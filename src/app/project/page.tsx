import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      name: "EcoMart E-commerce Platform",
      client: "EcoMart Kenya",
      duration: "3 months",
      category: "E-commerce",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      description:
        "A comprehensive e-commerce platform for sustainable products with inventory management, payment processing, and customer analytics.",
      challenges: "Integrating multiple payment gateways and building a complex inventory system",
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory tracking",
        "Advanced search and filtering",
        "Mobile-responsive design",
        "Payment gateway integration",
      ],
      results: "Increased online sales by 150% and reduced order processing time by 60%",
      image: "/placeholder.svg?height=400&width=600",
      testimonial:
        "BLU-NOVA delivered beyond our expectations. The platform is robust, user-friendly, and has significantly boosted our online presence.",
      testimonialAuthor: "Jane Wanjiku, CEO EcoMart Kenya",
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      name: "MediTrack Hospital Management System",
      client: "Nairobi General Hospital",
      duration: "4 months",
      category: "Healthcare",
      techStack: ["React", "NestJS", "MongoDB", "Socket.io", "Material-UI"],
      description:
        "Complete hospital management system with patient records, appointment scheduling, and real-time communication.",
      challenges: "Ensuring HIPAA compliance and building real-time features for emergency situations",
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Real-time notifications",
        "Billing and insurance",
        "Staff management",
      ],
      results: "Reduced patient wait times by 40% and improved staff efficiency by 35%",
      image: "/placeholder.svg?height=400&width=600",
      testimonial: "The system has revolutionized our operations. Patient care has improved significantly.",
      testimonialAuthor: "Dr. Michael Ouma, Chief Medical Officer",
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      name: "AgriConnect Mobile App",
      client: "Kenya Agricultural Board",
      duration: "2 months",
      category: "Agriculture",
      techStack: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
      description: "Mobile application connecting farmers with buyers, providing market prices and agricultural tips.",
      challenges: "Working with limited internet connectivity in rural areas and multi-language support",
      features: [
        "Offline functionality",
        "Multi-language support",
        "Price tracking",
        "Weather integration",
        "Community forums",
      ],
      results: "Connected over 5,000 farmers with buyers and increased average farm income by 25%",
      image: "/placeholder.svg?height=400&width=600",
      testimonial: "This app has transformed how our farmers access markets and information.",
      testimonialAuthor: "Peter Mwangi, Agricultural Extension Officer",
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      name: "EduLearn Learning Management System",
      client: "Strathmore University",
      duration: "5 months",
      category: "Education",
      techStack: ["Next.js", "PostgreSQL", "Redis", "WebRTC", "Tailwind CSS"],
      description: "Comprehensive LMS with video conferencing, assignment management, and progress tracking.",
      challenges: "Building scalable video conferencing and handling large file uploads",
      features: [
        "Video conferencing",
        "Assignment submission",
        "Grade management",
        "Discussion forums",
        "Progress analytics",
      ],
      results: "Supported 10,000+ students during remote learning with 99.9% uptime",
      image: "/placeholder.svg?height=400&width=600",
      testimonial: "The platform enabled seamless transition to online learning during the pandemic.",
      testimonialAuthor: "Prof. Grace Kiprotich, Dean of IT",
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      name: "FinTrack Personal Finance App",
      client: "Personal Project",
      duration: "1.5 months",
      category: "Fintech",
      techStack: ["Flutter", "Firebase", "Node.js", "Plaid API", "Chart.js"],
      description: "Personal finance management app with expense tracking, budgeting, and financial insights.",
      challenges: "Integrating with multiple bank APIs and ensuring data security",
      features: [
        "Expense categorization",
        "Budget planning",
        "Financial insights",
        "Bank integration",
        "Goal tracking",
      ],
      results: "Featured in Google Play Store and gained 1,000+ downloads in first month",
      image: "/placeholder.svg?height=400&width=600",
      testimonial: "Clean interface and powerful features. Exactly what I needed for managing my finances.",
      testimonialAuthor: "Sarah Johnson, Beta User",
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      name: "LogiFlow Supply Chain Platform",
      client: "East Africa Logistics",
      duration: "6 months",
      category: "Logistics",
      techStack: ["Vue.js", "Laravel", "MySQL", "Docker", "AWS"],
      description: "End-to-end supply chain management platform with real-time tracking and analytics.",
      challenges: "Integrating with legacy systems and building real-time tracking across multiple countries",
      features: [
        "Real-time tracking",
        "Inventory management",
        "Route optimization",
        "Analytics dashboard",
        "Multi-currency support",
      ],
      results: "Reduced delivery times by 30% and improved inventory accuracy by 95%",
      image: "/placeholder.svg?height=400&width=600",
      testimonial: "BLU-NOVA understood our complex logistics needs and delivered a solution that exceeded expectations.",
      testimonialAuthor: "Robert Kimani, Operations Director",
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-amber-400">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Projects That Drive
              <span className="text-amber-400 block">Real Results</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across various industries. Each project showcases our
              commitment to delivering innovative solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most impactful projects that demonstrate our expertise and commitment to excellence
            </p>
          </div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-100 text-blue-700">{project.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink}>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.githubLink}>
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.client}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-blue-800 mb-2">Results:</h4>
                      <p className="text-blue-700">{project.results}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 italic mb-2">&quot;{project.testimonial}&quot;</p>
                      <p className="text-sm font-medium text-gray-900">- {project.testimonialAuthor}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional projects showcasing our diverse expertise across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-100 text-blue-700">{project.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.liveLink}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubLink}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-700 text-sm font-medium">{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Numbers that showcase the real impact of our work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "50+", label: "Projects Completed", icon: "🚀" },
              { number: "25+", label: "Happy Clients", icon: "😊" },
              { number: "99.9%", label: "Uptime Average", icon: "⚡" },
              { number: "24/7", label: "Support Available", icon: "🛠️" },
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-md bg-blue-50 hover:shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-400 text-blue-900 font-semibold px-8 py-4">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
