export default function Loading() {
    return (
        <div className="min-h-screen bg-muted">
            <main className="container mx-auto px-4 py-10 max-w-4xl animate-pulse">
                <div className="h-4 w-24 bg-muted-foreground/20 rounded mb-8" />
                <div className="h-9 w-64 bg-muted-foreground/20 rounded mb-4" />
                <div className="h-5 w-96 bg-muted-foreground/20 rounded mb-8" />
                <div className="space-y-6">
                    <div className="h-40 bg-card rounded-lg" />
                    <div className="h-40 bg-card rounded-lg" />
                </div>
            </main>
        </div>
    );
}
