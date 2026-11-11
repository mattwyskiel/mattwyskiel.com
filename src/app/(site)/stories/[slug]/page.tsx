import { Skeleton } from "@whiskey/web-ui/components/ui/skeleton";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { Suspense } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { BackLink } from "@/components/back-link";
import { getPostBySlug } from "@/lib/contentful";
import { markdownComponents } from "@/lib/markdown-components";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata,
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

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

async function Story({ params: paramsPromise }: StoryPageProps) {
  const params = await paramsPromise;
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-4">
        {post.publishDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="prose-img:mx-auto">
        <Markdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
          {post.content}
        </Markdown>
      </div>
    </article>
  );
}

function StoryFallback() {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-4">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-4 w-40" />
      </header>
      {[0, 1, 2].map((paragraph) => (
        <div className="flex flex-col gap-2" key={paragraph}>
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
        </div>
      ))}
    </article>
  );
}

export default function Page(props: StoryPageProps) {
  return (
    <div className="min-h-screen bg-muted">
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <BackLink href="/stories" label="Back" />
        <Suspense fallback={<StoryFallback />}>
          <Story {...props} />
        </Suspense>
      </main>
    </div>
  );
}
