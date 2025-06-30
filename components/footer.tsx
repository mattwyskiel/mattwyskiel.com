import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t py-8 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Matt Wyskiel
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/mattwyskiel" className="text-muted-foreground hover:text-foreground">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://x.com/mattwyskiel" className="text-muted-foreground hover:text-foreground">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
