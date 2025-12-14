import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { PoliciesContent } from "./policies-content"

export const metadata = {
    title: "Policies & Procedures | Abacus Pre-school",
    description: "Our policies and procedures help ensure a safe, caring, and well-managed environment for every child.",
}

export default function PoliciesProceduresPage() {
    return (
        <div className="min-h-screen bg-cream">
            <Navigation />
            <PoliciesContent />
            <Footer />
        </div>
    )
}
