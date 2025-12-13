import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/sections/about-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Who We Are | Abacus Pre-school New Malden",
  description: "Learn about our vision, approach, and learning philosophy at Abacus Pre-school.",
}

export default function WhoWeArePage() {
  const sections = [
    {
      title: "Our Staff",
      description: "Meet our dedicated team of educators and support staff",
      href: "/who-we-are/our-staff",
      icon: "👥"
    },
    {
      title: "Mission, Purpose, Vision & Values",
      description: "Our core organizational statements and principles",
      href: "/who-we-are/mission-vision-values",
      icon: "🎯"
    },
    {
      title: "Learning Journeys",
      description: "Tailored developmental pathways for each age group",
      href: "/who-we-are/learning-journeys",
      icon: "📚"
    },
    {
      title: "Policies & Procedures",
      description: "Comprehensive policies for the highest standards of care",
      href: "/who-we-are/policies-procedures",
      icon: "📋"
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      href: "/who-we-are/contact-us",
      icon: "📞"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-teal/5 to-sage/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-teal mb-6 text-balance">Who We Are</h1>
          <p className="text-xl text-sage max-w-2xl mx-auto text-pretty">
            Discover our vision, approach, and commitment to nurturing young minds
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-teal mb-12">Explore Our Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow h-full border-l-4 border-teal hover:border-dark-teal">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-xl font-bold text-dark-teal mb-2 group-hover:text-teal transition">
                    {section.title}
                  </h3>
                  <p className="text-sage text-sm">{section.description}</p>
                  <div className="mt-4 text-teal font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  )
}
