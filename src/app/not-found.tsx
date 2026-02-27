import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-muted flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-6xl font-bold mb-2">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-foreground hover:bg-brand-hover transition-colors"
                >
                    Go home
                </Link>
            </div>
        </div>
    );
}
