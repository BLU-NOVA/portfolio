import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Users, Award, Zap, Target, Heart } from "lucide-react"
import Link from "next/link"

export default function WhyChooseUsPage() {
    const uniqueSellingPoints = [
        {
            icon: Users,
            title: "Expert Team of 3 Co-founders",
            description:
                "Direct access to senior-level expertise on every project. No junior developers handling critical decisions.",
            benefit: "Higher quality deliverables and faster problem-solving",
        },
        {
            icon: Target,
            title: "Africa-Focused Solutions",
            description:
                "We understand the unique challenges and opportunities in the African market, building solutions that work locally.",
            benefit: "Products that resonate with your target audience",
        },
        {
            icon: Zap,
            title: "Rapid Development Cycles",
            description:
                "Our streamlined processes and experienced team enable faster delivery without compromising quality.",
            benefit: "Get to market faster than competitors",
        },
        {
            icon: Shield,
            title: "Security-First Approach",
            description: "Every solution is built with enterprise-grade security measures from the ground up.",
            benefit: "Peace of mind and compliance with international standards",
        },
        {
            icon: Award,
            title: "Quality Assurance Guarantee",
            description: "Rigorous testing processes and code reviews ensure bug-free, performant applications.",
            benefit: "Reduced maintenance costs and higher user satisfaction",
        },
        {
            icon: Heart,
            title: "Long-term Partnership",
            description: "We don't just build and leave. We provide ongoing support and grow with your business.",
            benefit: "Continuous improvement and scalable solutions",
        },
    ]

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Strategy",
            description: "We dive deep into your business needs, target audience, and technical requirements.",
            duration: "1-2 weeks",
            deliverables: ["Requirements document", "Technical architecture", "Project timeline", "Cost breakdown"],
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Creating user-centered designs and interactive prototypes for validation.",
            duration: "1-3 weeks",
            deliverables: ["UI/UX designs", "Interactive prototypes", "Design system", "User flow diagrams"],
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Agile development with continuous testing and regular client feedback.",
            duration: "4-12 weeks",
            deliverables: ["Working software", "Test reports", "Documentation", "Training materials"],
        },
        {
            step: "04",
            title: "Deployment & Launch",
            description: "Seamless deployment with monitoring and immediate support.",
            duration: "1 week",
            deliverables: ["Live application", "Monitoring setup", "Backup systems", "Launch support"],
        },
        {
            step: "05",
            title: "Support & Growth",
            description: "Ongoing maintenance, updates, and feature enhancements.",
            duration: "Ongoing",
            deliverables: ["24/7 monitoring", "Regular updates", "Performance reports", "Feature additions"],
        },
    ]

    const caseStudyMetrics = [
        { metric: "150%", description: "Average increase in client revenue", project: "EcoMart E-commerce" },
        { metric: "60%", description: "Reduction in processing time", project: "MediTrack Hospital System" },
        { metric: "40%", description: "Decrease in patient wait times", project: "Hospital Management" },
        { metric: "99.9%", description: "System uptime across all projects", project: "All Projects" },
        { metric: "25%", description: "Increase in farmer income", project: "AgriConnect Mobile App" },
        { metric: "2 weeks", description: "Average project delivery ahead of schedule", project: "Multiple Projects" },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-amber-400">Why Choose BLU-NOVA</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Your Success is Our
                            <span className="text-amber-400 block">Top Priority</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Discover what sets BLU-NOVA Tech Company apart and why leading businesses across Africa trust us with their
                            most critical technology projects.
                        </p>
                    </div>
                </div>
            </section>

            {/* Unique Selling Points */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We&apos;re not just another development agency. Here&apos;s what sets us apart from the competition.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {uniqueSellingPoints.map((point, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <point.icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{point.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{point.description}</p>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <p className="text-blue-800 font-medium text-sm">
                                            <strong>Benefit:</strong> {point.benefit}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study with Metrics */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don&apos;t just take our word for it. Here are real metrics from our successful projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {caseStudyMetrics.map((item, index) => (
                            <Card key={index} className="border-0 shadow-lg text-center bg-white">
                                <CardContent className="p-8">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
                                    <div className="text-gray-900 font-medium mb-2">{item.description}</div>
                                    <div className="text-sm text-gray-500">{item.project}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 max-w-4xl mx-auto">
                        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
                            <CardContent className="p-8 lg:p-12 text-center">
                                <h3 className="text-2xl font-bold mb-4">Case Study Spotlight: EcoMart E-commerce</h3>
                                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                                    When EcoMart approached us, they were struggling with an outdated e-commerce platform that was losing
                                    customers due to poor performance and limited functionality. Within 3 months, we delivered a complete
                                    solution that transformed their business.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div>
                                        <div className="text-3xl font-bold text-amber-400">150%</div>
                                        <div className="text-blue-100">Sales Increase</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-amber-400">60%</div>
                                        <div className="text-blue-100">Faster Processing</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-amber-400">2 weeks</div>
                                        <div className="text-blue-100">Ahead of Schedule</div>
                                    </div>
                                </div>
                                <Button asChild className="bg-amber-500 hover:bg-amber-400 text-blue-900 font-semibold">
                                    <Link href="/projects">View Full Case Study</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A systematic approach that ensures successful project delivery every time
                        </p>
                    </div>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {processSteps.map((step, index) => (
                            <Card key={index} className="border-0 shadow-lg">
                                <CardContent className="p-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                                        <div className="lg:col-span-2">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                    <span className="text-blue-600 font-bold">{step.step}</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                                                    <p className="text-sm text-gray-500">Duration: {step.duration}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                                            <ul className="space-y-2">
                                                {step.deliverables.map((deliverable, deliverableIndex) => (
                                                    <li key={deliverableIndex} className="flex items-center text-sm">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                        <span className="text-gray-600">{deliverable}</span>
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

            {/* Quality Assurance */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Assurance Steps</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Every project goes through our rigorous quality assurance process
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "🔍",
                                title: "Code Review",
                                description: "Every line of code is reviewed by senior developers before deployment",
                            },
                            {
                                icon: "🧪",
                                title: "Automated Testing",
                                description: "Comprehensive test suites ensure functionality across all scenarios",
                            },
                            {
                                icon: "🔒",
                                title: "Security Audit",
                                description: "Security vulnerabilities are identified and fixed before launch",
                            },
                            {
                                icon: "⚡",
                                title: "Performance Testing",
                                description: "Load testing ensures your application performs under pressure",
                            },
                        ].map((qa, index) => (
                            <Card key={index} className="border-0 shadow-lg text-center">
                                <CardContent className="p-8">
                                    <div className="text-4xl mb-4">{qa.icon}</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{qa.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{qa.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                quote:
                                    "BLU-NOVA delivered beyond our expectations. The platform is robust, user-friendly, and has significantly boosted our online presence.",
                                author: "Jane Wanjiku",
                                position: "CEO, EcoMart Kenya",
                                rating: 5,
                            },
                            {
                                quote:
                                    "The system has revolutionized our operations. Patient care has improved significantly since implementation.",
                                author: "Dr. Michael Ouma",
                                position: "Chief Medical Officer, Nairobi General Hospital",
                                rating: 5,
                            },
                            {
                                quote:
                                    "BLU-NOVA understood our complex logistics needs and delivered a solution that exceeded expectations.",
                                author: "Robert Kimani",
                                position: "Operations Director, East Africa Logistics",
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <Card key={index} className="border-0 shadow-lg">
                                <CardContent className="p-8">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <CheckCircle key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the BLU-NOVA Difference?</h2>
                    <p className="text-xl mb-8 text-blue-700 max-w-2xl mx-auto">
                        Join the growing list of successful businesses that have transformed their operations with our solutions
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-400 text-blue-900 font-semibold px-8 py-4">
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-blue-700 text-blue-700 hover:bg-blue-100 hover:text-blue-700 px-8 py-4 bg-transparent"
                        >
                            <Link href="/projects">View Our Work</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
