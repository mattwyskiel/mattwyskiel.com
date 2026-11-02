import { afterEach, expect, mock, test } from "bun:test";

const events: string[] = [];
// io() resolves a tick later, so an SDK call that does not wait for it runs first.
mock.module("next/cache", () => ({
  io: async () => {
    await Bun.sleep(1);
    events.push("io");
  },
}));
mock.module("contentful", () => ({
  createClient: () => ({
    getEntries: async (query: Record<string, string>) => {
      events.push("sdk");
      const slug = query["fields.slug"];
      const slugs = slug === "missing" ? [] : slug ? [slug] : ["old", "new"];
      return {
        items: slugs.map((slug) => ({
          fields: {
            slug,
            title: slug,
            content: "Body",
            excerpt: "Summary",
            tags: [],
            publishDate: slug === "new" ? "2026-10-30" : "2026-10-29",
          },
        })),
      };
    },
  }),
}));
const contentful = () => import("./contentful");

const environment = { ...process.env };
afterEach(() => {
  process.env = { ...environment };
  events.length = 0;
});

test("returns nothing without the CMS when CI allows it to be missing", async () => {
  process.env.CONTENTFUL_SPACE_ID = "";
  process.env.CONTENTFUL_ACCESS_TOKEN = "";
  process.env.ALLOW_MISSING_CONTENTFUL_IN_CI = "true";
  const { getPostBySlug, getPosts } = await contentful();
  expect(await getPosts()).toEqual([]);
  expect(await getPostBySlug("new")).toBeNull();
  expect(events).toEqual([]);
});

test("reads posts newest first, behind the IO boundary", async () => {
  process.env.CONTENTFUL_SPACE_ID = "space";
  process.env.CONTENTFUL_ACCESS_TOKEN = "token";
  const { getPostBySlug, getPosts } = await contentful();
  expect((await getPosts()).map((post) => post.slug)).toEqual(["new", "old"]);
  expect((await getPostBySlug("new"))?.publishDate).toEqual(
    new Date("2026-10-30"),
  );
  expect(await getPostBySlug("missing")).toBeNull();
  expect(events).toEqual(["io", "sdk", "io", "sdk", "io", "sdk"]);
});
