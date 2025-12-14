"use client"

import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { MapPin, Mail, Clock, Facebook, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactContent() {
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
                    <div className="absolute -bottom-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
                </div>

                <div className="container mx-auto px-4 relative py-14 md:py-20">
                    <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto">
                        <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
                            <MapPin className="h-4 w-4 text-coral" />
                            <span className="text-sm font-medium text-dark-teal">We’d love to hear from you</span>
                        </motion.div>

                        <motion.h1 variants={item} className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
                            Contact{" "}
                            <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                                Us
                            </span>
                        </motion.h1>

                        <motion.p variants={item} className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
                            For enquiries, visits, or general information, please use the details below or send us a message.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT */}
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
                        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
                            {/* Left: Contact cards */}
                            <motion.div variants={item} className="lg:col-span-5 space-y-6">
                                <InfoCard
                                    icon={<MapPin className="h-5 w-5" />}
                                    title="Address"
                                    body={
                                        <>
                                            <p>1, Cambridge Rd,</p>
                                            <p>New Malden,</p>
                                            <p>Surrey,</p>
                                            <p>KT3 3QE</p>
                                            <div className="mt-4 flex flex-wrap gap-3">
                                                <a
                                                    href="https://www.google.com/maps?q=1+Cambridge+Rd,+New+Malden,+Surrey,+KT3+3QE"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center justify-center rounded-full border border-sage/25 bg-white/70 px-4 py-2 text-sm font-semibold text-dark-teal hover:bg-white transition-colors"
                                                >
                                                    Open in Maps
                                                </a>
                                            </div>
                                        </>
                                    }
                                />

                                <InfoCard
                                    icon={<Mail className="h-5 w-5" />}
                                    title="Email us"
                                    body={
                                        <div className="space-y-3">
                                            <div className="rounded-2xl border border-sage/15 bg-sage/10 px-4 py-3">
                                                <div className="text-xs font-semibold text-dark-teal">Manager</div>
                                                <a
                                                    href="mailto:manager@abacusnewmalden.co.uk"
                                                    className="text-sm font-semibold text-dark-teal hover:text-teal transition-colors"
                                                >
                                                    manager@abacusnewmalden.co.uk
                                                </a>
                                            </div>

                                            <div className="rounded-2xl border border-sage/15 bg-sage/10 px-4 py-3">
                                                <div className="text-xs font-semibold text-dark-teal">Admin</div>
                                                <a
                                                    href="mailto:admin@abacusnewmalden.co.uk"
                                                    className="text-sm font-semibold text-dark-teal hover:text-teal transition-colors"
                                                >
                                                    admin@abacusnewmalden.co.uk
                                                </a>
                                            </div>
                                        </div>
                                    }
                                />

                                <InfoCard
                                    icon={<Clock className="h-5 w-5" />}
                                    title="Opening Hours"
                                    body={
                                        <div className="space-y-1 text-sage">
                                            <p className="text-sm font-semibold text-dark-teal">Mon – Fri</p>
                                            <p>9:00 am – 3:00 pm</p>
                                        </div>
                                    }
                                />

                                <InfoCard
                                    icon={<Facebook className="h-5 w-5" />}
                                    title="Social Media"
                                    body={
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-coral hover:bg-coral-dark text-cream px-5 py-2.5 text-sm font-semibold shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition-colors"
                                        >
                                            <Facebook className="h-4 w-4" />
                                            Facebook
                                        </a>
                                    }
                                />
                            </motion.div>

                            {/* Right: Form + Map */}
                            <motion.div variants={item} className="lg:col-span-7 space-y-6">
                                <div className="relative rounded-[22px]">
                                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/22 via-white/0 to-coral/22 blur-[16px] opacity-70" />
                                    <div className="relative rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6 md:p-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-dark-teal">Send us a message</h2>
                                        <p className="mt-2 text-sage">
                                            This form can submit to your email service later. For now it’s a premium UI.
                                        </p>

                                        <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <Field label="Full name" placeholder="Your name" />
                                                <Field label="Email" type="email" placeholder="you@email.com" />
                                            </div>

                                            <div className="grid gap-4 md:grid-cols-2">
                                                <Field label="Phone (optional)" type="tel" placeholder="07xxx xxx xxx" />
                                                <Field label="Subject" placeholder="Enquiry / Visit / Other" />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-dark-teal mb-2">Message</label>
                                                <textarea
                                                    rows={6}
                                                    className="w-full rounded-2xl border border-sage/20 bg-white/70 px-4 py-3 text-dark-teal placeholder:text-sage/70 outline-none focus:ring-2 focus:ring-teal/35 focus:border-transparent"
                                                    placeholder="Tell us how we can help..."
                                                />
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                                                <p className="text-xs text-sage">
                                                    For visits, please include preferred dates and times.
                                                </p>

                                                <Button className="rounded-full bg-teal hover:bg-dark-teal text-cream px-6 shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                                                    <Send className="h-4 w-4 mr-2" />
                                                    Send message
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Live Map */}
                                <div className="relative rounded-[22px] overflow-hidden border border-white/70 bg-white/60 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
                                    <div className="p-5 md:p-6 bg-white/70 backdrop-blur-md border-b border-white/70">
                                        <div className="flex items-center justify-between gap-4 flex-wrap">
                                            <div>
                                                <div className="text-sm font-semibold text-dark-teal">Find us</div>
                                                <div className="text-sage text-sm">1 Cambridge Rd, New Malden, Surrey, KT3 3QE</div>
                                            </div>

                                            <a
                                                href="https://www.google.com/maps?q=1+Cambridge+Rd,+New+Malden,+Surrey,+KT3+3QE"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-sage/25 bg-white/70 px-4 py-2 text-sm font-semibold text-dark-teal hover:bg-white transition-colors"
                                            >
                                                Open in Maps
                                            </a>
                                        </div>
                                    </div>

                                    <div className="relative w-full h-[360px] bg-sage/10">
                                        <iframe
                                            title="Abacus Pre-school map"
                                            className="absolute inset-0 w-full h-full"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            src="https://www.google.com/maps?q=1%20Cambridge%20Rd%2C%20New%20Malden%2C%20Surrey%2C%20KT3%203QE&z=16&output=embed"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

function InfoCard({
    icon,
    title,
    body,
}: {
    icon: React.ReactNode
    title: string
    body: React.ReactNode
}) {
    return (
        <div className="relative rounded-[22px]">
            <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/18 via-white/0 to-coral/18 blur-[16px] opacity-70" />
            <div className="relative rounded-[22px] bg-white/85 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6">
                <div className="flex items-start gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center text-dark-teal">
                        {icon}
                    </div>
                    <div className="min-w-0">
                        <div className="text-lg font-bold text-dark-teal">{title}</div>
                        <div className="mt-3 text-sm text-sage leading-relaxed">{body}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Field({
    label,
    placeholder,
    type = "text",
}: {
    label: string
    placeholder: string
    type?: string
}) {
    return (
        <div>
            <label className="block text-sm font-semibold text-dark-teal mb-2">{label}</label>
            <input
                type={type}
                className="w-full rounded-2xl border border-sage/20 bg-white/70 px-4 py-3 text-dark-teal placeholder:text-sage/70 outline-none focus:ring-2 focus:ring-teal/35 focus:border-transparent"
                placeholder={placeholder}
            />
        </div>
    )
}
