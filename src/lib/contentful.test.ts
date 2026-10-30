import { expect, test } from "bun:test";

for (const configured of [true, false]) {
  test(`Contentful keeps SDK reads behind the IO boundary (configured=${configured})`, async () => {
    // Keep module mocks and environment changes out of other workspace tests.
    const script = `
      import { expect, mock } from "bun:test";
      const configured = ${configured};
      const events = [];
      let release;
      let barrier = new Promise(resolve => { release = resolve; });
      mock.module("next/cache", () => ({ io: async () => {
        events.push("io");
        await barrier;
      } }));
      mock.module("contentful", () => ({ createClient: () => ({
        getEntries: async (query) => {
          events.push("sdk");
          const fields = slug => ({
            slug, title: slug, content: "Body", excerpt: "Summary", tags: [],
            publishDate: slug === "new" ? "2026-10-30" : "2026-10-29"
          });
          return { items: query["fields.slug"] === "missing" ? [] :
            (query["fields.slug"] ? ["new"] : ["old", "new"]).map(slug => ({ fields: fields(slug) })) };
        }
      }) }));
      const { getPosts, getPostBySlug } = await import(${JSON.stringify(new URL("./contentful.ts", import.meta.url).href)});
      const posts = getPosts();
      await Promise.resolve();
      expect(events).toEqual(configured ? ["io"] : []);
      release();
      expect((await posts).map(post => post.slug)).toEqual(configured ? ["new", "old"] : []);
      events.length = 0;
      barrier = new Promise(resolve => { release = resolve; });
      const post = getPostBySlug("new");
      await Promise.resolve();
      expect(events).toEqual(configured ? ["io"] : []);
      release();
      expect((await post)?.publishDate).toEqual(configured ? new Date("2026-10-30") : undefined);
      expect(await getPostBySlug("missing")).toBeNull();
    `;
    const child = Bun.spawn([process.execPath, "--eval", script], {
      env: {
        ...process.env,
        CONTENTFUL_SPACE_ID: configured ? "test-space" : "",
        CONTENTFUL_ACCESS_TOKEN: configured ? "test-token" : "",
        ALLOW_MISSING_CONTENTFUL_IN_CI: "true",
      },
      stdout: "pipe",
      stderr: "pipe",
    });
    const [code, stderr] = await Promise.all([
      child.exited,
      new Response(child.stderr).text(),
    ]);
    expect(stderr).toBe("");
    expect(code).toBe(0);
  });
}
