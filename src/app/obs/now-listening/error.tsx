"use client";

// Broadcast sources fail closed: never put an error panel on the stream.
export default function OverlayError() {
  return (
    <main className="obs-overlay dark" aria-label="Now listening overlay" />
  );
}
