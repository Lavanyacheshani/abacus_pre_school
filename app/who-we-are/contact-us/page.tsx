import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { ContactContent } from "./contact-content"

export const metadata = {
    title: "Contact Us | Abacus Pre-school",
    description: "Get in touch with Abacus Pre-school in New Malden. Find our address, emails, opening hours, and map.",
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-cream">
            <Navigation />
            <ContactContent />
            <Footer />
        </div>
    )
}
