import { Navigation } from "@/components/navigation"
import { AdmissionsSection } from "@/components/sections/admissions-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Admissions | Abacus Pre-school New Malden",
  description: "Learn about our admissions process and apply for a place at Abacus Pre-school.",
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <AdmissionsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
