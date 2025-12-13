import { Star, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-teal mb-6">Who We Are</h2>
              <p className="text-lg text-sage leading-relaxed mb-6">
                Abacus Pre-school is a welcoming early years setting located in New Malden, Surrey. We provide a
                stimulating learning environment where children can explore, play, and grow with confidence and
                curiosity.
              </p>
              <p className="text-lg text-sage leading-relaxed">
                We celebrate diversity and aim to foster a community where every child feels valued and included.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-soft hover:shadow-glow-lg transition-all duration-500 border border-white/50 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage/20 to-teal/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-teal mb-2">Our Vision</h3>
                    <p className="text-sage leading-relaxed">
                      We believe every child is unique and deserves a safe, loving space to explore and learn. We focus
                      on holistic development, helping children grow socially, physically, emotionally, and
                      intellectually.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-soft hover:shadow-glow-lg transition-all duration-500 border border-white/50 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral/20 to-orange/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-teal mb-2">Our Approach</h3>
                    <p className="text-sage leading-relaxed">
                      We encourage children to become confident, independent learners. Staff work closely with parents
                      to support each child's progress and create a positive partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
