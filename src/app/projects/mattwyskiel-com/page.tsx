import Link from "next/link"
import { ArrowLeft, Globe, Palette, Code, Zap, Users, Search, Smartphone } from "lucide-react"

export default function MattWyskielComPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">mattwyskiel.com</h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        My personal portfolio website, custom-built and open source, showcasing myself and my work.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Next.js", "Tailwind", "Portfolio", "TypeScript", "Contentful"].map((tag) => (
                            <span key={tag} className="bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <Link 
                            href="https://github.com/mattwyskiel/mattwyskiel.com" 
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-medium"
                        >
                            View Source
                        </Link>
                        <Link 
                            href="/" 
                            className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 rounded-md font-medium"
                        >
                            You're Here!
                        </Link>
                    </div>
                </div>

                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-muted-foreground mb-4">
                            This website serves as my personal portfolio and digital presence, showcasing my 
                            professional work, personal projects, and thoughts. Built from the ground up with 
                            modern web technologies, it demonstrates my approach to web development and design.
                        </p>
                        <p className="text-muted-foreground">
                            The site features a clean, minimal design that puts content first while maintaining 
                            excellent performance and accessibility. It includes a blog platform, project 
                            showcase, and comprehensive information about my professional background.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Palette className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Cohesive Design</h3>
                            <p className="text-muted-foreground">
                                Clean, modern design system that reflects my personal brand and 
                                provides an excellent user experience across all devices.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Users className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Professional Showcase</h3>
                            <p className="text-muted-foreground">
                                Comprehensive portfolio section highlighting my best work, 
                                technical skills, and professional accomplishments.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Search className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Blogging Platform</h3>
                            <p className="text-muted-foreground">
                                Integrated blog with content management system for sharing 
                                insights, tutorials, and personal thoughts.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Smartphone className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Mobile-First</h3>
                            <p className="text-muted-foreground">
                                Responsive design that works flawlessly on all devices, 
                                from mobile phones to desktop computers.
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
                                <Code className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Modern Frontend</h3>
                                <p className="text-sm text-muted-foreground">
                                    Built with Next.js 14 and TypeScript for type safety and optimal performance
                                </p>
                            </div>
                            <div className="text-center">
                                <Zap className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Performance</h3>
                                <p className="text-sm text-muted-foreground">
                                    Optimized for speed with server-side rendering and static generation
                                </p>
                            </div>
                            <div className="text-center">
                                <Globe className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Cloud Native</h3>
                                <p className="text-sm text-muted-foreground">
                                    Deployed on AWS with CDN for global performance and reliability
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
                                <div className="font-medium text-sm mb-1">Framework</div>
                                <div className="text-xs text-muted-foreground">Next.js 14</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Styling</div>
                                <div className="text-xs text-muted-foreground">Tailwind CSS</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Language</div>
                                <div className="text-xs text-muted-foreground">TypeScript</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">CMS</div>
                                <div className="text-xs text-muted-foreground">Contentful</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Hosting</div>
                                <div className="text-xs text-muted-foreground">AWS</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Philosophy */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Design Philosophy</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-medium mb-3">Content First</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Clean typography and readable layouts</li>
                                    <li>• Minimal distractions from main content</li>
                                    <li>• Strategic use of whitespace</li>
                                    <li>• Fast loading and accessible design</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium mb-3">Personal Brand</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Consistent color palette and imagery</li>
                                    <li>• Professional yet approachable tone</li>
                                    <li>• Showcase of technical expertise</li>
                                    <li>• Balance of personal and professional</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Development Process */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-medium">Design System First</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Established a comprehensive design system with reusable components
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-medium">Performance Optimization</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Implemented image optimization, lazy loading, and efficient bundling
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-medium">Content Strategy</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Integrated headless CMS for flexible content management
                                    </p>
                                </div>
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
                            <span className="font-medium">Live & Evolving</span>
                        </div>
                        <p className="text-muted-foreground">
                            The website is live and continuously evolving. Regular updates include new content, 
                            feature improvements, and design refinements. As an open-source project, it serves 
                            as both a portfolio piece and a demonstration of modern web development practices.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}