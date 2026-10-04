import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const badgeVariants = cva(
  "inline-flex items-center rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-heading font-bold transition-colors uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-main text-main-foreground",
        neutral: "bg-secondary-background text-foreground",
        outline: "bg-transparent text-foreground",
        dark: "bg-black text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export function Badge({ className, variant, dataSlot = "badge", ...props }) {
  return (
    <div
      data-slot={dataSlot}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}
