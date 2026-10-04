import React, { useState, useEffect } from "react"
import { Cpu, Menu, X, Sun, Moon, ArrowRight } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Button } from "@/components/ui/button"
import { useLenis } from "@/components/motion/smooth_scroll"

export function Navbar({ onOpenWaitlist }) {
  const lenis = useLenis()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")
  const [activeTab, setActiveTab] = useState("")

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark")
    } else {
      root.removeAttribute("data-theme")
    }
  }, [theme])

  // Track active section using IntersectionObserver (Section 8)
  useEffect(() => {
    const sectionIds = siteConfig.navLinks.map((link) => link.href.replace("#", ""))
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Smooth scroll handler using Lenis scroll-to (Section 6 & 7)
  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace("#", "")
    const targetEl = document.getElementById(targetId)
    
    if (targetEl) {
      if (lenis) {
        lenis.scrollTo(targetEl, {
          offset: -64,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line-subtle bg-bg/95 backdrop-blur-xs">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        
        {/* Left: Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-fg1 hover:opacity-80 transition-opacity"
        >
          <div className="flex size-7 items-center justify-center rounded-sm border border-line-strong bg-fg1 text-bg">
            <Cpu className="size-4" />
          </div>
          <span>{siteConfig.name}</span>
        </a>

        {/* Center: Desktop Nav Links with Active Indicator (Section 8) */}
        <div className="hidden md:flex items-center gap-6">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "")
            const isActive = activeTab === sectionId

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive ? "text-fg1 font-semibold" : "text-fg2 hover:text-fg1"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-fg1 animate-in fade-in duration-180" />
                )}
              </a>
            )
          })}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark / Light Mode Toggle */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>

          {/* Primary CTA */}
          <Button 
            variant="inverted" 
            size="sm"
            onClick={onOpenWaitlist}
          >
            Get API Key <ArrowRight className="size-3.5" />
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

      </nav>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="border-b border-line-subtle bg-bg px-4 py-4 md:hidden animate-in slide-in-from-top duration-180">
          <div className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-sm font-medium text-fg2 hover:text-fg1 border-b border-line-subtle"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button 
                variant="inverted" 
                size="default" 
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenWaitlist()
                }}
                className="w-full justify-center"
              >
                Get API Key Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
