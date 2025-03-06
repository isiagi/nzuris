"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Info,
  Briefcase,
  ImageIcon,
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative w-full h-screen">
        <Image
          src="https://images.unsplash.com/photo-1741091475787-8cf779895451?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/nzuri-logo.svg"
                  alt="Nzuri Media"
                  width={120}
                  height={50}
                  className="h-auto w-auto"
                />
              </div>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-8 w-8" />
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
            <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Your Business Is
                <br />
                Your Brand
              </h1>
              <p className="mt-6 text-xl md:text-2xl font-light">
                Your Brand is Our Business.
              </p>
              <div className="mt-20 flex justify-center">
                <div className="h-3 w-3 rounded-full bg-white animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
