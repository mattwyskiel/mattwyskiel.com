import { PersonalLogoMark } from "@whiskey/web-ui/components/brand/personal-logo-mark";
import { PersonalSiteFooter } from "@whiskey/web-ui/components/site/personal-site-footer";
import { PersonalSiteHeader } from "@whiskey/web-ui/components/site/personal-site-header";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { type ReactNode, Suspense } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { NowListening } from "@/components/now-listening";
import { PersonalSiteBrandIcon } from "@/components/personal-site-brand-icon";
import { ThemeProvider } from "@/components/theme-provider";
import { nowListeningEndpoint } from "@/lib/now-listening-endpoint";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const currentYear = await getCurrentYear();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="has-[#now-listening]:pb-[calc(8rem+env(safe-area-inset-bottom))] md:has-[#now-listening]:pb-32">
        <PersonalSiteHeader
          brandIcon={
            <Suspense
              fallback={
                <PersonalLogoMark aria-hidden="true" className="h-6 w-auto" />
              }
            >
              <PersonalSiteBrandIcon />
            </Suspense>
          }
          linkComponent={Link}
          themeControl={<ModeToggle />}
        />
        <NowListening endpoint={nowListeningEndpoint()} />
        {children}
        <PersonalSiteFooter currentYear={currentYear} linkComponent={Link} />
      </div>
    </ThemeProvider>
  );
}
