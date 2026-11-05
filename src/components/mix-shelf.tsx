import { coverImageUrl, formatDuration, type Mix } from "@/lib/mixes";

const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** Latest A-List mixes as a row of covers. */
export function MixShelf({ mixes }: { mixes: Mix[] }) {
  return (
    <ol className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
      {mixes.map((mix) => (
        <li key={mix.href} className="group relative">
          {/* The linked title names the mix, so the cover is decorative. */}
          {/* biome-ignore lint/performance/noImgElement: next/image is unoptimized on this site; A-List's image endpoint supplies the 1x and 2x sizes. */}
          <img
            src={coverImageUrl(mix.coverUrl, 256)}
            srcSet={`${coverImageUrl(mix.coverUrl, 256)} 1x, ${coverImageUrl(mix.coverUrl, 640)} 2x`}
            alt=""
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full rounded-lg bg-card object-cover shadow-sm ring-1 ring-border transition group-hover:shadow-md"
          />
          <h3 className="mt-3 text-sm font-medium leading-snug">
            <a
              href={mix.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {mix.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {monthYear.format(mix.publishDate)}
            {mix.durationSeconds !== undefined &&
              `, ${formatDuration(mix.durationSeconds)}`}
          </p>
        </li>
      ))}
    </ol>
  );
}
