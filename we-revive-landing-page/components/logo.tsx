import { HeartPulse } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <HeartPulse className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        We<span className="text-primary">Revive</span>
      </span>
    </span>
  )
}
