import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/sections/about-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Who We Are | Abacus Pre-school New Malden",
  description: "Learn about our vision, approach, and learning philosophy at Abacus Pre-school.",
}

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-teal/5 to-sage/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-teal mb-6 text-balance">Who We Are</h1>
          <p className="text-xl text-sage max-w-2xl mx-auto text-pretty">
            Discover our vision, approach, and commitment to nurturing young minds
          </p>
        </div>
      </section>

      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  )
}
