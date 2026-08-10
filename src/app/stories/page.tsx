import { Badge } from "@whiskey/web-ui/components/ui/badge";
import { Skeleton } from "@whiskey/web-ui/components/ui/skeleton";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BackLink } from "@/components/back-link";
import { getPosts } from "@/lib/contentful";

export const metadata: Metadata = {
  title: "Stories | Matt Wyskiel",
  description:
    "A collection of the stories I have to tell. (TL;DR I'm a Yapper)",
  openGraph: {
    type: "website",
    description:
      "A collection of the stories I have to tell. (TL;DR I'm a Yapper)",
    url: "https://mattwyskiel.com/stories",
    title: "Stories | Matt Wyskiel",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-muted">
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <BackLink href="/" label="Back home" />

        <h1 className="text-3xl font-bold mb-4">Stories</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">Me yapping.</p>

        <Suspense fallback={<StoriesFallback />}>
          <StoriesList />
        </Suspense>
      </main>
    </div>
  );
}

async function StoriesList() {
  const posts = await getPosts();

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <article key={post.slug} className="border-b pb-10">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href={`/stories/${post.slug}`} className="hover:text-brand">
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {post.publishDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {(post.tags || []).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-brand-muted text-brand-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Link
            href={`/stories/${post.slug}`}
            className="text-brand hover:text-brand-hover font-medium text-sm"
          >
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}

function StoriesFallback() {
  return (
    <div className="space-y-10">
      {[0, 1, 2].map((index) => (
        <article className="space-y-4 border-b pb-10" key={index}>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-6 w-48" />
        </article>
      ))}
    </div>
  );
}
