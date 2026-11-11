import { expect, test } from "bun:test";
import type { RoonNowListening } from "@whiskey/contracts/apis/roon";
import { renderToStaticMarkup } from "react-dom/server";
import { NowListeningCard } from "./now-listening";

const summary: RoonNowListening = {
  source: "roon",
  status: "playing",
  checkedAt: "2026-11-03T00:00:00.000Z",
  track: {
    title: "A song <not markup>",
    artist: "An artist",
    album: "An album",
  },
};

test.each(["floating", "overlay"] as const)(
  "%s card shows accessible, escaped track metadata",
  (presentation) => {
    const html = renderToStaticMarkup(
      <NowListeningCard summary={summary} presentation={presentation} />,
    );
    expect(html).toContain('aria-label="Now listening to"');
    expect(html).toContain("A song &lt;not markup&gt;");
    expect(html).toContain("An artist");
    expect(html).toContain("An album");
  },
);

test.each(["floating", "overlay"] as const)(
  "%s card is absent without active playback and accepts title-only radio metadata",
  (presentation) => {
    for (const value of [
      null,
      { ...summary, status: "idle" as const, track: null },
      { ...summary, status: "unavailable" as const, track: null },
    ]) {
      expect(
        renderToStaticMarkup(
          <NowListeningCard summary={value} presentation={presentation} />,
        ),
      ).toBe("");
    }
    const html = renderToStaticMarkup(
      <NowListeningCard
        presentation={presentation}
        summary={{
          ...summary,
          track: { title: "Radio station", artist: null, album: null },
        }}
      />,
    );
    expect(html).toContain("Radio station");
    expect(html).not.toContain("null");
  },
);
