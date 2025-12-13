import { Navigation } from "@/components/navigation"
import { AdmissionsSection } from "@/components/sections/admissions-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Admissions | Abacus Pre-school New Malden",
  description: "Learn about our admissions process and how to enroll your child at Abacus Pre-school.",
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-teal/5 to-coral/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-teal mb-6 text-balance">Admissions</h1>
          <p className="text-xl text-sage max-w-2xl mx-auto text-pretty">Start your child's learning journey with us</p>
        </div>
      </section>

      <AdmissionsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
