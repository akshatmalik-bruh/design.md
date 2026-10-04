import * as React from "react"
import { cn } from "@/lib/utils"

export const Card = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const bgStyles = variant === "highlight" 
    ? "bg-main text-main-foreground" 
    : "bg-secondary-background text-foreground"

  return (
    <div
      ref={ref}
      data-slot="card"
      className={cn(
        "border-2 border-border rounded-base shadow-shadow transition-all",
        bgStyles,
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

export const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={cn("font-heading text-xl leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

export const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={cn("text-sm text-foreground/80 font-base", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    data-slot="card-content" 
    className={cn("p-6 pt-0", className)} 
    {...props} 
  />
))
CardContent.displayName = "CardContent"

export const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
