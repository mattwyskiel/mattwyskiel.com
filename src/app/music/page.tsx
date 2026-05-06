import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MusicPage() {
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

        <h1 className="text-3xl font-bold mb-4">Music</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Music has always been a huge part of my life. Here you'll find mixes I've created, tracks I'm listening to,
          and thoughts on audio production.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Recent Mixes</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="font-medium text-lg mb-2">Summer Vibes 2023</h3>
              <p className="text-muted-foreground mb-4">
                A mix of upbeat tracks perfect for summer drives with the windows down.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Play className="h-4 w-4 mr-2" />
                Play Mix
              </Button>
            </div>
            <div className="border-t">
              <div className="p-4">
                <h4 className="text-sm font-medium mb-2">Tracklist</h4>
                <ul className="space-y-3">
                  {tracks.map((track, index) => (
                    <li key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground">{index + 1}</span>
                        <div>
                          <p className="font-medium">{track.title}</p>
                          <p className="text-muted-foreground text-xs">{track.artist}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground text-xs">{track.duration}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Music Thoughts</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="font-medium text-lg mb-2">
                <Link href="#" className="hover:text-teal-600">
                  The Art of Mixing: Finding Balance
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">May 3, 2023</p>
              <p className="text-muted-foreground">
                My thoughts on creating the perfect mix and how to balance different elements in a track.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="font-medium text-lg mb-2">
                <Link href="#" className="hover:text-teal-600">
                  Vinyl vs. Digital: My Take
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">April 10, 2023</p>
              <p className="text-muted-foreground">
                Exploring the differences between vinyl and digital music, and why I appreciate both formats.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const tracks = [
  {
    title: "Summer Nights",
    artist: "Coastal Vibes",
    duration: "3:42",
  },
  {
    title: "Sunset Drive",
    artist: "Highway 101",
    duration: "4:15",
  },
  {
    title: "Ocean Breeze",
    artist: "The Waves",
    duration: "3:58",
  },
  {
    title: "Mountain High",
    artist: "Peak Experience",
    duration: "5:21",
  },
  {
    title: "City Lights",
    artist: "Urban Soundscape",
    duration: "4:33",
  },
]
