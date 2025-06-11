import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Palette, Code, Search, BarChart, Headphones } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="text-purple-600"> Dominate Online</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From stunning designs to powerful development, we offer comprehensive solutions that transform your
              digital presence and drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
            <p className="text-xl text-gray-600">Transparent pricing, no hidden fees, guaranteed results</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <p className="text-gray-600 mb-4">Perfect for small businesses and startups</p>
                <div className="text-4xl font-bold text-gray-900">
                  $2,997
                  <span className="text-lg font-normal text-gray-500">/project</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>5-page custom website</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Mobile-responsive design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Basic SEO optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Contact form integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>2 rounds of revisions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>30 days support</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="relative hover:shadow-xl transition-shadow border-purple-200 border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Professional</CardTitle>
                <p className="text-gray-600 mb-4">Ideal for growing businesses</p>
                <div className="text-4xl font-bold text-gray-900">
                  $5,997
                  <span className="text-lg font-normal text-gray-500">/project</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span>10-page custom website</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span>Advanced animations & interactions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span>CMS integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span>E-commerce functionality</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span>Advanced SEO optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span>Analytics setup</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span>3 rounds of revisions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    <span>60 days support</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <p className="text-gray-600 mb-4">For established businesses & corporations</p>
                <div className="text-4xl font-bold text-gray-900">
                  $12,997
                  <span className="text-lg font-normal text-gray-500">/project</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Unlimited pages</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Custom web application</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Advanced integrations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Multi-language support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Performance optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Security hardening</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>Unlimited revisions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span>6 months support</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Individual Services</h2>
            <p className="text-xl text-gray-600">Need something specific? We offer individual services too.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                <p className="text-gray-600 mb-6">
                  Beautiful, user-centered designs that convert visitors into customers.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-4">From $1,497</div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-600 mb-6">
                  Fast, secure, and scalable websites built with modern technologies.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-4">From $2,497</div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
                <p className="text-gray-600 mb-6">Get found on Google and drive more organic traffic to your site.</p>
                <div className="text-2xl font-bold text-gray-900 mb-4">From $997</div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Conversion Optimization</h3>
                <p className="text-gray-600 mb-6">Increase your conversion rates with data-driven optimization.</p>
                <div className="text-2xl font-bold text-gray-900 mb-4">From $1,997</div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Website Maintenance</h3>
                <p className="text-gray-600 mb-6">Keep your website secure, updated, and performing at its best.</p>
                <div className="text-2xl font-bold text-gray-900 mb-4">From $297/mo</div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Consulting</h3>
                <p className="text-gray-600 mb-6">Strategic guidance to help you make the right digital decisions.</p>
                <div className="text-2xl font-bold text-gray-900 mb-4">$197/hour</div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">A proven methodology that delivers results every time</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery</h3>
              <p className="text-gray-600">
                We dive deep into your business, goals, and target audience to create a strategic foundation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p className="text-gray-600">
                Our designers create stunning mockups that align with your brand and conversion goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Develop</h3>
              <p className="text-gray-600">
                We bring your design to life with clean, fast, and secure code that performs beautifully.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Launch</h3>
              <p className="text-gray-600">
                We handle the technical details of launching your site and provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and create a website that drives real results for your business.
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
