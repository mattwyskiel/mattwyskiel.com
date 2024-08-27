import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="px-10 pb-10">
      <div>
        <h1
          className={`text-4xl font-semibold text-center py-5 ${playfair.className}`}
        >
          Building an easier and brighter future
        </h1>

        <div className="flex justify-center py-5 pb-10">
          <img src="/hero.svg" alt="hero" className="w-full lg:w-[800px]" />
        </div>

        <div className="md:grid lg:grid-cols-7 md:grid-cols-11">
          <div className="lg:col-start-2 lg:col-span-5 md:col-start-2 md:col-span-9">
            <Separator decorative={true} />
            <div className="grid md:grid-cols-2 md:gap-5 lg:gap-5 justify-items-center align-middle pt-10">
              <Image
                alt="profile"
                src="/profile.jpg"
                width={300}
                height={400}
                className="rounded-3xl py-5"
              />
              <div>
                <h2 className="text-2xl font-medium text-center py-5 sm:pt-0 md:pt-5">
                  Hi, I&apos;m Matt.
                </h2>
                <p className="text-center">
                  I&apos;m a builder and an archivist. My passion is to make
                  life easier and a little more delightful than it was before,
                  using the power of software.
                </p>
                <p className="text-center pt-5">
                  My most recent experience has been in designing, building, and
                  supporting distributed systems in the cloud at an enterprise
                  scale. I&apos;ve also surprised and delighted users on the
                  frontend, primarily through mobile apps.
                </p>
                <p className="text-center pt-5">
                  Feel free to peruse my website, read my stories, and reach out
                  to me if you&apos;d like to work together.
                </p>
                <div className="flex justify-center pt-5 gap-5 flex-wrap">
                  <Button asChild variant="outline">
                    <Link href="/stories">Read my stories</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://assets.mattwyskiel.com/Resume.pdf">
                      View my work
                    </Link>
                  </Button>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button>Contact Me</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="gap-5 flex flex-wrap justify-center">
                        <Button variant={"outline"} asChild>
                          <Link href="https://linkedin.com/in/mattwyskiel">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </Link>
                        </Button>
                        <Button variant={"outline"} asChild>
                          <Link href="mailto:matt@mattwyskiel.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </Link>
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
