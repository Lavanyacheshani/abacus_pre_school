import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { UpcomingTermDatesContent } from "./upcoming-term-dates-content"

export const metadata = {
  title: "Upcoming Term Dates | Abacus Pre-school",
  description:
    "Upcoming term dates for your diary, including staff days, half term breaks, bank holidays, and term start/end dates.",
}

export default function UpcomingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <UpcomingTermDatesContent />
      <Footer />
    </div>
  )
}
