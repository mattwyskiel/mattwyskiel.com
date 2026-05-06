import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next";
import { getPosts } from "@/lib/contentful";

export const metadata: Metadata = {
    title: "Stories | Matt Wyskiel",
    description: "A collection of the stories I have to tell. (TL;DR I'm a Yapper)",
    openGraph: {
        type: "website",
        description: "A collection of the stories I have to tell. (TL;DR I'm a Yapper)",
        url: "https://mattwyskiel.com/stories",
        title: "Stories | Matt Wyskiel",
        images: { url: "https://mattwyskiel.com/ogimage.png" },
    },
};

export default async function StoriesPage() {
    const posts = await getPosts()
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <main className="container mx-auto px-4 py-10 max-w-4xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back home
                </Link>

                <h1 className="text-3xl font-bold mb-4">Stories</h1>
                <p className="text-muted-foreground mb-8 max-w-2xl">
                    Me yapping.
                </p>

                <div className="space-y-10">
                    {posts.map((post, index) => (
                        <article key={index} className="border-b pb-10">
                            <h2 className="text-2xl font-semibold mb-2">
                                <Link href={`/stories/${post.slug}`} className="hover:text-teal-600">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">{post.publishDate.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}</p>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {(post.tags || []).map((tag, i) => (
                                    <span key={i} className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={`/stories/${post.slug}`} className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                                Read more →
                            </Link>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    )
}
