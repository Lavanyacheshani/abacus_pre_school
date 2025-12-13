import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { WelcomeSection } from "@/components/sections/welcome-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <HighlightsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
