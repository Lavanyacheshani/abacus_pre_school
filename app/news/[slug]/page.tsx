import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { Calendar, ArrowLeft } from "lucide-react"
import { blogPosts, getPostBySlug } from "@/lib/news"

export async function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }))
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug as string)
    if (!post) return notFound()

    return (
        <div className="min-h-screen bg-cream">
            <Navigation />

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="container mx-auto px-4 relative py-12 md:py-16">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/news" className="inline-flex items-center gap-2 text-sage hover:text-dark-teal transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to News
                        </Link>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
                            <span className="text-sm font-semibold text-dark-teal">{post.category}</span>
                            <span className="text-sage">•</span>
                            <span className="text-sm text-sage inline-flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                        </div>

                        <h1 className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">{post.title}</h1>
                        <p className="mt-4 text-lg text-sage leading-relaxed max-w-3xl">{post.excerpt}</p>
                    </div>
                </div>
            </section>

            <section className="pb-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
                            <div className="relative aspect-[16/7]">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl border border-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-7 md:p-10">
                        <p className="text-sage leading-relaxed text-lg">{post.content.intro}</p>

                        <div className="mt-8 space-y-8">
                            {post.content.sections.map((s) => (
                                <div key={s.heading}>
                                    <h2 className="text-2xl md:text-3xl font-bold text-dark-teal">{s.heading}</h2>
                                    <div className="mt-3 space-y-4">
                                        {s.body.map((para, idx) => (
                                            <p key={idx} className="text-sage leading-relaxed">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {post.content.bullets?.length ? (
                            <div className="mt-10 rounded-3xl border border-sage/15 bg-sage/10 p-6">
                                <h3 className="text-lg font-bold text-dark-teal">Helpful notes</h3>
                                <ul className="mt-4 space-y-2">
                                    {post.content.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sage">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-teal" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    )
}
