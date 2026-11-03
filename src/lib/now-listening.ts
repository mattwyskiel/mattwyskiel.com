import {
  type RoonNowListening,
  RoonNowListeningSchema,
} from "@whiskey/contracts/apis/roon";

type Visibility = {
  readonly hidden: boolean;
  addEventListener(type: "visibilitychange", listener: () => void): void;
  removeEventListener(type: "visibilitychange", listener: () => void): void;
};

/** Browser/network boundaries are optional so the poller can run without React. */
export function watchNowListening(
  endpoint: string,
  onSummary: (summary: RoonNowListening | null) => void,
  options: {
    visibility?: Visibility;
    fetcher?: (
      input: RequestInfo | URL,
      init?: RequestInit,
    ) => Promise<Response>;
    pollIntervalMs?: number;
    timeoutMs?: number;
  } = {},
) {
  const visibility = options.visibility ?? document;
  const fetcher = options.fetcher ?? fetch;
  let disposed = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let controller: AbortController | undefined;
  let refreshOnFinish = false;

  const refresh = async () => {
    if (disposed || visibility.hidden) return;
    controller = new AbortController();
    const requestController = controller;
    // Also removes an old card if a network request hangs.
    const deadline = setTimeout(() => {
      requestController.abort();
      if (!disposed) onSummary(null);
    }, options.timeoutMs ?? 12_000);
    try {
      const response = await fetcher(endpoint, {
        signal: requestController.signal,
        credentials: "omit",
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Playback unavailable");
      const value = RoonNowListeningSchema.parse(await response.json());
      // checkedAt is observation time, not the start of playback.
      const age = Date.now() - Date.parse(value.checkedAt);
      if (age > 45_000 || age < -45_000) throw new Error("Stale playback");
      if (!disposed && !visibility.hidden && !requestController.signal.aborted)
        onSummary(value);
    } catch {
      if (!disposed) onSummary(null);
    } finally {
      clearTimeout(deadline);
      controller = undefined;
      if (!disposed && !visibility.hidden) {
        timer = setTimeout(
          refresh,
          refreshOnFinish ? 0 : (options.pollIntervalMs ?? 20_000),
        );
      }
      refreshOnFinish = false;
    }
  };
  const onVisibility = () => {
    clearTimeout(timer);
    // Never retain a previously active track when returning to an old tab.
    onSummary(null);
    if (visibility.hidden) controller?.abort();
    else if (controller) refreshOnFinish = true;
    else void refresh();
  };
  visibility.addEventListener("visibilitychange", onVisibility);
  void refresh();
  return () => {
    disposed = true;
    clearTimeout(timer);
    controller?.abort();
    visibility.removeEventListener("visibilitychange", onVisibility);
  };
}
