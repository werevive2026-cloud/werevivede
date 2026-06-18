import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Corporate Essential",
    price: "59",
    segment: "Corporate",
    features: [
      "AED installation & setup",
      "MPBetreibV compliance documentation",
    ],
    popular: false,
  },
  {
    name: "Corporate Smart Network",
    price: "89",
    segment: "Corporate",
    features: [
      "Everything in Essential",
      "24/7 remote monitoring",
      "Instant responder alert network",
    ],
    popular: true,
  },
  {
    name: "Residential Basic",
    price: "49",
    segment: "Residential",
    features: [
      "One AED for the whole building",
      "Compliance documentation included",
    ],
    popular: false,
  },
  {
    name: "Residential Premium",
    price: "69",
    segment: "Residential",
    features: [
      "Everything in Basic",
      "24/7 remote monitoring",
      "Community alert network",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            One monthly fee. No hidden costs. Fully managed cardiac safety.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Every programme includes a cardiac briefing — we train your people on
            exactly what to do in the event of a cardiac emergency.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-6",
                plan.popular ? "border-primary shadow-lg" : "border-border",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {plan.segment}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  €{plan.price}
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                nativeButton={false}
                className={cn(
                  "mt-8",
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-foreground text-background hover:bg-foreground/90",
                )}
                render={<a href="#contact" />}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
