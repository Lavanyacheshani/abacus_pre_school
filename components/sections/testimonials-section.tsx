"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Star, Sparkles, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    text: "The staff are incredibly caring and attentive. My daughter has flourished here!",
  },
  {
    name: "James P.",
    text: "A wonderful environment where children truly learn through play. Highly recommend.",
  },
  {
    name: "Priya K.",
    text: "The diverse and inclusive atmosphere makes every child feel welcome and valued.",
  },
]

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion()
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const container: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.55, ease: easeOut, staggerChildren: 0.1 },
    },
  }

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut } },
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-sage/5 to-cream">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-[-70px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal/14 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 right-[-70px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-coral/14 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-coral" />
              <span className="text-sm font-medium text-dark-teal">Trusted by parents</span>
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-dark-teal tracking-tight">
              What Parents{" "}
              <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent animate-[testimonialsGradient_10s_linear_infinite]">
                Say
              </span>
            </h2>

            <p className="mt-4 text-base md:text-lg text-sage max-w-2xl mx-auto leading-relaxed">
              Real feedback from families who have been part of our pre-school community.
            </p>

            <div className="mt-6 h-[3px] w-28 mx-auto rounded-full bg-gradient-to-r from-transparent via-coral to-transparent" />
          </motion.div>

          {/* Cards: grid on desktop, swipeable snap row on mobile */}
          <div className="md:grid md:grid-cols-3 md:gap-6 flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <motion.div key={idx} variants={item} className="min-w-[85%] sm:min-w-[60%] md:min-w-0 snap-center">
                <Card className="group relative border-0 rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_14px_44px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_70px_rgba(0,0,0,0.16)] overflow-hidden">
                  {/* Soft gradient glow */}
                  <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-teal/22 via-white/0 to-coral/22 opacity-70 blur-[18px]" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />

                  <CardContent className="relative p-7">
                    {/* Quote mark */}
                    <div className="absolute top-5 right-5 opacity-10">
                      <Quote className="h-10 w-10 text-dark-teal" />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={reduceMotion ? undefined : { opacity: 0.6, scale: 0.98 }}
                          animate={reduceMotion ? undefined : { opacity: [0.65, 1, 0.8], scale: [0.98, 1.02, 1] }}
                          transition={reduceMotion ? undefined : { duration: 2.4, repeat: Infinity, delay: i * 0.12 }}
                        >
                          <Star className="h-5 w-5 fill-coral text-coral" />
                        </motion.span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sage leading-relaxed italic">
                      <span className="text-dark-teal/70 font-semibold">“</span>
                      {t.text}
                      <span className="text-dark-teal/70 font-semibold">”</span>
                    </p>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between">
                      <p className="font-semibold text-dark-teal">— {t.name}</p>

                      {/* Small accent pill */}
                      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal/10 to-coral/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile hint */}
          <motion.div variants={item} className="mt-5 text-center md:hidden">
            <p className="text-xs text-sage">Swipe to see more</p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes testimonialsGradient {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        /* Hide scrollbar without breaking scroll */
        .snap-x::-webkit-scrollbar { display: none; }
        .snap-x { scrollbar-width: none; }
      `}</style>
    </section>
  )
}
