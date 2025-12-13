import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckCircle } from "lucide-react"

const sessions = [
  {
    time: "8:30 am – 9:00 am",
    name: "Breakfast Club",
    price: "£5",
    gradient: "from-orange/10 to-coral/10",
  },
  {
    time: "9:00 am – 12:00 pm",
    name: "Morning Session",
    price: "£24",
    gradient: "from-teal/10 to-sage/10",
  },
  { time: "12:00 pm – 1:00 pm", name: "Lunch Club", price: "£6", gradient: "from-sage/10 to-teal/10" },
  {
    time: "12:00 pm – 3:00 pm",
    name: "Afternoon Session",
    price: "£24",
    gradient: "from-coral/10 to-orange/10",
  },
]

export function SessionsSection() {
  return (
    <section id="sessions" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-teal rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-coral rounded-full animate-ping-slow-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">Sessions & Fees</h2>
            <p className="text-lg text-sage">Flexible options to suit your family's needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {sessions.map((session, idx) => (
              <Card
                key={idx}
                className="border border-sage/20 shadow-soft hover:shadow-glow-lg transition-all duration-500 rounded-2xl overflow-hidden group hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${session.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-teal group-hover:animate-spin-slow" />
                        <p className="text-sage font-medium">{session.time}</p>
                      </div>
                      <h3 className="text-xl font-bold text-dark-teal">{session.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-coral group-hover:scale-110 transition-transform">
                        {session.price}
                      </p>
                      <p className="text-xs text-sage">per session</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-sage/5 to-teal/5 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-glow-lg transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-teal mb-3">Important Information</h3>
                <ul className="space-y-2 text-sage">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span>Breakfast available on request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span>Families must provide a healthy packed lunch for lunch club</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span>From January 2026, session fees will increase to £25 per 3-hour session</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-teal/5 to-coral/5 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-glow-lg transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-teal mb-3">Funding Options</h3>
                <p className="text-sage leading-relaxed mb-3">
                  We accept universal 2- and 3-year-old funding and 30-hour funding where available. Childcare vouchers
                  and the Government's Tax-Free Childcare scheme are also accepted.
                </p>
                <p className="text-sm text-sage">
                  Fees are invoiced termly and must be paid for booked sessions regardless of absence. We can offer
                  flexible payment plans in exceptional circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
