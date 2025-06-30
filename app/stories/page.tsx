import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <h1 className="text-3xl font-bold mb-4">Stories</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Thoughts, tutorials, and stories about software development, music production, and finding joy in the things I
          build.
        </p>

        <div className="space-y-10">
          {posts.map((post, index) => (
            <article key={index} className="border-b pb-10">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/stories/${post.slug}`} className="hover:text-teal-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/stories/${post.slug}`} className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

const posts = [
  {
    title: "The Joy of Building from Scratch",
    slug: "joy-of-building",
    date: "April 15, 2023",
    excerpt:
      "There's something deeply satisfying about creating something with your own hands and mind. In this post, I explore the psychological benefits of building projects from the ground up.",
    tags: ["Creativity", "Software", "DIY"],
  },
  {
    title: "Finding Inspiration in Unexpected Places",
    slug: "unexpected-inspiration",
    date: "March 22, 2023",
    excerpt:
      "How a weekend drive led to solving a complex software problem I'd been stuck on for weeks. Sometimes the best solutions come when you're not actively looking for them.",
    tags: ["Creativity", "Problem Solving", "Life"],
  },
  {
    title: "The Perfect Mix: Balancing Elements in Music and Code",
    slug: "perfect-mix",
    date: "February 18, 2023",
    excerpt:
      "Drawing parallels between mixing music and writing clean code. Both require a careful balance of elements, attention to detail, and knowing when to stop tweaking.",
    tags: ["Music", "Software", "Creativity"],
  },
  {
    title: "Building a Custom Mechanical Keyboard",
    slug: "custom-keyboard",
    date: "January 30, 2023",
    excerpt:
      "A step-by-step guide to how I built my own mechanical keyboard from scratch, including parts selection, assembly, and programming the firmware.",
    tags: ["Hardware", "DIY", "Tutorial"],
  },
]
