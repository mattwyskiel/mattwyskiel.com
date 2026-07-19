"use client";

import { PersonalLogoMark } from "@whiskey/web-ui/components/brand/personal-logo-mark";
import { BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import type React from "react";

interface BrandIconRoute {
  matches: (pathname: string) => boolean;
  icon: React.ReactNode;
}

const matchesStoriesRoute = (pathname: string) =>
  pathname === "/stories" || pathname.startsWith("/stories/");

const routeBrandIcons = [
  {
    matches: matchesStoriesRoute,
    icon: <BookOpen aria-hidden="true" className="size-6 text-brand" />,
  },
] satisfies BrandIconRoute[];

const defaultBrandIcon = (
  <PersonalLogoMark aria-hidden="true" className="h-6 w-auto" />
);

export function PersonalSiteBrandIcon() {
  const pathname = usePathname();
  const routeBrandIcon = routeBrandIcons.find((entry) =>
    entry.matches(pathname),
  );

  return routeBrandIcon?.icon ?? defaultBrandIcon;
}
