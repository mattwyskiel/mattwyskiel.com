import { Open_Sans } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Linkedin, Mail } from "lucide-react";

const logoFont = Open_Sans({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header className="sm:text-center sm:flex sm:flex-wrap">
      <div className="px-5 py-8 w-full justify-between items-center md:inline-flex lg:inline-flex">
        <a href="/">
          <div className="gap-5 justify-center items-center flex">
            <img
              src="/whiskey-site.svg"
              alt="logo"
              className="w-[107px] h-[79px]"
            />
            <h1 className={`text-2xl uppercase ${logoFont.className}`}>
              Matt Wyskiel
            </h1>
          </div>
        </a>
        <div className="justify-end items-center gap-5 flex">
          <Button variant={"ghost"} asChild>
            <Link href="/stories">Stories</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="/portfolio">Portfolio</Link>
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Contact</Button>
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
      </div>{" "}
    </header>
  );
}
