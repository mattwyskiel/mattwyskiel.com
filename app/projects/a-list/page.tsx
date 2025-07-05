import Link from "next/link"
import { ArrowLeft, Music, Database, Radio, Globe, Smartphone, Cloud } from "lucide-react"

export default function AListPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <main className="container mx-auto px-4 py-10 max-w-4xl">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to projects
                </Link>

                {/* Hero Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">A-List</h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        My personal DJ mix player with centralized database and web player interface.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Next.js", "AWS", "Music", "Web Audio", "DynamoDB"].map((tag) => (
                            <span key={tag} className="bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <Link 
                            href="https://a-list.mattwyskiel.com" 
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-medium"
                        >
                            Listen Now
                        </Link>
                        <Link 
                            href="https://github.com/mattwyskiel/a-list" 
                            className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 rounded-md font-medium"
                        >
                            View Code
                        </Link>
                    </div>
                </div>

                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-muted-foreground mb-4">
                            A-List is my personal DJ mix player, designed to showcase and organize my DJ mixes 
                            in a beautiful, accessible format. It features a centralized database of all my mixes, 
                            a responsive web player, and even generates podcast feeds for easy consumption.
                        </p>
                        <p className="text-muted-foreground">
                            Built with modern web technologies, A-List demonstrates my approach to personal 
                            media management and showcases my passion for music and audio engineering.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Database className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Centralized Database</h3>
                            <p className="text-muted-foreground">
                                All mixes are stored in a centralized database with rich metadata, 
                                including tracklists, genres, and mix information.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Music className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Web Player</h3>
                            <p className="text-muted-foreground">
                                Beautiful, responsive web player with full audio controls, 
                                playlist management, and seamless playback experience.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Radio className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Podcast Feed</h3>
                            <p className="text-muted-foreground">
                                Automatically generates podcast feeds, making it easy to subscribe 
                                and listen to new mixes in your favorite podcast app.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Smartphone className="h-8 w-8 text-teal-500 mb-4" />
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
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Globe className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Frontend</h3>
                                <p className="text-sm text-muted-foreground">
                                    Built with Next.js for optimal performance and SEO, featuring server-side rendering
                                </p>
                            </div>
                            <div className="text-center">
                                <Cloud className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Serverless Backend</h3>
                                <p className="text-sm text-muted-foreground">
                                    AWS Lambda functions handle API requests with DynamoDB for data persistence
                                </p>
                            </div>
                            <div className="text-center">
                                <Database className="h-12 w-12 text-teal-500 mx-auto mb-3" />
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
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Frontend</div>
                                <div className="text-xs text-muted-foreground">Next.js</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Backend</div>
                                <div className="text-xs text-muted-foreground">AWS Lambda</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Database</div>
                                <div className="text-xs text-muted-foreground">DynamoDB</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Storage</div>
                                <div className="text-xs text-muted-foreground">S3</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">CI/CD</div>
                                <div className="text-xs text-muted-foreground">GitHub Actions</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audio Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Audio Features</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
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
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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