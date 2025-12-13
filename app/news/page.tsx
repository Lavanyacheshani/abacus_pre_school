import { Navigation } from "@/components/navigation"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { Calendar } from "lucide-react"

export const metadata = {
  title: "News & Events | Abacus Pre-school New Malden",
  description: "Stay updated with the latest news, events, and blog posts from Abacus Pre-school.",
}

export default function NewsPage() {
  const blogPosts = [
    {
      title: "Welcome to Our New School Year",
      date: "September 15, 2024",
      excerpt:
        "We're excited to welcome all our new and returning families for another wonderful year of learning and growth...",
      image: "/children-playing-preschool.jpg",
      category: "Announcements",
    },
    {
      title: "The Importance of Play-Based Learning",
      date: "September 8, 2024",
      excerpt: "Discover how play-based learning helps children develop essential skills for their future education...",
      image: "/children-learning-through-play.jpg",
      category: "Education",
    },
    {
      title: "Our Autumn Festival Celebration",
      date: "October 20, 2024",
      excerpt:
        "Join us for our annual Autumn Festival with fun activities, crafts, and seasonal treats for the whole family...",
      image: "/autumn-festival-children.jpg",
      category: "Events",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-orange/5 to-teal/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-teal mb-6 text-balance">News & Events</h1>
          <p className="text-xl text-sage max-w-2xl mx-auto text-pretty">
            Stay connected with the latest updates from our preschool community
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-3xl shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 bg-coral/90 backdrop-blur-sm text-cream text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-sage mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-dark-teal mb-3 group-hover:text-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sage text-pretty leading-relaxed mb-4">{post.excerpt}</p>
                  <button className="text-teal font-semibold hover:text-dark-teal transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  )
}
