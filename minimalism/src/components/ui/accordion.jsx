import React, { useState, useRef } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export function AccordionItem({ title, children, defaultOpen = false, className }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentRef = useRef(null)

  const handleToggle = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={cn("border-b border-line-subtle py-4 transition-colors", className)}>
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        className="w-full flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-fg1 text-left select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus rounded-sm group"
      >
        <span>{title}</span>
        <span className="p-1 rounded-sm border border-line-subtle group-hover:border-fg1 transition-colors shrink-0">
          <Plus className={cn("size-4 text-fg2 transition-transform duration-280 ease-standard", isOpen ? "rotate-45 hidden" : "rotate-0 block")} />
          <Minus className={cn("size-4 text-fg1 transition-transform duration-280 ease-standard", isOpen ? "block" : "hidden")} />
        </span>
      </button>

      {/* Smooth height and opacity transition wrapper (Section 20) */}
      <div
        ref={contentRef}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
          isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0 pt-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-fg2 leading-relaxed max-w-prose font-normal">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
