"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Users, Heart, Star, CheckCircle, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "Small Class Sizes",
    desc: "Attention for every child",
    color: "from-teal to-dark-teal",
  },
  {
    icon: Heart,
    title: "Nurturing Environment",
    desc: "Safe, warm, and supportive space",
    color: "from-coral to-orange",
  },
  {
    icon: Star,
    title: "Experienced Staff",
    desc: "Qualified early years educators",
    color: "from-sage to-teal",
  },
  {
    icon: CheckCircle,
    title: "Flexible Funding",
    desc: "Multiple funding options available",
    color: "from-orange to-coral",
  },
]

export function HighlightsSection() {
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

  const card: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut },
    },
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-teal/5 via-white to-sage/5">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-[-60px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-coral/16 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 left-[-60px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal/16 to-transparent blur-3xl" />
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
          <motion.div
            className="text-center mb-10 md:mb-12"
            variants={{
              hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut } },
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-coral" />
              <span className="text-sm font-medium text-dark-teal">What makes Abacus special</span>
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-dark-teal tracking-tight">
              Why Choose{" "}
              <span className="text-teal font-bold">
                Abacus
              </span>
              ?
            </h2>

            <p className="mt-4 text-base md:text-lg text-sage max-w-2xl mx-auto leading-relaxed">
              Thoughtful care, purposeful learning, and a community where children feel confident to try, explore, and grow.
            </p>

            <div className="mt-6 h-[3px] w-28 mx-auto rounded-full bg-gradient-to-r from-transparent via-coral to-transparent" />
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <motion.div key={idx} variants={card}>
                <Card className="group relative border-0 bg-white/75 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_14px_44px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_70px_rgba(0,0,0,0.16)]">
                  {/* Subtle gradient border */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
                  <div
                    className={`pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${item.color} opacity-[0.10] blur-[18px] transition-opacity duration-500 group-hover:opacity-[0.16]`}
                  />

                  <CardContent className="relative p-6 text-center">
                    {/* Top sheen */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/55 to-transparent opacity-70" />

                    {/* Icon */}
                    <motion.div
                      className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-[0_16px_40px_rgba(0,0,0,0.18)]`}
                      whileHover={reduceMotion ? undefined : { rotate: 6, scale: 1.06 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <item.icon className="h-8 w-8 text-cream" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-dark-teal">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sage">{item.desc}</p>

                    {/* Hover underline accent */}
                    <div className="mt-5 flex justify-center">
                      <div className={`h-[3px] w-10 rounded-full bg-gradient-to-r ${item.color} opacity-35 transition-all duration-500 group-hover:w-16 group-hover:opacity-60`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes chooseGradient {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
