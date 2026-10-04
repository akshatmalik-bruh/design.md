import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function AccordionItem({ title, children, isOpen, onToggle, id }) {
  return (
    <div className="border-2 border-border rounded-base shadow-shadow overflow-hidden transition-all bg-secondary-background">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-trigger-${id}`}
        className={cn(
          "w-full flex items-center justify-between p-4 md:p-5 text-left font-heading text-base md:text-lg transition-colors cursor-pointer border-b-2 border-border",
          isOpen ? "bg-main text-main-foreground" : "bg-secondary-background hover:bg-main/20 text-foreground"
        )}
      >
        <span className="pr-4">{title}</span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 transition-transform duration-200 stroke-[3]",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div
          id={`accordion-content-${id}`}
          role="region"
          aria-labelledby={`accordion-trigger-${id}`}
          className="p-4 md:p-6 text-sm md:text-base font-base text-foreground bg-secondary-background leading-relaxed animate-in fade-in-50 duration-150"
        >
          {children}
        </div>
      )}
    </div>
  )
}
