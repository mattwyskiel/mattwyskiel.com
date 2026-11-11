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
  "The private platform behind my AI assistant, my smart home, my music, and my live streams.";

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
          I wanted one private system that holds my data and does small jobs for
          me. Not a pile of apps that each keep a piece of my life, but one
          place that I own and control.
        </p>
        <p>
          The early versions were small: a few AWS Lambda functions behind an
          API, and an early AI chat service that ran on Amazon Bedrock.
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
          Some things should not live in the cloud. In March 2025 I set up a
          server at home with its own HTTPS gateway. Home Assistant, a local AI
          model, and a few tools moved behind one secure front door.
        </p>
        <p>
          A self-hosted secrets manager came next. In July, Whiskey got its
          PostgreSQL database, which also runs at home. In November, a Jellyfin
          media server joined.
        </p>
      </>
    ),
  },
  {
    when: "July 2026",
    title: "Music in the house",
    body: (
      <>
        <p>
          In July 2026 Whiskey learned to talk to Roon, the system that plays
          music in my house. Now my wake-up alarm picks a random playlist from
          my Roon library.
        </p>
        <p>
          Later, Jellyfin got automation too. It keeps a Looney Tunes playlist
          up to date and refreshes the live TV guide every day. And when music
          plays at home, a card on this website shows what is on.
        </p>
      </>
    ),
    figure: (
      <ProjectFigure
        className="max-w-xs"
        image={nowListeningLight}
        darkImage={nowListeningDark}
        alt="A card that reads: Now listening to Cake, Melanie Martinez, Cry Baby."
        caption="The card on this site on November 4, 2026."
      />
    ),
  },
  {
    when: "October 2026",
    title: "Back to serverless",
    body: (
      <>
        <p>
          For a while, the Whiskey API ran as one server in containers behind a
          load balancer. It worked, but I paid for that load balancer all day,
          even when nothing used it.
        </p>
        <p>
          In October 2026 I moved the API back to Lambda. Each service now owns
          its own functions. The services at home stayed at home: the cloud
          reaches them over a private Tailscale network.
        </p>
      </>
    ),
  },
  {
    when: "Oct–Nov 2026",
    title: "An assistant that can act",
    body: (
      <>
        <p>
          The web app became chat first. Replies are durable: if a connection
          drops or a function restarts, the assistant continues where it stopped
          and nothing is lost.
        </p>
        <p>
          Then it got tools. It can search the web, and it can control my home
          through my own Home Assistant account. It can read and save files,
          make images, and understand video. It can also write and run small
          programs that combine its tools in one step. I choose which tools a
          chat can use, and which AI model answers.
        </p>
      </>
    ),
    figure: (
      <ProjectFigure
        image={assistantLight}
        darkImage={assistantDark}
        alt="A Whiskey chat. The request asks where the Old Fashioned got its name and for a vintage recipe card. Below it, tool steps search the web, read sources, and design the card. The finished card shows the recipe, the method, and a note on the name."
        caption="I asked where the Old Fashioned got its name, and for a recipe card. Whiskey searched the web, read its sources, and made the card. Its first try at the image failed, so it fixed the problem and tried again."
      />
    ),
  },
  {
    when: "October 2026",
    title: "Going live",
    body: (
      <>
        <p>
          Whiskey now runs my live streams too. I stream from a Mac mini at home
          to <ProjectLink href="https://ywithaw.live">ywithaw</ProjectLink>.
          Recordings go to the cloud, so the site and its videos stay up when
          the Mac mini is off.
        </p>
        <p>
          Viewers can chat during a broadcast. I get private viewer analytics
          and a control room in the Whiskey web app.
        </p>
      </>
    ),
  },
];

const capabilities = [
  {
    title: "Assistant",
    description:
      "Chat with a choice of AI models. Search the web, control the house, read and save files, make images, and understand video.",
  },
  {
    title: "Home",
    description:
      "Home Assistant, a Jellyfin media server with live TV, and Roon music. Each is reached privately from the cloud.",
  },
  {
    title: "Music and media",
    description: (
      <>
        Music alarms, the{" "}
        <ProjectLink href="/projects/a-list">A-List</ProjectLink> mix player,
        live streaming, and command-line tools that prepare audio for CDs and
        split DJ mixes into tracks.
      </>
    ),
  },
  {
    title: "Platform",
    description:
      "Sign-in with linked accounts, an event bus with an archive, daily database backups, and a command-line client for the API.",
  },
];

const cloud = [
  "Web apps and sign-in",
  "API and AI chat",
  "Events and their archive",
  "Files and backups",
];

const home = [
  "Database",
  "Home Assistant",
  "Jellyfin",
  "Roon",
  "Live streaming",
];

const publicParts = [
  {
    label: "ywithaw",
    href: "https://ywithaw.live",
    description: "My live streams and past broadcasts.",
  },
  {
    label: "A-List",
    href: "https://a-list.mattwyskiel.com",
    description: "My DJ mixes, with track chapters and a podcast feed.",
  },
  {
    label: "This website",
    href: "/projects/mattwyskiel-com",
    description: "Including the card that shows what I am listening to.",
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
              className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-muted"
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
            className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full border-2 border-brand bg-muted"
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
                The first idea is still the goal. A data lake is in place, and
                chat files are its first source. Email and documents are next.
                So is a native app for iPhone and Mac, which I have started.
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
      <div className="rounded-lg bg-card p-6 shadow-xs">
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
            className="h-6 border-l-2 border-dashed border-brand md:h-0 md:w-6 md:border-l-0 md:border-t-2"
          />
          <span className="text-center text-sm text-muted-foreground md:w-24">
            Private Tailscale network
          </span>
          <span
            aria-hidden="true"
            className="h-6 border-l-2 border-dashed border-brand md:h-0 md:w-6 md:border-l-0 md:border-t-2"
          />
        </div>
      </div>
      <div className="rounded-lg bg-card p-6 shadow-xs">
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
          When I first put up this page, Whiskey was a backend and a big idea.
          It does a lot more now. This is how it grew.
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
              It is all one TypeScript monorepo on Bun: 7 apps, 10 services, and
              16 shared libraries as of November 2026. Pulumi describes the
              infrastructure, with separate development and production stacks.
              Every merge to the main branch deploys through GitHub Actions.
            </p>
          </Prose>
        </div>
      </ProjectSection>

      <ProjectSection title="Where it runs" id="where">
        <WhereItRuns />
        <div className="mt-6">
          <Prose>
            <p>
              Work that comes and goes, like web requests and AI chat, runs on
              demand in AWS. Things that hold state or touch the house, like the
              database and the media servers, stay on hardware I own.
            </p>
          </Prose>
        </div>
      </ProjectSection>

      <ProjectSection title="See it for yourself" id="public">
        <Prose>
          <p>Whiskey itself is private, but some of what it runs is public.</p>
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
