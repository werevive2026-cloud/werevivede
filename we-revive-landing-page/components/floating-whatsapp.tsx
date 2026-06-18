import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/4915510514128"

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--whatsapp)] text-background shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--whatsapp)] focus-visible:ring-offset-2 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
