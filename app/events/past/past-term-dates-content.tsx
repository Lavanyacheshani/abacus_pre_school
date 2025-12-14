"use client"

import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { CalendarDays, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type TermBlock = {
  termTitle: string
  subtitle?: string
  items: Array<{
    label: string
    value: string
    kind?: "event" | "closure" | "term" | "break"
  }>
}

export function PastTermDatesContent() {
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
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut } },
  }

  const blocks: TermBlock[] = [
    {
      termTitle: "Term Dates and Events for Your Diary",
      subtitle: "Key dates and term times for 2025",
      items: [{ label: "Christmas Concert", value: "TBC", kind: "event" }],
    },
    {
      termTitle: "Summer Term 2025",
      items: [
        { label: "Staff Day", value: "Tuesday 22 April 2025", kind: "closure" },
        { label: "Term Begins", value: "Wednesday 23 April – Friday 23 May 2025", kind: "term" },
        { label: "Bank Holiday", value: "Monday 5 May 2025", kind: "closure" },
        { label: "Half Term", value: "Monday 26 May – Friday 30 May 2025", kind: "break" },
        { label: "Term Begins", value: "Monday 2 June – Tuesday 22 July 2025 (No Afternoon Session)", kind: "term" },
      ],
    },
    {
      termTitle: "Autumn Term 2025",
      items: [
        { label: "Staff Day", value: "Tuesday 2 September 2025", kind: "closure" },
        { label: "Term Begins", value: "Wednesday 3 September – Friday 24 October 2025", kind: "term" },
        { label: "Half Term Break", value: "Monday 27 October – Friday 31 October 2025", kind: "break" },
        { label: "Term Begins", value: "Monday 3 November – Friday 19 December 2025 (No Afternoon Session)", kind: "term" },
        { label: "Christmas Break", value: "Monday 23 December 2025 – Friday 2 January 2026", kind: "closure" },
      ],
    },
  ]

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
              <Sparkles className="h-4 w-4 text-coral" />
              <span className="text-sm font-medium text-dark-teal">Dates for your diary</span>
            </motion.div>

            <motion.h1 variants={item} className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
              Term Dates{" "}
              <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                &amp; Events
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
              Staff days, term dates, half terms, closures and key events for the year.
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
            <div className="grid gap-6">
              {blocks.map((block, i) => (
                <motion.div key={i} variants={item} className="relative rounded-[22px]">
                  <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/18 via-white/0 to-coral/18 blur-[16px] opacity-70" />
                  <div className="relative rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-dark-teal">{block.termTitle}</h2>
                        {block.subtitle ? (
                          <p className="mt-2 text-sm text-sage leading-relaxed">{block.subtitle}</p>
                        ) : null}
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 border border-sage/15 px-4 py-2 text-sm font-semibold text-dark-teal">
                        <CalendarDays className="h-4 w-4 text-teal" />
                        Dates
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {block.items.map((row, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl border border-sage/15 bg-white/70 px-4 py-3"
                        >
                          <div className="flex items-center gap-2">
                            <span className={pillClass(row.kind)}>{labelText(row.kind)}</span>
                            <span className="text-sm font-semibold text-dark-teal">{row.label}</span>
                          </div>
                          <div className="text-sm text-sage sm:text-right">{row.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={item} className="mt-10 text-center">
              <div className="inline-flex flex-col items-center gap-3">
                <div className="inline-flex items-center gap-2 text-sage text-sm">
                  <Clock className="h-4 w-4 text-teal" />
                  <span>Dates may change. We will update this page if anything moves.</span>
                </div>

                <Button
                  asChild
                  className="rounded-full bg-teal hover:bg-dark-teal text-cream px-7 shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                >
                  <Link href="/contact#book-visit">Contact us for more details</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function pillClass(kind?: "event" | "closure" | "term" | "break") {
  switch (kind) {
    case "event":
      return "inline-flex items-center rounded-full bg-coral/15 border border-coral/20 px-2.5 py-1 text-[11px] font-semibold text-dark-teal"
    case "closure":
      return "inline-flex items-center rounded-full bg-teal/15 border border-teal/20 px-2.5 py-1 text-[11px] font-semibold text-dark-teal"
    case "break":
      return "inline-flex items-center rounded-full bg-sage/18 border border-sage/25 px-2.5 py-1 text-[11px] font-semibold text-dark-teal"
    case "term":
    default:
      return "inline-flex items-center rounded-full bg-white/60 border border-white/70 px-2.5 py-1 text-[11px] font-semibold text-dark-teal"
  }
}

function labelText(kind?: "event" | "closure" | "term" | "break") {
  switch (kind) {
    case "event":
      return "EVENT"
    case "closure":
      return "CLOSED"
    case "break":
      return "BREAK"
    case "term":
    default:
      return "TERM"
  }
}
