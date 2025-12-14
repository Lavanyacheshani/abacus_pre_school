"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { BlogPost } from "@/lib/news"
import { ArrowLeft, CalendarDays, Tag } from "lucide-react"

export function BlogPostContent({ post }: { post: BlogPost }) {
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
                    <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto">
                        <motion.div variants={item}>
                            <Link
                                href="/news"
                                className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 text-sm font-semibold text-dark-teal hover:bg-white transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to News
                            </Link>
                        </motion.div>

                        <motion.h1 variants={item} className="mt-6 text-4xl md:text-5xl font-bold text-dark-teal tracking-tight">
                            {post.title}
                        </motion.h1>

                        <motion.div variants={item} className="mt-4 flex flex-wrap gap-3 text-sm">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/65 border border-white/70 px-4 py-2 text-sage">
                                <CalendarDays className="h-4 w-4 text-teal" />
                                {post.date}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/65 border border-white/70 px-4 py-2 text-sage">
                                <Tag className="h-4 w-4 text-coral" />
                                {post.category}
                            </span>
                        </motion.div>
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
                        className="max-w-4xl mx-auto"
                    >
                        {post.image ? (
                            <motion.div
                                variants={item}
                                className="relative overflow-hidden rounded-[22px] border border-white/70 bg-white/60 shadow-sm"
                            >
                                <div className="relative h-[260px] md:h-[360px] w-full">
                                    <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                                </div>
                            </motion.div>
                        ) : null}

                        <motion.div
                            variants={item}
                            className="mt-8 rounded-[22px] border border-white/70 bg-white/85 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6 md:p-8"
                        >
                            <p className="text-[16px] md:text-lg text-sage leading-relaxed">{post.content.intro}</p>

                            {post.content.sections.map((s, idx) => (
                                <div key={idx} className="mt-8">
                                    <h2 className="text-xl md:text-2xl font-bold text-dark-teal">{s.heading}</h2>
                                    <div className="mt-3 space-y-3">
                                        {s.body.map((p, pIdx) => (
                                            <p key={pIdx} className="text-sage leading-relaxed">
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {post.content.bullets?.length ? (
                                <div className="mt-8 rounded-2xl border border-sage/15 bg-sage/10 p-5">
                                    <h3 className="text-sm font-bold text-dark-teal">Quick reminders</h3>
                                    <ul className="mt-3 space-y-2 list-disc pl-5 text-sage">
                                        {post.content.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
