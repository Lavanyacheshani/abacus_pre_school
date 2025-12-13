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
        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: reduceMotion ? { duration: 0 } : { duration: 0.55, ease: easeOut, staggerChildren: 0.1 },
        },
    }

    const item: Variants = {
        hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
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
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                        {staff.map((m) => (
                            <motion.article key={m.name} variants={item} className="group h-full">
                                <div className="relative rounded-[22px] h-full">
                                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/30 via-white/0 to-coral/30 blur-[16px] opacity-70 group-hover:opacity-90 transition-opacity" />
                                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/35 via-sage/20 to-coral/35 opacity-40" />

                                    {/* h-full + flex makes every card same height */}
                                    <div className="relative h-full rounded-[22px] bg-white/80 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.12)] overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 flex flex-col">
                                        {/* Image area stays same size */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={m.image}
                                                alt={`${m.name} - ${m.role}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                                            <div className="absolute bottom-3 left-3 right-3">
                                                <div className="text-cream text-lg font-bold leading-tight drop-shadow">{m.name}</div>
                                                <div className="text-cream/90 text-sm drop-shadow">{m.role}</div>
                                            </div>
                                        </div>

                                        {/* Content fills remaining height */}
                                        <div className="p-6 flex flex-col flex-1">
                                            {/* Clamp bio so height stays consistent */}
                                            <p className="text-sm text-sage leading-relaxed line-clamp-4">
                                                {m.bio}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                <span className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/10 px-3 py-1 text-xs font-semibold text-dark-teal">
                                                    <BadgeCheck className="h-3.5 w-3.5" />
                                                    Abacus Team
                                                </span>

                                                {m.languages?.length ? (
                                                    <span className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-xs font-semibold text-dark-teal">
                                                        <Languages className="h-3.5 w-3.5" />
                                                        {m.languages.join(", ")}
                                                    </span>
                                                ) : null}
                                            </div>

                                            {/* Push underline to bottom so alignment is perfect */}
                                            <div className="mt-auto pt-5">
                                                <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-teal to-coral opacity-35 transition-all duration-500 group-hover:w-16 group-hover:opacity-60" />
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
