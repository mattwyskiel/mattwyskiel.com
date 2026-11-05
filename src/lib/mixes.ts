import { z } from "zod";

const DEFAULT_COVER_URL =
  "https://assets.mattwyskiel.com/a-list/podcast-image-2.jpeg";

// The subset of the public A-List `GET /api/entries` contract that this site shows.
const EntrySchema = z.looseObject({
  title: z.string().min(1),
  slug: z.string().min(1),
  publishDate: z.iso.datetime({ offset: true }),
  albumArtUrl: z.string().optional(),
  duration: z.union([z.number(), z.string()]).optional(),
  archive: z.boolean().optional(),
  draft: z.boolean().optional(),
});

export interface Mix {
  title: string;
  href: string;
  coverUrl: string;
  publishDate: Date;
  durationSeconds?: number;
}

/** Hosted A-List for the current stack. Local development reads dev data. */
export function aListOrigin() {
  const local =
    process.env.LOCAL === "true" || process.env.NODE_ENV === "development";
  const stack =
    process.env.NEXT_PUBLIC_STACK ??
    process.env.STACK ??
    (local ? "dev" : "prod");
  return stack === "prod"
    ? "https://a-list.mattwyskiel.com"
    : `https://${stack}.a-list.mattwyskiel.com`;
}

/** Published mixes from an A-List entries response, newest first. */
export function selectLatestMixes(
  entries: unknown,
  origin: string,
  limit: number,
): Mix[] {
  if (!Array.isArray(entries)) return [];

  return entries
    .flatMap((entry) => {
      const parsed = EntrySchema.safeParse(entry);
      if (!parsed.success || parsed.data.archive || parsed.data.draft) {
        return [];
      }
      const { title, slug, publishDate, albumArtUrl, duration } = parsed.data;
      const seconds = Number(duration);
      return [
        {
          title,
          href: `${origin}/mixes/${encodeURIComponent(slug)}`,
          coverUrl: albumArtUrl?.trim() || DEFAULT_COVER_URL,
          publishDate: new Date(publishDate),
          durationSeconds:
            duration !== undefined && Number.isFinite(seconds) && seconds > 0
              ? seconds
              : undefined,
        },
      ];
    })
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
    .slice(0, limit);
}

/**
 * A-List already optimizes its cover art, which is full-size PNG and JPEG.
 * Use its image endpoint for small covers instead of downloading megabytes.
 */
export function coverImageUrl(coverUrl: string, width: 256 | 640) {
  const params = new URLSearchParams({ url: coverUrl, w: String(width) });
  params.set("q", "75");
  return `${aListOrigin()}/_next/image?${params}`;
}

export function formatDuration(seconds: number) {
  const totalMinutes = Math.round(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${totalMinutes} min`;
  return minutes === 0 ? `${hours} hr` : `${hours} hr ${minutes} min`;
}
