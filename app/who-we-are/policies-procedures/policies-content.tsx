"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { FileText, Download, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react"

type Policy = {
    title: string
    desc?: string
    file?: string // pdf path in /public/policies/...
}

const policies: Policy[] = [
    { title: "Admissions", file: "/policies/admissions.pdf" },
    { title: "Confidentiality", file: "/policies/confidentiality.pdf" },
    { title: "Complaint", file: "/policies/complaint.pdf" },
    { title: "SEND", file: "/policies/send.pdf" },
    { title: "Safeguarding", file: "/policies/safeguarding.pdf" },
    { title: "Settling in Procedure", file: "/policies/settling-in-procedure.pdf" },
    { title: "Health, Safety & Welfare", file: "/policies/health-safety-welfare.pdf" },
    { title: "Uncollected and Lost child", file: "/policies/uncollected-and-lost-child.pdf" },
    { title: "Fire Evacuation", file: "/policies/fire-evacuation.pdf" },
    { title: "Outings and Visits", file: "/policies/outings-and-visits.pdf" },
    { title: "Student Placement", file: "/policies/student-placement.pdf" },
    { title: "Whistleblowing", file: "/policies/whistleblowing.pdf" },
]

export function PoliciesContent() {
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
        hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut } },
    }

    return (
        <main>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute -top-28 left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/16 via-coral/10 to-sage/16 blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
                </div>

                <div className="container mx-auto px-4 relative py-14 md:py-20">
                    <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto">
                        <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
                            <ShieldCheck className="h-4 w-4 text-coral" />
                            <span className="text-sm font-medium text-dark-teal">Clear standards, caring practice</span>
                        </motion.div>

                        <motion.h1 variants={item} className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
                            Policies &{" "}
                            <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                                Procedures
                            </span>
                        </motion.h1>

                        <motion.p variants={item} className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
                            We maintain comprehensive policies and procedures to ensure the highest standards of care, safety, and wellbeing.
                        </motion.p>

                        {/* Header image */}
                        <motion.div variants={item} className="mt-10">
                            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
                                <div className="relative aspect-[16/6] min-h-[180px]">
                                    <Image
                                        src="/hero/hero-1.avif"
                                        alt="Abacus Pre-school environment"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-2 backdrop-blur-md">
                                            <Sparkles className="h-4 w-4 text-cream" />
                                            <span className="text-sm font-semibold text-cream">Downloads available as PDF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* POLICIES GRID */}
            <section className="relative py-14 md:py-20 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden">
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
                        <motion.div variants={item} className="flex items-end justify-between gap-6 flex-wrap">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal tracking-tight">Our Policies & Procedures</h2>
                                <p className="mt-3 text-sage leading-relaxed max-w-2xl">
                                    Download and review key documents. If you need any help accessing a policy, please contact us.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-md px-5 py-3 text-sm font-semibold text-dark-teal shadow-sm hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)] transition-shadow"
                            >
                                Contact us for support <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </motion.div>

                        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                            {policies.map((p) => (
                                <motion.article key={p.title} variants={item} className="group h-full">
                                    <div className="relative h-full rounded-[22px]">
                                        <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/22 via-white/0 to-coral/22 blur-[16px] opacity-70 group-hover:opacity-90 transition-opacity" />
                                        <div className="relative h-full rounded-[22px] bg-white/80 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6 flex flex-col">
                                            <div className="flex items-start gap-3">
                                                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center text-dark-teal">
                                                    <FileText className="h-5 w-5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-lg font-bold text-dark-teal leading-snug">{p.title}</div>
                                                    <div className="mt-1 text-sm text-sage">
                                                        PDF document
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-6 flex items-center gap-3">
                                                {p.file ? (
                                                    <a
                                                        href={p.file}
                                                        download
                                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-dark text-cream px-4 py-2.5 text-sm font-semibold shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition-colors"
                                                    >
                                                        <Download className="h-4 w-4" />
                                                        Download
                                                    </a>
                                                ) : (
                                                    <span className="inline-flex flex-1 items-center justify-center rounded-full bg-sage/15 text-dark-teal px-4 py-2.5 text-sm font-semibold">
                                                        Coming soon
                                                    </span>
                                                )}

                                                {p.file ? (
                                                    <a
                                                        href={p.file}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center justify-center rounded-full border border-sage/25 bg-white/70 px-4 py-2.5 text-sm font-semibold text-dark-teal hover:bg-white transition-colors"
                                                        aria-label={`Open ${p.title} PDF in a new tab`}
                                                    >
                                                        View
                                                    </a>
                                                ) : null}
                                            </div>

                                            <div className="mt-5">
                                                <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-teal to-coral opacity-35 transition-all duration-500 group-hover:w-16 group-hover:opacity-60" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        <motion.div variants={item} className="mt-12 rounded-3xl border border-white/70 bg-white/80 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-7 md:p-10">
                            <div className="flex items-start gap-3">
                                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center text-dark-teal">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-dark-teal">Policy access</h3>
                                    <p className="mt-3 text-sage leading-relaxed max-w-3xl">
                                        All policies are available for review by parents and guardians. We encourage families to familiarise
                                        themselves with our procedures to ensure a shared understanding of our approach.
                                    </p>

                                    <div className="mt-6">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 rounded-full bg-teal hover:bg-dark-teal text-cream px-6 py-3 text-sm font-semibold shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition-colors"
                                        >
                                            Request help accessing a policy <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
