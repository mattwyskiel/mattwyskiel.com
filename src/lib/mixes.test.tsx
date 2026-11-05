import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MixShelf } from "@/components/mix-shelf";
import { selectLatestMixes } from "./mixes";

const origin = "https://a-list.example";

const entry = (overrides: Record<string, unknown>) => ({
  id: 1,
  title: "A mix",
  slug: "a-mix",
  description: "",
  audioUrl: "https://assets.example/a.mp3",
  publishDate: "2025-01-20T05:00:00.000Z",
  ...overrides,
});

test("shows only published mixes, newest first, up to the limit", () => {
  const mixes = selectLatestMixes(
    [
      entry({
        title: "Old",
        slug: "old",
        publishDate: "2023-06-29T16:52:39.000Z",
      }),
      entry({ title: "Archived", slug: "archived", archive: true }),
      entry({ title: "Draft", slug: "draft", draft: true }),
      entry({
        title: "Newest",
        slug: "new",
        publishDate: "2026-07-07T06:35:57.000Z",
      }),
      entry({
        title: "Middle",
        slug: "mid",
        publishDate: "2025-07-23T00:35:57.000Z",
      }),
      { title: "Broken entry without a slug" },
    ],
    origin,
    2,
  );

  expect(mixes.map((mix) => mix.title)).toEqual(["Newest", "Middle"]);
  expect(mixes[0]?.href).toBe("https://a-list.example/mixes/new");
});

test.each([
  ["seconds", 7423, 7423],
  ["a numeric string", "1820", 1820],
  ["an empty string", "", undefined],
  ["no duration", undefined, undefined],
])("reads a duration given as %s", (_label, duration, expected) => {
  const [mix] = selectLatestMixes([entry({ duration })], origin, 1);
  expect(mix?.durationSeconds).toBe(expected);
});

test("uses the default cover when a mix has no artwork", () => {
  const [mix] = selectLatestMixes([entry({ albumArtUrl: " " })], origin, 1);
  expect(mix?.coverUrl).toContain("podcast-image-2.jpeg");
});

test.each([
  ["no array", { error: "unavailable" }],
  ["an empty list", []],
])("shows no mixes for %s", (_label, response) => {
  expect(selectLatestMixes(response, origin, 4)).toEqual([]);
});

test("the mix shelf links each title safely and loads small covers", () => {
  const html = renderToStaticMarkup(
    <MixShelf
      mixes={[
        {
          title: "Uh Oh, I Feel A Beat!",
          href: "https://a-list.example/mixes/uh-oh",
          coverUrl: "https://assets.example/uh-oh.jpeg",
          publishDate: new Date("2026-07-07T06:35:57.000Z"),
          durationSeconds: 7423,
        },
      ]}
    />,
  );

  expect(html).toContain("Uh Oh, I Feel A Beat!");
  expect(html).toContain("July 2026, 2 hr 4 min");
  expect(html).toContain('href="https://a-list.example/mixes/uh-oh"');
  expect(html).toContain('rel="noopener noreferrer"');
  expect(html).toContain("(opens in a new tab)");
  // Covers come from A-List's resizer, never the full-size original.
  expect(html).not.toContain('src="https://assets.example/uh-oh.jpeg"');
  expect(html).toContain(
    "/_next/image?url=https%3A%2F%2Fassets.example%2Fuh-oh.jpeg&amp;w=256",
  );
});
