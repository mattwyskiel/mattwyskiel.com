"use client";

import type { RoonNowListening } from "@whiskey/contracts/apis/roon";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@whiskey/web-ui/components/ui/card";
import { cn } from "@whiskey/web-ui/lib/utils";
import { Headphones } from "lucide-react";
import { useEffect, useState } from "react";
import { watchNowListening } from "@/lib/now-listening";

type Presentation = "floating" | "overlay";

/** Kept separate so display states can be rendered without a browser or network. */
export function NowListeningCard({
  summary,
  presentation = "floating",
}: {
  summary: RoonNowListening | null;
  presentation?: Presentation;
}) {
  if (summary?.status !== "playing" || !summary.track) return null;
  const { title, artist, album } = summary.track;
  return (
    <aside
      id={presentation === "floating" ? "now-listening" : undefined}
      aria-label="Now listening to"
      className={cn(
        presentation === "floating"
          ? "fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[calc(1rem+env(safe-area-inset-bottom))] z-10 flex w-80 max-w-[calc(100vw-2rem)] md:right-6 md:bottom-6"
          : "w-full min-w-0",
      )}
    >
      <Card
        size={presentation === "floating" ? "sm" : "default"}
        className={cn(
          "w-full shadow-none",
          presentation === "floating"
            ? "max-w-xs [--card-spacing:--spacing(3)]"
            : "[--card-spacing:--spacing(5)]",
        )}
      >
        <CardHeader className="min-w-0">
          <div className="mb-1 flex items-center gap-2 text-primary">
            <Headphones
              aria-hidden="true"
              className={presentation === "floating" ? "size-3.5" : "size-4"}
            />
            <span
              className={presentation === "floating" ? "text-xs" : "text-sm"}
            >
              Now listening to
            </span>
          </div>
          <CardTitle
            className={
              presentation === "floating"
                ? "truncate"
                : "line-clamp-2 text-2xl leading-8 wrap-anywhere"
            }
            title={title}
          >
            {title}
          </CardTitle>
          {artist || album ? (
            <CardDescription
              className={cn(
                "truncate",
                presentation === "floating" ? "text-xs" : "text-base",
              )}
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

export function NowListening({
  endpoint,
  presentation = "floating",
}: {
  endpoint: string;
  presentation?: Presentation;
}) {
  const [summary, setSummary] = useState<RoonNowListening | null>(null);

  useEffect(() => watchNowListening(endpoint, setSummary), [endpoint]);

  return <NowListeningCard summary={summary} presentation={presentation} />;
}
