import { Card, CardContent } from "@/components/ui/card"

export function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #2a7b7b 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-dark-teal mb-4 animate-on-scroll">
              Welcome to Abacus Pre-school
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-coral to-transparent mx-auto rounded-full"></div>
          </div>
          <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 hover:shadow-glow-xl transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-sage leading-relaxed mb-6">
                At Abacus, our goal is to give your child the educational support they need to reach their full
                potential. Our curriculum is carefully designed with your child's development in mind. We focus on
                building personal responsibility, independence, effective communication, organisational skills, and
                critical thinking in a safe and supportive environment.
              </p>
              <div className="bg-gradient-to-br from-sage/10 to-teal/10 backdrop-blur-sm rounded-2xl p-6 border border-sage/20 shadow-inner">
                <p className="text-xl font-semibold text-dark-teal text-center italic">
                  "Together we learn, together we grow, together we achieve."
                </p>
              </div>
              <p className="text-lg text-sage leading-relaxed mt-6">
                We believe a positive, diverse, and nurturing space helps every child gain essential skills for their
                future academic success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
