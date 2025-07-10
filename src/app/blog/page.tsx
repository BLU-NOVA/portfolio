import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Web Development in Africa: Trends to Watch in 2024",
    excerpt:
      "Explore the emerging technologies and development trends that are shaping the future of web development across the African continent.",
    author: "Alex Kimani",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=800",
    slug: "future-web-development-africa-2024",
  }

  const blogPosts = [
    {
      title: "Building Scalable E-commerce Solutions for African Markets",
      excerpt:
        "Learn how to create e-commerce platforms that can handle the unique challenges and opportunities in African markets.",
      author: "Sarah Wanjiku",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "E-commerce",
      image: "/placeholder.svg?height=300&width=400",
      slug: "scalable-ecommerce-african-markets",
    },
    {
      title: "Mobile-First Development: Why It Matters in Kenya",
      excerpt:
        "Understanding the importance of mobile-first design principles when developing applications for the Kenyan market.",
      author: "David Ochieng",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Mobile Development",
      image: "/placeholder.svg?height=300&width=400",
      slug: "mobile-first-development-kenya",
    },
    {
      title: "API Security Best Practices for African Fintech",
      excerpt:
        "Essential security measures every fintech company in Africa should implement to protect their APIs and user data.",
      author: "Alex Kimani",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "/placeholder.svg?height=300&width=400",
      slug: "api-security-african-fintech",
    },
    {
      title: "The Rise of Progressive Web Apps in East Africa",
      excerpt:
        "How PWAs are revolutionizing the way businesses deliver digital experiences in regions with limited connectivity.",
      author: "Sarah Wanjiku",
      date: "November 20, 2024",
      readTime: "6 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      slug: "progressive-web-apps-east-africa",
    },
    {
      title: "Database Optimization for High-Traffic Applications",
      excerpt:
        "Proven strategies for optimizing database performance when your application starts scaling to thousands of users.",
      author: "David Ochieng",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Backend Development",
      image: "/placeholder.svg?height=300&width=400",
      slug: "database-optimization-high-traffic",
    },
    {
      title: "UI/UX Design Principles for African User Experiences",
      excerpt:
        "Cultural considerations and design principles that create better user experiences for African audiences.",
      author: "Alex Kimani",
      date: "November 8, 2024",
      readTime: "5 min read",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      slug: "ui-ux-design-african-users",
    },
  ]

  const categories = [
    "All Posts",
    "Web Development",
    "Mobile Development",
    "Backend Development",
    "E-commerce",
    "Security",
    "Design",
    "Tech Trends",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-amber-400">Tech Insights & Guides</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stay Ahead with
              <span className="text-amber-400 block">Tech Insights</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the latest trends, best practices, and expert insights from the BLU-NOVA team. Learn from our
              experience building solutions across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our latest deep-dive into the technologies shaping Africa&apos;s digital future
            </p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-100 text-blue-700">{featuredPost.category}</Badge>
                </div>
              </div>

              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <Button asChild className="bg-blue-600 hover:bg-blue-700 w-fit text-white">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights, tutorials, and industry analysis from our development team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-100 text-blue-700">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button asChild variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900 max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Stay Updated with Tech Insights</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Get the latest articles, tutorials, and industry insights delivered directly to your inbox. Join over
                1,000 developers and business leaders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3">Subscribe</Button>
              </div>

              <p className="text-blue-200 text-sm mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our most popular content categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { topic: "React & Next.js", count: "12 articles", icon: "⚛️" },
              { topic: "Mobile Development", count: "8 articles", icon: "📱" },
              { topic: "API Development", count: "10 articles", icon: "🔗" },
              { topic: "Database Design", count: "6 articles", icon: "🗄️" },
            ].map((topic, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center cursor-pointer bg-white"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.topic}</h3>
                  <p className="text-gray-600 text-sm">{topic.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
