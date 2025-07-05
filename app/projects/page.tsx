"use client"

import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"
import { useState } from "react"

export default function ProjectsPage() {
    const [sortBy, setSortBy] = useState<'featured' | 'date'>('featured')

    const getSortedProjects = (sortType: 'featured' | 'date') => {
        if (sortType === 'featured') {
            return allProjects.sort((a, b) => {
                if (a.featured !== b.featured) {
                    return b.featured ? 1 : -1
                }
                // Within same featured status, sort by date
                return b.date.localeCompare(a.date)
            })
        } else {
            return allProjects.sort((a, b) => {
                if (a.date !== b.date) {
                    return b.date.localeCompare(a.date)
                }
                return b.isActive ? 1 : -1
            })
        }
    }
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

                <h1 className="text-3xl font-bold mb-4">Projects</h1>

                <p className="text-muted-foreground mb-8 max-w-2xl">
                    What I've been working on.
                </p>

                {/* Controls */}
                <div className="flex justify-between items-center mb-8">
                    {/* Legend */}
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-l-4 border-teal-500 bg-white"></div>
                            <span className="text-sm text-muted-foreground">Personal</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-l-4 border-blue-500 bg-white"></div>
                            <span className="text-sm text-muted-foreground">Professional</span>
                        </div>
                    </div>

                    {/* Sort Toggle */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setSortBy('featured')}
                            className={`px-3 py-1 text-sm rounded ${sortBy === 'featured'
                                ? 'bg-teal-100 text-teal-800 font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Featured
                        </button>
                        <button
                            onClick={() => setSortBy('date')}
                            className={`px-3 py-1 text-sm rounded ${sortBy === 'date'
                                ? 'bg-teal-100 text-teal-800 font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Date
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getSortedProjects(sortBy).map((project, index) => {
                        const isPersonal = project.type === 'personal'
                        const borderColor = isPersonal ? 'border-teal-500' : 'border-blue-500'
                        const tagColor = isPersonal ? 'bg-teal-50 text-teal-700' : 'bg-blue-50 text-blue-700'
                        const linkColor = isPersonal ? 'text-teal-600 hover:text-teal-700' : 'text-blue-600 hover:text-blue-700'

                        return (
                            <div key={index} className={`bg-white p-6 rounded-lg shadow-sm border-l-4 ${borderColor} relative`}>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium text-lg">{project.title}</h3>
                                        {project.featured && (
                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" title="Featured" />
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 ml-4">
                                        {project.isActive && (
                                            <div className="w-2 h-2 bg-green-500 rounded-full" title="Active"></div>
                                        )}
                                        <span className="text-xs text-muted-foreground">{project.date}</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={`${tagColor} text-xs px-2 py-1 rounded`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.type === "personal" &&
                                    < Link href={project.link} className={`${linkColor} font-medium text-sm`}>
                                        View Project →
                                    </Link>
                                }
                            </div>
                        )
                    })}
                </div>

                {/* Archive Section */}
                <section className="mt-16">
                    <h2 className="text-2xl font-semibold mb-6">Archive</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl">
                        Previous projects and experiments.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {archivedProjects.map((project, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-300">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-medium text-lg">{project.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-muted-foreground">{project.date}</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="bg-gray-50 text-gray-700 text-xs px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href={project.link} className="text-gray-600 hover:text-gray-700 font-medium text-sm">
                                    View Project →
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main >
        </div >
    )
}

const allProjects = [
    {
        title: "Whiskey",
        description: "My second brain. My OS. My personal automation system. Cloud-native, data-rich, and private.",
        tags: ["AWS", "Data", "AI"],
        link: "/projects/whiskey",
        type: "personal",
        date: "2023-Present",
        isActive: true,
        featured: true,
    },
    {
        title: "A-List",
        description: "An audio player for my DJ mixes.",
        tags: ["Next.js", "Web Audio", "Music"],
        link: "/projects/a-list",
        type: "personal",
        date: "2024-Present",
        isActive: false,
        featured: false,
    },
    {
        title: "mattwyskiel.com",
        description: "This very website, custom-built and open source, showcasing myself and my work.",
        tags: ["Next.js", "Tailwind", "Portfolio"],
        link: "/projects/mattwyskiel-com",
        type: "personal",
        date: "2019-Present",
        isActive: true,
        featured: false,
    },
    {
        title: "Prudential US Businesses CloudHelp",
        description: "Managed services and developer toolset enabling easier cloud resource management and deployment.",
        tags: ["Cloud", "DevOps", "Enterprise"],
        link: "/projects/prudential-cloudhelp",
        type: "professional",
        date: "2023",
        isActive: false,
        featured: false,
    },
    {
        title: "Prudential Individual Solutions Distribution Platform",
        description: "Backend system connecting distributors to Life products.",
        tags: ["Backend", "Enterprise", "Integration"],
        link: "/projects/prudential-distribution",
        type: "professional",
        date: "2022",
        isActive: false,
        featured: false,
    },
    {
        title: "PruXpress Annuities",
        description: "The web home for Financial Professionals.",
        tags: ["Frontend", "Finance", "Enterprise"],
        link: "/projects/pruxpress-annuities",
        type: "professional",
        date: "2020",
        isActive: false,
        featured: false,
    },
]

const archivedProjects = [
    {
        title: "Kingsmen Café",
        description: "A mobile pre-ordering experience for a small local coffee chain with Square payments.",
        tags: ["iOS", "Swift", "Mobile"],
        link: "/projects/kingsmen-cafe",
        date: "2018"
    },
]
