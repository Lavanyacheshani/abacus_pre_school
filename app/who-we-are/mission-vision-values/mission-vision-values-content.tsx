"use client"

import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Sparkles, ShieldCheck, HeartHandshake, Scale, Users, Hand, Landmark, Compass } from "lucide-react"

export function MissionVisionValuesContent() {
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
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="max-w-5xl mx-auto"
                    >
                        <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
                            <Sparkles className="h-4 w-4 text-coral" />
                            <span className="text-sm font-medium text-dark-teal">Our approach and values</span>
                        </motion.div>

                        <motion.h1 variants={item} className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
                            Mission, Purpose,{" "}
                            <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                                Vision & Values
                            </span>
                        </motion.h1>

                        <motion.p variants={item} className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
                            We believe every child is unique and precious. Our setting is designed to be loving, stimulating and
                            supportive, giving children the confidence to explore, take appropriate risks, and grow holistically.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* OUR VISION */}
            <section className="relative py-14 md:py-18 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={item} className="grid gap-6 lg:grid-cols-12 items-start">
                            <div className="lg:col-span-7">
                                <h2 className="text-3xl md:text-4xl font-bold text-dark-teal tracking-tight">Our Vision</h2>
                                <div className="mt-4 space-y-4 text-sage leading-relaxed">
                                    <p>
                                        Abacus’ vision is firmly grounded in our belief that all children are unique and precious. We aim to
                                        create a loving, stimulating and risk-taking environment in which children feel confident to explore
                                        and challenge themselves.
                                    </p>
                                    <p>
                                        Our programme focuses on developing children holistically so they can engage in a variety of
                                        experiences and grow socially, physically, emotionally and intellectually in a safe and secure
                                        setting.
                                    </p>
                                    <p>
                                        We also celebrate and promote our diverse, multicultural and multi-faith community. By doing so, we
                                        hope children will be proud of who they are and build their self-esteem.
                                    </p>
                                </div>
                            </div>

                            {/* Premium side card */}
                            <div className="lg:col-span-5">
                                <div className="relative rounded-[22px]">
                                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/25 via-white/0 to-coral/25 blur-[18px] opacity-70" />
                                    <div className="relative rounded-[22px] bg-white/80 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.12)] p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center">
                                                <Compass className="h-5 w-5 text-dark-teal" />
                                            </div>
                                            <div>
                                                <div className="text-base font-bold text-dark-teal">Holistic development</div>
                                                <div className="text-sm text-sage">Social, physical, emotional and intellectual growth</div>
                                            </div>
                                        </div>

                                        <div className="mt-5 grid grid-cols-2 gap-3">
                                            <MiniPill icon={<ShieldCheck className="h-4 w-4" />} text="Safe & secure" />
                                            <MiniPill icon={<HeartHandshake className="h-4 w-4" />} text="Loving & caring" />
                                            <MiniPill icon={<Users className="h-4 w-4" />} text="Inclusive community" />
                                            <MiniPill icon={<Scale className="h-4 w-4" />} text="Equality & respect" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* OUR AIM */}
                        <motion.div variants={item} className="mt-10 md:mt-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-dark-teal tracking-tight">Our Aim</h2>
                            <p className="mt-3 text-sage leading-relaxed max-w-3xl">
                                With the children at the heart of the setting, the staff at Abacus aim to provide:
                            </p>

                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                <AimCard text="A positive environment where each child can play happily and safely." />
                                <AimCard text="An atmosphere where children know they are valued and feel confident to challenge themselves." />
                                <AimCard text="Opportunities to become more independent and resilient, supported by their key worker and the wider team." />
                                <AimCard text="Time and space to develop confidence and interact with peers and adults." />
                                <AimCard text="An open relationship between staff and parents where information is shared to support the child’s development and progression." />
                                <AimCard text="An environment that promotes equality and diversity where children explore roles and activities regardless of gender, religion, SEND and ethnicity." />
                                <AimCard text="Staff who are suitably qualified to ensure high quality care." />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* BRITISH VALUES */}
            <section className="relative py-14 md:py-20 bg-gradient-to-br from-sage/5 to-cream overflow-hidden">
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
                        <motion.div variants={item} className="grid gap-6 lg:grid-cols-12 items-start">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
                                    <Landmark className="h-4 w-4 text-coral" />
                                    <span className="text-sm font-medium text-dark-teal">British Values</span>
                                </div>

                                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-dark-teal tracking-tight">
                                    British Values at Abacus
                                </h2>

                                <p className="mt-4 text-sage leading-relaxed">
                                    At Abacus we align ourselves with British Values, integrating them into each child’s play and learning.
                                    This helps children develop into confident, independent members of society.
                                </p>
                            </div>

                            <div className="lg:col-span-5">
                                {/* Image 1 */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-sm">
                                    <Image
                                        src="/values/2.avif"
                                        alt="Children learning through play at Abacus Pre-school"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                                </div>

                            </div>
                        </motion.div>

                        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                            <ValueCard
                                icon={<Hand className="h-5 w-5" />}
                                title="Democracy"
                                subtitle="Making decisions together"
                                points={[
                                    "Encourage children to know their views count and to value each other’s views and feelings.",
                                    "Demonstrate democracy in action, for example children choosing themes for role play with a show of hands.",
                                    "Support turn-taking, sharing and collaboration, and create an atmosphere where questions are valued.",
                                ]}
                            />

                            <ValueCard
                                icon={<Users className="h-5 w-5" />}
                                title="Mutual Respect & Tolerance"
                                subtitle="Treat others as you want to be treated"
                                points={[
                                    "Create an ethos of inclusivity and tolerance where views, faiths, cultures and races are valued.",
                                    "Support children to appreciate similarities and differences between themselves and others.",
                                    "Promote diverse attitudes and challenge stereotypes through stories, resources and conversations.",
                                ]}
                            />

                            <ValueCard
                                icon={<Compass className="h-5 w-5" />}
                                title="Individual Liberty"
                                subtitle="Freedom for all"
                                points={[
                                    "Help children develop a positive sense of self, self-esteem and confidence in their abilities.",
                                    "Provide opportunities for safe risk-taking and reflection, such as obstacle courses or creative exploration.",
                                    "Support children to understand that people can have different opinions, for example in small-group discussions.",
                                ]}
                            />

                            <ValueCard
                                icon={<Scale className="h-5 w-5" />}
                                title="The Rule of Law"
                                subtitle="Understanding rules matter"
                                points={[
                                    "Help children understand behaviour and consequences and distinguish right from wrong.",
                                    "Create simple rules and codes of behaviour with the children, for example tidying up together.",
                                    "Support children to understand that rules apply to everyone.",
                                ]}
                            />
                        </div>

                        {/* Image 2 + How will we get there */}
                        <motion.div variants={item} className="mt-12 grid gap-6 lg:grid-cols-12 items-start">
                            <div className="lg:col-span-5">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-sm">
                                    <Image
                                        src="/values/1.avif"
                                        alt="Children engaging in activities at Abacus Pre-school"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                                </div>

                            </div>

                            <div className="lg:col-span-7">
                                <h3 className="text-2xl md:text-3xl font-bold text-dark-teal tracking-tight">How will we get there?</h3>
                                <div className="mt-5 grid gap-4">
                                    <AimCard text="Ensuring staff are well equipped with knowledge of the current statutory framework and key areas such as safeguarding and SEND, by attending relevant courses and training." />
                                    <AimCard text="Each child will have a key worker who supports them and their families during their settling-in time." />
                                    <AimCard text="Key workers record each child’s development in a learning journey which parents can view termly." />
                                    <AimCard text="Using positive language and praise to acknowledge and encourage resilience and kindness." />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

function MiniPill({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/10 px-3 py-2 text-xs font-semibold text-dark-teal">
            <span className="inline-flex h-5 w-5 items-center justify-center">{icon}</span>
            <span className="leading-none">{text}</span>
        </div>
    )
}

function AimCard({ text }: { text: string }) {
    return (
        <div className="rounded-2xl border border-white/70 bg-white/75 backdrop-blur-md p-5 shadow-sm">
            <div className="flex items-start gap-3">
                <span className="mt-0.5 h-7 w-7 rounded-xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-coral" />
                </span>
                <p className="text-sm md:text-[15px] text-sage leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

function ValueCard({
    icon,
    title,
    subtitle,
    points,
}: {
    icon: React.ReactNode
    title: string
    subtitle: string
    points: string[]
}) {
    return (
        <div className="relative rounded-[22px]">
            <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-teal/22 via-white/0 to-coral/22 blur-[16px] opacity-70" />
            <div className="relative rounded-[22px] bg-white/80 backdrop-blur-md border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6">
                <div className="flex items-start gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center text-dark-teal">
                        {icon}
                    </div>
                    <div>
                        <div className="text-lg font-bold text-dark-teal leading-tight">{title}</div>
                        <div className="text-sm text-sage">{subtitle}</div>
                    </div>
                </div>

                <ul className="mt-5 space-y-3">
                    {points.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-teal" />
                            <p className="text-sm text-sage leading-relaxed">{p}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
