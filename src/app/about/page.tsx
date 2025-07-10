import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Lightbulb, Shield, Award, Handshake } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business dealings and relationships.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring quality that exceeds expectations.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
    },
    {
      icon: Heart,
      title: "Customer Centricity",
      description: "Our clients' success is our success. We put their needs at the center of everything we do.",
    },
  ]

  const team = [
    {
      name: "Amos Wachira",
      role: "CEO / Lead Strategist",
      responsibilities: "Business direction, branding, client communication",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Amos Mwongela",
      role: "CTO",
      responsibilities: "Tech architecture, DevOps, reviews, code quality",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Erick Wachuma",
      role: "Lead Developer",
      responsibilities: "Feature development, client deployment, integrations",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-amber-400">About BLU-NOVA Tech Company</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software. Strategy.
              <span className="text-amber-400 block">Success</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Founded by three passionate co-founders, we&apos;re on a mission to transform businesses across Africa with
              innovative, scalable digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                BLU-NOVA Tech Company was born from a shared vision of three technology enthusiasts who recognized the
                immense potential for digital transformation across Africa. Founded in Kenya, we started with a simple
                belief: that innovative technology solutions could drive meaningful change for businesses of all sizes.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                What began as late-night coding sessions and passionate discussions about the future of African tech has
                evolved into a dynamic company that serves clients across the continent. Our journey has been marked by
                continuous learning, adaptation, and an unwavering commitment to excellence.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we stand as a testament to what&apos;s possible when passion meets purpose. Every project we undertake
                is an opportunity to contribute to Africa&apos;s digital future, and we&apos;re just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To innovate and deliver intelligent, scalable digital solutions that transform businesses across
                  Africa. We&apos;re committed to bridging the technology gap and empowering organizations to thrive in the
                  digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be Africa&apos;s leading provider of reliable, secure, and customer-focused tech solutions. We envision
                  a future where every business, regardless of size, has access to world-class technology that drives
                  growth and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate co-founders driving BLU-NOVA Tech Company forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.responsibilities}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let&apos;s discuss how our team can help transform your business with innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4">
              <Link href="/contact">Get in Touch</Link>
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
