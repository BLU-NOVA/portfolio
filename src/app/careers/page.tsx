import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, Briefcase, Upload, CheckCircle } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "We're looking for an experienced full-stack developer to join our core team and work on exciting projects across various industries.",
      requirements: [
        "5+ years of experience with React/Next.js and Node.js",
        "Strong experience with TypeScript and modern JavaScript",
        "Experience with PostgreSQL and MongoDB",
        "Knowledge of cloud platforms (AWS, Vercel, DigitalOcean)",
        "Experience with API design and development",
      ],
      responsibilities: [
        "Develop and maintain web applications using modern technologies",
        "Collaborate with the team on architecture decisions",
        "Mentor junior developers and conduct code reviews",
        "Work directly with clients to understand requirements",
        "Contribute to technical documentation and best practices",
      ],
      benefits: [
        "Competitive salary (KES 150,000 - 250,000)",
        "Flexible working hours and remote work options",
        "Professional development budget",
        "Health insurance coverage",
        "Annual team retreats and bonuses",
      ],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Nairobi, Kenya / Remote",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Join our team as a UI/UX Designer and help create beautiful, user-centered designs for our diverse range of projects.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Strong portfolio showcasing web and mobile designs",
        "Understanding of user research and usability testing",
        "Knowledge of design systems and component libraries",
      ],
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers to ensure design implementation",
        "Maintain and evolve design systems",
        "Present design concepts to clients and stakeholders",
      ],
      benefits: [
        "Competitive salary (KES 120,000 - 180,000)",
        "Creative freedom and diverse project portfolio",
        "Latest design tools and software licenses",
        "Conference attendance and training opportunities",
        "Flexible work arrangements",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Contract",
      experience: "3-6 years",
      description: "Help us scale our infrastructure and improve our deployment processes as we grow our client base.",
      requirements: [
        "4+ years of experience with cloud platforms (AWS, GCP, Azure)",
        "Strong knowledge of Docker and Kubernetes",
        "Experience with CI/CD pipelines (GitHub Actions, Jenkins)",
        "Knowledge of monitoring tools (Prometheus, Grafana)",
        "Scripting experience with Bash, Python, or similar",
      ],
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement and improve CI/CD pipelines",
        "Monitor system performance and reliability",
        "Automate deployment and scaling processes",
        "Ensure security best practices across all systems",
      ],
      benefits: [
        "Competitive contract rates (KES 200,000 - 300,000/month)",
        "100% remote work",
        "Flexible schedule",
        "Opportunity to work with cutting-edge technologies",
        "Potential for full-time conversion",
      ],
    },
  ]

  const internshipPrograms = [
    {
      title: "Software Development Internship",
      duration: "3-6 months",
      description: "Learn modern web development technologies while working on real client projects.",
      requirements: [
        "Currently pursuing Computer Science or related degree",
        "Basic knowledge of HTML, CSS, and JavaScript",
        "Familiarity with React or similar frameworks",
        "Strong problem-solving skills and eagerness to learn",
      ],
      benefits: [
        "Monthly stipend of KES 25,000 - 40,000",
        "Mentorship from senior developers",
        "Real project experience",
        "Certificate of completion",
        "Potential for full-time offer",
      ],
    },
    {
      title: "UI/UX Design Internship",
      duration: "3-4 months",
      description: "Gain hands-on experience in user experience design and interface development.",
      requirements: [
        "Currently pursuing Design, HCI, or related field",
        "Basic knowledge of design tools (Figma, Adobe XD)",
        "Understanding of design principles",
        "Portfolio of personal or academic projects",
      ],
      benefits: [
        "Monthly stipend of KES 20,000 - 35,000",
        "Access to premium design tools",
        "Portfolio development support",
        "Industry networking opportunities",
        "Flexible schedule around studies",
      ],
    },
  ]

  const companyBenefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and equity options for senior roles",
    },
    {
      icon: "🏠",
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and modern office space in Nairobi",
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and internal knowledge sharing",
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs",
    },
    {
      icon: "🌴",
      title: "Time Off",
      description: "Generous vacation policy, public holidays, and annual team retreats",
    },
    {
      icon: "🚀",
      title: "Growth Opportunities",
      description: "Clear career progression paths and opportunities to lead projects and teams",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-amber-400">Join Our Team</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Career with
              <span className="text-amber-400 block">BLU-NOVA Tech Company</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join a dynamic team of passionate developers, designers, and innovators who are shaping the future of
              technology in Africa. Grow your skills while working on impactful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where talented individuals can thrive and make a real impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for your skills and career goals
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                        <Badge className="bg-blue-100 text-blue-700">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          {position.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {position.responsibilities.slice(0, 3).map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-blue-25 p-6 rounded-lg mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply for This Position</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Internship Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your career with hands-on experience and mentorship from industry professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {internshipPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <Badge variant="outline">{program.duration}</Badge>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What You&apos;ll Get:</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Apply for Internship
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to join our team? Submit your application and we&apos;ll get back to you within 48 hours.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+254 700 000 000" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="position">Position Applied For</Label>
                    <select
                      id="position"
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a position</option>
                      <option value="senior-fullstack">Senior Full-Stack Developer</option>
                      <option value="ui-ux-designer">UI/UX Designer</option>
                      <option value="devops-engineer">DevOps Engineer</option>
                      <option value="software-intern">Software Development Internship</option>
                      <option value="design-intern">UI/UX Design Internship</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <select
                      id="experience"
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years (Entry Level)</option>
                      <option value="1-3">1-3 years (Junior)</option>
                      <option value="3-5">3-5 years (Mid-Level)</option>
                      <option value="5-8">5-8 years (Senior)</option>
                      <option value="8+">8+ years (Expert)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="portfolio">Portfolio/LinkedIn URL</Label>
                    <Input id="portfolio" placeholder="https://yourportfolio.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Upload Resume/CV</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="terms" className="mt-1" />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the processing of my personal data for recruitment purposes and confirm that all
                      information provided is accurate.
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a glimpse into what it&apos;s like to work at BLU-NOVA Tech Company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "Innovation", description: "We encourage creative thinking and new ideas", icon: "💡" },
              { value: "Collaboration", description: "We work together to achieve common goals", icon: "🤝" },
              { value: "Growth", description: "We invest in our team's professional development", icon: "📈" },
              { value: "Impact", description: "We build solutions that make a real difference", icon: "🎯" },
            ].map((culture, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{culture.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{culture.value}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{culture.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don&apos;t see a position that fits? We&apos;re always looking for talented individuals. Send us your resume and let&apos;s
            talk about opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-500 hover:bg-amber-400 text-blue-900 font-semibold px-8 py-4">
              Send Your Resume
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 bg-transparent"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
