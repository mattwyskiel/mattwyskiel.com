import { getPostBySlug } from "@/lib/contentful";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Markdown from "react-markdown";
import Link from 'next/link'
import { Metadata, ResolvingMetadata } from "next";
import rehypeRaw from "rehype-raw";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);
    return {
        openGraph: {
            type: "article",
            url: `https://mattwyskiel.com/stories/${post.slug}`,
            publishedTime: post.publishDate.toISOString(),
            modifiedTime: post.publishDate.toISOString(),
            authors: "Matt Wyskiel",
            tags: post.tags,
            images: "https://mattwyskiel.com/ogimage.png",
            siteName: "Matt Wyskiel",
            title: post.title,
        },
        title: post.title,
        description: post.excerpt,
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <main className="container mx-auto px-4 py-10 max-w-4xl">
                <Link
                    href="/stories"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Link>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    <h6 className="text-sm text-muted-foreground mb-4">
                        {post.publishDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </h6>
                    <div className="prose-img:mx-auto ">
                        <Markdown rehypePlugins={[rehypeRaw]}>
                            {post.content}
                        </Markdown>
                    </div>
                </div>
            </main>
        </div>
    );
}
