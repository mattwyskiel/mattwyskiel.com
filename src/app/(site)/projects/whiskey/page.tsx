import { WhiskeyLogo } from "@whiskey/web-ui/components/brand/whiskey-logo";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  FeatureList,
  ProjectFigure,
  ProjectHeader,
  ProjectLink,
  ProjectPage,
  ProjectSection,
  ProjectStatus,
  Prose,
} from "@/components/project-page";
import assistantDark from "./images/assistant-old-fashioned-dark.webp";
import assistantLight from "./images/assistant-old-fashioned-light.webp";
import nowListeningDark from "./images/now-listening-dark.webp";
import nowListeningLight from "./images/now-listening-light.webp";

const description =
  "My private platform for AI chat, smart-home automation, music, and live streaming—built so my data and tools live in one place I control.";

export const metadata: Metadata = {
  title: "Whiskey | Matt Wyskiel",
  description,
  openGraph: {
    type: "website",
    title: "Whiskey | Matt Wyskiel",
    description,
    url: "https://mattwyskiel.com/projects/whiskey",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

interface Chapter {
  when: string;
  title: string;
  body: ReactNode;
  figure?: ReactNode;
}

const chapters: Chapter[] = [
  {
    when: "2023",
    title: "The idea",
    body: (
      <>
        <p>
          I wanted one private system that holds my data and handles small jobs
          for me. Not a pile of unrelated apps that each keep a slice of my
          life, but one place that I own and control.
        </p>
        <p>
          The first version was modest: a few AWS Lambda functions behind an
          API, paired with an early AI chat service on Amazon Bedrock.
        </p>
      </>
    ),
  },
  {
    when: "2025",
    title: "A server at home",
    body: (
      <>
        <p>
          Some things belong on hardware I own, not in someone else's cloud. In
          March 2025 I set up a home server with its own HTTPS gateway, placing
          Home Assistant, a local AI setup, and a handful of personal tools
          behind one private entry point.
        </p>
        <p>
          A self-hosted secrets manager followed in April. In July, Whiskey got
          its PostgreSQL database at home, and in November a Jellyfin media
          server joined the machine.
        </p>
      </>
    ),
  },
  {
    when: "July 2026",
    title: "Music and media in the house",
    body: (
      <>
        <p>
          In July 2026 I connected Whiskey to Roon, the software that plays
          music across my house. Now my wake-up alarm picks a random playlist
          from my Roon library. When music plays at home, a small public feed
          updates the card on this site with the current track.
        </p>
        <p>
          Jellyfin gained background automation too. Whiskey keeps a Looney
          Tunes playlist up to date and refreshes the live TV guide every day.
        </p>
      </>
    ),
    figure: (
      <ProjectFigure
        className="max-w-xs"
        framed={false}
        image={nowListeningLight}
        darkImage={nowListeningDark}
        alt="A rounded card displaying sample playback: Now listening to Cake by Melanie Martinez from Cry Baby."
        caption="The listening card on this site, shown with sample playback."
      />
    ),
  },
  {
    when: "October 2026",
    title: "Back to serverless",
    body: (
      <>
        <p>
          For a while, the Whiskey API ran in containers behind a load balancer.
          It worked, but I was paying for that load balancer around the clock,
          even when nothing was calling it.
        </p>
        <p>
          In October 2026 I moved the API back to AWS Lambda, with each service
          owning its own functions. Stateful services stayed at home, joined to
          the cloud over a private Tailscale network.
        </p>
      </>
    ),
  },
  {
    when: "October 2026",
    title: "Going live",
    body: (
      <>
        <p>
          That same month, Whiskey took over my live streams. I broadcast from a
          Mac mini at home to{" "}
          <ProjectLink href="https://ywithaw.live">ywithaw</ProjectLink>, while
          the public site and recordings live in the cloud so past broadcasts
          stay online even when the Mac mini is off.
        </p>
        <p>
          Viewers can chat during a stream. I manage broadcasts, recordings, and
          private viewer analytics from a control room inside the Whiskey web
          app.
        </p>
      </>
    ),
  },
  {
    when: "Oct–Nov 2026",
    title: "An assistant built for real work",
    body: (
      <>
        <p>
          The web app became chat-first, built so an in-progress reply can
          recover after a dropped connection or server restart. Tools followed:
          web research, Home Assistant, file uploads, image generation, and
          small scripts that combine tools in one turn. I choose which tools and
          AI model each conversation uses, and the assistant can search earlier
          chats for context.
        </p>
        <p>
          In November, the Workbench redesign rebuilt the web workspace around
          reading, with replies in a focused column, inline tool activity and
          source links, and composer controls close at hand in light and dark
          themes. Alongside the web app, a private native app now brings Whiskey
          chat to iPhone and Mac over the same API.
        </p>
      </>
    ),
    figure: (
      <ProjectFigure
        image={assistantLight}
        darkImage={assistantDark}
        alt="A saved Whiskey chat asking where the Old Fashioned cocktail got its name and for a vintage recipe card. Inline rows show web-research steps, followed by a cited answer and the generated recipe card."
        caption="A saved chat example: I asked where the Old Fashioned got its name and for a vintage recipe card. Whiskey showed its web-research steps, cited a source, and generated the card inline."
      />
    ),
  },
];

const capabilities = [
  {
    title: "Assistant",
    description:
      "Web and native Apple clients sharing one API for private AI chat, customizable tools, and personal context.",
  },
  {
    title: "Home",
    description:
      "Private cloud-to-home links for Home Assistant, Roon music playback, and scheduled Jellyfin library jobs.",
  },
  {
    title: "Publishing",
    description: (
      <>
        Live-stream hosting and recordings for ywithaw, the{" "}
        <ProjectLink href="/projects/a-list">A-List</ProjectLink> mix player,
        and command-line tools for preparing CD audio and splitting DJ mixes.
      </>
    ),
  },
  {
    title: "Platform",
    description:
      "Hosted sign-in with linked accounts, an EventBridge event bus and S3 data lake, daily PostgreSQL backups, and a CLI for authenticated API calls.",
  },
];

const cloud = [
  "Web apps and hosted sign-in",
  "Serverless API and AI chat",
  "Event bus and data lake",
  "Files, recordings, and backups",
];

const home = [
  "PostgreSQL database",
  "Home Assistant",
  "Jellyfin media server",
  "Roon music server",
  "Live stream host",
];

const publicParts = [
  {
    label: "ywithaw",
    href: "https://ywithaw.live",
    description:
      "My live streams and past broadcasts, sent from home and served from the cloud.",
  },
  {
    label: "A-List",
    href: "https://a-list.mattwyskiel.com",
    description: "My DJ mixes, with track chapters and a podcast feed.",
  },
  {
    label: "This website",
    href: "/projects/mattwyskiel-com",
    description:
      "Built in the same monorepo, including the card that shows what is playing at home.",
  },
];

function Timeline({ items }: { items: Chapter[] }) {
  return (
    <ol>
      {items.map((chapter) => (
        <li
          key={chapter.title}
          className="grid md:grid-cols-[9rem_1fr] md:gap-x-10"
        >
          <p className="hidden md:block pt-1.5 text-right text-sm font-medium tabular-nums text-muted-foreground">
            {chapter.when}
          </p>
          <div className="relative border-l border-border pb-14 pl-8 md:pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-muted"
            />
            <p className="md:hidden mb-1 text-sm font-medium tabular-nums text-muted-foreground">
              {chapter.when}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">
              {chapter.title}
            </h3>
            <div className="mt-3">
              <Prose>{chapter.body}</Prose>
            </div>
            {chapter.figure && <div className="mt-8">{chapter.figure}</div>}
          </div>
        </li>
      ))}
      <li className="grid md:grid-cols-[9rem_1fr] md:gap-x-10">
        <p className="hidden md:block pt-1.5 text-right text-sm font-medium text-muted-foreground">
          Next
        </p>
        <div className="relative border-l border-dashed border-border pl-8 md:pl-10">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-muted"
          />
          <p className="md:hidden mb-1 text-sm font-medium text-muted-foreground">
            Next
          </p>
          <h3 className="text-2xl font-semibold tracking-tight">
            Back to the second brain
          </h3>
          <div className="mt-3">
            <Prose>
              <p>
                The first idea is still the north star. Earlier-chat context is
                already working, and chat files and early email archives have
                started flowing into one private archive. From here, I want
                richer long-term memory across conversations, more of my own
                documents and records in that archive, and a native iPhone and
                Mac app that keeps pace with the web workspace.
              </p>
            </Prose>
          </div>
        </div>
      </li>
    </ol>
  );
}

function WhereItRuns() {
  return (
    <div className="grid items-stretch gap-0 md:grid-cols-[1fr_auto_1fr]">
      <div className="rounded-xl bg-card p-6 shadow-1">
        <h3 className="font-semibold">In the cloud</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          AWS Lambda, CloudFront, EventBridge, and S3
        </p>
        <ul className="mt-4 space-y-2">
          {cloud.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center py-3 md:px-3 md:py-0">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <span
            aria-hidden="true"
            className="h-6 border-l-2 border-dashed border-primary md:h-0 md:w-6 md:border-l-0 md:border-t-2"
          />
          <span className="text-center text-sm text-muted-foreground md:w-24">
            Private Tailscale network
          </span>
          <span
            aria-hidden="true"
            className="h-6 border-l-2 border-dashed border-primary md:h-0 md:w-6 md:border-l-0 md:border-t-2"
          />
        </div>
      </div>
      <div className="rounded-xl bg-card p-6 shadow-1">
        <h3 className="font-semibold">At home</h3>
        <p className="mt-1 text-sm text-muted-foreground">Machines I own</p>
        <ul className="mt-4 space-y-2">
          {home.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhiskeyPage() {
  return (
    <ProjectPage>
      <ProjectHeader
        title="Whiskey"
        mark={<WhiskeyLogo className="h-14 w-auto text-foreground" />}
        summary={description}
        facts={[
          { label: "Started", value: "2023" },
          { label: "Status", value: <ProjectStatus status="active" /> },
          { label: "Code", value: "Private" },
        ]}
      >
        <p>
          What started in 2023 as a few cloud functions now spans a home server,
          cloud APIs, and private web and Apple apps. Here is how it grew.
        </p>
      </ProjectHeader>

      <section aria-labelledby="story-heading" className="mb-16 md:mb-20">
        <h2 id="story-heading" className="sr-only">
          The story so far
        </h2>
        <Timeline items={chapters} />
      </section>

      <ProjectSection title="What it does today" id="today">
        <FeatureList features={capabilities} />
        <div className="mt-6">
          <Prose>
            <p>
              Everything lives in one Bun and TypeScript monorepo—Next.js web
              apps, Hono APIs, shared libraries, a CLI, and the native Apple
              app, which shares the API through generated OpenAPI clients.
              Pulumi describes separate development and production stacks, and
              merges to the main branch deploy through GitHub Actions.
            </p>
          </Prose>
        </div>
      </ProjectSection>

      <ProjectSection title="Where it runs" id="where">
        <WhereItRuns />
        <div className="mt-6">
          <Prose>
            <p>
              Work that comes and goes—web pages, API requests, and AI chat—runs
              on demand in AWS instead of idling on always-on servers, alongside
              cloud storage for files, recordings, and backups. My primary
              PostgreSQL database and the home, media, and live-streaming
              systems stay on hardware I own at home.
            </p>
          </Prose>
        </div>
      </ProjectSection>

      <ProjectSection title="See it for yourself" id="public">
        <Prose>
          <p>
            Whiskey itself is private, built for an audience of one, but a few
            pieces face the public web.
          </p>
        </Prose>
        <ul className="mt-5 space-y-4">
          {publicParts.map((part) => (
            <li key={part.href}>
              <ProjectLink href={part.href}>{part.label}</ProjectLink>
              <p className="mt-0.5 text-muted-foreground">{part.description}</p>
            </li>
          ))}
        </ul>
      </ProjectSection>
    </ProjectPage>
  );
}
