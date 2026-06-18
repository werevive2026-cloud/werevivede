import { Activity, Clock, HeartCrack, Timer } from "lucide-react"

const stats = [
  {
    icon: HeartCrack,
    stat: "100,000",
    label: "cardiac arrest deaths in Germany every year",
  },
  {
    icon: Activity,
    stat: "10%",
    label: "drop in survival every minute without defibrillation",
  },
  {
    icon: Clock,
    stat: "8+ min",
    label: "average ambulance arrival time",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium">
            Every second counts
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Sudden cardiac arrest doesn&apos;t wait for an ambulance
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            When the heart stops, survival is measured in minutes — not the time
            it takes help to arrive.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map(({ icon: Icon, stat, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8 text-center backdrop-blur-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/15">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="text-4xl font-bold tracking-tight">{stat}</p>
              <p className="text-pretty leading-relaxed text-primary-foreground/80">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-primary-foreground/25 bg-primary-foreground/15 px-8 py-8 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-primary">
            <Timer className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="text-balance text-xl font-semibold leading-relaxed sm:text-2xl">
            Using an AED within 3 minutes can drastically increase the chance of
            survival.
          </p>
          <p className="text-pretty leading-relaxed text-primary-foreground/80">
            Irreversible brain damage begins after just 4 minutes without
            oxygen. The first few minutes decide everything.
          </p>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-lg leading-relaxed text-primary-foreground/90">
          An AED on your premises changes everything. We make sure it works when
          it has to.
        </p>
      </div>
    </section>
  )
}
