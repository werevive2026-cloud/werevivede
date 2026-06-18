import { ShieldCheck, CalendarClock, ClipboardCheck, Scale } from "lucide-react"

const badges = [
  { icon: ShieldCheck, label: "MPBetreibV Compliant" },
  { icon: CalendarClock, label: "2027 Ready" },
  { icon: ClipboardCheck, label: "DGUV Coordinated" },
  { icon: Scale, label: "§823 BGB Protected" },
]

export function Compliance() {
  return (
    <section id="compliance" className="bg-navy text-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Germany&apos;s AED Compliance Rules Are Changing.
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="text-pretty leading-relaxed text-background/70">
                <span className="font-medium text-background">
                  MPBetreibV Inspections:
                </span>{" "}
                Operators face strict, mandatory safety logging.
              </li>
              <li className="text-pretty leading-relaxed text-background/70">
                <span className="font-medium text-background">
                  The 2027 Shift:
                </span>{" "}
                Newly installed devices require automated remote monitoring.
              </li>
              <li className="text-pretty leading-relaxed text-background/70">
                <span className="font-medium text-background">
                  Liability Safeguards:
                </span>{" "}
                Neglecting readiness can trigger severe liability under §823 BGB.
              </li>
            </ul>
            <p className="mt-6 text-pretty leading-relaxed text-background/70">
              WeRevive keeps you fully compliant and covered — automatically.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-background/15 bg-background/5 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-medium leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
