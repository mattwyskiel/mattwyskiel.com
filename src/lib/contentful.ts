import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import { createClient } from "contentful";
import { cache } from "react";

const BASE_URL = "cdn.contentful.com";
const ENVIRONMENT = "master";

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

const client = createClient({
  space: getEnvVar("CONTENTFUL_SPACE_ID"),
  accessToken: getEnvVar("CONTENTFUL_ACCESS_TOKEN"),
  environment: ENVIRONMENT,
  host: BASE_URL,
});

interface IBlogPostFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  content: EntryFieldTypes.Text;
  excerpt: EntryFieldTypes.Text;
  publishDate: EntryFieldTypes.Date;
  tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

type BlogPostSkeleton = EntrySkeletonType<IBlogPostFields, "blogPost">;

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishDate: Date;
  tags: string[];
}

type BlogPostEntry = Entry<BlogPostSkeleton, undefined, string>;

function toBlogPost(fields: BlogPostEntry["fields"]): BlogPost {
  return {
    title: fields.title,
    slug: fields.slug,
    content: fields.content,
    excerpt: fields.excerpt,
    publishDate: new Date(fields.publishDate),
    tags: fields.tags,
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
  });

  return entries.items
    .sort(
      (a, b) =>
        Date.parse(b.fields.publishDate) - Date.parse(a.fields.publishDate),
    )
    .map((entry) => toBlogPost(entry.fields));
}

export const getPostBySlug = cache(async function getPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  const item = entries.items[0];
  if (!item) {
    return null;
  }

  return toBlogPost(item.fields);
});
