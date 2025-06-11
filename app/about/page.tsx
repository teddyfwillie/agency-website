import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We're Not Just Designers—
              <span className="text-purple-600"> We're Growth Partners</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2020 with a simple mission: help businesses succeed online with websites that don't just look
              great, but actually drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From Frustration to Innovation</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  It all started when our founder, Sarah Chen, was running her own e-commerce business. Despite having a
                  "beautiful" website, she wasn't getting the sales she expected.
                </p>
                <p className="text-lg">
                  After months of research and testing, she discovered the problem: her website looked great but wasn't
                  designed for conversions. That's when everything changed.
                </p>
                <p className="text-lg">
                  Today, we've helped over 200+ businesses increase their online revenue by an average of 180% through
                  strategic design and optimization.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our founder Sarah Chen working on designs"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">180%</div>
              <div className="text-gray-600">Avg Revenue Increase</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate group of designers, developers, and strategists dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sarah Chen - Founder & CEO"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Sarah Chen</h3>
                <p className="text-purple-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Former e-commerce entrepreneur with 8+ years in conversion optimization. Passionate about turning
                  websites into revenue machines.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Marcus Rodriguez - Lead Designer"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Marcus Rodriguez</h3>
                <p className="text-purple-600 font-medium mb-4">Lead Designer</p>
                <p className="text-gray-600 text-sm">
                  Award-winning designer with expertise in user psychology and visual storytelling. Creates designs that
                  captivate and convert.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Emily Watson - Head of Development"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Emily Watson</h3>
                <p className="text-purple-600 font-medium mb-4">Head of Development</p>
                <p className="text-gray-600 text-sm">
                  Full-stack developer specializing in performance optimization and SEO. Ensures every site is
                  lightning-fast and search-friendly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="David Kim - Strategy Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">David Kim</h3>
                <p className="text-purple-600 font-medium mb-4">Strategy Director</p>
                <p className="text-gray-600 text-sm">
                  Digital marketing strategist with deep expertise in conversion rate optimization and user experience
                  design.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Lisa Thompson - Project Manager"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Lisa Thompson</h3>
                <p className="text-purple-600 font-medium mb-4">Project Manager</p>
                <p className="text-gray-600 text-sm">
                  Ensures every project runs smoothly and on time. Your dedicated point of contact throughout the entire
                  process.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Alex Johnson - SEO Specialist"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-purple-600 font-medium mb-4">SEO Specialist</p>
                <p className="text-gray-600 text-sm">
                  Technical SEO expert who ensures your website ranks high in search results and attracts qualified
                  traffic.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Client-First</h3>
                <p className="text-gray-600">
                  Your success is our success. Every decision we make is focused on delivering results for your
                  business.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We don't settle for good enough. Every project receives our full attention and expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Reliability</h3>
                <p className="text-gray-600">
                  We deliver on time, every time. You can count on us to meet deadlines and exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Passion</h3>
                <p className="text-gray-600">
                  We love what we do, and it shows in every pixel, every line of code, and every interaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
