import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/contentful";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="px-10 pb-10">
      <div>
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
                <Link href={`/posts/${post.slug}`}>Read More &gt;</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
