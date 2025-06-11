import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Zap, Award, CheckCircle } from 'lucide-react'
import LeadMagnetForm from "@/components/lead-magnet-form"
import { sql } from "@/lib/db"

async function getFeaturedProjects() {
  try {
    const projects = await sql`
      SELECT 
        id, title, slug, description, category, featured_image,
        client_name, results_metric_1_label, results_metric_1_value
      FROM portfolio_projects 
      WHERE published = true AND featured = true
      ORDER BY created_at DESC
      LIMIT 3
    `
    return projects
  } catch (error) {
    console.error("Error fetching featured projects:", error)
    return []
  }
}

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-500/30">
              🚀 Transform Your Digital Presence
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Websites That Convert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                Visitors Into Customers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We design and develop stunning websites that don't just look amazing—they drive results. Get more leads,
              sales, and growth with a website built for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#free-audit">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                  Get Your Free Website Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">StartupXYZ</div>
            <div className="text-2xl font-bold text-gray-400">GrowthCo</div>
            <div className="text-2xl font-bold text-gray-400">InnovateLab</div>
            <div className="text-2xl font-bold text-gray-400">ScaleUp</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Agency?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just designers—we're growth partners who understand what it takes to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                <p className="text-gray-600">
                  Your website will load in under 3 seconds, keeping visitors engaged and improving your search
                  rankings.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Conversion Focused</h3>
                <p className="text-gray-600">
                  Every element is strategically placed to guide visitors toward taking action and becoming customers.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Award Winning</h3>
                <p className="text-gray-600">
                  Our designs have won multiple industry awards and consistently outperform the competition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Preview - Now Dynamic */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Recent Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses like yours achieve remarkable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={project.featured_image || "/placeholder.svg?height=300&width=400"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-green-100 text-green-800">{project.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>
                      {project.results_metric_1_value} {project.results_metric_1_label?.toLowerCase()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="px-8 py-4">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA - Now Functional */}
      <section id="free-audit" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Your FREE Website Audit</h2>
              <p className="text-xl mb-8 opacity-90">
                Discover exactly what's holding your website back from generating more leads and sales. Our comprehensive
                audit reveals the hidden opportunities in your current site.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>Conversion rate analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>Mobile optimization report</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>SEO improvement suggestions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>Actionable recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span>Competitive analysis</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Audit</h3>
                <LeadMagnetForm
                  leadType="website_audit"
                  buttonText="Get My Free Audit"
                  className="space-y-4"
                />
                <p className="text-sm text-gray-500 text-center mt-4">
                  No spam, no sales calls. Just valuable insights delivered within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
