import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import { sql } from "@/lib/db"
import NewsletterForm from "@/components/newsletter-form"

async function getBlogPost(slug: string) {
  try {
    const posts = await sql`
      SELECT 
        id, title, slug, excerpt, content, featured_image, category, 
        author_name, author_avatar, read_time, created_at,
        published, featured
      FROM blog_posts 
      WHERE slug = ${slug} AND published = true
      LIMIT 1
    `
    return posts[0] || null
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

async function getRelatedPosts(category: string, currentSlug: string, limit = 3) {
  try {
    const posts = await sql`
      SELECT 
        id, title, slug, excerpt, featured_image, category, 
        author_name, read_time, created_at
      FROM blog_posts 
      WHERE category = ${category} 
        AND slug != ${currentSlug} 
        AND published = true
      ORDER BY created_at DESC
      LIMIT ${limit}
    `
    return posts
  } catch (error) {
    console.error("Error fetching related posts:", error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  const relatedPosts = await getRelatedPosts(post.category, post.slug)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            
            <Badge className="mb-4 bg-purple-100 text-purple-800 w-fit">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <div className="flex items-center mr-6">
                {post.author_avatar ? (
                  <Image 
                    src={post.author_avatar} 
                    alt={post.author_name} 
                    width={32} 
                    height={32} 
                    className="rounded-full mr-2"
                  />
                ) : (
                  <User className="h-5 w-5 mr-2" />
                )}
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.read_time} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image && (
        <div className="container mx-auto px-4 -mt-8">
          <div className="max-w-4xl mx-auto">
            <Image
              src={post.featured_image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      )}

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg prose-purple">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    href={`/blog/${relatedPost.slug}`} 
                    key={relatedPost.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <Image
                      src={relatedPost.featured_image || "/placeholder.svg?height=200&width=400"}
                      alt={relatedPost.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <Badge className="mb-3 bg-blue-100 text-blue-800">{relatedPost.category}</Badge>
                      <h3 className="text-xl font-bold mb-3 hover:text-purple-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(relatedPost.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Enjoyed this article?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for weekly web design insights and tips delivered straight to your inbox.
          </p>
          <NewsletterForm
            source="blog-post"
            placeholder="Enter your email"
            buttonText="Subscribe"
            className="max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  )
}
