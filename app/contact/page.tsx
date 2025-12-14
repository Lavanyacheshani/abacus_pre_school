import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { ContactContent } from "../who-we-are/contact-us/contact-content"

export const metadata = {
  title: "Contact Us | Abacus Pre-school New Malden",
  description: "Get in touch with Abacus Pre-school New Malden. We'd love to hear from you!",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <ContactContent />
      <Footer />
    </div>
  )
}
