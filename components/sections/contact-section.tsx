import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">Get in Touch</h2>
            <p className="text-lg text-sage">We'd love to hear from you</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-soft rounded-2xl bg-gradient-to-br from-cream to-cream-light backdrop-blur-sm hover:shadow-glow-lg transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark-teal mb-6">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/10 to-sage/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-teal mb-1">Address</p>
                      <p className="text-sage">
                        1 Cambridge Road
                        <br />
                        New Malden
                        <br />
                        Surrey, KT3 3QE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral/10 to-orange/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-teal mb-1">Phone</p>
                      <p className="text-sage">07934 133 701</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage/10 to-teal/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-dark-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-teal mb-1">Email</p>
                      <p className="text-sage text-sm">Manager: manager@abacusnewmalden.co.uk</p>
                      <p className="text-sage text-sm">Admin: admin@abacusnewmalden.co.uk</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft rounded-2xl bg-gradient-to-br from-teal/5 to-sage/5 backdrop-blur-sm hover:shadow-glow-lg transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark-teal mb-6">Connect With Us</h3>
                <p className="text-sage leading-relaxed mb-6">
                  Follow us on social media for updates, photos, and news about upcoming events and activities.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-teal text-teal hover:bg-teal hover:text-cream rounded-full bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                </div>
                <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-inner">
                  <h4 className="font-bold text-dark-teal mb-3">Opening Hours</h4>
                  <p className="text-sage text-sm leading-relaxed">
                    We operate during term time with sessions from 8:30 am to 3:00 pm. Please contact us for term dates
                    and availability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
