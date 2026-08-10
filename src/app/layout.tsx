import { PersonalSiteFooter } from "@whiskey/web-ui/components/site/personal-site-footer";
import { PersonalSiteHeader } from "@whiskey/web-ui/components/site/personal-site-header";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Inter } from "next/font/google";
import Link from "next/link";
import { type ReactNode, Suspense } from "react";
import "./globals.css";
import { PersonalLogoMark } from "@whiskey/web-ui/components/brand/personal-logo-mark";
import { ModeToggle } from "@/components/ModeToggle";
import { PersonalSiteBrandIcon } from "@/components/personal-site-brand-icon";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Wyskiel",
  description: "Personal website",
};

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const currentYear = await getCurrentYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
          {children}
          <PersonalSiteFooter currentYear={currentYear} linkComponent={Link} />
        </ThemeProvider>
      </body>
    </html>
  );
}
