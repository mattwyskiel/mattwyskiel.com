import Link from "next/link"
import { ArrowLeft, Cloud, Smartphone, Database, Workflow, Shield, Globe } from "lucide-react"

export default function WhiskeyPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Whiskey</h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        My personal automation system, built and iterated over many years, built natively in the AWS cloud.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["AWS", "SwiftUI", "Automation", "Cloud-Native", "Data Processing"].map((tag) => (
                            <span key={tag} className="bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <Link 
                            href="https://github.com/whiskey-platform" 
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-medium"
                        >
                            View on GitHub
                        </Link>
                    </div>
                </div>

                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-muted-foreground mb-4">
                            Whiskey is my second brain, my OS, my personal automation system. It's a cloud-native, 
                            data-rich, and private platform that ingests and processes documents, transactions, 
                            and communications to help me stay organized and informed.
                        </p>
                        <p className="text-muted-foreground">
                            Built and iterated over many years, Whiskey represents my approach to personal data 
                            management and automation, leveraging modern cloud technologies to create a seamless 
                            experience across all my devices.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Database className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Document Processing</h3>
                            <p className="text-muted-foreground">
                                Automatically ingests and processes documents from various sources, 
                                making them searchable and actionable.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Workflow className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Transaction Tracking</h3>
                            <p className="text-muted-foreground">
                                Monitors and categorizes financial transactions, providing insights 
                                into spending patterns and financial health.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Smartphone className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">iOS App</h3>
                            <p className="text-muted-foreground">
                                Native iOS application with push notifications and comprehensive 
                                data viewing capabilities.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Shield className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Privacy-First</h3>
                            <p className="text-muted-foreground">
                                Built with privacy as a core principle, ensuring all personal 
                                data remains secure and under my control.
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
                                <Cloud className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Cloud Infrastructure</h3>
                                <p className="text-sm text-muted-foreground">
                                    Built on AWS with serverless architecture for scalability and cost-effectiveness
                                </p>
                            </div>
                            <div className="text-center">
                                <Smartphone className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Mobile-First</h3>
                                <p className="text-sm text-muted-foreground">
                                    SwiftUI-based iOS app providing native performance and user experience
                                </p>
                            </div>
                            <div className="text-center">
                                <Globe className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Multi-Platform</h3>
                                <p className="text-sm text-muted-foreground">
                                    Integrates with multiple cloud providers and services for comprehensive coverage
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
                                <div className="font-medium text-sm mb-1">Cloud</div>
                                <div className="text-xs text-muted-foreground">AWS</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Backend</div>
                                <div className="text-xs text-muted-foreground">Google Cloud</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Mobile</div>
                                <div className="text-xs text-muted-foreground">SwiftUI</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Database</div>
                                <div className="text-xs text-muted-foreground">Supabase</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">CI/CD</div>
                                <div className="text-xs text-muted-foreground">GitHub Actions</div>
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
                            <span className="font-medium">Active Development</span>
                        </div>
                        <p className="text-muted-foreground">
                            Whiskey is actively maintained and continuously improved. As my personal automation 
                            system, it evolves with my needs and incorporates new technologies as they become 
                            available. The project represents years of iteration and refinement.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}