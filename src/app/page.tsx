import { WhiskeyLogo } from "@whiskey/web-ui/components/brand/whiskey-logo";
import { Skeleton } from "@whiskey/web-ui/components/ui/skeleton";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { MixShelf } from "@/components/mix-shelf";
import { ProjectLink, ProjectSection } from "@/components/project-page";
import { getPosts } from "@/lib/contentful";
import { getLatestMixes } from "@/lib/latest-mixes";
import { aListOrigin } from "@/lib/mixes";
import { allProjects, formatYears } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Matt Wyskiel",
  description:
    "Personal site of Matt Wyskiel - software builder, music enthusiast, and tinkerer.",
  openGraph: {
    type: "website",
    title: "Matt Wyskiel",
    description:
      "Personal site of Matt Wyskiel - software builder, music enthusiast, and tinkerer.",
    url: "https://mattwyskiel.com",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

const shortDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const whiskey = allProjects.find((project) => project.title === "Whiskey");
const recentWork = allProjects
  .filter((project) => project.type === "professional")
  .toSorted((a, b) => b.date.localeCompare(a.date))[0];

export default function Home() {
  return (
    <div className="min-h-screen bg-muted">
      <main className="container mx-auto max-w-4xl px-4 py-10">
        <header className="mb-20 pt-6 md:mb-24 md:pt-10">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Hey, I'm Matt.
          </h1>
          <p className="mt-8 max-w-3xl text-2xl leading-snug text-balance md:text-3xl md:leading-snug">
            I build software, as a career and as a hobby. I collect and archive
            all kinds of media. I'm a music lover &amp; mixer &amp; snob. All in
            pursuit of the Good Life.
          </p>
        </header>

        <ProjectSection title="Building" id="building">
          <div className="divide-y rounded-lg bg-card shadow-xs">
            {whiskey && (
              <article className="relative p-6">
                <WhiskeyLogo className="h-8 w-auto text-foreground" />
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  <Link
                    href={whiskey.link}
                    className="rounded-sm after:absolute after:inset-0 after:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    Whiskey
                  </Link>
                </h3>
                <p className="mt-1 max-w-prose text-muted-foreground">
                  {whiskey.description} Read how it grew from an idea into the
                  platform that runs this site.
                </p>
              </article>
            )}
            {recentWork && (
              <article className="p-6">
                <p className="text-sm text-muted-foreground">
                  At work, {formatYears(recentWork.date)}
                </p>
                <h3 className="mt-1 text-lg font-medium">{recentWork.title}</h3>
                <p className="mt-1 max-w-prose text-muted-foreground">
                  {recentWork.description}
                </p>
              </article>
            )}
          </div>
          <p className="mt-5">
            <ProjectLink href="/projects">
              Everything I've worked on
            </ProjectLink>
          </p>
        </ProjectSection>

        <ProjectSection title="Mixing" id="mixing">
          <Suspense fallback={<MixShelfFallback />}>
            <LatestMixes />
          </Suspense>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            <li>
              <ProjectLink href={aListOrigin()}>
                All mixes on A-List
              </ProjectLink>
            </li>
            <li>
              <ProjectLink href="https://ywithaw.live">
                Live streams on ywithaw
              </ProjectLink>
            </li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Writing" id="writing">
          <Suspense fallback={<LatestPostsFallback />}>
            <LatestPosts />
          </Suspense>
          <p className="mt-5">
            <ProjectLink href="/stories">All stories</ProjectLink>
          </p>
        </ProjectSection>
      </main>
    </div>
  );
}

async function LatestMixes() {
  const mixes = await getLatestMixes(4);
  if (mixes.length === 0) return null;
  return <MixShelf mixes={mixes} />;
}

function MixShelfFallback() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
      {[0, 1, 2, 3].map((index) => (
        <div key={index} className="space-y-3">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}

async function LatestPosts() {
  const posts = await getPosts();

  return (
    <ol className="divide-y rounded-lg bg-card shadow-xs">
      {posts.slice(0, 3).map((post) => (
        <li
          key={post.slug}
          className="relative grid gap-1 p-5 sm:grid-cols-[6rem_1fr] sm:gap-6"
        >
          <p className="text-sm tabular-nums text-muted-foreground sm:pt-0.5">
            <time dateTime={post.publishDate.toISOString()}>
              {shortDate.format(post.publishDate)}
            </time>
          </p>
          <div>
            <h3 className="font-medium">
              <Link
                href={`/stories/${post.slug}`}
                className="rounded-sm after:absolute after:inset-0 after:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                {post.title}
              </Link>
            </h3>
            <p className="mt-1 line-clamp-2 text-muted-foreground">
              {post.excerpt}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function LatestPostsFallback() {
  return (
    <div className="divide-y rounded-lg bg-card shadow-xs">
      {[0, 1, 2].map((index) => (
        <div
          className="grid gap-2 p-5 sm:grid-cols-[6rem_1fr] sm:gap-6"
          key={index}
        >
          <Skeleton className="h-4 w-16" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
