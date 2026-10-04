import * as React from "react"
import { cn } from "@/lib/utils"

export function Section({
  className,
  children,
  id,
  variant = "default",
  bordered = false,
  ...props
}) {
  const variantStyles = {
    default: "bg-background text-foreground",
    surface: "bg-secondary-background text-foreground",
    main: "bg-main text-main-foreground",
    dark: "bg-black text-white",
  }

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        variantStyles[variant],
        bordered && "border-y-2 border-border",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
