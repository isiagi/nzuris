import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Video,
  Paintbrush,
  Megaphone,
  Instagram,
  Briefcase,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Services
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Crafting Compelling Stories
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Nzuri Media, we don&apos;t just create content—we craft
              compelling stories that resonate, engage, and captivate.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Camera className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Photography</h3>
              <p className="mt-2 text-muted-foreground">
                Professional photography services for events, products,
                portraits, and more.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Video className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Videography</h3>
              <p className="mt-2 text-muted-foreground">
                High-quality video production for commercials, events, and
                corporate needs.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Paintbrush className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Graphic Design</h3>
              <p className="mt-2 text-muted-foreground">
                Creative design solutions for print, digital media, and brand
                identity.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Megaphone className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Brand Promotions</h3>
              <p className="mt-2 text-muted-foreground">
                Strategic promotional campaigns to elevate your brand presence.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Instagram className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Social Media</h3>
              <p className="mt-2 text-muted-foreground">
                Comprehensive social media management and content creation.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Branding</h3>
              <p className="mt-2 text-muted-foreground">
                Expert consultancy to develop and strengthen your brand
                identity.
              </p>
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
