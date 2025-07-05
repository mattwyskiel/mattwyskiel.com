import Link from "next/link"
import { ArrowLeft, Smartphone, CreditCard, Coffee, Users, MapPin, Archive } from "lucide-react"

export default function KingsmenCafePage() {
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
                    <div className="flex items-center gap-2 mb-4">
                        <Archive className="h-6 w-6 text-gray-500" />
                        <span className="text-gray-500 font-medium">Archived Project</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Kingsmen Café</h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        A mobile pre-ordering experience for a small local coffee chain with Square payments.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["iOS", "Swift", "Mobile", "Square", "Node.js"].map((tag) => (
                            <span key={tag} className="bg-gray-50 text-gray-700 text-sm px-3 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <Link 
                            href="https://github.com/mattwyskiel/kingsmen-cafe" 
                            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium"
                        >
                            View on GitHub
                        </Link>
                    </div>
                </div>

                {/* Project Status Notice */}
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <Archive className="h-5 w-5 text-amber-600" />
                        <h3 className="font-medium text-amber-800">Archived Project</h3>
                    </div>
                    <p className="text-amber-700 text-sm">
                        This project was developed for a local coffee chain that has since closed. 
                        The code remains available as a portfolio piece and learning resource.
                    </p>
                </div>

                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-muted-foreground mb-4">
                            Kingsmen Café was a mobile pre-ordering solution I developed for a small local coffee 
                            chain. The app allowed customers to browse the menu, customize their orders, and pay 
                            using Square's payment processing system, all while providing a community hub for 
                            the school environment.
                        </p>
                        <p className="text-muted-foreground">
                            This project showcased my ability to work with payment processing, mobile UI/UX design, 
                            and integration with third-party services in a real-world business context.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Coffee className="h-8 w-8 text-amber-600 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Pre-Order System</h3>
                            <p className="text-muted-foreground">
                                Complete pre-ordering system with customizable menu items, 
                                allowing customers to place orders ahead of time.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <CreditCard className="h-8 w-8 text-amber-600 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Square Integration</h3>
                            <p className="text-muted-foreground">
                                Secure mobile payments powered by Square's payment processing 
                                system for seamless transactions.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Users className="h-8 w-8 text-amber-600 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Community Hub</h3>
                            <p className="text-muted-foreground">
                                Featured school community information and events, 
                                making it more than just a ordering app.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Smartphone className="h-8 w-8 text-amber-600 mb-4" />
                            <h3 className="font-medium text-lg mb-2">Native iOS App</h3>
                            <p className="text-muted-foreground">
                                Built as a native iOS application using Swift for 
                                optimal performance and user experience.
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
                                <Smartphone className="h-12 w-12 text-amber-600 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">iOS Frontend</h3>
                                <p className="text-sm text-muted-foreground">
                                    Native iOS app built with Swift SDK for optimal performance
                                </p>
                            </div>
                            <div className="text-center">
                                <CreditCard className="h-12 w-12 text-amber-600 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Payment Processing</h3>
                                <p className="text-sm text-muted-foreground">
                                    Square payment integration for secure mobile transactions
                                </p>
                            </div>
                            <div className="text-center">
                                <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-3" />
                                <h3 className="font-medium mb-2">Backend Services</h3>
                                <p className="text-sm text-muted-foreground">
                                    Node.js backend with MongoDB for data management
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
                                <div className="font-medium text-sm mb-1">Mobile</div>
                                <div className="text-xs text-muted-foreground">iOS SDK (Swift)</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Payments</div>
                                <div className="text-xs text-muted-foreground">Square</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Backend</div>
                                <div className="text-xs text-muted-foreground">Node.js</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Database</div>
                                <div className="text-xs text-muted-foreground">MongoDB</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-medium text-sm mb-1">Hosting</div>
                                <div className="text-xs text-muted-foreground">Heroku</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Business Context */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Business Context</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-medium mb-3">Problem Solved</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Long wait times during peak hours</li>
                                    <li>• Limited ordering convenience for students</li>
                                    <li>• Need for payment processing integration</li>
                                    <li>• Lack of community engagement platform</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium mb-3">Solution Delivered</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Mobile pre-ordering to reduce wait times</li>
                                    <li>• Integrated payment processing</li>
                                    <li>• Community information hub</li>
                                    <li>• User-friendly mobile interface</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Development Insights */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Development Insights</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-medium">Payment Integration</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Working with Square's payment SDK provided valuable experience in secure payment processing
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-medium">Real-World Business Requirements</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Balancing technical capabilities with actual business needs and user workflows
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-medium">Mobile UX Design</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Designing for quick ordering while maintaining comprehensive functionality
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Legacy */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Project Legacy</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                            <span className="font-medium">Archived - Business Closed</span>
                        </div>
                        <p className="text-muted-foreground">
                            While the coffee chain has since closed, this project remains a valuable part of my 
                            portfolio. It demonstrates my ability to work with real business requirements, integrate 
                            complex payment systems, and deliver a complete mobile solution. The experience gained 
                            from this project has informed my approach to subsequent mobile and payment-related projects.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}