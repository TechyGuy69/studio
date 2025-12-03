"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#benefits", label: "Benefits" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="hidden items-center space-x-6 text-sm md:flex font-body">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Contact Us</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="mt-6 flex flex-col gap-4 font-body">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-md p-2 text-lg font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild size="lg" className="mt-4">
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
