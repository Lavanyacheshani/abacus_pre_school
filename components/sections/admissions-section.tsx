import { Card, CardContent } from "@/components/ui/card"

const steps = [
  { step: "1", text: "Complete the application form" },
  { step: "2", text: "Once a place becomes available, you will receive an offer by email" },
  { step: "3", text: "Complete the registration and All About Me forms" },
  { step: "4", text: "Submit them by post or email to admin@abacusnewmalden.co.uk" },
  { step: "5", text: "We'll send confirmation and welcome you to the Abacus family" },
]

export function AdmissionsSection() {
  return (
    <section id="admissions" className="py-16 md:py-24 bg-gradient-to-br from-cream via-cream-light to-sage/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-4">Joining Our Community</h2>
            <p className="text-lg text-sage">
              Abacus Pre-school offers rolling admissions throughout the academic year based on current availability
            </p>
          </div>
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-glow-xl transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-8 md:p-12 bg-white/90 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-dark-teal mb-6">How to Apply</h3>
              <div className="space-y-6">
                {steps.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-dark-teal flex items-center justify-center flex-shrink-0 text-cream font-bold shadow-glow group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {item.step}
                    </div>
                    <p className="text-lg text-sage pt-1.5 group-hover:translate-x-2 transition-transform duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-coral/10 to-orange/10 backdrop-blur-sm rounded-2xl border border-coral/30 shadow-inner">
                <p className="text-sage leading-relaxed">
                  <strong className="text-dark-teal">Early Learning:</strong> We also have an expression of interest
                  form if you want to join early learning for children aged 18 months and older.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
