"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ShieldCheck, HeartHandshake, Stars, ChevronDown } from "lucide-react"

const HERO_IMAGES = ["/hero/hero-1.avif", "/hero/hero-2.avif", "/hero/hero-3.avif"]

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setIsLoaded(true)

    const onScroll = () => setScrollY(window.scrollY || 0)
    window.addEventListener("scroll", onScroll, { passive: true })

    // Always rotate images when there are 2+ images.
    // If reduceMotion is ON, it will switch with no fade (see transition below).
    let id: number | null = null
    if (HERO_IMAGES.length > 1) {
      id = window.setInterval(() => {
        setActiveImage((i) => (i + 1) % HERO_IMAGES.length)
      }, 6500)
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (id) window.clearInterval(id)
    }
  }, [])

  const parallaxY = reduceMotion ? 0 : Math.min(scrollY * 0.12, 70)

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
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut } },
  }

  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-36" aria-label="Hero">
      {/* Background images */}
      <div className="absolute inset-0 -z-10">
        {HERO_IMAGES.map((src, i) => (
          <motion.div
            key={`${src}-${i}`}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === activeImage ? 1 : 0 }}
            transition={{
              duration: reduceMotion ? 0 : 1.2, // fade off when reduced motion
              ease: "easeInOut",
            }}
            style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
          >
            <Image
              src={src}
              alt="Abacus Pre-school learning environment"
              fill
              priority={i === 0}
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Readability layers */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal/18 via-transparent to-coral/18 mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* Subtle floating “accent dots” (nice motion without looking busy) */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-gradient-to-br from-teal/25 to-transparent blur-2xl"
        animate={reduceMotion ? undefined : { y: [0, 18, 0], x: [0, 10, 0] }}
        transition={reduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-gradient-to-br from-coral/20 to-transparent blur-2xl"
        animate={reduceMotion ? undefined : { y: [0, -16, 0], x: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <Badge className="mb-6 bg-white/14 backdrop-blur-md text-white border-white/25 rounded-full px-6 py-2">
              Ages 2–5 • New Malden, Surrey
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-tight text-white"
          >
            Where learning begins with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent animate-[heroGradient_8s_linear_infinite]">
                wonder
              </span>
              {/* Underline glow */}
              <span className="pointer-events-none absolute -bottom-2 left-0 right-0 h-[10px] rounded-full bg-gradient-to-r from-teal/25 via-sage/25 to-coral/25 blur-md" />
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90">
            A warm, caring pre-school where children feel safe, supported, and inspired to grow through play.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group relative bg-teal hover:bg-dark-teal text-white rounded-full px-8 text-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
              asChild
            >
              <Link href="/admissions" className="inline-flex items-center">
                <motion.span
                  aria-hidden="true"
                  animate={reduceMotion ? undefined : { rotate: [0, -6, 6, -4, 4, 0] }}
                  transition={reduceMotion ? undefined : { duration: 1.2, repeat: Infinity, repeatDelay: 6 }}
                  className="inline-flex items-center"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                </motion.span>
                Apply Now
                <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-[-20deg] translate-x-[-120%] group-hover:translate-x-[260%] transition-transform duration-700" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-lg border-white/70 text-white bg-white/10 hover:bg-white hover:text-dark-teal backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]"
              asChild
            >
              <Link href="/contact#book-visit">Book a Visit</Link>
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div variants={item} className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
            <TrustPill icon={ShieldCheck} text="Safeguarding-first" />
            <TrustPill icon={HeartHandshake} text="Inclusive & caring" />
            <TrustPill icon={Stars} text="EYFS aligned" />
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            variants={item}
            className="mt-14 flex justify-center"
            aria-hidden="true"
          >
            <motion.div
              className="inline-flex items-center gap-2 text-white/70 text-sm"
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={reduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>Scroll</span>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes heroGradient {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

function TrustPill({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/14 backdrop-blur-md px-4 py-2 border border-white/25 text-white/90">
      <span className="inline-flex h-5 w-5 items-center justify-center">
        <Icon className="h-4 w-4" />
      </span>
      <span className="leading-none">{text}</span>
    </div>
  )
}
