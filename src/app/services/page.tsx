import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Cloud, Database, Palette, Settings, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Application Development",
      description:
        "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
      technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Responsive design across all devices",
        "SEO optimization and performance tuning",
        "Progressive Web App (PWA) capabilities",
        "Real-time features and integrations",
        "Secure authentication and authorization",
      ],
      useCase: "Perfect for e-commerce platforms, business dashboards, and customer portals",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      features: [
        "Cross-platform compatibility",
        "Offline functionality support",
        "Push notifications and real-time updates",
        "App store optimization",
        "Seamless API integrations",
      ],
      useCase: "Ideal for customer-facing apps, internal business tools, and marketplace solutions",
    },
    {
      icon: Cloud,
      title: "Custom Systems Development",
      description: "Tailored business systems including ERPs, CRMs, and inventory management solutions.",
      technologies: ["NestJS", "PostgreSQL", "MongoDB", "Redis", "Docker"],
      features: [
        "Scalable architecture design",
        "Role-based access control",
        "Advanced reporting and analytics",
        "Third-party system integrations",
        "Automated workflow management",
      ],
      useCase: "Essential for businesses looking to automate operations and improve efficiency",
    },
    {
      icon: Database,
      title: "API Development & Integration",
      description: "Robust APIs and seamless integrations that connect your systems and enable data flow.",
      technologies: ["REST APIs", "GraphQL", "Microservices", "OAuth", "Webhooks"],
      features: [
        "RESTful and GraphQL API design",
        "Comprehensive API documentation",
        "Rate limiting and security measures",
        "Third-party service integrations",
        "Real-time data synchronization",
      ],
      useCase: "Critical for connecting different systems and enabling data exchange",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing and optimization",
        "Design system creation",
      ],
      useCase: "Fundamental for creating products that users love and businesses succeed with",
    },
    {
      icon: Settings,
      title: "Cloud Hosting & Maintenance",
      description: "Reliable cloud infrastructure and ongoing maintenance to keep your applications running smoothly.",
      technologies: ["AWS", "Vercel", "DigitalOcean", "Docker", "Kubernetes"],
      features: [
        "Cloud infrastructure setup",
        "Automated deployment pipelines",
        "Performance monitoring and optimization",
        "Security updates and patches",
        "24/7 system monitoring",
      ],
      useCase: "Essential for maintaining high availability and optimal performance",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-amber-400">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Tech Solutions
              <span className="text-amber-400 block">for Your Business</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From web applications to custom systems, we deliver end-to-end technology solutions that drive growth and
              innovation for businesses across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of services covers every aspect of your digital transformation journey
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies We Use:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 font-medium">
                          <strong>Use Case:</strong> {service.useCase}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements and create a detailed project roadmap",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Creating user-centered designs and interactive prototypes",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Building your solution with rigorous testing at every stage",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Launching your project and providing ongoing maintenance",
              },
            ].map((process, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-blue-600 font-bold text-xl">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and create a solution that drives your business forward
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
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
