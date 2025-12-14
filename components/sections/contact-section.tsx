"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Facebook, Clock, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-cream via-cream-light to-sage/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-[320px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/14 via-coral/10 to-sage/14 blur-3xl" />
        <div className="absolute -bottom-24 right-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
              <MapPin className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium text-dark-teal">We’d love to hear from you</span>
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-dark-teal tracking-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="mt-3 text-lg text-sage">For enquiries, visits, or general information.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="border-0 rounded-[22px] bg-white/85 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.10)] overflow-hidden">
                <CardContent className="p-7 md:p-8">
                  <h3 className="text-2xl font-bold text-dark-teal mb-6">Contact Details</h3>

                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-dark-teal" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-dark-teal mb-1">Address</p>
                        <p className="text-sage leading-relaxed">
                          1, Cambridge Rd,
                          <br />
                          New Malden,
                          <br />
                          Surrey,
                          <br />
                          KT3 3QE
                        </p>

                        <div className="mt-3 flex flex-wrap gap-3">
                          <a
                            href="https://www.google.com/maps?q=1+Cambridge+Rd,+New+Malden,+Surrey,+KT3+3QE"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-sage/25 bg-white/70 px-4 py-2 text-sm font-semibold text-dark-teal hover:bg-white transition-colors"
                          >
                            Open in Maps <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sage/15 to-teal/10 border border-sage/15 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-dark-teal" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-dark-teal mb-1">Email us</p>

                        <div className="space-y-2">
                          <div className="rounded-2xl border border-sage/15 bg-sage/10 px-4 py-3">
                            <div className="text-xs font-semibold text-dark-teal">Manager</div>
                            <a
                              href="mailto:manager@abacusnewmalden.co.uk"
                              className="text-sm font-semibold text-dark-teal hover:text-teal transition-colors break-words"
                            >
                              manager@abacusnewmalden.co.uk
                            </a>
                          </div>

                          <div className="rounded-2xl border border-sage/15 bg-sage/10 px-4 py-3">
                            <div className="text-xs font-semibold text-dark-teal">Admin</div>
                            <a
                              href="mailto:admin@abacusnewmalden.co.uk"
                              className="text-sm font-semibold text-dark-teal hover:text-teal transition-colors break-words"
                            >
                              admin@abacusnewmalden.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral/15 to-orange/10 border border-sage/15 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-dark-teal" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark-teal mb-1">Opening Hours</p>
                        <p className="text-sage">
                          <span className="font-semibold text-dark-teal">Mon – Fri</span>
                          <br />
                          9:00 am – 3:00 pm
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social */}
              <Card className="border-0 rounded-[22px] bg-white/85 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
                <CardContent className="p-7 md:p-8">
                  <h3 className="text-2xl font-bold text-dark-teal mb-3">Social Media</h3>
                  <p className="text-sage leading-relaxed mb-6">
                    Follow us for updates, photos, and news about events and activities.
                  </p>

                  <Button
                    size="lg"
                    className="rounded-full bg-coral hover:bg-coral-dark text-cream shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                    asChild
                  >
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Facebook className="w-5 h-5" />
                      Facebook
                      <ArrowUpRight className="w-4 h-4 opacity-90" />
                    </a>
                  </Button>

                  <p className="mt-3 text-xs text-sage">
                    Replace the Facebook URL with your real page link.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:col-span-7">
              <Card className="border-0 rounded-[22px] bg-white/85 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.10)] overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div className="p-6 md:p-7 border-b border-sage/10 bg-white/70">
                    <h3 className="text-2xl font-bold text-dark-teal">Find us</h3>
                    <p className="mt-2 text-sage">
                      1 Cambridge Rd, New Malden, Surrey, KT3 3QE
                    </p>
                  </div>

                  <div className="relative w-full h-[420px] bg-sage/10">
                    <iframe
                      title="Abacus Pre-school map"
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=1%20Cambridge%20Rd%2C%20New%20Malden%2C%20Surrey%2C%20KT3%203QE&z=16&output=embed"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
