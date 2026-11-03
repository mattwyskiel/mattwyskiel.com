import { afterEach, expect, test } from "bun:test";
import type { RoonNowListening } from "@whiskey/contracts/apis/roon";
import { watchNowListening } from "./now-listening";

class Visibility extends EventTarget {
  hidden = false;
  change(hidden: boolean) {
    this.hidden = hidden;
    this.dispatchEvent(new Event("visibilitychange"));
  }
}
const disposers: Array<() => void> = [];
afterEach(() => {
  for (const dispose of disposers.splice(0)) dispose();
});
const playing = (): RoonNowListening => ({
  source: "roon",
  status: "playing",
  track: { title: "Song", artist: "Artist", album: null },
  checkedAt: new Date().toISOString(),
});
const until = async (condition: () => boolean) => {
  const deadline = performance.now() + 1_000;
  while (!condition() && performance.now() < deadline) await Bun.sleep(2);
  expect(condition()).toBe(true);
};

test("poller uses anonymous reads and updates playback on the next refresh", async () => {
  const values: Array<RoonNowListening | null> = [];
  let requests = 0;
  disposers.push(
    watchNowListening(
      "https://api.example/roon/now-listening",
      (v) => values.push(v),
      {
        visibility: new Visibility(),
        pollIntervalMs: 5,
        fetcher: async (_url, init) => {
          expect(init?.credentials).toBe("omit");
          expect(init?.cache).toBe("no-store");
          requests++;
          return Response.json(
            requests === 1
              ? playing()
              : { ...playing(), status: "idle", track: null },
          );
        },
      },
    ),
  );
  await until(() => values.length >= 2);
  expect(values[0]?.track?.title).toBe("Song");
  expect(values[1]?.status).toBe("idle");
  expect(values[1]?.track).toBeNull();
});

test("bad, stale, future, and failed responses clear playback", async () => {
  for (const response of [
    new Response("upstream failed", { status: 503 }),
    Response.json({ invalid: true }),
    Response.json({
      ...playing(),
      checkedAt: new Date(Date.now() - 60_000).toISOString(),
    }),
    Response.json({
      ...playing(),
      checkedAt: new Date(Date.now() + 60_000).toISOString(),
    }),
  ]) {
    const values: Array<RoonNowListening | null> = [];
    const dispose = watchNowListening(
      "https://api.example",
      (v) => values.push(v),
      {
        visibility: new Visibility(),
        fetcher: async () => response,
      },
    );
    disposers.push(dispose);
    await until(() => values.length > 0);
    expect(values).toEqual([null]);
    dispose();
  }
});

test("hiding pauses polling and returning immediately refreshes even during abort cleanup", async () => {
  const visibility = new Visibility();
  const values: Array<RoonNowListening | null> = [];
  let requests = 0;
  disposers.push(
    watchNowListening("https://api.example", (v) => values.push(v), {
      visibility,
      pollIntervalMs: 5,
      fetcher: async (_url, init) => {
        requests++;
        if (requests === 1) {
          await new Promise<void>((_resolve, reject) => {
            init?.signal?.addEventListener(
              "abort",
              () => reject(new Error("aborted")),
              { once: true },
            );
          });
        }
        return Response.json(playing());
      },
    }),
  );
  expect(requests).toBe(1);
  visibility.change(true);
  visibility.change(false);
  await until(() => values.some((v) => v?.status === "playing"));
  visibility.change(true);
  const count = requests;
  await Bun.sleep(25);
  expect(requests).toBe(count);
  expect(values.at(-1)).toBeNull();
  visibility.change(false);
  await until(() => requests > count && values.at(-1)?.status === "playing");
});

test("deadline clears a previous track and disposal aborts without late updates", async () => {
  const visibility = new Visibility();
  const values: Array<RoonNowListening | null> = [];
  let requests = 0;
  let signal: AbortSignal | null | undefined;
  let release: (() => void) | undefined;
  const pending = new Promise<void>((resolve) => {
    release = resolve;
  });
  const dispose = watchNowListening(
    "https://api.example",
    (v) => values.push(v),
    {
      visibility,
      pollIntervalMs: 5,
      timeoutMs: 10,
      fetcher: async (_url, init) => {
        requests++;
        signal = init?.signal;
        if (requests > 1) await pending;
        return Response.json(playing());
      },
    },
  );
  disposers.push(dispose);
  await until(() => values[0]?.status === "playing");
  await until(() => requests > 1 && values.at(-1) === null);
  expect(signal?.aborted).toBe(true);
  dispose();
  const count = values.length;
  release?.();
  await Bun.sleep(20);
  visibility.change(false);
  expect(values.length).toBe(count);
  expect(requests).toBe(2);
});
