import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="About Nzuri Media"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Nzuri Media was founded with a passion for visual storytelling and a commitment to helping brands
                connect with their audiences in meaningful ways.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Years of industry experience</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Award-winning creative team</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Cutting-edge equipment and techniques</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Client-focused approach</span>
              </li>
            </ul>
            <div>
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}

