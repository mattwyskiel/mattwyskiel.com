import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Wyskiel",
  description: "A Builder and an Archivist",
  openGraph: {
    type: "website",
    description: "A Builder and an Archivist",
    url: "https://mattwyskiel.com",
    title: "Matt Wyskiel",
    images: { url: "https://mattwyskiel.com/hero-still.png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <UnderConstruction /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
