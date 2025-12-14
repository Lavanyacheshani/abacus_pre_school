import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { HolidayClubSection } from "@/components/sections/holiday-club-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { Sparkles, Sun, Paintbrush, Music, Leaf, PartyPopper, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Holiday Club | Abacus Pre-school New Malden",
  description: "Join our exciting holiday club programs filled with fun activities and learning.",
}

export default function HolidayClubPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-28 left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/16 via-coral/14 to-sage/16 blur-3xl" />
            <div className="absolute -bottom-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/14 to-transparent blur-3xl" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:26px_26px]" />
          </div>

          <div className="container mx-auto px-4 relative pt-14 pb-10 md:pt-22 md:pb-14">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
                {/* Left */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/70 px-4 py-2 text-sm font-semibold text-dark-teal">
                    <Sparkles className="h-4 w-4 text-coral" />
                    Holiday fun for little explorers
                  </div>

                  <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-dark-teal tracking-tight text-balance">
                    Holiday Club
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-sage max-w-2xl text-pretty mx-auto lg:mx-0">
                    Play, create, and discover during school breaks, with friendly staff and a calm, safe routine.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-teal hover:bg-dark-teal text-cream px-7 py-3 text-sm md:text-base font-semibold transition-colors"
                    >
                      Enquire now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                    <Link
                      href="/sessions-fees/holiday-club"
                      className="inline-flex items-center justify-center rounded-full bg-white/70 hover:bg-white text-dark-teal border border-sage/20 px-7 py-3 text-sm md:text-base font-semibold transition-colors"
                    >
                      View dates & fees
                    </Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/65 border border-white/70 px-4 py-2 text-sage">
                      <Sun className="h-4 w-4 text-coral" />
                      Outdoor play
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/65 border border-white/70 px-4 py-2 text-sage">
                      <Paintbrush className="h-4 w-4 text-teal" />
                      Crafts & messy play
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/65 border border-white/70 px-4 py-2 text-sage">
                      <Music className="h-4 w-4 text-coral" />
                      Songs & movement
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/65 border border-white/70 px-4 py-2 text-sage">
                      <Leaf className="h-4 w-4 text-teal" />
                      Nature activities
                    </span>
                  </div>
                </div>

                {/* Right - Cute collage */}
                <div className="relative">
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-coral/20 blur-2xl" />
                  <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-teal/20 blur-2xl" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-white/70 shadow-sm">
                      <div className="relative h-[210px] w-full">
                        <Image
                          src="/holiday-club-outdoor-play.jpg"
                          alt="Children enjoying outdoor play"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-white/70 shadow-sm">
                      <div className="relative h-[210px] w-full">
                        <Image
                          src="/holiday-club-crafts.jpg"
                          alt="Children doing crafts"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-white/70 shadow-sm col-span-2">
                      <div className="relative h-[220px] md:h-[240px] w-full">
                        <Image
                          src="/holiday-club-group-fun.jpg"
                          alt="Holiday club group fun"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="rounded-2xl bg-white/80 backdrop-blur-md border border-white/70 p-4">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-2xl bg-coral/15 flex items-center justify-center">
                              <PartyPopper className="h-5 w-5 text-coral" />
                            </div>
                            <div>
                              <p className="font-bold text-dark-teal">A happy, busy day</p>
                              <p className="text-sm text-sage">
                                A balanced mix of active play, calm corners, and creative time.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Little “sticker” */}
                  <div className="hidden md:block absolute -left-6 top-10 rotate-[-8deg]">
                    <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-white/70 px-5 py-3 shadow-sm">
                      <p className="text-sm font-semibold text-dark-teal">Ages 2–5</p>
                      <p className="text-xs text-sage">Warm routines and friendly faces</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick gallery strip */}
              <div className="mt-10 md:mt-12">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-white/70 shadow-sm">
                    <div className="relative h-[180px] w-full">
                      <Image
                        src="/holiday-club-sensory-play.jpg"
                        alt="Sensory play activity"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-white/70 shadow-sm">
                    <div className="relative h-[180px] w-full">
                      <Image
                        src="/holiday-club-story-time.jpg"
                        alt="Story time"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-white/70 shadow-sm">
                    <div className="relative h-[180px] w-full">
                      <Image
                        src="/holiday-club-building-blocks.jpg"
                        alt="Building and construction play"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* CONTENT WRAP */}
        <section className="relative pt-10 pb-16 md:pt-12 md:pb-20 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal/12 to-transparent blur-3xl" />
            <div className="absolute bottom-16 right-[-140px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              {/* Wrap HolidayClubSection in a “card” for a softer, cuter feel */}
              <div className="rounded-[26px] border border-white/70 bg-white/75 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.08)] p-5 md:p-8">
                <HolidayClubSection />
              </div>

              

              {/* Extra cute footer strip */}
              <div className="mt-10">
                <div className="rounded-[26px] border border-sage/15 bg-sage/10 p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-3 items-start">
                    <div>
                      <p className="text-lg font-bold text-dark-teal">What to bring</p>
                      <ul className="mt-3 space-y-2 text-sage list-disc pl-5">
                        <li>Comfortable clothes for messy play</li>
                        <li>A named water bottle</li>
                        <li>Suitable outdoor clothing</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-lg font-bold text-dark-teal">A calm routine</p>
                      <p className="mt-3 text-sage leading-relaxed">
                        We balance energetic activities with quiet corners, stories, and rest time so children feel
                        settled and happy.
                      </p>
                    </div>

                    <div>
                      <p className="text-lg font-bold text-dark-teal">Want to ask a question?</p>
                      <p className="mt-3 text-sage leading-relaxed">
                        Send us a message and we’ll help with dates, places, and anything your child needs.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-full bg-dark-teal hover:bg-teal text-cream px-6 py-2.5 text-sm font-semibold transition-colors"
                        >
                          Contact us
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
