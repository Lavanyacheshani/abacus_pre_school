"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Sparkles, CalendarDays, ArrowRight } from "lucide-react"

export function CTASection() {
  const reduceMotion = useReducedMotion()
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const container: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.55, ease: easeOut, staggerChildren: 0.08 },
    },
  }

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut } },
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-24 text-cream">
      {/* Background: aurora gradients + subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-teal via-teal to-sage" />
      <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.85)_2px,transparent_2px)] [background-size:40px_40px]" />

      {/* Moving aurora ribbons */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-[320px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-coral/25 via-white/10 to-teal/25 blur-3xl"
        animate={reduceMotion ? undefined : { x: ["-50%", "-48%", "-50%"], y: [-10, 8, -10] }}
        transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-white/14 to-transparent blur-3xl"
        animate={reduceMotion ? undefined : { y: [0, -18, 0], x: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-16 left-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-coral/18 to-transparent blur-3xl"
        animate={reduceMotion ? undefined : { y: [0, 18, 0], x: [0, 10, 0] }}
        transition={reduceMotion ? undefined : { duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass panel */}
          <motion.div
            variants={item}
            className="relative rounded-[28px] border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_22px_70px_rgba(0,0,0,0.22)] px-7 py-10 md:px-12 md:py-12 text-center overflow-hidden"
          >
            {/* Top sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/18 to-transparent" />
            {/* Inner glow */}
            <div className="pointer-events-none absolute -inset-1 rounded-[30px] bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-70" />

            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/20 px-4 py-2">
              <Sparkles className="h-4 w-4 text-cream" />
              <span className="text-sm font-medium text-cream/95">Take the next step</span>
            </motion.div>

            <motion.h2 variants={item} className="mt-5 text-3xl md:text-5xl font-bold text-balance">
              Ready to join the Abacus family?
            </motion.h2>

            <motion.p variants={item} className="mt-5 text-lg md:text-xl text-cream/90 text-pretty max-w-3xl mx-auto">
              Give your child the best start in their learning journey. Apply now or book a visit to see our nurturing
              environment firsthand.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group relative bg-coral hover:bg-coral-dark text-cream rounded-full text-lg px-8 shadow-[0_16px_50px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
                asChild
              >
                <Link href="/admissions" className="inline-flex items-center">
                  <motion.span
                    aria-hidden="true"
                    animate={reduceMotion ? undefined : { rotate: [0, -6, 6, -4, 4, 0] }}
                    transition={reduceMotion ? undefined : { duration: 1.2, repeat: Infinity, repeatDelay: 6 }}
                    className="inline-flex items-center"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                  </motion.span>
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-white/22 skew-x-[-20deg] translate-x-[-120%] group-hover:translate-x-[260%] transition-transform duration-700" />
                </Link>
              </Button>

              {/* FIX: outline button contrast + nicer glass */}
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 border-2 border-white/70 text-white bg-white/12 hover:bg-white hover:text-dark-teal backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]"
                asChild
              >
                <Link href="/contact#book-visit" className="inline-flex items-center">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book a Visit
                </Link>
              </Button>
            </motion.div>

            {/* Small reassurance line */}
            <motion.p variants={item} className="mt-7 text-sm text-cream/85">
              Prefer to chat first? Visit our Contact page and we’ll get back to you promptly.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
