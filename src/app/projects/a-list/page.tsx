import type { Metadata } from "next"
import Link from "next/link"
import { Music, Database, Radio, Globe, Smartphone, Cloud } from "lucide-react"
import { BackLink } from "@/components/back-link"
import { Badge } from "@whiskey/web-ui/components/ui/badge"
import { Button } from "@whiskey/web-ui/components/ui/button"

export const metadata: Metadata = {
    title: "A-List | Matt Wyskiel",
    description:
        "A personal DJ mix player with centralized database and web player interface.",
    openGraph: {
        type: "website",
        title: "A-List | Matt Wyskiel",
        description:
            "A personal DJ mix player with centralized database and web player interface.",
        url: "https://mattwyskiel.com/projects/a-list",
        images: { url: "https://mattwyskiel.com/ogimage.png" },
    },
}

export default function AListPage() {
    return (
        <div className="min-h-screen bg-muted">
            <main className="container mx-auto px-4 py-10 max-w-4xl">
                <BackLink href="/projects" label="Back to projects" />

                {/* Hero Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">A-List</h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        My personal DJ mix player with centralized database and web player interface.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Next.js", "AWS", "Music", "Web Audio", "DynamoDB"].map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-brand-muted text-brand-muted-foreground text-sm">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <Button asChild className="bg-brand hover:bg-brand-hover text-brand-foreground">
                            <Link href="https://a-list.mattwyskiel.com">
                                Listen Now
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-brand text-brand hover:bg-brand-muted">
                            <Link href="https://github.com/mattwyskiel/a-list">
                                View Code
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                    <div className="bg-card p-6 rounded-lg shadow-sm">
                        <p className="text-muted-foreground mb-4">
                            A-List is my personal DJ mix player, designed to showcase and organize my DJ mixes
                            in a beautiful, accessible format. It features a centralized database of all my mixes,
                            a responsive web player, and even generates podcast feeds for easy consumption.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <Database className="h-8 w-8 text-brand mb-4" />
                            <h3 className="font-medium text-lg mb-2">Centralized Database</h3>
                            <p className="text-muted-foreground">
                                All mixes are stored in a centralized database with rich metadata.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <Music className="h-8 w-8 text-brand mb-4" />
                            <h3 className="font-medium text-lg mb-2">Web Player</h3>
                            <p className="text-muted-foreground">
                                Beautiful, responsive web player with full audio controls
                                and a seamless playback experience.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <Radio className="h-8 w-8 text-brand mb-4" />
                            <h3 className="font-medium text-lg mb-2">Podcast Feed</h3>
                            <p className="text-muted-foreground">
                                Automatically generates podcast feeds, making it easy to subscribe
                                and listen to new mixes in your favorite podcast app.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <Smartphone className="h-8 w-8 text-brand mb-4" />
                            <h3 className="font-medium text-lg mb-2">Mobile Responsive</h3>
                            <p className="text-muted-foreground">
                                Fully responsive design that works seamlessly across all devices,
                                from desktop to mobile.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Architecture */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Technical Architecture</h2>
                    <div className="bg-card p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Globe className="h-12 w-12 text-brand mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Frontend</h3>
                                <p className="text-sm text-muted-foreground">
                                    Built with Next.js for optimal performance and SEO, featuring server-side rendering
                                </p>
                            </div>
                            <div className="text-center">
                                <Cloud className="h-12 w-12 text-brand mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Serverless Backend</h3>
                                <p className="text-sm text-muted-foreground">
                                    AWS Lambda functions handle API requests with DynamoDB for data persistence
                                </p>
                            </div>
                            <div className="text-center">
                                <Database className="h-12 w-12 text-brand mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Audio Storage</h3>
                                <p className="text-sm text-muted-foreground">
                                    Audio files stored in S3 with CloudFront CDN for fast global delivery
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies Used */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
                    <div className="bg-card p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-3 bg-muted rounded">
                                <div className="font-medium text-sm mb-1">Frontend</div>
                                <div className="text-xs text-muted-foreground">Next.js</div>
                            </div>
                            <div className="text-center p-3 bg-muted rounded">
                                <div className="font-medium text-sm mb-1">Backend</div>
                                <div className="text-xs text-muted-foreground">AWS Lambda</div>
                            </div>
                            <div className="text-center p-3 bg-muted rounded">
                                <div className="font-medium text-sm mb-1">Database</div>
                                <div className="text-xs text-muted-foreground">DynamoDB</div>
                            </div>
                            <div className="text-center p-3 bg-muted rounded">
                                <div className="font-medium text-sm mb-1">Storage</div>
                                <div className="text-xs text-muted-foreground">S3</div>
                            </div>
                            <div className="text-center p-3 bg-muted rounded">
                                <div className="font-medium text-sm mb-1">CI/CD</div>
                                <div className="text-xs text-muted-foreground">GitHub Actions</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audio Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Audio Features</h2>
                    <div className="bg-card p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-medium mb-3">Player Controls</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Play/pause with keyboard shortcuts</li>
                                    <li>• Seek controls with visual waveform</li>
                                    <li>• Volume control with mute functionality</li>
                                    <li>• Playback speed adjustment</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium mb-3">Mix Organization</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Genre-based categorization</li>
                                    <li>• Chronological sorting</li>
                                    <li>• Search and filter capabilities</li>
                                    <li>• Detailed mix metadata</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Status */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Project Status</h2>
                    <div className="bg-card p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-status-active rounded-full"></div>
                            <span className="font-medium">Live & Active</span>
                        </div>
                        <p className="text-muted-foreground">
                            A-List is live and actively maintained. New mixes are regularly added, and the platform
                            continues to evolve with new features and improvements. The project serves as both a
                            portfolio piece and a practical tool for sharing my musical work.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}
