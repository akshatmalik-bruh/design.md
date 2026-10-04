import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const badgeVariants = cva(
  "inline-flex items-center h-6 rounded-sm border border-line px-2 text-xs font-medium text-fg2 font-mono uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-line bg-surface-1 text-fg2",
        subtle: "border-line-subtle bg-bg text-fg2",
        success: "border-success/30 text-success bg-success/5",
        warning: "border-warning/30 text-warning bg-warning/5",
        danger: "border-danger/30 text-danger bg-danger/5",
        info: "border-info/30 text-info bg-info/5",
        dark: "border-fg1 bg-fg1 text-bg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export function Badge({ className, variant, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}
