import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { ProjectLink } from "@/components/project-page";
import { allProjects, archivedProjects } from "@/lib/projects";
import AListPage from "./a-list/page";
import KingsmenCafePage from "./kingsmen-cafe/page";
import MattWyskielComPage from "./mattwyskiel-com/page";
import ProjectsPage from "./page";
import WhiskeyPage from "./whiskey/page";

const pages = {
  "/projects": ProjectsPage,
  "/projects/a-list": AListPage,
  "/projects/kingsmen-cafe": KingsmenCafePage,
  "/projects/mattwyskiel-com": MattWyskielComPage,
  "/projects/whiskey": WhiskeyPage,
};

function anchors(html: string) {
  return [...html.matchAll(/<a\b[^>]*>/g)].map((match) => {
    const tag = match[0];
    return {
      tag,
      href: tag.match(/href="([^"]*)"/)?.[1] ?? "",
    };
  });
}

describe("project pages", () => {
  test("the index links every project that has a page, and no work entry links nowhere", () => {
    const html = renderToStaticMarkup(<ProjectsPage />);
    const hrefs = anchors(html).map((anchor) => anchor.href);

    for (const project of [...allProjects, ...archivedProjects]) {
      expect(html).toContain(project.title.replaceAll("&", "&amp;"));
      if (project.link.startsWith("/projects/")) {
        expect(hrefs).toContain(project.link);
      }
    }
    expect(hrefs).not.toContain("#");
  });

  test.each(Object.entries(pages))(
    "%s links only to pages that exist, and opens outside links safely",
    (_route, Page) => {
      const html = renderToStaticMarkup(<Page />);
      const knownRoutes = new Set(["/", ...Object.keys(pages)]);

      for (const { tag, href } of anchors(html)) {
        if (href.startsWith("/")) {
          expect(knownRoutes).toContain(href);
        } else {
          expect(href).toStartWith("https://");
          expect(tag).toContain('target="_blank"');
          expect(tag).toContain('rel="noopener noreferrer"');
        }
      }
    },
  );

  test.each(Object.entries(pages))(
    "%s describes every image it shows",
    (_route, Page) => {
      const html = renderToStaticMarkup(<Page />);

      for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
        expect(tag.match(/alt="([^"]*)"/)?.[1]).toBeTruthy();
      }
    },
  );

  test("outside project links tell screen readers they open a new tab", () => {
    const external = renderToStaticMarkup(
      <ProjectLink href="https://ywithaw.live">ywithaw</ProjectLink>,
    );
    const internal = renderToStaticMarkup(
      <ProjectLink href="/projects/a-list">A-List</ProjectLink>,
    );

    expect(external).toContain("(opens in a new tab)");
    expect(internal).not.toContain("target=");
    expect(internal).not.toContain("(opens in a new tab)");
  });
});
