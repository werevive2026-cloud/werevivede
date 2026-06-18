import { Briefcase, Home } from "lucide-react"

const audiences = [
  {
    icon: Briefcase,
    title: "Corporate",
    desc: "Offices, co-working spaces, hotels, gyms. Full MPBetreibV compliance. One monthly fee.",
  },
  {
    icon: Home,
    title: "Residential",
    desc: "Berlin residential blocks. One AED covers the whole building. Community alert network included.",
  },
]

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Who we serve
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-8 text-center md:p-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
