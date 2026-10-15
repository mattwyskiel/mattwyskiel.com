"use client";

import { PersonalLogoMark } from "@whiskey/web-ui/components/brand/personal-logo-mark";
import { BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";

export function PersonalSiteBrandIcon() {
  const pathname = usePathname();

  return pathname === "/stories" || pathname.startsWith("/stories/") ? (
    <BookOpen aria-hidden="true" className="size-6 text-brand" />
  ) : (
    <PersonalLogoMark aria-hidden="true" className="h-6 w-auto" />
  );
}
