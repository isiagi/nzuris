import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our diverse portfolio of projects across various industries and mediums.
            </p>
          </div>
        </div>
        <Tabs defaultValue="all" className="mt-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="photography">Photography</TabsTrigger>
              <TabsTrigger value="videography">Videography</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Project+${item}`}
                    width={400}
                    height={300}
                    alt={`Portfolio item ${item}`}
                    className="aspect-video object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="photography" className="mt-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Photo+${item}`}
                    width={400}
                    height={300}
                    alt={`Photography item ${item}`}
                    className="aspect-video object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="videography" className="mt-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Video+${item}`}
                    width={400}
                    height={300}
                    alt={`Videography item ${item}`}
                    className="aspect-video object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="design" className="mt-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Design+${item}`}
                    width={400}
                    height={300}
                    alt={`Design item ${item}`}
                    className="aspect-video object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-8 flex justify-center">
          <Button variant="outline">View All Projects</Button>
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

