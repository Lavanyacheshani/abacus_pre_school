import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Contact Us | Abacus Pre-school New Malden",
  description: "Get in touch with Abacus Pre-school New Malden. We'd love to hear from you!",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-sage/5 to-teal/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-teal mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-sage max-w-2xl mx-auto text-pretty">
            We'd love to hear from you and answer any questions
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
