import * as React from "react"
import { cn } from "@/lib/utils"

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "h-10 w-full rounded-md border border-line-strong bg-bg px-3 text-base text-fg1 placeholder:text-fg3 transition-colors duration-120 ease-standard hover:border-fg2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus aria-invalid:border-danger disabled:bg-surface-2 disabled:text-fg3 disabled:pointer-events-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"
