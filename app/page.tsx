import Link from "next/link"
import { Music, Code, Car, Landmark } from "lucide-react"
import { getPosts } from "@/lib/contentful"

export default async function Home() {
    const posts = await getPosts()
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <main className="container mx-auto px-4 py-10 max-w-4xl">
                {/* Hero Section */}
                <div className="flex flex-col gap-6 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hey, I'm Matt.</h1>
                </div>

                {/* About Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold mb-6">What I'm About</h2>
                            <p className="text-muted-foreground">
                                I build software, as a career and as a hobby. I collect and archive all kinds of media. I'm a music lover / mixer / snob. All in pursuit of the Good Life.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                <Code className="h-8 w-8 text-teal-500 mb-2" />
                                <h3 className="font-medium">Software</h3>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                <Music className="h-8 w-8 text-teal-500 mb-2" />
                                <h3 className="font-medium">Music</h3>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                <Landmark className="h-8 w-8 text-teal-500 mb-2" />
                                <h3 className="font-medium">Archiving</h3>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                <Car className="h-8 w-8 text-teal-500 mb-2" />
                                <h3 className="font-medium">Joyrides</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Projects */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg mb-2">Project Name</h3>
                            <p className="text-muted-foreground mb-4">
                                A brief description of this project and what technologies I used to build it.
                            </p>
                            <Link href="#" className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                                View Project →
                            </Link>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg mb-2">Music Mix</h3>
                            <p className="text-muted-foreground mb-4">
                                A recent mix I created featuring some of my favorite tracks and production techniques.
                            </p>
                            <Link href="#" className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                                Listen →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Latest Posts */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
                    <div className="space-y-6">
                        {posts.slice(0, 2).map((post, index) => (
                            <div key={index} className="border-b pb-6">
                                <h3 className="font-medium text-lg mb-2">
                                    <Link href={`/stories/${post.slug}`} className="hover:text-teal-600">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground mb-2">{post.publishDate.toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}</p>
                                <p className="text-muted-foreground">{post.excerpt}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <Link href="/stories" className="text-teal-600 hover:text-teal-700 font-medium">
                            View all posts →
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}
