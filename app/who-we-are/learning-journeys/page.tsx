import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { LearningJourneysContent } from "./learning-journeys-content"

export const metadata = {
    title: "Learning Journeys | Abacus Pre-school",
    description:
        "How we celebrate each child’s learning and development through our Learning Journey and the EYFS.",
}

export default function LearningJourneysPage() {
    return (
        <div className="min-h-screen bg-cream">
            <Navigation />
            <LearningJourneysContent />
            <Footer />
        </div>
    )
}
