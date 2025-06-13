import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to Transform
              <span className="text-purple-600"> Your Business?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Let's discuss your project and create a website that drives real
              results. Get your free consultation and website audit today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-4">
                  Start Your Project
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed proposal and timeline for your project.
                </p>
              </CardHeader>
              <CardContent className="px-0">
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-4">Get in Touch</CardTitle>
                  <p className="text-gray-600">
                    Prefer to talk directly? We're here to help answer any
                    questions and discuss your project needs.
                  </p>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">+91 9653-563-214</p>
                      <p className="text-sm text-gray-500">
                        Mon-Fri 9am-6pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        hello@faithcraftagency.com
                      </p>
                      <p className="text-sm text-gray-500">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Live Chat
                      </h3>
                      <p className="text-gray-600">Available on our website</p>
                      <p className="text-sm text-gray-500">
                        Mon-Fri 9am-6pm WST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Office
                      </h3>
                      <p className="text-gray-600">
                        Police Academy Road
                        <br />
                        District #5, Paynesville
                      </p>
                      <p className="text-sm text-gray-500">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">
                    Need Something Specific?
                  </h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="mr-3 h-4 w-4" />
                      Schedule a Free Consultation
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="mr-3 h-4 w-4" />
                      Get a Quick Quote
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="mr-3 h-4 w-4" />
                      Request Website Audit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our process and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-600">
                  Most projects take 4-8 weeks from start to finish, depending
                  on complexity. We'll provide a detailed timeline during our
                  initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">
                  Do you work with small businesses?
                </h3>
                <p className="text-gray-600">
                  We work with businesses of all sizes, from startups to
                  enterprises. Our packages are designed to fit different
                  budgets and needs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">
                  What's included in the website maintenance?
                </h3>
                <p className="text-gray-600">
                  Our maintenance includes security updates, performance
                  monitoring, content updates, and technical support to keep
                  your site running smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">
                  Can you help with SEO and marketing?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer comprehensive SEO optimization and can connect
                  you with our marketing partners for ongoing digital marketing
                  support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't wait any longer. Your competitors are already online. Let's
            build something amazing together.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Get Your Free Website Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
