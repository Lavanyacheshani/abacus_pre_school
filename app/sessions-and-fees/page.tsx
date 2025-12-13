import { Navigation } from "@/components/navigation"
import { SessionsSection } from "@/components/sections/sessions-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Sessions & Fees | Abacus Pre-school New Malden",
  description: "View our flexible session times and competitive fees for preschool care.",
}

export default function SessionsAndFeesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-coral/5 to-orange/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-teal mb-6 text-balance">Sessions & Fees</h1>
          <p className="text-xl text-sage max-w-2xl mx-auto text-pretty">
            Flexible options designed to fit your family's needs
          </p>
        </div>
      </section>

      <SessionsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
