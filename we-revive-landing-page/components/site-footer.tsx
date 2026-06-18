import { Logo } from "./logo"

const links = [
  { label: "Home", href: "#top" },
  { label: "Corporate", href: "#who-we-serve" },
  { label: "Residential", href: "#who-we-serve" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo className="h-7 w-auto" />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          WeRevive · Berlin, Germany · Cardiac Safety Infrastructure
        </p>
      </div>
    </footer>
  )
}
