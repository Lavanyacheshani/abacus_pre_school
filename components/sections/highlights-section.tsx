import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Star, CheckCircle } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "Small Class Sizes",
    desc: "Personalized attention for every child",
    color: "from-teal to-dark-teal",
  },
  {
    icon: Heart,
    title: "Nurturing Environment",
    desc: "Safe, warm, and supportive space",
    color: "from-coral to-orange",
  },
  {
    icon: Star,
    title: "Experienced Staff",
    desc: "Qualified early years educators",
    color: "from-sage to-teal",
  },
  {
    icon: CheckCircle,
    title: "Flexible Funding",
    desc: "Multiple funding options available",
    color: "from-orange to-coral",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-teal/5 via-white to-sage/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-coral/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-3xl animate-pulse-slow-delayed"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">Why Choose Abacus?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <Card
                key={idx}
                className="border-0 shadow-soft hover:shadow-glow-lg transition-all duration-500 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden group hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow relative z-10`}
                  >
                    <item.icon className="w-8 h-8 text-cream" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-teal mb-2 relative z-10">{item.title}</h3>
                  <p className="text-sage text-sm leading-relaxed relative z-10">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
