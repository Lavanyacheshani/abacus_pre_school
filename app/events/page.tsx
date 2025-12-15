import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { EventsPageContent } from "./events-page-content"

export const metadata = {
    title: "Events & Term Dates | Abacus Pre-school",
    description: "Event calendar, upcoming term dates, and past term dates for Abacus Pre-school New Malden.",
}

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-cream">
            <Navigation />
            <EventsPageContent />
            <Footer />
        </div>
    )
}
