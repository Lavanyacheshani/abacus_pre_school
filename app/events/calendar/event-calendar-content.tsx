"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { CalendarDays, ChevronLeft, ChevronRight, Clock, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type EventType = "event" | "term" | "break" | "closure"

type CalendarEvent = {
    id: string
    title: string
    dateISO: string // YYYY-MM-DD
    time?: string
    location?: string
    type: EventType
    description?: string
}

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

function pad2(n: number) {
    return String(n).padStart(2, "0")
}

function toISODate(d: Date) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

function startOfMonth(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), 1)
}

function addMonths(d: Date, count: number) {
    return new Date(d.getFullYear(), d.getMonth() + count, 1)
}

// Return Monday-based day index: Mon=0 ... Sun=6
function mondayIndex(date: Date) {
    const js = date.getDay() // Sun=0 ... Sat=6
    return (js + 6) % 7
}

function startOfCalendarGrid(monthDate: Date) {
    const first = startOfMonth(monthDate)
    const offset = mondayIndex(first)
    const gridStart = new Date(first)
    gridStart.setDate(first.getDate() - offset)
    return gridStart
}

function sameMonth(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

function formatMonthTitle(d: Date) {
    return d.toLocaleString("en-GB", { month: "long", year: "numeric" })
}

function formatLongDate(d: Date) {
    return d.toLocaleString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
}

function typePillClass(type: EventType) {
    switch (type) {
        case "event":
            return "bg-coral/15 border-coral/20"
        case "closure":
            return "bg-teal/15 border-teal/20"
        case "break":
            return "bg-sage/18 border-sage/25"
        case "term":
        default:
            return "bg-white/60 border-white/70"
    }
}

function typePillText(type: EventType) {
    switch (type) {
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

export function EventCalendarContent() {
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

    // Your events: edit/extend these anytime.
    // Use ISO date strings: "YYYY-MM-DD"
    const events: CalendarEvent[] = [
        { id: "cc-tbc", title: "Christmas Concert", dateISO: "2025-12-01", type: "event", description: "TBC (date to be confirmed)" },

        { id: "sd-sum-2025", title: "Staff Day", dateISO: "2025-04-22", type: "closure" },
        { id: "bh-2025-05-05", title: "Bank Holiday", dateISO: "2025-05-05", type: "closure" },
        { id: "ht-sum-2025", title: "Half Term", dateISO: "2025-05-26", type: "break", description: "Half term week starts" },

        { id: "sd-aut-2025", title: "Staff Day", dateISO: "2025-09-02", type: "closure" },
        { id: "ht-aut-2025", title: "Half Term Break", dateISO: "2025-10-27", type: "break", description: "Half term week starts" },
        { id: "xmas-break-2025", title: "Christmas Break", dateISO: "2025-12-23", type: "closure", description: "School closed for Christmas break" },

        { id: "sd-spr-2026", title: "Staff Day", dateISO: "2026-01-05", type: "closure" },
        { id: "ht-spr-2026", title: "Half Term Break", dateISO: "2026-02-16", type: "break" },
        { id: "easter-break-2026", title: "Easter Break", dateISO: "2026-03-30", type: "closure" },

        { id: "sd-sum-2026", title: "Staff Day", dateISO: "2026-04-13", type: "closure" },
        { id: "bh-2026-05-04", title: "Bank Holiday", dateISO: "2026-05-04", type: "closure" },
        { id: "ht-sum-2026", title: "Half Term", dateISO: "2026-05-25", type: "break" },
    ]

    const eventsByDate = useMemo(() => {
        const map = new Map<string, CalendarEvent[]>()
        for (const e of events) {
            const arr = map.get(e.dateISO) ?? []
            arr.push(e)
            map.set(e.dateISO, arr)
        }
        return map
    }, [events])

    const today = useMemo(() => {
        const d = new Date()
        d.setHours(0, 0, 0, 0)
        return d
    }, [])

    const [month, setMonth] = useState<Date>(startOfMonth(today))
    const [selectedISO, setSelectedISO] = useState<string>(toISODate(today))

    const gridStart = useMemo(() => startOfCalendarGrid(month), [month])

    const days = useMemo(() => {
        const out: Date[] = []
        const d = new Date(gridStart)
        for (let i = 0; i < 42; i++) {
            out.push(new Date(d))
            d.setDate(d.getDate() + 1)
        }
        return out
    }, [gridStart])

    const selectedDate = useMemo(() => {
        const [y, m, day] = selectedISO.split("-").map(Number)
        return new Date(y, (m ?? 1) - 1, day ?? 1)
    }, [selectedISO])

    const selectedEvents = eventsByDate.get(selectedISO) ?? []

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
                            <span className="text-sm font-medium text-dark-teal">Plan ahead with confidence</span>
                        </motion.div>

                        <motion.h1 variants={item} className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
                            Event{" "}
                            <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                                Calendar
                            </span>
                        </motion.h1>

                        <motion.p variants={item} className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
                            Browse term dates, closures and key events in a simple calendar view.
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
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="grid gap-6 lg:grid-cols-12 items-start">
                            {/* CALENDAR */}
                            <motion.div variants={item} className="lg:col-span-7 relative rounded-[22px]">
                                <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/18 via-white/0 to-coral/18 blur-[16px] opacity-70" />
                                <div className="relative rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-5 md:p-6">
                                    {/* Calendar header */}
                                    <div className="flex items-center justify-between gap-3 flex-wrap">
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-5 w-5 text-teal" />
                                            <h2 className="text-lg md:text-xl font-bold text-dark-teal">{formatMonthTitle(month)}</h2>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                className="rounded-full border-sage/25 bg-white/70 text-dark-teal hover:bg-white"
                                                onClick={() => setMonth((m) => addMonths(m, -1))}
                                            >
                                                <ChevronLeft className="h-4 w-4" />
                                            </Button>

                                            <Button
                                                variant="outline"
                                                className="rounded-full border-sage/25 bg-white/70 text-dark-teal hover:bg-white"
                                                onClick={() => setMonth(startOfMonth(today))}
                                            >
                                                Today
                                            </Button>

                                            <Button
                                                variant="outline"
                                                className="rounded-full border-sage/25 bg-white/70 text-dark-teal hover:bg-white"
                                                onClick={() => setMonth((m) => addMonths(m, 1))}
                                            >
                                                <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Weekdays */}
                                    <div className="mt-5 grid grid-cols-7 gap-2 text-xs font-semibold text-sage">
                                        {WEEKDAYS.map((w) => (
                                            <div key={w} className="px-2">
                                                {w}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Days grid */}
                                    <div className="mt-2 grid grid-cols-7 gap-2">
                                        {days.map((d) => {
                                            const iso = toISODate(d)
                                            const isSelected = iso === selectedISO
                                            const isToday = iso === toISODate(today)
                                            const inMonth = sameMonth(d, month)
                                            const hasEvents = (eventsByDate.get(iso)?.length ?? 0) > 0

                                            return (
                                                <button
                                                    key={iso}
                                                    type="button"
                                                    onClick={() => setSelectedISO(iso)}
                                                    className={[
                                                        "relative rounded-2xl border px-2 py-2 text-left transition-colors",
                                                        "bg-white/70 backdrop-blur-md",
                                                        inMonth ? "border-white/70" : "border-white/40 opacity-70",
                                                        isSelected ? "ring-2 ring-teal/40 border-transparent" : "hover:bg-white",
                                                    ].join(" ")}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="text-sm font-semibold text-dark-teal">{d.getDate()}</div>
                                                        {isToday ? (
                                                            <span className="text-[10px] font-semibold text-teal">Today</span>
                                                        ) : null}
                                                    </div>

                                                    {hasEvents ? (
                                                        <div className="mt-2 flex gap-1 flex-wrap">
                                                            {(eventsByDate.get(iso) ?? []).slice(0, 3).map((e) => (
                                                                <span
                                                                    key={e.id}
                                                                    className={[
                                                                        "h-2 w-2 rounded-full border",
                                                                        e.type === "event"
                                                                            ? "bg-coral/70 border-coral/50"
                                                                            : e.type === "closure"
                                                                                ? "bg-teal/70 border-teal/50"
                                                                                : e.type === "break"
                                                                                    ? "bg-sage/70 border-sage/50"
                                                                                    : "bg-white border-white/70",
                                                                    ].join(" ")}
                                                                    aria-hidden="true"
                                                                />
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="mt-2 h-2" />
                                                    )}

                                                    <span className="sr-only">{iso}</span>
                                                </button>
                                            )
                                        })}
                                    </div>

                                    {/* Legend */}
                                    <div className="mt-5 flex flex-wrap gap-2 text-xs">
                                        <LegendDot label="Event" className="bg-coral/70 border-coral/50" />
                                        <LegendDot label="Closed" className="bg-teal/70 border-teal/50" />
                                        <LegendDot label="Break" className="bg-sage/70 border-sage/50" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* DETAILS */}
                            <motion.div variants={item} className="lg:col-span-5 space-y-6">
                                <div className="relative rounded-[22px]">
                                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/18 via-white/0 to-coral/18 blur-[16px] opacity-70" />
                                    <div className="relative rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <div className="text-sm font-semibold text-dark-teal">Selected day</div>
                                                <div className="mt-1 text-lg font-bold text-dark-teal">{formatLongDate(selectedDate)}</div>
                                            </div>
                                            <div className="rounded-full bg-sage/10 border border-sage/15 px-3 py-1 text-xs font-semibold text-dark-teal">
                                                {selectedEvents.length} item{selectedEvents.length === 1 ? "" : "s"}
                                            </div>
                                        </div>

                                        <div className="mt-5 space-y-3">
                                            {selectedEvents.length === 0 ? (
                                                <div className="rounded-2xl border border-sage/15 bg-white/70 px-4 py-4 text-sm text-sage">
                                                    No events listed for this day.
                                                </div>
                                            ) : (
                                                selectedEvents.map((e) => (
                                                    <div
                                                        key={e.id}
                                                        className="rounded-2xl border border-sage/15 bg-white/70 px-4 py-4"
                                                    >
                                                        <div className="flex items-center justify-between gap-3">
                                                            <div className="text-sm font-bold text-dark-teal">{e.title}</div>
                                                            <span
                                                                className={[
                                                                    "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold text-dark-teal",
                                                                    typePillClass(e.type),
                                                                ].join(" ")}
                                                            >
                                                                {typePillText(e.type)}
                                                            </span>
                                                        </div>

                                                        {e.description ? (
                                                            <p className="mt-2 text-sm text-sage leading-relaxed">{e.description}</p>
                                                        ) : null}

                                                        <div className="mt-3 flex flex-wrap gap-3 text-xs text-sage">
                                                            {e.time ? (
                                                                <span className="inline-flex items-center gap-2">
                                                                    <Clock className="h-4 w-4 text-coral" />
                                                                    {e.time}
                                                                </span>
                                                            ) : null}
                                                            {e.location ? (
                                                                <span className="inline-flex items-center gap-2">
                                                                    <MapPin className="h-4 w-4 text-teal" />
                                                                    {e.location}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>

                                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                            <Button
                                                asChild
                                                className="rounded-full bg-teal hover:bg-dark-teal text-cream px-6 shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                                            >
                                                <Link href="/contact#book-visit">Book a visit</Link>
                                            </Button>

                                            <Button
                                                asChild
                                                variant="outline"
                                                className="rounded-full border-sage/25 bg-white/70 text-dark-teal hover:bg-white px-6"
                                            >
                                                <Link href="/events/upcoming">View term dates list</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur-md p-5 text-sm text-sage leading-relaxed">
                                    Tip: Click any day in the calendar to see what is happening. You can add more events in the
                                    <span className="font-semibold text-dark-teal"> events </span>
                                    array inside this component.
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

function LegendDot({ label, className }: { label: string; className: string }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/70 px-3 py-1">
            <span className={["h-2.5 w-2.5 rounded-full border", className].join(" ")} aria-hidden="true" />
            <span className="text-xs font-semibold text-dark-teal">{label}</span>
        </div>
    )
}
