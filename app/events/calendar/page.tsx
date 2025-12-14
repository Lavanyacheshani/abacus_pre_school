import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { EventCalendarContent } from "./event-calendar-content"

export const metadata = {
    title: "Event Calendar | Abacus Pre-school",
    description: "View term dates and events in a simple calendar format.",
}

export default function EventCalendarPage() {
    return (
        <div className="min-h-screen bg-cream">
            <Navigation />
            <EventCalendarContent />
            <Footer />
        </div>
    )
}
