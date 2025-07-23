import Link from "next/link";
import { Headphones, Github } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function Header() {
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
                <Link href="/" className="flex items-center gap-2">
                    <Headphones className="h-6 w-6 text-teal-500" />
                    <span className="font-medium font-mono text-lg">mattwyskiel</span>
                </Link>
                <nav className="flex items-center gap-6">
                    <Link
                        href="/stories"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        Stories
                    </Link>
                    {/* <Link href="/music" className="text-sm font-medium text-muted-foreground hover:text-foreground"> */}
                    {/*     Music */}
                    {/* </Link> */}
                    <Link
                        href="https://a-list.mattwyskiel.com"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        Music
                    </Link>
                    <Popover>
                        <PopoverTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Contact
                        </PopoverTrigger>
                        <PopoverContent className="w-72">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Get in Touch</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Have a question about one of my projects? Want to
                                        collaborate on something cool? Or just want to chat about
                                        music or software?
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-3">Connect</h4>
                                    <div className="flex gap-3">
                                        <Link
                                            href="https://github.com/mattwyskiel"
                                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#24292e] hover:bg-gray-50 transition-colors group"
                                            title="GitHub"
                                        >
                                            <Github className="h-5 w-5 text-[#24292e]" />
                                        </Link>
                                        <Link
                                            href="https://x.com/mattwyskiel"
                                            className="flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-900 transition-colors group"
                                            title="Twitter"
                                        >
                                            <svg
                                                className="h-5 w-5 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </nav>
            </div>
        </header>
    );
}
