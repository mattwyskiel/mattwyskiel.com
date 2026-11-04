"use client";

import type { RoonNowListening } from "@whiskey/contracts/apis/roon";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@whiskey/web-ui/components/ui/card";
import { Headphones } from "lucide-react";
import { useEffect, useState } from "react";
import { watchNowListening } from "@/lib/now-listening";

/** Kept separate so display states can be rendered without a browser or network. */
export function NowListeningCard({
  summary,
}: {
  summary: RoonNowListening | null;
}) {
  if (summary?.status !== "playing" || !summary.track) return null;
  const { title, artist, album } = summary.track;
  return (
    <aside
      id="now-listening"
      aria-label="Now listening to"
      className="mx-auto flex w-full max-w-4xl justify-end bg-card px-4 pb-3 md:fixed md:right-6 md:bottom-6 md:z-10 md:w-80 md:bg-transparent md:p-0"
    >
      <Card
        size="sm"
        className="w-full max-w-xs shadow-none [--card-spacing:--spacing(3)]"
      >
        <CardHeader className="min-w-0">
          <div className="mb-1 flex items-center gap-2 text-brand">
            <Headphones aria-hidden="true" className="size-3.5" />
            <span className="text-xs">Now listening to</span>
          </div>
          <CardTitle className="truncate" title={title}>
            {title}
          </CardTitle>
          {artist || album ? (
            <CardDescription
              className="truncate text-xs"
              title={[artist, album].filter(Boolean).join(" — ")}
            >
              {[artist, album].filter(Boolean).join(" — ")}
            </CardDescription>
          ) : null}
        </CardHeader>
      </Card>
    </aside>
  );
}

export function NowListening({ endpoint }: { endpoint: string }) {
  const [summary, setSummary] = useState<RoonNowListening | null>(null);

  useEffect(() => watchNowListening(endpoint, setSummary), [endpoint]);

  return <NowListeningCard summary={summary} />;
}
