import React from "react"
import { siteConfig } from "@/data/site"

export function Ticker() {
  const items = [...siteConfig.tickerItems, ...siteConfig.tickerItems]

  return (
    <div className="w-full overflow-hidden border-y-2 border-border bg-main py-3.5 text-main-foreground select-none">
      <div className="animate-marquee flex whitespace-nowrap items-center gap-8">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="text-sm md:text-base font-extrabold font-heading tracking-wide uppercase flex items-center gap-8"
          >
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
