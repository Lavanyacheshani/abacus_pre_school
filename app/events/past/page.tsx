import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { PastTermDatesContent } from "./past-term-dates-content"

export const metadata = {
    title: "Term Dates & Events | Abacus Pre-school",
    description:
        "Term dates and key events for your diary, including staff days, half term breaks, bank holiday closures, and term start/end dates.",
}

export default function UpcomingPage() {
    return (
        <div className="min-h-screen bg-cream">
            <Navigation />
            <PastTermDatesContent />
            <Footer />
        </div>
    )
}
