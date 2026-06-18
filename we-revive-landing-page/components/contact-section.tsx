"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { CheckCircle2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const WHATSAPP_URL = "https://wa.me/4915510514128"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Get a Free Compliance Review.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tell us about your building. We&apos;ll show you exactly what cardiac
            safety compliance looks like for you.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/40 p-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-foreground">Thank you!</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Your review request has been received. Our team will be in touch
              within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" required placeholder="Acme GmbH" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@acme.de" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">
                  Phone <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input id="phone" name="phone" type="tel" placeholder="+49 …" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your building…"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book My Free Review
            </Button>
          </form>
        )}

        <div className="mt-6 flex justify-center">
          <Button
            nativeButton={false}
            variant="outline"
            size="lg"
            className="border-[color:var(--whatsapp)] bg-transparent text-[color:var(--whatsapp)] hover:bg-[color:var(--whatsapp)] hover:text-background"
            render={
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />
            }
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
