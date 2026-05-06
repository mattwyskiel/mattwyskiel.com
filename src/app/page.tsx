import { Badge } from "@whiskey/web-ui/components/ui/badge";
import { Car, Code, Landmark, Music } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/contentful";
import { getFeaturedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Matt Wyskiel",
  description:
    "Personal site of Matt Wyskiel - software builder, music enthusiast, and tinkerer.",
  openGraph: {
    type: "website",
    title: "Matt Wyskiel",
    description:
      "Personal site of Matt Wyskiel - software builder, music enthusiast, and tinkerer.",
    url: "https://mattwyskiel.com",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

export default async function Home() {
  const posts = await getPosts();
  const featuredProjects = getFeaturedProjects(2);
  return (
    <div className="min-h-screen bg-muted">
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Hero Section */}
        <div className="flex flex-col gap-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hey, I'm Matt.
          </h1>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-6">What I'm About</h2>
              <p className="text-muted-foreground">
                I build software, as a career and as a hobby. I collect and
                archive all kinds of media. I'm a music lover &amp; mixer &amp;
                snob. All in pursuit of the Good Life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
                <Code className="h-8 w-8 text-brand mb-2" />
                <h3 className="font-medium">Software</h3>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
                <Music className="h-8 w-8 text-brand mb-2" />
                <h3 className="font-medium">Music</h3>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
                <Landmark className="h-8 w-8 text-brand mb-2" />
                <h3 className="font-medium">Archiving</h3>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
                <Car className="h-8 w-8 text-brand mb-2" />
                <h3 className="font-medium">The Good Life</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => {
              const isPersonal = project.type === "personal";
              const borderColor = isPersonal
                ? "border-brand"
                : "border-brand-alt";
              const tagColor = isPersonal
                ? "bg-brand-muted text-brand-muted-foreground"
                : "bg-brand-alt-muted text-brand-alt-muted-foreground";
              const linkColor = isPersonal
                ? "text-brand hover:text-brand-hover"
                : "text-brand-alt hover:text-brand-alt-hover";

              return (
                <div
                  key={project.title}
                  className={`bg-card p-6 rounded-lg shadow-sm border-l-4 ${borderColor} relative`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg">{project.title}</h3>
                    <Badge variant="secondary" className={tagColor}>
                      {project.type === "personal" ? "Personal" : "Work"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className={tagColor}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.type === "personal" && (
                    <Link
                      href={project.link}
                      className={`${linkColor} font-medium text-sm`}
                    >
                      View Project →
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-6">
            <Link
              href="/projects"
              className="text-brand hover:text-brand-hover font-medium"
            >
              View all projects →
            </Link>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
          <div className="space-y-6">
            {posts.slice(0, 2).map((post) => (
              <div key={post.slug} className="border-b pb-6">
                <h3 className="font-medium text-lg mb-2">
                  <Link
                    href={`/stories/${post.slug}`}
                    className="hover:text-brand"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {post.publishDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/stories"
              className="text-brand hover:text-brand-hover font-medium"
            >
              View all posts →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
