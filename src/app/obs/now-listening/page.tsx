import type { Metadata } from "next";
import { NowListening } from "@/components/now-listening";
import { nowListeningEndpoint } from "@/lib/now-listening-endpoint";

export const metadata: Metadata = {
  title: "Now listening · OBS",
  robots: { index: false, follow: false },
};

export default function NowListeningOverlayPage() {
  return (
    <main className="obs-overlay dark" aria-label="Now listening overlay">
      <NowListening endpoint={nowListeningEndpoint()} presentation="overlay" />
    </main>
  );
}
