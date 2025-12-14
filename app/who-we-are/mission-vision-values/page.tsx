import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { MissionVisionValuesContent } from "./mission-vision-values-content"

export const metadata = {
  title: "Mission, Vision & Values | Abacus Pre-school",
  description: "Our vision, aims, and how we support children through British Values and purposeful practice.",
}

export default function MissionVisionValuesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <MissionVisionValuesContent />
      <Footer />
    </div>
  )
}
