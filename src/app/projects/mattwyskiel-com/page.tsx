import type { Metadata } from "next";
import {
  BuiltWith,
  FeatureList,
  ProjectHeader,
  ProjectLink,
  ProjectPage,
  ProjectSection,
  ProjectStatus,
  Prose,
} from "@/components/project-page";

const description =
  "This website. It is custom-built, open source, and a small window into what I make.";

export const metadata: Metadata = {
  title: "mattwyskiel.com | Matt Wyskiel",
  description,
  openGraph: {
    type: "website",
    title: "mattwyskiel.com | Matt Wyskiel",
    description,
    url: "https://mattwyskiel.com/projects/mattwyskiel-com",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

const features = [
  {
    title: "Projects",
    description: "What I build for myself, and the work I do for others.",
  },
  {
    title: "Stories",
    description:
      "Posts that I write in Contentful. The site reads them when you visit.",
  },
  {
    title: "Now listening",
    description: (
      <>
        When music plays in my house, a card shows the current track. It comes
        from a public{" "}
        <ProjectLink href="/projects/whiskey">Whiskey</ProjectLink> API that
        shares only the track that is playing.
      </>
    ),
  },
  {
    title: "Light and dark",
    description: "Follows your system theme, or set it yourself.",
  },
];

export default function MattWyskielComPage() {
  return (
    <ProjectPage>
      <ProjectHeader
        title="mattwyskiel.com"
        summary={description}
        facts={[
          { label: "Started", value: "2019" },
          { label: "Status", value: <ProjectStatus status="active" /> },
          { label: "Code", value: "Open source" },
        ]}
        links={[
          {
            label: "Source on GitHub",
            href: "https://github.com/mattwyskiel/mattwyskiel.com",
          },
        ]}
      />

      <ProjectSection title="What it is" id="overview">
        <Prose>
          <p>
            You are looking at it. The site has been my home on the web since
            2019. It keeps things simple and puts the content first.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection title="What it does" id="features">
        <FeatureList features={features} />
      </ProjectSection>

      <ProjectSection title="How it works" id="how">
        <Prose>
          <p>
            It is a Next.js app. Most pages are prerendered, and content that
            changes, such as stories, streams in after the page shell appears.
          </p>
          <p>
            It runs on AWS Lambda behind CloudFront, deployed with Pulumi. It
            shares a design system with A-List and lives in the Whiskey
            monorepo, then is published to its own open-source repository.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection title="Built with" id="stack">
        <BuiltWith
          items={[
            { label: "App", value: "Next.js 16, React 19, TypeScript" },
            { label: "Design", value: "Tailwind CSS and shadcn/ui" },
            { label: "Content", value: "Contentful" },
            {
              label: "Hosting",
              value: "AWS Lambda and CloudFront, via OpenNext and Pulumi",
            },
          ]}
        />
      </ProjectSection>
    </ProjectPage>
  );
}
