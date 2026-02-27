import { getPostBySlug } from "@/lib/contentful";
import { markdownComponents } from "@/lib/markdown-components";

import Markdown from "react-markdown";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import rehypeRaw from "rehype-raw";
import { BackLink } from "@/components/back-link";

export async function generateMetadata(
    props: { params: Promise<{ slug: string }> },
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);
    if (!post) {
        return {};
    }
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

export default async function Page(props0: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props0.params;
    const post = await getPostBySlug(params.slug);
    if (!post) {
        notFound();
    }
    return (
        <div className="min-h-screen bg-muted">
            <main className="container mx-auto px-4 py-10 max-w-4xl">
                <BackLink href="/stories" label="Back" />
                <div>
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    <h6 className="text-sm text-muted-foreground mb-4">
                        {post.publishDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </h6>
                    <div className="prose-img:mx-auto">
                        <Markdown
                            rehypePlugins={[rehypeRaw]}
                            components={markdownComponents}
                        >
                            {post.content}
                        </Markdown>
                    </div>
                </div>
            </main>
        </div>
    );
}
