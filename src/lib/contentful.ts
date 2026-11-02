import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import { createClient } from "contentful";
import { io } from "next/cache";
import { cache } from "react";

const BASE_URL = "cdn.contentful.com";
const ENVIRONMENT = "master";

function getContentfulConfig():
  { space: string; accessToken: string } | undefined {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (space && accessToken) {
    return { space, accessToken };
  }

  if (process.env.ALLOW_MISSING_CONTENTFUL_IN_CI === "true") {
    return undefined;
  }

  const missingNames = [
    ["CONTENTFUL_SPACE_ID", space],
    ["CONTENTFUL_ACCESS_TOKEN", accessToken],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  throw new Error(
    `Missing required environment variable${missingNames.length === 1 ? "" : "s"}: ${missingNames.join(", ")}`,
  );
}

let client: ReturnType<typeof createClient> | undefined;

/** Reads the configuration on first use, so importing this module has no side effects. */
function contentful() {
  if (client) return client;
  const config = getContentfulConfig();
  if (!config) return undefined;
  client = createClient({
    space: config.space,
    accessToken: config.accessToken,
    environment: ENVIRONMENT,
    host: BASE_URL,
  });
  return client;
}

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
  const client = contentful();
  if (!client) {
    return [];
  }

  // The SDK reads the clock before its network request. Keep CMS IO streamed.
  await io();
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
  const client = contentful();
  if (!client) {
    return null;
  }

  await io();
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
