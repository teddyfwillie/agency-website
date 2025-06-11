import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search, User } from 'lucide-react'
import NewsletterForm from "@/components/newsletter-form"
import { sql } from "@/lib/db"

async function getBlogPosts() {
  try {
    const posts = await sql`
      SELECT 
        id, title, slug, excerpt, featured_image, category, 
        author_name, author_avatar, read_time, created_at,
        published, featured
      FROM blog_posts 
      WHERE published = true
      ORDER BY featured DESC, created_at DESC
    `
    return posts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

async function getBlogCategories() {
  try {
    const categories = await sql`
      SELECT name, slug, color FROM blog_categories ORDER BY name
    `
    return categories
  } catch (error) {
    console.error("Error fetching blog categories:", error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const categories = await getBlogCategories()
  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800">Our Blog</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Web Design Insights &<span className="text-purple-600"> Growth Tips</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Stay ahead of the curve with our latest insights on web design, conversion optimization, and digital
              marketing strategies that drive real business results.
            </p>

            <div className="max-w-md mx-auto relative">
              <Input type="text" placeholder="Search articles..." className="pl-12 pr-4 py-3 text-lg" />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Badge className="mb-4 bg-purple-100 text-purple-800">Featured Article</Badge>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <Image
                    src={featuredPost.featured_image || "/placeholder.svg?height=400&width=600"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="mb-4 bg-green-100 text-green-800 w-fit">{featuredPost.category}</Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author_name}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(featuredPost.created_at).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{featuredPost.read_time} min read</span>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-purple-600 hover:bg-purple-700 w-fit">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
              All Posts
            </Button>
            {categories.map((category) => (
              <Button key={category.slug} variant="outline">
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={post.featured_image || "/placeholder.svg?height=250&width=400"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-purple-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author_name}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:text-purple-700">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Updated with Design Insights</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get weekly tips on web design, conversion optimization, and the latest industry trends delivered to your inbox.
          </p>
          <NewsletterForm
            source="blog"
            placeholder="Enter your email"
            buttonText="Subscribe"
            className="max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  )
}
