"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const activities = ["Messy Play", "Water Play", "Arts & Crafts", "Games", "Story Time", "Music", "Cooking"]

export function HolidayClubSection() {
  return (
    <section id="holiday-club" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal via-dark-teal to-sage rounded-3xl p-8 md:p-12 text-cream shadow-2xl relative overflow-hidden hover:shadow-glow-xl transition-all duration-500 hover:scale-[1.02]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>

            <div className="max-w-2xl relative z-10">
              <Badge className="mb-4 bg-white/20 backdrop-blur-md text-cream border-white/30 rounded-full shadow-glow">
                Summer Programme
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Summer Holiday Club</h2>
              <p className="text-lg text-cream/90 leading-relaxed mb-6">
                Each year we run a Holiday Club from late July to August. The club is Ofsted registered and staffed by
                our regular, DBS-checked team. It's open to children aged 2–5 and runs from 9:00 am to 3:00 pm.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20 shadow-inner">
                <h3 className="text-xl font-bold mb-3">Activities Include:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-cream/90 leading-relaxed">
                Our small group sizes create a calm, supportive space where children can have fun, build confidence, and
                make new friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
