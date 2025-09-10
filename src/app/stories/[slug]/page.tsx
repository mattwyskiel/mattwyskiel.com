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
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
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
                    <div className="prose-img:mx-auto">
                        <Markdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                p: ({ node, ...props }) => <p className="text-muted-foreground py-2" {...props} />,
                                a: ({ node, ...props }) => <a className="text-teal-600 hover:text-teal-700 font-medium" {...props} />,
                                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-xl font-semibold" {...props} />,
                                h4: ({ node, ...props }) => <h4 className="text-lg font-semibold" {...props} />,
                                h5: ({ node, ...props }) => <h5 className="text-md font-semibold" {...props} />,
                                h6: ({ node, ...props }) => <h6 className="text-sm font-semibold" {...props} />,
                                li: ({ node, ...props }) => <li className="text-muted-foreground" {...props} />,
                                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 pl-4 italic text-muted-foreground" {...props} />,
                                img: ({ node, ...props }) => <img className="rounded-lg my-4" {...props} />,
                                code(props) {
                                    const { children, className, node, ...rest } = props
                                    const match = /language-(\w+)/.exec(className || '')
                                    return match ? (
                                        <SyntaxHighlighter
                                            PreTag="div"
                                            children={String(children).replace(/\n$/, '')}
                                            language={match[1]}
                                            style={materialDark}
                                        />
                                    ) : (
                                        <code {...rest} className={className}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        >
                            {post.content}
                        </Markdown>
                    </div>
                </div>
            </main>
        </div>
    );
}
