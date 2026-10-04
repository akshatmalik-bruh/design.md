import * as React from "react"
import { cn } from "@/lib/utils"

export const Input = React.forwardRef(({ className, type, dataSlot = "input", ...props }, ref) => {
  return (
    <input
      type={type}
      data-slot={dataSlot}
      className={cn(
        "flex h-10 w-full rounded-base border-2 border-border bg-secondary-background px-3 py-2 text-sm font-base ring-offset-white placeholder:text-foreground/50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"
