"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error: err,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(err);
  }, [err]);

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-foreground hover:bg-brand-hover transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
