import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DownloadCloud, Github } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
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
    <div className="">
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

      <h1 className="text-4xl font-semibold text-center pb-5">
        Selected Portfolio
      </h1>

      <div>
        {/* Whiskey */}
        <div className="pt-2 py-5 px-10 md:max-w-[600px] mx-auto justify-center">
          <h2 className="text-2xl font-medium text-center">Whiskey</h2>
          <h3 className="font-light text-sm italic text-center pb-6">
            My &ldquo;Personal OS&rdquo; in the cloud
          </h3>
          <Image
            src={
              "https://images.ctfassets.net/zh68lrw89i3n/4t5mMRScXQuGf7EnnqNkwu/e19a6d0c943225c1ec1c13059a754515/Original_Logo.png"
            }
            alt="Whiskey logo"
            width={800}
            height={400}
            className="rounded-xl mx-auto"
          />
          <div className="">
            <p className="text-center p-5">
              My personal automation system, built and iterated over many years,
              built natively in the AWS cloud.
            </p>
            {/* <Separator
              decorative={true}
              className="mb-5 mt-2 hidden lg:block"
            /> */}
            <h3 className="text-lg font-medium pb-5">Features</h3>
            <ul className="pb-8">
              <li className="list-disc">
                Ingests, processes, and stores documents, transactions, and
                communications from all areas of life into a single actionable
                dashboard application
              </li>
              <li className="list-disc">
                Integrate multiple AWS serverless oﬀerings with external SaaS
                solutions uses external platforms as needed (Supabase, SST
                Console, GitHub Actions).
              </li>
              <li className="list-disc">
                An iOS app built with SwiftUI which can provide notifications,
                enable manual document import, and view rich data from its many
                data sources.
              </li>
            </ul>
            <h3 className="text-lg font-medium pb-5">Tech Stack</h3>
            <ul className="pb-10">
              <li className="list-disc">
                AWS (Lambda, SNS, SQS, DynamoDB, S3, EventBridge)
              </li>
              <li className="list-disc">Google Cloud Platform (PubSub)</li>
              <li className="list-disc">ImprovMX (Email Webhooks)</li>
              <li className="list-disc">SST (AWS CDK, Pulumi)</li>
              <li className="list-disc">iOS SDK (SwiftUI)</li>
              <li className="list-disc">Supabase (PostgreSQL)</li>
              <li className="list-disc">GitHub Actions (CI/CD)</li>
            </ul>
            {/* info box pointing to open source on GitHub */}
            <Alert>
              <AlertTitle>Open-source and in active development</AlertTitle>
              <AlertDescription>
                Follow the progress of this project on GitHub:{"   "}
                <a
                  className="text-blue-900 hover:text-blue-950"
                  href="https://github.com/whiskey-platform"
                >
                  https://github.com/whiskey-platform
                </a>
              </AlertDescription>
            </Alert>
          </div>

          <Separator decorative={true} className="mt-10" />
        </div>

        {/* A-List */}
        <div className="py-5 px-10 md:max-w-[600px] mx-auto justify-center">
          <h2 className="text-2xl font-medium text-center">A-List</h2>
          <h3 className="font-light text-sm italic text-center pb-6">
            My personal DJ mix player
          </h3>
          <Image
            src="https://images.ctfassets.net/zh68lrw89i3n/3gTGIeZhsL945yRwyE8vDS/77875c8be16d8041756bb7766d22b485/a-list-iphone.png"
            height={400}
            width={200}
            className="rounded-xl mx-auto"
            alt="a-list"
          />
          <div className="md:w-[500px]">
            <p className="text-center pt-5">
              An audio player for my DJ-style mixes.
            </p>
            <p className="text-center pb-5">
              <a
                href="https://a-list.mattwyskiel.com"
                className="text-blue-900 hover:text-blue-950"
              >
                https://a-list.mattwyskiel.com
              </a>
            </p>
            {/* <Separator
              decorative={true}
              className="mb-5 mt-2 hidden lg:block"
            /> */}
            <h3 className="text-lg font-medium pb-5">Features</h3>
            <ul className="pb-8">
              <li className="list-disc">
                Centralized database of mixes I&apos;ve made since 2021
              </li>
              <li className="list-disc">
                Web player for easy streaming of audio
              </li>
              <li className="list-disc">
                Hostable podcast feed for easy import into podcast apps
                (https://api.mattwyskiel.com/a-list/podcast-feed 😁)
              </li>
            </ul>
            <h3 className="text-lg font-medium pb-5">Tech Stack</h3>
            <ul className="pb-10">
              <li className="list-disc">Next.js (Frontend)</li>
              <li className="list-disc">AWS Lambda (Node.js)</li>
              <li className="list-disc">Amazon DynamoDB</li>
              <li className="list-disc">Amazon S3</li>
              <li className="list-disc">SST v2 (based on AWS CDK)</li>
              <li className="list-disc">GitHub Actions (CI/CD)</li>
            </ul>
            {/* info box pointing to open source on GitHub */}
            <Alert>
              <AlertTitle>Open-source</AlertTitle>
              <AlertDescription>
                Take a peek inside the code behind this project:{"   "}
                <a
                  className="text-blue-900 hover:text-blue-950"
                  href="https://github.com/mattwyskiel/a-list"
                >
                  https://github.com/mattwyskiel/a-list
                </a>
              </AlertDescription>
            </Alert>
          </div>
          <Separator decorative={true} className="mt-10" />
        </div>

        {/* Kingsmen Café */}
        <div className="pt-2 py-5 px-10 md:max-w-[600px] mx-auto justify-center">
          <h2 className="text-2xl font-medium text-center">Kingsmen Café</h2>
          <h3 className="font-light text-sm italic text-center pb-6">
            A mobile coffee ordering app
          </h3>
          <video controls className="rounded-xl mx-auto h-[400px]">
            <source
              src="https://videos.ctfassets.net/zh68lrw89i3n/1ZlpKVHqhQI1ArJqQrFJ5e/18bb18fb210d76e08d6b4e34cf90aa02/Kingsmen_Cafe.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="md:w-[500px]">
            <p className="text-center p-5">
              A mobile pre-ordering experience for a small local coffee chain
              based at Christian Heritage School, Trumbull, CT.
            </p>
            {/* <Separator
              decorative={true}
              className="mb-5 mt-2 hidden lg:block"
            /> */}
            <h3 className="text-lg font-medium pb-5">Features</h3>
            <ul className="pb-8">
              <li className="list-disc">
                Pre-ordering from an entire business-customizable menu of drinks
                and snacks
              </li>
              <li className="list-disc">
                Mobile pre-payment through Square, with support for cardless
                payment options
              </li>
              <li className="list-disc">
                Information hub for the school community, including
                announcements, dynamic store hours display, and student schedule
                integration
              </li>
            </ul>
            <h3 className="text-lg font-medium pb-5">Tech Stack</h3>
            <ul className="pb-10">
              <li className="list-disc">iOS SDK (Swift)</li>
              <li className="list-disc">Square (eCommerce)</li>
              <li className="list-disc">Node.js (Express)</li>
              <li className="list-disc">MongoDB (Atlas)</li>
              <li className="list-disc">Heroku</li>
            </ul>
            {/* info box pointing to open source on GitHub */}
            <Alert>
              <AlertTitle>Open-source archive</AlertTitle>
              <AlertDescription>
                Explore the source code for this early project:{"   "}
                <a
                  className="text-blue-900 hover:text-blue-950"
                  href="https://github.com/mattwyskiel/kingsmen-cafe"
                >
                  https://github.com/mattwyskiel/kingsmen-cafe
                </a>
              </AlertDescription>
            </Alert>
          </div>
          <Separator decorative={true} className="mt-10" />
        </div>

        {/* mattwyskiel.com */}
        <div className="pt-2 px-10 md:max-w-[600px] mx-auto justify-center">
          <h3 className="font-light text-sm italic text-center">
            And let&apos;s not forget...
          </h3>
          <h2 className="text-2xl font-medium text-center">mattwyskiel.com</h2>
          <h3 className="font-light text-sm italic text-center pb-6">
            The website you&apos;re looking at right now!
          </h3>
          <Image
            src="https://images.ctfassets.net/zh68lrw89i3n/4J4RUzulGMkzOibpWGzUFi/052e53f8447d5d3d041621df4386cb00/website-mac.png"
            height={800}
            width={800}
            className="rounded-xl mx-auto"
            alt="mattwyskiel.com"
          />
          <div className="md:w-[500px]">
            <p className="text-center p-5">
              My personal portfolio website, custom-built and open source using
              the latest web technologies
            </p>
            {/* <Separator
              decorative={true}
              className="mb-5 mt-2 hidden lg:block"
            /> */}

            <h3 className="text-lg font-medium pb-5">Features</h3>
            <ul className="pb-8">
              <li className="list-disc">
                Showcases my work both professionally and personally
              </li>
              <li className="list-disc">
                Blogging platform for sharing my thoughts and experiences
              </li>
              <li className="list-disc">
                A cohesive design that reflects my personal brand
              </li>
            </ul>
            <h3 className="text-lg font-medium pb-5">Tech Stack</h3>
            <ul className="pb-10">
              <li className="list-disc">Next.js</li>
              <li className="list-disc">Tailwind CSS</li>
              <li className="list-disc">Contentful (CMS)</li>
              <li className="list-disc">AWS (Hosting)</li>
              <li className="list-disc">SST v3 (based on Pulumi)</li>
            </ul>
            {/* info box pointing to open source on GitHub */}
            <Alert>
              <AlertTitle>Open-source and in active development</AlertTitle>
              <AlertDescription>
                Follow the progress of this project on GitHub:{"   "}
                <a
                  className="text-blue-900 hover:text-blue-950"
                  href="https://github.com/mattwyskiel/mattwyskiel.com"
                >
                  https://github.com/mattwyskiel/mattwyskiel.com
                </a>
              </AlertDescription>
            </Alert>
          </div>
          <Separator decorative={true} className="mt-10" />
        </div>
      </div>

      <div className="pt-6 text-center">
        <h2 className="pb-3 italic">Want to see more?</h2>
        <div className="grid gap-3 lg:gap-3 justify-center pb-5">
          <Button asChild variant="outline">
            <Link href="https://github.com/mattwyskiel">
              <Github className="mr-2 h-4 w-4" />
              Follow me on GitHub
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://assets.mattwyskiel.com/Resume.pdf">
              <DownloadCloud className="mr-2 h-4 w-4" />
              View my resume
            </Link>
          </Button>
        </div>
      </div>

      {/* <UnderConstruction /> */}
    </div>
  );
}
