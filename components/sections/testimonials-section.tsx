import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    text: "The staff are incredibly caring and attentive. My daughter has flourished here!",
  },
  {
    name: "James P.",
    text: "A wonderful environment where children truly learn through play. Highly recommend.",
  },
  {
    name: "Priya K.",
    text: "The diverse and inclusive atmosphere makes every child feel welcome and valued.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sage/5 to-cream relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-coral/10 to-transparent rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">What Parents Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="border-0 shadow-soft rounded-2xl bg-white/80 backdrop-blur-md hover:shadow-glow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-coral text-coral animate-star-twinkle"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-sage leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-dark-teal">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
