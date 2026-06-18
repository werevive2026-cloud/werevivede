import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhoWeServe } from "@/components/who-we-serve"
import { Pricing } from "@/components/pricing"
import { Compliance } from "@/components/compliance"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <WhoWeServe />
        <Pricing />
        <Compliance />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
