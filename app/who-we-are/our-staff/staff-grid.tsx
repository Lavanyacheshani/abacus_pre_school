"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
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
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

    // IMPORTANT: hidden state must match SSR to avoid hydration warnings
    const container: Variants = {
        hidden: { opacity: 1, y: 0 },
        show: {
            opacity: 1,
            y: 0,
            transition: reduceMotion
                ? { duration: 0 }
                : { duration: 0.55, ease: easeOut, staggerChildren: 0.1 },
        },
    }

    const item: Variants = {
        hidden: { opacity: 1, y: 0 },
        show: {
            opacity: 1,
            y: 0,
            transition: reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut },
        },
    }

    const shouldAnimate = mounted && !reduceMotion

    return (
        <section className="relative py-14 md:py-20 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-14 left-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal/12 to-transparent blur-3xl" />
                <div className="absolute bottom-14 right-[-140px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    variants={container}
                    initial={false}
                    animate={shouldAnimate ? "show" : undefined}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {staff.map((m) => (
                            <motion.article
                                key={m.name}
                                variants={item}
                                initial={false}
                                animate={shouldAnimate ? "show" : undefined}
                                className="group"
                            >
                                <div className="relative rounded-[22px]">
                                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/30 via-white/0 to-coral/30 blur-[14px] opacity-70 group-hover:opacity-90 transition-opacity" />
                                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/35 via-sage/20 to-coral/35 opacity-35" />

                                    <div className="relative rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-[0_16px_50px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
                                        {/* IMAGE AREA (fixed 128x171, centered, no cropping) */}
                                        <div className="px-5 pt-5">
                                            <div className="relative mx-auto h-[171px] w-[128px] overflow-hidden rounded-xl bg-sage/10">
                                                <Image
                                                    src={m.image}
                                                    alt={`${m.name} - ${m.role}`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="128px"
                                                />
                                            </div>

                                            {/* Name + Role (below image for better readability at small size) */}
                                            <div className="mt-3 text-center">
                                                <div className="text-sm font-semibold text-dark-teal leading-tight">
                                                    {m.name}
                                                </div>
                                                <div className="mt-1 text-xs text-sage leading-snug">
                                                    {m.role}
                                                </div>
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-5 pt-4 flex flex-col flex-1">
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
