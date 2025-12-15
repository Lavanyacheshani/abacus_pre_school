"use client"

import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Languages, BadgeCheck } from "lucide-react"

type StaffMember = {
  name: string
  role: string
  image: string
  bio: string
  languages?: string[]
}

export function StaffGrid({ staff }: { staff: StaffMember[] }) {
  const reduceMotion = useReducedMotion()
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const container: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: easeOut, staggerChildren: 0.1 },
    },
  }

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut },
    },
  }

  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-14 left-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal/12 to-transparent blur-3xl" />
        <div className="absolute bottom-14 right-[-140px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Key change: animate on mount (no whileInView / viewport) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {staff.map((m) => (
              <motion.article key={m.name} variants={item} className="group">
                <div className="relative rounded-[22px]">
                  <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/30 via-white/0 to-coral/30 blur-[14px] opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/35 via-sage/20 to-coral/35 opacity-35" />

                  <div className="relative rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-[0_16px_50px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
                    {/* IMAGE AREA (compact + NO CROPPING) */}
                    <div className="relative h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden bg-sage/10">
                      <Image
                        src={m.image}
                        alt={`${m.name} - ${m.role}`}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Name overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3">
                        <div className="text-cream text-base font-bold leading-tight drop-shadow">
                          {m.name}
                        </div>
                        <div className="text-cream/90 text-xs drop-shadow line-clamp-2">
                          {m.role}
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-sm text-sage leading-relaxed line-clamp-3">
                        {m.bio}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/10 px-3 py-1 text-[11px] font-semibold text-dark-teal">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          Abacus Team
                        </span>

                        {m.languages?.length ? (
                          <span className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[11px] font-semibold text-dark-teal">
                            <Languages className="h-3.5 w-3.5" />
                            {m.languages.join(", ")}
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-auto pt-4">
                        <div className="h-[3px] w-8 rounded-full bg-gradient-to-r from-teal to-coral opacity-35 transition-all duration-500 group-hover:w-14 group-hover:opacity-60" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
