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
import { Metadata, ResolvingMetadata } from "next";
import rehypeRaw from "rehype-raw";

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
    <div>
      <Breadcrumb className="px-4 pb-8 lg:px-32 md:px-24">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Matt Wyskiel</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/stories">Stories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      <article className="px-10 pb-10 prose lg:prose-lg max-w-none lg:w-[1000px] mx-auto lg:px-32 md:px-24">
        <div>
          <h1 className="text-center mb-5">{post.title}</h1>
          <h6 className="text-center">
            {post.publishDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h6>
          <div className="pb-10">
            <Markdown className="prose-img:mx-auto" rehypePlugins={[rehypeRaw]}>
              {post.content}
            </Markdown>
          </div>
        </div>
      </article>
    </div>
  );
}
