import { WhiskeyLogo } from "@whiskey/web-ui/components/brand/whiskey-logo";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ProjectLink,
  ProjectPage,
  ProjectSection,
} from "@/components/project-page";
import {
  allProjects,
  archivedProjects,
  formatYears,
  type Project,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Matt Wyskiel",
  description: "Software I build for myself, and work I have done for others.",
  openGraph: {
    type: "website",
    title: "Projects | Matt Wyskiel",
    description:
      "Software I build for myself, and work I have done for others.",
    url: "https://mattwyskiel.com/projects",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

function newestFirst(a: { date: string }, b: { date: string }) {
  return b.date.localeCompare(a.date);
}

const whiskey = allProjects.find((project) => project.title === "Whiskey");
const personal = allProjects
  .filter((project) => project.type === "personal" && project !== whiskey)
  .toSorted(newestFirst);
const work = allProjects
  .filter((project) => project.type === "professional")
  .toSorted(newestFirst);
const archive = archivedProjects.toSorted(newestFirst);

function WhiskeyFeature({ project }: { project: Project }) {
  return (
    <article className="rounded-lg bg-card p-6 shadow-xs md:p-8">
      <div className="flex items-start justify-between gap-6">
        <WhiskeyLogo className="h-10 w-auto text-foreground" />
        <p className="text-sm tabular-nums text-muted-foreground">
          {formatYears(project.date)}
        </p>
      </div>
      <h3 className="mt-6 text-3xl font-semibold tracking-tight">
        <Link
          href={project.link}
          className="rounded-sm hover:text-brand-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-xl text-lg leading-snug">
        {project.description}
      </p>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        It started in 2023 as an idea for a second brain. It now also hosts{" "}
        <ProjectLink href="/projects/a-list">A-List</ProjectLink>,{" "}
        <ProjectLink href="/projects/mattwyskiel-com">this website</ProjectLink>
        , and my live streams.
      </p>
      <Link
        href={project.link}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-medium text-brand-foreground hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Read how Whiskey grew
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </article>
  );
}

function ProjectRow({
  title,
  description,
  date,
  tags,
  href,
}: {
  title: string;
  description: string;
  date: string;
  tags: string[];
  href?: string;
}) {
  const heading = href ? (
    <Link
      href={href}
      className="rounded-sm after:absolute after:inset-0 after:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {title}
    </Link>
  ) : (
    title
  );

  return (
    <li
      className={`relative grid gap-1 p-5 sm:grid-cols-[1fr_auto] sm:gap-x-6 ${
        href ? "hover:bg-muted/50" : ""
      }`}
    >
      <div>
        <h3 className={`font-medium text-lg ${href ? "text-foreground" : ""}`}>
          {heading}
        </h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
        <p className="mt-2 text-sm text-muted-foreground">{tags.join(", ")}</p>
      </div>
      <p className="order-first text-sm tabular-nums text-muted-foreground sm:order-none sm:pt-1">
        {formatYears(date)}
      </p>
    </li>
  );
}

export default function ProjectsPage() {
  return (
    <ProjectPage backHref="/" backLabel="Back home">
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-muted-foreground">
          Software I build for myself, and work I have done for others.
        </p>
      </header>

      <ProjectSection title="Personal" id="personal">
        {whiskey && <WhiskeyFeature project={whiskey} />}
        <ul className="mt-6 divide-y rounded-lg bg-card shadow-xs">
          {personal.map((project) => (
            <ProjectRow
              key={project.title}
              title={project.title}
              description={project.description}
              date={project.date}
              tags={project.tags}
              href={project.link}
            />
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Work" id="work">
        <ul className="divide-y rounded-lg bg-card shadow-xs">
          {work.map((project) => (
            <ProjectRow
              key={project.title}
              title={project.title}
              description={project.description}
              date={project.date}
              tags={project.tags}
            />
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Archive" id="archive">
        <ul className="divide-y rounded-lg bg-card shadow-xs">
          {archive.map((project) => (
            <ProjectRow
              key={project.title}
              title={project.title}
              description={project.description}
              date={project.date}
              tags={project.tags}
              href={project.link}
            />
          ))}
        </ul>
      </ProjectSection>
    </ProjectPage>
  );
}
