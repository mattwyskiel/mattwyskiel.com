import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import UnderConstruction from "@/components/under-construction";
import Link from "next/link";

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
