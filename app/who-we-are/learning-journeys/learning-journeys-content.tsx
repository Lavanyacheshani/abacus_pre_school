"use client"

import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import {
    BookOpen,
    Sparkles,
    ClipboardCheck,
    Clock,
    ArrowUpRight,
    Heart,
    MessageCircle,
    Dumbbell,
    Pencil,
    Calculator,
    Globe,
    Palette,
} from "lucide-react"

const eyfsAreas = [
    { code: "PSED", title: "Personal, Social and Emotional Development", icon: Heart },
    { code: "CL", title: "Communication and Language", icon: MessageCircle },
    { code: "PD", title: "Physical Development", icon: Dumbbell },
    { code: "L", title: "Literacy", icon: Pencil },
    { code: "M", title: "Mathematics", icon: Calculator },
    { code: "UTW", title: "Understanding the World", icon: Globe },
    { code: "EAD", title: "Expressive Arts and Design", icon: Palette },
]

export function LearningJourneysContent() {
    const reduceMotion = useReducedMotion()
    const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

    const container: Variants = {
        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: reduceMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: easeOut, staggerChildren: 0.08 },
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
        <main>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute -top-28 left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/16 via-coral/10 to-sage/16 blur-3xl" />
                    <div className="absolute -bottom-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />

                    {/* playful blobs (kid-friendly, subtle) */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-10 left-6 h-10 w-10 rounded-full bg-coral/15 blur-[0.5px]" />
                        <div className="absolute top-24 right-10 h-14 w-14 rounded-full bg-teal/12 blur-[0.5px]" />
                        <div className="absolute bottom-10 left-10 h-16 w-16 rounded-full bg-sage/14 blur-[0.5px]" />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative py-14 md:py-20">
                    <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl mx-auto">
                        <motion.div
                            variants={item}
                            className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm"
                        >
                            <Sparkles className="h-4 w-4 text-coral" />
                            <span className="text-sm font-medium text-dark-teal">Supporting every child</span>
                        </motion.div>

                        <motion.h1 variants={item} className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
                            Our{" "}
                            <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                                Learning Journeys
                            </span>
                        </motion.h1>

                        <motion.p variants={item} className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
                            The Learning Journey celebrates your child’s learning, development and achievements at pre-school,
                            linking observations and activities to the Early Years Foundation Stage (EYFS).
                        </motion.p>

                        {/* Added: hero photo + illustration to clearly feel like a preschool page */}
                        <motion.div variants={item} className="mt-7 grid gap-6 lg:grid-cols-12 items-center">
                            {/* Left: photo */}
                            <div className="lg:col-span-7">
                                <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
                                    <Image
                                        src="/22.jpg"
                                        alt="Children enjoying stories and learning activities"
                                        width={1400}
                                        height={800}
                                        className="h-[260px] w-full object-cover md:h-[320px]"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/15 via-transparent to-transparent" />
                                </div>
                            </div>

                            {/* Right: illustration card */}
                            <div className="lg:col-span-5">
                                <div className="relative rounded-[28px] border border-white/70 bg-white/70 backdrop-blur-md p-6 shadow-sm">
                                    <div className="text-sm font-semibold text-dark-teal">A scrapbook of learning</div>
                                    <div className="mt-2 text-sm text-sage leading-relaxed">
                                        We capture photos, notes, artwork and key moments so you can see how your child grows over time.
                                    </div>

                                    <div className="mt-5 relative h-[180px] w-full">
                                        <Image
                                            src="/images/learning-journeys/hero-illustration.png"
                                            alt="Playful preschool illustration"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="mt-8 grid gap-4 md:grid-cols-3">
                            <InfoPill
                                icon={<BookOpen className="h-4 w-4" />}
                                title="Sent home half-termly"
                                text="So you can add your child’s voice at home."
                            />
                            <InfoPill
                                icon={<Clock className="h-4 w-4" />}
                                title="Return within one week"
                                text="So we can continue recording progress."
                            />
                            <InfoPill
                                icon={<ClipboardCheck className="h-4 w-4" />}
                                title="Shared with your key person"
                                text="Ask questions anytime about development."
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="relative py-14 md:py-20 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={item} className="grid gap-6 lg:grid-cols-12 items-start">
                            {/* Left: explanation */}
                            <div className="lg:col-span-7">
                                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal tracking-tight">
                                    What is a Learning Journey?
                                </h2>

                                <div className="mt-4 space-y-4 text-sage leading-relaxed">
                                    <p>
                                        The Learning Journey is to celebrate your child’s learning and development, and the achievements
                                        they make at pre-school. We will send this book home every half-term and your child can draw, write
                                        or stick in a photo of the things they like to do.
                                    </p>
                                    <p>
                                        When you receive this book, please ensure it is returned to us within one week so that we can
                                        continue to add to it.
                                    </p>
                                </div>

                                {/* Added: supporting image card */}
                                <div className="mt-7">
                                    <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white/70 shadow-sm">
                                        <Image
                                            src="/23.jpg"
                                            alt="A Learning Journey book with drawings, photos and notes"
                                            width={1200}
                                            height={800}
                                            className="h-[220px] w-full object-cover md:h-[260px]"
                                        />
                                        <div className="absolute bottom-3 left-3 rounded-full bg-white/75 backdrop-blur-md border border-white/70 px-3 py-1 text-xs font-medium text-dark-teal">
                                            Example: photos, drawings, little notes
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-3xl border border-white/70 bg-white/80 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6 md:p-7">
                                    <div className="flex items-start gap-3">
                                        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center text-dark-teal">
                                            <BookOpen className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-base font-bold text-dark-teal">At-home contribution matters</div>
                                            <div className="text-sm text-sage leading-relaxed mt-1">
                                                Children love sharing what they do outside of pre-school. Photos, drawings and short notes help
                                                us build a fuller picture of their interests and confidence.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: EYFS card */}
                            <div className="lg:col-span-5">
                                <div className="relative rounded-[22px]">
                                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/22 via-white/0 to-coral/22 blur-[16px] opacity-70" />
                                    <div className="relative rounded-[22px] bg-white/80 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6">
                                        <div className="text-sm font-semibold text-dark-teal">EYFS framework</div>
                                        <h3 className="mt-2 text-xl font-bold text-dark-teal tracking-tight">
                                            Seven areas of learning and development
                                        </h3>
                                        <p className="mt-2 text-sm text-sage leading-relaxed">
                                            Here at Abacus we follow the Early Years Foundation Stage (EYFS), which sets the standards for
                                            learning, development and care for children from birth to five.
                                        </p>

                                        <div className="mt-5 grid gap-3">
                                            {eyfsAreas.map((a) => {
                                                const Icon = a.icon
                                                return (
                                                    <div
                                                        key={a.code}
                                                        className="flex items-start gap-3 rounded-2xl border border-sage/15 bg-sage/10 px-4 py-3"
                                                    >
                                                        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/70 border border-white/70 text-dark-teal">
                                                            <Icon className="h-4 w-4" />
                                                        </div>

                                                        <div className="min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <div className="inline-flex h-6 items-center justify-center rounded-xl bg-white/70 border border-white/70 px-2 text-[11px] font-bold text-dark-teal">
                                                                    {a.code}
                                                                </div>
                                                                <div className="text-sm font-semibold text-dark-teal/90 leading-snug truncate">
                                                                    {a.title}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Guidance + link */}
                        <motion.div variants={item} className="mt-10 md:mt-14 grid gap-6 lg:grid-cols-12 items-start">
                            <div className="lg:col-span-7">
                                <h2 className="text-2xl md:text-3xl font-bold text-dark-teal tracking-tight">
                                    Want to know more about EYFS?
                                </h2>
                                <p className="mt-3 text-sage leading-relaxed">
                                    If you would like any further information on the EYFS or on how your child is developing at Abacus,
                                    please do not hesitate to speak to your child’s key person. They will be happy to answer any questions.
                                </p>
                            </div>

                            <div className="lg:col-span-5">
                                <a
                                    href="http://www.foundationyears.org.uk/early-years-foundation-stage"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex w-full items-center justify-between rounded-2xl border border-white/70 bg-white/75 backdrop-blur-md px-5 py-4 shadow-sm hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)] transition-shadow"
                                >
                                    <div>
                                        <div className="text-sm font-semibold text-dark-teal">Download</div>
                                        <div className="text-base font-bold text-dark-teal leading-tight">Parents’ Guide to the EYFS</div>
                                        <div className="text-sm text-sage mt-1">foundationyears.org.uk</div>
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-dark-teal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>

                                <p className="mt-3 text-xs text-sage">Alternatively, your child’s key person can share the guide with you.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

function InfoPill({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode
    title: string
    text: string
}) {
    return (
        <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md p-5 shadow-sm">
            <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center text-dark-teal">
                    {icon}
                </div>
                <div>
                    <div className="text-sm font-bold text-dark-teal">{title}</div>
                    <div className="text-sm text-sage leading-relaxed mt-1">{text}</div>
                </div>
            </div>
        </div>
    )
}
