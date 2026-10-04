import * as React from "react"
import { cn } from "@/lib/utils"

export const Card = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variantStyles = {
    default: "bg-bg border border-line-subtle rounded-md p-6",
    interactive: "bg-bg border border-line-subtle rounded-md p-6 transition-colors duration-120 ease-standard hover:border-line-strong cursor-pointer",
    compact: "bg-bg border border-line-subtle rounded-md p-4",
    flush: "bg-bg border border-line-subtle rounded-md p-0",
  }

  return (
    <div
      ref={ref}
      className={cn(variantStyles[variant], className)}
      {...props}
    />
  )
})
Card.displayName = "Card"

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 mb-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

export const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-medium text-lg text-fg1 tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

export const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-fg2 max-w-prose", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

export const CardBody = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
CardBody.displayName = "CardBody"

export const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4 border-t border-line-subtle mt-4", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
