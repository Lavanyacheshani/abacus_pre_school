"use client"

import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { MapPin, Mail, Clock, Facebook, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactContent() {
  const reduceMotion = useReducedMotion()
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const container: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.6, ease: easeOut, staggerChildren: 0.08 },
    },
  }

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut } },
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/16 via-coral/10 to-sage/16 blur-3xl" />
          <div className="absolute -bottom-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="container mx-auto px-4 relative pt-14 pb-8 md:pt-20 md:pb-10">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm"
            >
              <MapPin className="h-4 w-4 text-coral" />
              <span className="text-sm font-medium text-dark-teal">We’d love to hear from you</span>
            </motion.div>

            <motion.h1 variants={item} className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">Us</span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
              For enquiries, visits, or general information, please use the details below or send us a message.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative pt-8 pb-14 md:pt-10 md:pb-20 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal/12 to-transparent blur-3xl" />
          <div className="absolute bottom-16 right-[-140px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid gap-6 lg:grid-cols-12 items-stretch">
              {/* LEFT */}
              <motion.div variants={item} className="lg:col-span-5 space-y-6">
                <InfoCard
                  icon={<MapPin className="h-5 w-5" />}
                  title="Address"
                  body={
                    <>
                      <p>1 Cambridge Road</p>
                      <p>New Malden, Surrey</p>
                      <p>KT3 3QE</p>
                      <div className="mt-4">
                        <a
                          href="https://www.google.com/maps?q=1+Cambridge+Road,+New+Malden,+KT3+3QE"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-full border border-sage/25 bg-white/70 px-4 py-2 text-sm font-semibold text-dark-teal hover:bg-white"
                        >
                          Open in Maps
                        </a>
                      </div>
                    </>
                  }
                />

                <InfoCard
                  icon={<Mail className="h-5 w-5" />}
                  title="Email Us"
                  body={
                    <>
                      <a
                        href="mailto:manager@abacusnewmalden.co.uk"
                        className="block font-semibold text-dark-teal hover:text-teal"
                      >
                        manager@abacusnewmalden.co.uk
                      </a>
                      <a
                        href="mailto:admin@abacusnewmalden.co.uk"
                        className="block font-semibold text-dark-teal hover:text-teal mt-2"
                      >
                        admin@abacusnewmalden.co.uk
                      </a>
                    </>
                  }
                />

                <InfoCard
                  icon={<Clock className="h-5 w-5" />}
                  title="Opening Hours"
                  body={
                    <>
                      <p className="font-semibold text-dark-teal">Monday to Friday</p>
                      <p>9:00 am to 3:00 pm</p>
                    </>
                  }
                />

                <InfoCard
                  icon={<Facebook className="h-5 w-5" />}
                  title="Social Media"
                  body={
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-coral text-cream px-5 py-2.5 text-sm font-semibold hover:bg-coral-dark"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </a>
                  }
                />
              </motion.div>

              {/* RIGHT */}
              <motion.div variants={item} className="lg:col-span-7 space-y-6">
                <div className="relative rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-teal">Send Us a Message</h2>

                  <form className="mt-6 grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Full Name" placeholder="Your name" />
                      <Field label="Email" placeholder="you@email.com" type="email" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark-teal mb-2">Message</label>
                      <textarea
                        rows={6}
                        className="w-full rounded-2xl border border-sage/20 bg-white/70 px-4 py-3"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <Button className="self-end rounded-full bg-teal hover:bg-dark-teal text-cream px-6">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

/* Helpers */

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: React.ReactNode
}) {
  return (
    <div className="rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-lg p-6">
      <div className="flex gap-3">
        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 flex items-center justify-center text-dark-teal">
          {icon}
        </div>
        <div>
          <div className="text-lg font-bold text-dark-teal">{title}</div>
          <div className="mt-2 text-sm text-sage">{body}</div>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark-teal mb-2">{label}</label>
      <input
        type={type}
        className="w-full rounded-2xl border border-sage/20 bg-white/70 px-4 py-3"
        placeholder={placeholder}
      />
    </div>
  )
}
