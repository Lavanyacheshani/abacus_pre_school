import { Navigation } from "@/components/navigation"
import { HolidayClubSection } from "@/components/sections/holiday-club-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Holiday Club | Abacus Pre-school New Malden",
  description: "Join our exciting holiday club programs filled with fun activities and learning.",
}

export default function HolidayClubPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-orange/5 to-coral/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-teal mb-6 text-balance">Holiday Club</h1>
          <p className="text-xl text-sage max-w-2xl mx-auto text-pretty">
            Fun-filled activities and adventures during school breaks
          </p>
        </div>
      </section>

      <HolidayClubSection />
      <CTASection />
      <Footer />
    </div>
  )
}
