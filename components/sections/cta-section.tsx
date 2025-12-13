import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-teal via-teal to-sage text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Join the Abacus Family?</h2>
          <p className="text-xl mb-8 text-cream/90 text-pretty">
            Give your child the best start in their learning journey. Apply now or book a visit to see our nurturing
            environment firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-coral hover:bg-coral-dark text-cream rounded-full text-lg px-8 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-teal rounded-full text-lg px-8 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Book a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
