import Link from "next/link"
import { Headphones } from "lucide-react"

export default function Header() {
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
                <Link href="/" className="flex items-center gap-2">
                    <Headphones className="h-6 w-6 text-teal-500" />
                    <span className="font-medium font-mono text-lg">mattwyskiel</span>
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                        Projects
                    </Link>
                    <Link href="/stories" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                        Stories
                    </Link>
                    {/* <Link href="/music" className="text-sm font-medium text-muted-foreground hover:text-foreground"> */}
                    {/*     Music */}
                    {/* </Link> */}
                    <Link href="https://a-list.mattwyskiel.com" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                        Music
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}
