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
          <img
            src="/twitter-x.svg"
            alt="logo"
            className="w-12 h-12 transition hover:scale-125"
          />
        </a>
        <a href="https://instagram.com/mattwyskiel">
          <img
            src="/instagram-black.svg"
            alt="logo"
            className="w-11 h-11 transition hover:scale-125"
          />
        </a>
        <a href="https://github.com/mattwyskiel">
          <img
            src="/github.svg"
            alt="logo"
            className="w-12 h-12 transition hover:scale-125"
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
            href="https://github.com/mattwyskiel/mattwyskiel.com/tree/redesign-refactor"
            className="text-blue-900 hover:text-blue-950"
          >
            custom-built and open-source
          </a>
        </p>
      </div>
    </footer>
  );
}
