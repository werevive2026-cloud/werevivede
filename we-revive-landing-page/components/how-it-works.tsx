import { Wrench, MonitorCheck, BellRing } from "lucide-react"

const steps = [
  {
    icon: Wrench,
    title: "We install and connect your AED",
    desc: "Professional placement and setup, integrated into our smart monitoring platform from day one.",
  },
  {
    icon: MonitorCheck,
    title: "Our platform monitors it 24/7",
    desc: "Continuous device health checks keep you compliant with automatic documentation and inspections, with the help of our IoT smart box.",
  },
  {
    icon: BellRing,
    title: "The right people are alerted instantly",
    desc: "In an emergency, the smart box notifies your responder network the moment every second begins to count.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From installation to emergency response, we handle the full cardiac
            safety lifecycle.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-5 text-sm font-semibold uppercase tracking-wide text-primary">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
