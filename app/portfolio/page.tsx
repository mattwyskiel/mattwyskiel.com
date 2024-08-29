import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import UnderConstruction from "@/components/under-construction";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Matt Wyskiel",
  description: "A collection of projects and work I've done.",
  openGraph: {
    type: "website",
    description: "A collection of projects and work I've done.",
    url: "https://mattwyskiel.com/portfolio",
    title: "Portfolio | Matt Wyskiel",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

export default function PortfolioPage() {
  return (
    <div>
      <div className="grid lg:grid-cols-7 md:grid-cols-11">
        <Breadcrumb className="p-4 lg:col-start-2 lg:col-span-5 md:col-start-2 md:col-span-9">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Matt Wyskiel</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-4xl font-medium text-center">My Portfolio</h1>

      <div className="pb-10 pt-6 text-center">
        <Button asChild variant="outline">
          <Link href="https://assets.mattwyskiel.com/Resume.pdf">
            View my resume
          </Link>
        </Button>
      </div>

      <UnderConstruction />
    </div>
  );
}
