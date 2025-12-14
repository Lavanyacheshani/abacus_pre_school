"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, ArrowUpRight, Clock, ChevronUp } from "lucide-react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

export function Footer() {
  const reduceMotion = useReducedMotion()
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const container: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.55, ease: easeOut, staggerChildren: 0.06 },
    },
  }

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut } },
  }

  return (
    <footer className="relative overflow-hidden bg-dark-teal text-cream">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[320px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/20 via-coral/10 to-sage/20 blur-3xl opacity-80" />
        <div className="absolute -bottom-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-6xl mx-auto py-14 md:py-16"
        >
          {/* Top row: brand + back to top */}
          <motion.div variants={item} className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal to-sage flex items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
                  <span className="text-cream font-bold text-lg">A</span>
                </div>
                <div className="leading-tight">
                  <div className="text-lg font-bold tracking-tight">Abacus Pre-school</div>
                  <div className="text-sm text-cream/75">New Malden</div>
                </div>
              </div>

            </div>

            <a
              href="#home"
              className="group inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-cream/90 hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Back to top"
            >
              Back to top
              <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Link grid */}
          <div className="grid gap-8 md:grid-cols-4">
            <motion.div variants={item}>
              <h3 className="font-semibold text-cream mb-3">Who we are</h3>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>
                  <FooterLink href="/who-we-are/our-staff">Our Staff</FooterLink>
                </li>
                <li>
                  <FooterLink href="/who-we-are/mission-vision-values">Mission, Purpose, Vision & Values</FooterLink>
                </li>
                <li>
                  <FooterLink href="/who-we-are/learning-journeys">Learning Journeys</FooterLink>
                </li>
                <li>
                  <FooterLink href="/who-we-are/policies-procedures">Policies & Procedures</FooterLink>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="font-semibold text-cream mb-3">Sessions & fees</h3>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>
                  <FooterLink href="/sessions-and-fees">Sessions & Fees</FooterLink>
                </li>
                <li>
                  <FooterLink href="/admissions">Admissions</FooterLink>
                </li>
                <li>
                  <FooterLink href="/holiday-club">Holiday Club</FooterLink>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="font-semibold text-cream mb-3">Blogs & Events</h3>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>
                  <FooterLink href="/news">Blogs</FooterLink>
                </li>
                <li>
                  <FooterLink href="/events/calendar">Event Calendar</FooterLink>
                </li>
                <li>
                  <FooterLink href="/events/upcoming">Upcoming Events</FooterLink>
                </li>
                <li>
                  <FooterLink href="/events/past">Past Events</FooterLink>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="font-semibold text-cream mb-3">Contact</h3>

              <div className="space-y-3 text-sm text-cream/80">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-cream/90" />
                  <p>
                    1 Cambridge Road,
                    <br />
                    New Malden, Surrey, KT3 3QE
                  </p>
                </div>

                <a
                  href="tel:+447934133701"
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Phone className="h-4 w-4 text-cream/90" />
                  07934 133 701
                </a>

                {/* Optional: if you have an email, replace example below */}
                <a
                  href="mailto:info@abacusnewmalden.co.uk"
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Mail className="h-4 w-4 text-cream/90" />
                  info@abacusnewmalden.co.uk
                </a>

                <a
                  href="https://www.google.com/maps?q=1+Cambridge+Road,+New+Malden,+Surrey,+KT3+3QE"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-cream/90 hover:bg-white/15 transition-colors"
                >
                  Open in Maps <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            variants={item}
            className="mt-10 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/75"
          >
            <p>© {new Date().getFullYear()} Abacus Pre-school New Malden. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <FooterLink href="/who-we-are#policies">Privacy & Policies</FooterLink>
              <span className="opacity-40">•</span>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 hover:text-cream transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 rounded-md"
    >
      <span className="h-[2px] w-0 bg-gradient-to-r from-teal to-coral rounded-full transition-all duration-300 group-hover:w-6" />
      <span>{children}</span>
    </Link>
  )
}
