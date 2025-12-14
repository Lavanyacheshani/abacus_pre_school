import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SessionsSection } from "@/components/sections/sessions-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { Clock, Coins, CalendarDays, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Sessions & Fees | Abacus Pre-school New Malden",
  description: "View our flexible session times and competitive fees for preschool care.",
}

export default function SessionsAndFeesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-28 left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-coral/14 via-orange/12 to-sage/14 blur-3xl" />
            <div className="absolute -bottom-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-teal/12 to-transparent blur-3xl" />
            <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>

          <div className="container mx-auto px-4 relative pt-16 pb-12 md:pt-24 md:pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/70 px-4 py-2 text-sm font-semibold text-dark-teal">
                <Sparkles className="h-4 w-4 text-coral" />
                Clear, flexible options
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold text-dark-teal tracking-tight text-balance">
                Sessions & Fees
              </h1>

              <p className="mt-4 text-lg md:text-xl text-sage max-w-2xl mx-auto text-pretty">
                Flexible session choices and clear fees designed to support children and fit around family routines.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-teal hover:bg-dark-teal text-cream px-7 py-3 text-sm md:text-base font-semibold transition-colors"
                >
                  Enquire now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/sessions-fees/admissions"
                  className="inline-flex items-center justify-center rounded-full bg-white/70 hover:bg-white text-dark-teal border border-sage/20 px-7 py-3 text-sm md:text-base font-semibold transition-colors"
                >
                  Admissions
                </Link>
              </div>

              {/* Key points */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md p-4">
                  <Clock className="h-6 w-6 text-teal mx-auto" />
                  <p className="mt-3 font-semibold text-dark-teal">Flexible sessions</p>
                  <p className="mt-1 text-sm text-sage">
                    Choose mornings, afternoons or full days.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md p-4">
                  <Coins className="h-6 w-6 text-coral mx-auto" />
                  <p className="mt-3 font-semibold text-dark-teal">Clear fees</p>
                  <p className="mt-1 text-sm text-sage">
                    Simple pricing with no surprises.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md p-4">
                  <CalendarDays className="h-6 w-6 text-dark-teal mx-auto" />
                  <p className="mt-3 font-semibold text-dark-teal">Term-time routine</p>
                  <p className="mt-1 text-sm text-sage">
                    A consistent structure that helps children settle.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md p-4">
                  <CheckCircle2 className="h-6 w-6 text-orange mx-auto" />
                  <p className="mt-3 font-semibold text-dark-teal">Help choosing</p>
                  <p className="mt-1 text-sm text-sage">
                    We’re happy to guide you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="relative pt-10 pb-16 md:pt-12 md:pb-20 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal/12 to-transparent blur-3xl" />
            <div className="absolute bottom-16 right-[-140px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              {/* Soft card wrapper */}
              <div className="rounded-[26px] border border-white/70 bg-white/80 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.08)] p-6 md:p-8">
                <SessionsSection />
              </div>

              <div className="mt-12">
                <CTASection />
              </div>

              {/* Friendly notes */}
              <div className="mt-10 rounded-[26px] border border-sage/15 bg-sage/10 p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="font-bold text-dark-teal">Funding support</p>
                    <p className="mt-2 text-sage">
                      If you’re eligible for funded hours, we can explain how it works.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-dark-teal">Extra hours</p>
                    <p className="mt-2 text-sage">
                      Additional sessions may be available depending on space.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-dark-teal">Still unsure?</p>
                    <p className="mt-2 text-sage">
                      Tell us about your child and we’ll help you choose.
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
