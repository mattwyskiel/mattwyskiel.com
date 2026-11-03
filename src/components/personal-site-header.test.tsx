import { expect, test } from "bun:test";
import { PersonalSiteHeader } from "@whiskey/web-ui/components/site/personal-site-header";
import Link from "next/link";
import { renderToStaticMarkup } from "react-dom/server";

test("personal site navigation links to the live viewer in a safe new tab", () => {
  const html = renderToStaticMarkup(
    <PersonalSiteHeader linkComponent={Link} />,
  );
  const liveLink = html.match(/<a\b[^>]*>live<\/a>/)?.[0];

  expect(liveLink).toBeDefined();
  expect(liveLink).toContain('href="https://ywithaw.live"');
  expect(liveLink).toContain('target="_blank"');
  expect(liveLink).toContain('rel="noopener noreferrer"');
});
