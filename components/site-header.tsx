"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Info, Briefcase, ImageIcon, MessageSquare, PhoneCall } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/nzuri-logo.svg" alt="Nzuri Media" width={120} height={50} className="h-auto w-auto" />
        </Link>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md">
            <div className="mt-12 flex flex-col gap-8">
              <Link
                href="/about"
                className="flex items-center gap-4 text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="h-6 w-6" />
                About
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-4 text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Briefcase className="h-6 w-6" />
                Services
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center gap-4 text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ImageIcon className="h-6 w-6" />
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className="flex items-center gap-4 text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare className="h-6 w-6" />
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-4 text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneCall className="h-6 w-6" />
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

