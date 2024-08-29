import { getPosts } from "@/lib/contentful";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const postList: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://mattwyskiel.com/stories/${post.slug}`,
    lastModified: post.publishDate,
    changeFrequency: "daily",
    priority: 0.7,
  }));
  return [
    {
      url: "https://mattwyskiel.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://mattwyskiel.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://mattwyskiel.com/stories",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...postList,
  ];
}
