import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { blogPosts, getPostBySlug } from "@/lib/news"
import { BlogPostContent } from "./post-content"

type PageProps = {
    params: Promise<{ slug: string }>
}

// NOTE: Do NOT set `dynamicParams = false` while developing.
// It can force 404s unless Next is 100% sure about all static params.

export function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) return { title: "Post not found | Abacus Pre-school" }

    return {
        title: `${post.title} | Abacus Pre-school`,
        description: post.excerpt,
    }
}

export default async function NewsPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) notFound()

    return (
        <div className="min-h-screen bg-cream">
            <Navigation />
            <BlogPostContent post={post} />
            <Footer />
        </div>
    )
}
