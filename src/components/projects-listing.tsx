"use client";

import { Badge } from "@whiskey/web-ui/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getSortedProjects, type Project } from "@/lib/projects";

function SortToggle({
  sortBy,
  onSortChange,
}: {
  sortBy: "featured" | "date";
  onSortChange: (sort: "featured" | "date") => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onSortChange("featured")}
        className={`px-3 py-1 text-sm rounded ${
          sortBy === "featured"
            ? "bg-brand-muted text-brand-muted-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Featured
      </button>
      <button
        type="button"
        onClick={() => onSortChange("date")}
        className={`px-3 py-1 text-sm rounded ${
          sortBy === "date"
            ? "bg-brand-muted text-brand-muted-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Date
      </button>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isPersonal = project.type === "personal";
  const borderColor = isPersonal ? "border-brand" : "border-brand-alt";
  const _tagVariant = isPersonal ? "brand" : "brand-alt";
  const linkColor = isPersonal
    ? "text-brand hover:text-brand-hover"
    : "text-brand-alt hover:text-brand-alt-hover";

  return (
    <div
      className={`bg-card p-6 rounded-lg shadow-xs border-l-4 ${borderColor} relative`}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium text-lg inline">
            {project.title}
            {project.featured && (
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 inline ml-1" />
            )}
          </h3>
        </div>
        <div className="flex items-center gap-2 ml-4">
          {project.isActive && (
            <div
              className="w-2 h-2 bg-status-active rounded-full"
              title="Active"
            />
          )}
          <span className="text-xs text-muted-foreground">{project.date}</span>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className={
              isPersonal
                ? "bg-brand-muted text-brand-muted-foreground"
                : "bg-brand-alt-muted text-brand-alt-muted-foreground"
            }
          >
            {tag}
          </Badge>
        ))}
      </div>
      {project.type === "personal" && (
        <Link
          href={project.link}
          className={`${linkColor} font-medium text-sm`}
        >
          View Project →
        </Link>
      )}
    </div>
  );
}

export function ProjectsListing() {
  const [sortBy, setSortBy] = useState<"featured" | "date">("featured");

  return (
    <>
      {/* Controls */}
      <div className="flex justify-between items-center mb-8">
        {/* Legend */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-l-4 border-brand bg-card" />
            <span className="text-sm text-muted-foreground">Personal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-l-4 border-brand-alt bg-card" />
            <span className="text-sm text-muted-foreground">Professional</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-status-active rounded-full" />
            <span className="text-sm text-muted-foreground">Active</span>
          </div>
        </div>

        <SortToggle sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getSortedProjects(sortBy).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}

export { ProjectCard };
