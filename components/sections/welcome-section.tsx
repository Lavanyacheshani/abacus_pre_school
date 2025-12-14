"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { HeartHandshake, Sparkles, ShieldCheck, GraduationCap } from "lucide-react"

export function WelcomeSection() {
  const reduceMotion = useReducedMotion()
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const container: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.55, ease: easeOut, staggerChildren: 0.08 },
    },
  }

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut } },
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-cream">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -top-24 left-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/18 via-coral/12 to-sage/18 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-coral/16 to-teal/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-16 left-10 h-8 w-8 rounded-full bg-coral/12 blur-[0.2px]" />
          <div className="absolute top-28 right-12 h-10 w-10 rounded-full bg-teal/10 blur-[0.2px]" />
          <div className="absolute bottom-16 right-20 h-12 w-12 rounded-full bg-sage/12 blur-[0.2px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/55 backdrop-blur-md border border-white/60 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-coral" />
              <span className="text-sm font-medium text-dark-teal">A warm start to learning</span>
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-dark-teal tracking-tight">
              Welcome to{" "}
              <span className="text-teal">Abacus Pre-school</span>
            </h2>

            <p className="mt-4 text-base md:text-lg text-sage max-w-2xl mx-auto leading-relaxed">
              A calm, supportive environment where children build confidence, independence, and a love of learning.
            </p>

            <div className="mt-6 h-[3px] w-28 mx-auto rounded-full bg-gradient-to-r from-transparent via-coral to-transparent" />
          </motion.div>

          {/* Main card */}
          <motion.div variants={item} className="relative">
            <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-teal/35 via-coral/30 to-sage/35 blur-[10px] opacity-70" />
            <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-teal/40 via-coral/35 to-sage/40 opacity-60" />

            <Card className="relative bg-white/80 backdrop-blur-xl rounded-[28px] border border-white/60 shadow-[0_22px_70px_rgba(0,0,0,0.12)] overflow-hidden">
              <CardContent className="p-7 md:p-12">
                {/* Photo + illustration row */}
                <div className="grid gap-6 lg:grid-cols-12 items-center mb-8 md:mb-10">
                  {/* Photo */}
                  <div className="lg:col-span-7">
                    <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-white/60 shadow-sm">
                      <Image
                        src="/images/home/welcome-hero.jpg"
                        alt="Children enjoying learning through play"
                        width={1400}
                        height={900}
                        className="h-[220px] w-full object-cover md:h-[280px]"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/15 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 rounded-full bg-white/75 backdrop-blur-md border border-white/70 px-3 py-1 text-xs font-medium text-dark-teal">
                        Learning through play, every day
                      </div>
                    </div>
                  </div>

                  {/* Illustration (FIXED: make image fill the frame) */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-[22px] border border-white/70 bg-white/65 backdrop-blur-md p-6 shadow-sm">
                      <div className="text-sm font-semibold text-dark-teal">A place to belong</div>
                      <p className="mt-2 text-sm text-sage leading-relaxed">
                        A friendly start for children to explore, make friends, and grow in confidence.
                      </p>

                      {/* Frame */}
                      <div className="mt-4 relative h-[150px] w-full overflow-hidden rounded-xl bg-white/35">
                        <Image
                          src="/images/home/welcome-illustration.png"
                          alt="Playful preschool illustration"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 420px, 100vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-7 md:gap-10 md:grid-cols-12">
                  {/* Copy */}
                  <div className="md:col-span-7">
                    <p className="text-[16px] md:text-lg text-sage leading-relaxed">
                      At <span className="text-teal font-semibold">Abacus</span>, our goal is to give your child the educational support they need to reach their full
                      potential. Our curriculum is carefully designed with your child’s development in mind. We focus
                      on building personal responsibility, independence, effective communication, organisational
                      skills, and critical thinking in a safe and supportive environment.
                    </p>

                    <div className="mt-7 rounded-2xl border border-sage/20 bg-gradient-to-br from-sage/10 via-white/30 to-teal/10 p-6 shadow-inner">
                      <p className="text-lg md:text-xl font-semibold text-dark-teal text-center italic leading-snug">
                        “Together we learn, together we grow, together we achieve.”
                      </p>
                    </div>

                    <p className="mt-7 text-[16px] md:text-lg text-sage leading-relaxed">
                      We believe a positive, diverse, and nurturing space helps every child gain essential skills for
                      their future academic success.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="md:col-span-5">
                    <div className="rounded-2xl border border-white/60 bg-white/55 backdrop-blur-md p-6 shadow-sm">
                      <h3 className="text-base font-bold text-dark-teal tracking-tight">What parents value most</h3>

                      <div className="mt-5 space-y-4">
                        <Highlight
                          icon={ShieldCheck}
                          title="Safe and supportive"
                          text="A safeguarding-first culture with caring routines."
                        />
                        <Highlight
                          icon={HeartHandshake}
                          title="Inclusive community"
                          text="Every child is welcomed and encouraged to belong."
                        />
                        <Highlight
                          icon={GraduationCap}
                          title="Learning through play"
                          text="EYFS-aligned activities that build confidence."
                        />
                      </div>
                    </div>

                    <motion.div
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-dark-teal/90 text-cream px-4 py-2 shadow-lg"
                      animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                      transition={reduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="h-2 w-2 rounded-full bg-coral" />
                      <span className="text-sm font-medium">Book a visit to see us in action</span>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes welcomeGradient {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}

function Highlight({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType
  title: string
  text: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15">
        <Icon className="h-4 w-4 text-dark-teal" />
      </div>
      <div>
        <div className="text-sm font-semibold text-dark-teal leading-snug">{title}</div>
        <div className="text-sm text-sage leading-relaxed">{text}</div>
      </div>
    </div>
  )
}
