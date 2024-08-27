import { getPostBySlug } from "@/lib/contentful";
import { parse } from "marked";
import Markdown from "react-markdown";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return (
    <article className="px-10 pb-10 prose lg:prose-lg max-w-none lg:px-32 md:px-24">
      <div>
        <h1 className="text-center">{post.title}</h1>
        <h6 className="text-center">
          {post.publishDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h6>
        <div className="pb-10">
          <Markdown className="">{post.content}</Markdown>
        </div>
      </div>
    </article>
  );
}
