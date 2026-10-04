import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border text-sm font-medium transition-colors duration-120 ease-standard active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:bg-surface-2 disabled:text-fg3 disabled:border-line cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-bg text-fg1 border-line-strong hover:bg-surface-2",
        secondary: "bg-surface-2 text-fg1 border-line hover:border-line-strong",
        inverted: "bg-fg1 text-bg border-fg1 hover:bg-fg2 hover:border-fg2",
        ghost: "bg-transparent text-fg1 border-transparent hover:bg-surface-2",
        destructive: "bg-danger text-bg border-danger hover:bg-danger/90",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Button.displayName = "Button"
