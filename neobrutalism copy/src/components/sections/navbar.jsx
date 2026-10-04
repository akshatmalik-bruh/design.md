import React, { useState } from "react"
import { Coffee, ShoppingBag, Menu, X, ArrowRight, Sparkles } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Navbar({ cartCount = 0, onOpenCart, onOpenOrderModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-secondary-background">
      {/* Top Announcement Bar */}
      <div className="bg-main border-b-2 border-border py-1.5 px-4 text-center text-xs md:text-sm font-heading flex items-center justify-center gap-2 text-main-foreground">
        <Sparkles className="size-4 animate-bounce" />
        <span>FRESH ROAST ALERT: Single-Origin Ethiopian Yirgacheffe just dropped!</span>
        <span className="hidden sm:inline-block font-bold underline cursor-pointer" onClick={onOpenOrderModal}>
          Shop Now &rarr;
        </span>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg md:text-xl font-heading tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="flex size-10 items-center justify-center rounded-base border-2 border-border bg-main shadow-shadow text-main-foreground">
            <Coffee className="size-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-lg tracking-wider">{siteConfig.name}</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/70">Est. 2024</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-1 lg:gap-2">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-base border-2 border-transparent px-3 py-1.5 text-sm font-heading transition-all hover:bg-main hover:text-main-foreground hover:border-border"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label={`Open shopping cart with ${cartCount} items`}
            className="relative flex items-center justify-center size-10 rounded-base border-2 border-border bg-secondary-background shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all cursor-pointer"
          >
            <ShoppingBag className="size-5 stroke-[2.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border-2 border-border bg-main text-[11px] font-extrabold text-main-foreground">
                {cartCount}
              </span>
            )}
          </button>

          {/* Order Online Button */}
          <Button
            variant="default"
            size="default"
            onClick={onOpenOrderModal}
            className="font-heading"
          >
            Order Online <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Open shopping cart"
            className="relative flex items-center justify-center size-9 rounded-base border-2 border-border bg-secondary-background shadow-shadow"
          >
            <ShoppingBag className="size-4 stroke-[2.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full border-2 border-border bg-main text-[10px] font-extrabold text-main-foreground">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex items-center justify-center size-10 rounded-base border-2 border-border bg-secondary-background shadow-shadow"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Panel */}
      {mobileMenuOpen && (
        <div className="border-t-2 border-border bg-secondary-background px-4 py-6 md:hidden animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-base border-2 border-border bg-background p-3 font-heading text-base hover:bg-main hover:text-main-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenOrderModal()
                }}
                className="w-full justify-center font-heading"
              >
                Order Online Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
