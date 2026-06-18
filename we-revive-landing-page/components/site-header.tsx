"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Corporate", href: "#who-we-serve" },
  { label: "Residential", href: "#who-we-serve" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="WeRevive home">
          <Logo className="h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            nativeButton={false}
            variant="outline"
            className="border-border bg-transparent"
            render={<a href="#audit" />}
          >
            Audit
          </Button>
          <Button
            nativeButton={false}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            render={<a href="#contact" />}
          >
            Free Compliance Review
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              nativeButton={false}
              variant="outline"
              className="mt-2 border-border bg-transparent"
              render={<a href="#audit" onClick={() => setOpen(false)} />}
            >
              Audit
            </Button>
            <Button
              nativeButton={false}
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
              render={<a href="#contact" onClick={() => setOpen(false)} />}
            >
              Free Compliance Review
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
