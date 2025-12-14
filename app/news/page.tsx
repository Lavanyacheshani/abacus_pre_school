import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { blogPosts } from "@/lib/news"

export const metadata = {
  title: "News & Events | Abacus Pre-school",
  description: "Latest announcements, events, and updates from Abacus Pre-school.",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-teal tracking-tight mb-4">
                News & Events
              </h1>
              <p className="text-lg text-sage max-w-2xl mx-auto">
                Updates, celebrations, and helpful learning tips for families.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-sage/20 bg-white/70 backdrop-blur-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {post.image ? (
                    <div className="relative h-52 w-full">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                  ) : null}

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="inline-flex items-center rounded-full bg-sage/12 border border-sage/20 px-3 py-1 font-semibold text-dark-teal">
                        {post.category}
                      </span>
                      <span className="text-sage">{post.date}</span>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-dark-teal">{post.title}</h2>
                    <p className="mt-3 text-sage leading-relaxed">{post.excerpt}</p>

                    <div className="mt-6">
                      <Link
                        href={`/news/${post.slug}`}
                        className="inline-flex items-center justify-center rounded-full bg-teal hover:bg-dark-teal text-cream px-6 py-2.5 text-sm font-semibold transition-colors"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
