import Image from "next/image";
import Instagram from "./logos/instagram";
import Linkedin from "./logos/linkedin";

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="flex items-center justify-center space-x-4">
        <a href="https://linkedin.com/in/mattwyskiel">
          <Linkedin />
        </a>
        <a href="https://x.com/mattwyskiel">
          <Image
            src="/twitter-x.svg"
            alt="X (formerly Twitter) logo"
            width={36}
            height={36}
            className="transition hover:scale-125"
          />
        </a>
        <a href="https://instagram.com/mattwyskiel">
          <Image
            src="/instagram-black.svg"
            alt="Instagram logo"
            width={36}
            height={36}
            className="transition hover:scale-125"
          />
        </a>
        <a href="https://github.com/mattwyskiel">
          <Image
            src="/github.svg"
            alt="GitHub logo"
            width={40}
            height={40}
            className="transition hover:scale-125"
          />
        </a>
      </div>
      <div className="flex justify-center p-3">
        Copyright &copy; {new Date().getFullYear()} Matthew Wyskiel
      </div>
      <div className="flex justify-center">
        <p>
          This website is{" "}
          <a
            href="https://github.com/mattwyskiel/mattwyskiel.com"
            className="text-blue-900 hover:text-blue-950"
          >
            custom-built and open-source
          </a>
        </p>
      </div>
    </footer>
  );
}
