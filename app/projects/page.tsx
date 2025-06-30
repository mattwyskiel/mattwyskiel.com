import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
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

        <h1 className="text-3xl font-bold mb-8">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-lg mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={project.link} className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

const projects = [
  {
    title: "Project One",
    description:
      "A software project I built to solve a specific problem. This uses some interesting technologies and approaches.",
    tags: ["React", "TypeScript", "Node.js"],
    link: "#",
  },
  {
    title: "Music Mixer",
    description: "A web-based tool for mixing and mastering audio tracks with a simple, intuitive interface.",
    tags: ["Web Audio API", "JavaScript", "CSS"],
    link: "#",
  },
  {
    title: "Custom Keyboard Build",
    description: "A detailed walkthrough of how I built my own mechanical keyboard from scratch.",
    tags: ["Hardware", "DIY", "Electronics"],
    link: "#",
  },
  {
    title: "Road Trip Planner",
    description: "An app I built to plan the perfect joyride with optimal scenic routes and stops.",
    tags: ["Maps API", "React Native", "Firebase"],
    link: "#",
  },
]
