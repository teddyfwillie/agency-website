import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight } from "lucide-react"
import { sql } from "@/lib/db"

async function getTestimonials() {
  try {
    const testimonials = await sql`
      SELECT 
        id, client_name, client_title, client_company, client_avatar,
        testimonial_text, rating, project_result, featured, created_at
      FROM testimonials 
      WHERE approved = true
      ORDER BY featured DESC, created_at DESC
    `
    return testimonials
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()
  const featuredTestimonials = testimonials.filter((t) => t.featured)
  const otherTestimonials = testimonials.filter((t) => !t.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800">Client Love</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our Clients
              <span className="text-purple-600"> Say About Us</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Don't just take our word for it. Here's what business owners like you have to say about working with our
              team and the results we've delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {featuredTestimonials.slice(0, 2).map((testimonial) => (
              <Card key={testimonial.id} className="p-8 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-purple-200 mb-4" />
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {testimonial.testimonial_text}
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.client_avatar || "/placeholder.svg?height=60&width=60"}
                      alt={testimonial.client_name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.client_name}</div>
                      <div className="text-gray-600">
                        {testimonial.client_title}, {testimonial.client_company}
                      </div>
                      <Badge className="mt-1 bg-green-100 text-green-800 text-xs">{testimonial.project_result}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Single Large Testimonial */}
          {featuredTestimonials[2] && (
            <Card className="p-12 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center items-center mb-6">
                  {[...Array(featuredTestimonials[2].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-12 w-12 text-purple-300 mx-auto mb-6" />
                <blockquote className="text-2xl text-gray-800 mb-8 leading-relaxed max-w-4xl mx-auto">
                  {featuredTestimonials[2].testimonial_text}
                </blockquote>
                <div className="flex items-center justify-center">
                  <Image
                    src={featuredTestimonials[2].client_avatar || "/placeholder.svg?height=80&width=80"}
                    alt={featuredTestimonials[2].client_name}
                    width={80}
                    height={80}
                    className="rounded-full mr-6"
                  />
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900">{featuredTestimonials[2].client_name}</div>
                    <div className="text-gray-600">
                      {featuredTestimonials[2].client_title}, {featuredTestimonials[2].client_company}
                    </div>
                    <Badge className="mt-2 bg-orange-100 text-orange-800">
                      {featuredTestimonials[2].project_result}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">More Happy Clients</h2>
            <p className="text-xl text-gray-600">Trusted by businesses across various industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">{testimonial.testimonial_text}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.client_avatar || "/placeholder.svg?height=40&width=40"}
                      alt={testimonial.client_name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-sm">{testimonial.client_name}</div>
                      <div className="text-gray-600 text-xs">{testimonial.client_company}</div>
                    </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The Numbers Don't Lie</h2>
            <p className="text-xl text-gray-600">Real results from real clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">180%</div>
              <div className="text-gray-600">Average Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{testimonials.length}+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">95%</div>
              <div className="text-gray-600">Projects Delivered On Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied clients who have transformed their businesses with our help.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
