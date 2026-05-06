import Link from "next/link";
import {
    ArrowLeft,
    Cloud,
    Smartphone,
    Database,
    Workflow,
    Shield,
} from "lucide-react";

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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Whiskey
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        My personal automation system, built and iterated over many years,
                        built natively in the AWS cloud.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {[
                            "AWS",
                            "SwiftUI",
                            "Automation",
                            "Cloud-Native",
                            "Data Processing",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded"
                            >
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
                        <Link
                            href="#overview"
                            className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 rounded-md font-medium"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-muted-foreground mb-4">
                            Whiskey is my second brain, my OS, my personal automation system.
                            It's a cloud-native, data-rich, and private platform that ingests
                            and processes documents, transactions, and communications to help
                            me stay organized and informed.
                        </p>

                        <p className="text-muted-foreground mb-4">
                            Whiskey is also an AI Assistant, which uses direct access to all
                            (and I do mean <em>all</em> ) my data so that it has everything it
                            needs to be its most helpful with whatever I need. It's an
                            exercise in prompt engineering, model optimization, data
                            management, and cloud service wrangling.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Workflow className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">AI-Powered Assistant</h3>
                            <p className="text-muted-foreground">
                                Advanced AI assistant with direct access to all personal data,
                                leveraging prompt engineering and model optimization for
                                contextual insights.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Database className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">
                                Intelligent Data Processing
                            </h3>
                            <p className="text-muted-foreground">
                                AI-driven ingestion and processing of documents, transactions,
                                and communications, making them searchable and actionable
                                through machine learning.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Smartphone className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">
                                Smart Mobile Interface
                            </h3>
                            <p className="text-muted-foreground">
                                Native iOS application hosting AI Chat, Document Viewing, and
                                other features for seamless mobile access.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Shield className="h-8 w-8 text-teal-500 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Privacy-First AI</h3>
                            <p className="text-muted-foreground">
                                All personal data remains private and under my control while
                                enabling powerful automation capabilities, made possible with a
                                combination of secure cloud and self-hosting.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Architecture */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Technical Architecture
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Workflow className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">AI & Data Layer</h3>
                                <p className="text-sm text-muted-foreground">
                                    Advanced AI models with optimized prompts, comprehensive data
                                    ingestion pipelines, and intelligent processing workflows
                                </p>
                            </div>
                            <div className="text-center">
                                <Cloud className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">
                                    Hybrid Cloud Infrastructure
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Secure combination of AWS serverless architecture and
                                    self-hosted components for optimal privacy and performance
                                </p>
                            </div>
                            <div className="text-center">
                                <Smartphone className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Native Mobile Integration</h3>
                                <p className="text-sm text-muted-foreground">
                                    SwiftUI-based iOS app with AI-enhanced features and seamless
                                    data synchronization across all platforms
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
                                <div className="text-xs text-muted-foreground">Bun</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Mobile</div>
                                <div className="text-xs text-muted-foreground">SwiftUI</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Database</div>
                                <div className="text-xs text-muted-foreground">PostgreSQL</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">CI/CD</div>
                                <div className="text-xs text-muted-foreground">
                                    GitHub Actions
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Status */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Project Status</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-medium">Active Development</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
