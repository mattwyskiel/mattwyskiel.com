import { PersonalSiteFooter } from "@whiskey/web-ui/components/site/personal-site-footer";
import { PersonalSiteHeader } from "@whiskey/web-ui/components/site/personal-site-header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import type React from "react";
import "./globals.css";
import { ModeToggle } from "@/components/ModeToggle";
import { PersonalSiteBrandIcon } from "@/components/personal-site-brand-icon";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Wyskiel",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            brandIcon={<PersonalSiteBrandIcon />}
            linkComponent={Link}
            themeControl={<ModeToggle />}
          />
          {children}
          <PersonalSiteFooter linkComponent={Link} />
        </ThemeProvider>
      </body>
    </html>
  );
}
