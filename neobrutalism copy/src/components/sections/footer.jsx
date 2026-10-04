import React from "react"
import { Coffee, MapPin, Clock, Phone, Mail, Globe, Share2, MessageCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-secondary-background pt-16 pb-8 text-foreground">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b-2 border-border">
          
          {/* Brand Info Column */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-base border-2 border-border bg-main shadow-shadow text-main-foreground">
                <Coffee className="size-6 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-2xl tracking-wider font-heading">{siteConfig.name}</span>
            </a>
            
            <p className="text-sm font-base text-foreground/80 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                aria-label="Website"
                className="flex size-9 items-center justify-center rounded-base border-2 border-border bg-background shadow-shadow hover:bg-main hover:text-main-foreground transition-all"
              >
                <Globe className="size-4 stroke-[2.5]" />
              </a>
              <a 
                href="#" 
                aria-label="Social Share"
                className="flex size-9 items-center justify-center rounded-base border-2 border-border bg-background shadow-shadow hover:bg-main hover:text-main-foreground transition-all"
              >
                <Share2 className="size-4 stroke-[2.5]" />
              </a>
              <a 
                href="#" 
                aria-label="Community Chat"
                className="flex size-9 items-center justify-center rounded-base border-2 border-border bg-background shadow-shadow hover:bg-main hover:text-main-foreground transition-all"
              >
                <MessageCircle className="size-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-heading font-extrabold text-base uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-base">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline hover:text-main transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours Column */}
          <div className="md:col-span-5 flex flex-col space-y-3">
            <h4 className="font-heading font-extrabold text-base uppercase tracking-wider text-foreground">
              Visit Our Flagship Café
            </h4>
            
            <div className="space-y-2 text-sm font-base text-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-main shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{siteConfig.contact.address}</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="size-4 text-main shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{siteConfig.contact.hours}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="size-4 text-main shrink-0 stroke-[2.5]" />
                <span>{siteConfig.contact.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="size-4 text-main shrink-0 stroke-[2.5]" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <Badge variant="default" className="text-xs">
                ★ COFFEE BAR & ROASTERY OPEN DAILY
              </Badge>
            </div>
          </div>

        </div>

        {/* Legal & Copyright bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-foreground/70 font-base gap-4">
          <p>© {new Date().getFullYear()} ROAST & RITUAL Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Shipping & Returns</a>
          </div>
        </div>

      </Container>
    </footer>
  )
}
