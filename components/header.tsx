import { Open_Sans } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";

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
            <Link href="/">Blog</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="https://assets.mattwyskiel.com/Resume.pdf">Resume</Link>
          </Button>
          <Button asChild>
            <Link href="https://linkedin.com/in/mattwyskiel">Contact</Link>
          </Button>
        </div>
      </div>{" "}
    </header>
  );
}
