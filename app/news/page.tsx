import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { Calendar } from "lucide-react"
import { blogPosts } from "@/lib/news"

export const metadata = {
  title: "News & Events | Abacus Pre-school New Malden",
  description: "Stay updated with the latest news, events, and blog posts from Abacus Pre-school.",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-cream">
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
                key={post.slug}
                className="group bg-white/85 backdrop-blur-md rounded-3xl shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden"
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

                  <Link
                    href={`/news/${post.slug}`}
                    className="text-teal font-semibold hover:text-dark-teal transition-colors"
                  >
                    Read More →
                  </Link>
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
