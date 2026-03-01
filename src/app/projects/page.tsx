import type { Metadata } from "next";
import Link from "next/link";
import { archivedProjects } from "@/lib/projects";
import { BackLink } from "@/components/back-link";
import { ProjectsListing } from "@/components/projects-listing";
import { Badge } from "@whiskey/web-ui/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects | Matt Wyskiel",
  description: "A showcase of my personal and professional software projects.",
  openGraph: {
    type: "website",
    title: "Projects | Matt Wyskiel",
    description:
      "A showcase of my personal and professional software projects.",
    url: "https://mattwyskiel.com/projects",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-muted">
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <BackLink href="/" label="Back home" />

        <h1 className="text-3xl font-bold mb-4">Projects</h1>

        <p className="text-muted-foreground mb-8 max-w-2xl">
          What I've been working on.
        </p>

        <ProjectsListing />

        {/* Archive Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Archive</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Previous projects and experiments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {archivedProjects.map((project) => (
              <div
                key={project.title}
                className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-border"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {project.date}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="text-muted-foreground hover:text-foreground font-medium text-sm"
                >
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
