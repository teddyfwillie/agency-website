import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight, TrendingUp } from "lucide-react"
import { sql } from "@/lib/db"

async function getPortfolioProjects() {
  try {
    const projects = await sql`
      SELECT 
        id, title, slug, description, category, featured_image,
        client_name, project_url, case_study_url,
        results_metric_1_label, results_metric_1_value,
        results_metric_2_label, results_metric_2_value,
        technologies, featured, created_at
      FROM portfolio_projects 
      WHERE published = true
      ORDER BY featured DESC, created_at DESC
    `
    return projects
  } catch (error) {
    console.error("Error fetching portfolio projects:", error)
    return []
  }
}

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects()
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800">Our Work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success Stories That
              <span className="text-purple-600"> Speak for Themselves</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of websites that have transformed businesses and delivered exceptional results for
              our clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600">Our most impactful work that drove real business results</p>
          </div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Badge className="mb-4 bg-green-100 text-green-800">{project.category}</Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">{project.results_metric_1_value}</div>
                      <div className="text-sm text-gray-600">{project.results_metric_1_label}</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{project.results_metric_2_value}</div>
                      <div className="text-sm text-gray-600">{project.results_metric_2_label}</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      Visit Site
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={project.featured_image || "/placeholder.svg?height=600&width=800"}
                    alt={`${project.title} website design`}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">More Projects</h2>
            <p className="text-xl text-gray-600">Explore our diverse portfolio across different industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <Image
                    src={project.featured_image || "/placeholder.svg?height=300&width=400"}
                    alt={`${project.title} website`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800">{project.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                      <span>
                        {project.results_metric_1_value} {project.results_metric_1_label?.toLowerCase()}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Project
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create a website that not only looks amazing but drives real results for your business.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
