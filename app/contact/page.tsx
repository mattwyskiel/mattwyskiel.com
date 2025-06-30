import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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

        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Have a question about one of my projects? Want to collaborate on something cool? Or just want to chat about
          music or software? Drop me a line!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="What's on your mind?" rows={5} />
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 w-full">Send Message</Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Connect</h2>
              <p className="text-muted-foreground mb-4">You can also find me on these platforms:</p>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-teal-600 hover:text-teal-700 font-medium">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-teal-600 hover:text-teal-700 font-medium">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-teal-600 hover:text-teal-700 font-medium">
                    SoundCloud
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
              <p className="text-muted-foreground mb-4">
                Subscribe to get occasional updates about new projects, mixes, and blog posts.
              </p>
              <div className="flex gap-2">
                <Input placeholder="your.email@example.com" className="flex-1" />
                <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
