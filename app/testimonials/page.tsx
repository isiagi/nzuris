import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";

export default function TestimonialsPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Clients Say
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about working with Nzuri Media.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-start p-6">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-500"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                &quot;Nzuri Media transformed our brand identity with their
                exceptional photography and design work. Their team was
                professional, creative, and delivered beyond our
                expectations.&quot;
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">
                    Marketing Director, TechCorp
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-start p-6">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-500"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                &quot;The video campaign created by Nzuri Media helped us
                increase our social media engagement by 200%. Their storytelling
                approach truly resonated with our audience.&quot;
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="text-sm font-medium">Michael Chen</p>
                  <p className="text-xs text-muted-foreground">
                    CEO, Startup Innovations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-start p-6">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-500"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                &quot;Working with Nzuri Media on our rebranding was a
                game-changer. Their strategic approach to branding consultancy
                gave us clarity and direction for our business.&quot;
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="text-sm font-medium">Jessica Williams</p>
                  <p className="text-xs text-muted-foreground">
                    Owner, Boutique Retail
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
