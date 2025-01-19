import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getPosts } from "@/lib/contentful";
import Link from "next/link";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Stories | Matt Wyskiel",
  description: "A collection of stories and articles I've written.",
  openGraph: {
    type: "website",
    description: "A collection of stories and articles I've written.",
    url: "https://mattwyskiel.com/stories",
    title: "Stories | Matt Wyskiel",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

export default async function Home() {
  unstable_noStore();
  const posts = await getPosts();

  return (
    <main className="px-10 pb-10">
      <div>
        <div className="flex justify-center">
          <Breadcrumb className="p-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Matt Wyskiel</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-4xl font-medium text-center">My Stories</h1>
        <div className="py-10 grid lg:grid-cols-7 md:grid-cols-11">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="p-4 lg:col-start-2 lg:col-span-5 md:col-start-2 md:col-span-9"
            >
              <div>
                <h2 className="text-2xl font-medium">{post.title}</h2>
                <h6 className="text-sm font-light pb-3">
                  {post.publishDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h6>
              </div>
              <p className="pb-3">{post.excerpt}</p>
              <Button asChild variant="outline">
                <Link href={`/stories/${post.slug}`}>Read More &gt;</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
