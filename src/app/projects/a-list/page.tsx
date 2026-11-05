import type { Metadata } from "next";
import {
  BuiltWith,
  FeatureList,
  ProjectFigure,
  ProjectHeader,
  ProjectLink,
  ProjectPage,
  ProjectSection,
  ProjectStatus,
  Prose,
} from "@/components/project-page";
import mixPage from "./images/mix-page.webp";

const description =
  "A home for my DJ mixes, with a web player, track chapters, and a podcast feed.";

export const metadata: Metadata = {
  title: "A-List | Matt Wyskiel",
  description,
  openGraph: {
    type: "website",
    title: "A-List | Matt Wyskiel",
    description,
    url: "https://mattwyskiel.com/projects/a-list",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

const features = [
  {
    title: "Mix library",
    description:
      "Every published mix, newest first, with its own artwork, length, and date.",
  },
  {
    title: "Track chapters",
    description:
      "Each mix lists its tracks. Select a track to jump to it, or share a link that starts at that track.",
  },
  {
    title: "Player",
    description:
      "A web player with lock-screen and notification controls that show the current track. Some mixes also have a video.",
  },
  {
    title: "Podcast feed",
    description:
      "Subscribe in a podcast app. The feed includes each mix's artwork and chapters.",
  },
];

export default function AListPage() {
  return (
    <ProjectPage>
      <ProjectHeader
        title="A-List"
        summary={description}
        facts={[
          { label: "Started", value: "2024" },
          { label: "Status", value: <ProjectStatus status="active" /> },
          { label: "Code", value: "Open source" },
        ]}
        links={[
          {
            label: "Listen to the mixes",
            href: "https://a-list.mattwyskiel.com",
          },
          {
            label: "Podcast feed",
            href: "https://a-list.mattwyskiel.com/api/podcast-feed",
          },
          {
            label: "Source on GitHub",
            href: "https://github.com/mattwyskiel/a-list",
          },
        ]}
      />

      <ProjectSection title="What it is" id="overview">
        <Prose>
          <p>
            A-List is where my DJ mixes live. Each mix gets its own page and a
            track list, and the whole set is a podcast you can follow. Listen in
            the browser or in your podcast app.
          </p>
        </Prose>
        <ProjectFigure
          className="mt-8"
          image={mixPage}
          alt="The A-List page for the mix Uh Oh, I Feel A Beat! It shows the cover art, an audio player, the mix description, and a track list with start times."
          caption="A mix page: cover art, the player, and the track list. Select a track to jump to it."
        />
      </ProjectSection>

      <ProjectSection title="What it does" id="features">
        <FeatureList features={features} />
      </ProjectSection>

      <ProjectSection title="How it works" id="how">
        <Prose>
          <p>
            Logic Pro markers become the chapters. A command in the{" "}
            <ProjectLink href="/projects/whiskey">Whiskey</ProjectLink> CLI
            reads the markers, writes the chapter list, and splits the mix into
            one file per track.
          </p>
          <p>
            The site is a Next.js app that runs on AWS Lambda behind CloudFront.
            Mix details live in DynamoDB, and the audio and artwork come from
            S3. It is built and deployed from the Whiskey monorepo, and
            published as its own open-source repository.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection title="Built with" id="stack">
        <BuiltWith
          items={[
            { label: "App", value: "Next.js, React, Tailwind CSS" },
            {
              label: "Hosting",
              value: "AWS Lambda and CloudFront, via OpenNext",
            },
            { label: "Data", value: "DynamoDB, with audio and artwork in S3" },
            { label: "Infrastructure", value: "Pulumi and GitHub Actions" },
          ]}
        />
      </ProjectSection>
    </ProjectPage>
  );
}
