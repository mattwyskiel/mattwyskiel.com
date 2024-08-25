import { createClient, EntrySkeletonType } from "contentful";

const BASE_URL = "preview.contentful.com";
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = "master";

const client = createClient({
  space: SPACE_ID!,
  accessToken: ACCESS_TOKEN!,
  environment: ENVIRONMENT,
  host: BASE_URL,
});

interface Post extends EntrySkeletonType {
  fields: {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    publishDate: string;
    tags: string[];
  };
}

export async function getPosts() {
  const entries = await client.getEntries<Post>({
    content_type: "blogPost",
  });

  return entries.items
    .sort(
      (a, b) =>
        Date.parse(b.fields.publishDate as string) -
        Date.parse(a.fields.publishDate as string)
    )
    .map((entry) => {
      return {
        title: entry.fields.title as string,
        slug: entry.fields.slug as string,
        content: entry.fields.content as string,
        excerpt: entry.fields.excerpt as string,
        publishDate: new Date(entry.fields.publishDate as string),
        tags: entry.fields.tags as string[],
      };
    });
}

export async function getPostBySlug(slug: string) {
  const entry = await client.getEntries<Post>({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  return {
    title: entry.items[0].fields.title as string,
    slug: entry.items[0].fields.slug as string,
    content: entry.items[0].fields.content as string,
    excerpt: entry.items[0].fields.excerpt as string,
    publishDate: new Date(entry.items[0].fields.publishDate as string),
    tags: entry.items[0].fields.tags as string[],
  };
}
