import * as React from "react"
import { cn } from "@/lib/utils"

export function Section({
  className,
  children,
  id,
  variant = "default",
  bordered = true,
  ...props
}) {
  const variantStyles = {
    default: "bg-bg text-fg1",
    subtle: "bg-surface-1 text-fg1",
    muted: "bg-surface-2 text-fg1",
  }

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        variantStyles[variant],
        bordered && "border-t border-line-subtle",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
