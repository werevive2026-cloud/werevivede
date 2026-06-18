import { HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle geometric accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent" />
        <div className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-muted" />
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-24 pt-24 text-center md:pb-32 md:pt-32">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <HeartPulse className="h-4 w-4 text-primary" aria-hidden="true" />
          Cardiac safety infrastructure · Berlin
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Making Buildings Cardiac Safe.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          WeRevive connects AEDs to a smart alert network — so when every second
          counts, the right people are notified instantly.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            nativeButton={false}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            render={<a href="#contact" />}
          >
            Get a Free Compliance Review
          </Button>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className="border-border bg-transparent"
            render={<a href="#how-it-works" />}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
