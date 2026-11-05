import { ArrowUpRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BackLink } from "@/components/back-link";

export interface ProjectLinkItem {
  href: string;
  label: string;
}

export interface ProjectFact {
  label: string;
  value: ReactNode;
}

export interface ProjectFeature {
  title: string;
  description: ReactNode;
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function ProjectLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = `inline-flex items-center gap-1 rounded-sm font-medium text-brand-muted-foreground underline decoration-brand/40 underline-offset-4 hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`;

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ProjectPage({
  children,
  backHref = "/projects",
  backLabel = "Back to projects",
}: {
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-muted">
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <BackLink href={backHref} label={backLabel} />
        {children}
      </main>
    </div>
  );
}

export function ProjectHeader({
  title,
  summary,
  mark,
  facts = [],
  links = [],
  children,
}: {
  title: string;
  summary: ReactNode;
  mark?: ReactNode;
  facts?: ProjectFact[];
  links?: ProjectLinkItem[];
  children?: ReactNode;
}) {
  return (
    <header className="mb-16 md:mb-20">
      {mark && <div className="mb-6">{mark}</div>}
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-xl md:text-2xl leading-snug text-balance">
        {summary}
      </p>
      {children && (
        <div className="mt-4 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          {children}
        </div>
      )}
      {facts.length > 0 && (
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="mt-0.5 font-medium tabular-nums">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {links.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <ProjectLink href={link.href}>{link.label}</ProjectLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function ProjectStatus({ status }: { status: "active" | "archived" }) {
  return status === "active" ? (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full bg-status-active"
      />
      Active
    </span>
  ) : (
    <span className="text-muted-foreground">Archived</span>
  );
}

/** A page section with its heading in the left gutter on wide screens. */
export function ProjectSection({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className="mb-16 md:mb-20 grid gap-x-10 gap-y-5 md:grid-cols-[9rem_1fr]"
    >
      <h2
        id={id ? `${id}-heading` : undefined}
        className="text-lg font-semibold tracking-tight md:pt-0.5"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-prose space-y-4 text-base leading-relaxed text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground">
      {children}
    </div>
  );
}

export function FeatureList({ features }: { features: ProjectFeature[] }) {
  return (
    <dl className="divide-y rounded-lg bg-card shadow-xs">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="grid gap-1 p-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
        >
          <dt className="font-medium">{feature.title}</dt>
          <dd className="leading-relaxed text-muted-foreground">
            {feature.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * A screenshot or artifact with a caption. When `darkImage` is set, the
 * figure follows the site theme and shows only the matching image.
 */
export function ProjectFigure({
  image,
  darkImage,
  alt,
  caption,
  framed = true,
  className = "",
}: {
  image: StaticImageData;
  darkImage?: StaticImageData;
  alt: string;
  caption: ReactNode;
  framed?: boolean;
  className?: string;
}) {
  const frame = framed
    ? "overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border"
    : "";

  return (
    <figure className={className}>
      <div className={frame}>
        <Image
          src={image}
          alt={alt}
          className={`h-auto w-full ${darkImage ? "dark:hidden" : ""}`}
        />
        {darkImage && (
          <Image
            src={darkImage}
            alt={alt}
            className="hidden h-auto w-full dark:block"
          />
        )}
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

export function BuiltWith({ items }: { items: ProjectFact[] }) {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="border-t pt-3">
          <dt className="text-sm text-muted-foreground">{item.label}</dt>
          <dd className="mt-0.5">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
