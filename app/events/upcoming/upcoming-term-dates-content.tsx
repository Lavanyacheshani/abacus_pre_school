"use client"

import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { CalendarDays, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type TermBlock = {
    termTitle: string
    items: Array<{
        label: string
        value: string
        kind?: "closure" | "term" | "break"
    }>
}

export function UpcomingTermDatesContent() {
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
            termTitle: "Spring Term 2026",
            items: [
                { label: "Staff Day", value: "Monday 5 January 2026", kind: "closure" },
                { label: "Term Begins", value: "Tuesday 6 January – Friday 13 February 2026", kind: "term" },
                { label: "Half Term Break", value: "Monday 16 February – Friday 20 February 2026", kind: "break" },
                { label: "Term Begins", value: "Monday 23 February – Friday 27 March 2026 (No Afternoon Session)", kind: "term" },
                { label: "Easter Break", value: "Monday 30 March – Friday 10 April 2026", kind: "closure" },
            ],
        },
        {
            termTitle: "Summer Term 2026",
            items: [
                { label: "Staff Day", value: "Monday 13 April 2026", kind: "closure" },
                { label: "Term Begins", value: "Tuesday 14 April – Friday 22 May 2026", kind: "term" },
                { label: "Bank Holiday", value: "Monday 4 May 2026", kind: "closure" },
                { label: "Half Term", value: "Monday 25 May – Friday 29 May 2026", kind: "break" },
                { label: "Term Begins", value: "Monday 1 June – Friday 17 July 2026 (No Afternoon Session)", kind: "term" },
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
                            <span className="text-sm font-medium text-dark-teal">Upcoming term dates</span>
                        </motion.div>

                        <motion.h1 variants={item} className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
                            Upcoming{" "}
                            <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                                Term Dates
                            </span>
                        </motion.h1>

                        <motion.p variants={item} className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
                            Spring and Summer term dates for 2026, including staff days, half term breaks, and closures.
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
                                                <p className="mt-2 text-sm text-sage leading-relaxed">
                                                    Sessions marked “No Afternoon Session” apply to afternoon attendance only.
                                                </p>
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
                                    <Link href="/contact#book-visit">Contact us to book a visit</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

function pillClass(kind?: "closure" | "term" | "break") {
    switch (kind) {
        case "closure":
            return "inline-flex items-center rounded-full bg-teal/15 border border-teal/20 px-2.5 py-1 text-[11px] font-semibold text-dark-teal"
        case "break":
            return "inline-flex items-center rounded-full bg-sage/18 border border-sage/25 px-2.5 py-1 text-[11px] font-semibold text-dark-teal"
        case "term":
        default:
            return "inline-flex items-center rounded-full bg-white/60 border border-white/70 px-2.5 py-1 text-[11px] font-semibold text-dark-teal"
    }
}

function labelText(kind?: "closure" | "term" | "break") {
    switch (kind) {
        case "closure":
            return "CLOSED"
        case "break":
            return "BREAK"
        case "term":
        default:
            return "TERM"
    }
}
