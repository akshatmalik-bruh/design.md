import React from "react"
import { Cpu, ExternalLink } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-bg py-12 text-fg1">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-line-subtle">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 flex flex-col space-y-3">
            <a href="#" className="flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-fg1">
              <div className="flex size-7 items-center justify-center rounded-sm border border-line-strong bg-fg1 text-bg">
                <Cpu className="size-4" />
              </div>
              <span>{siteConfig.name}</span>
            </a>
            
            <p className="text-sm text-fg2 font-normal leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2 text-xs font-mono text-fg3">
              Engine v2.4 • SOC2 Type II Certified
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 flex flex-col space-y-2.5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-fg1">
              Product Navigation
            </h4>
            <ul className="space-y-2 text-sm text-fg2 font-normal">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-fg1 hover:underline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Status Column */}
          <div className="md:col-span-4 flex flex-col space-y-2.5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-fg1">
              Developer Resources
            </h4>
            
            <ul className="space-y-2 text-sm text-fg2 font-normal">
              <li>
                <a href={siteConfig.contact.docsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-fg1 transition-colors">
                  <span>API Documentation</span>
                  <ExternalLink className="size-3 text-fg3" />
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.statusUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-fg1 transition-colors">
                  <span>System Status (99.99%)</span>
                  <span className="size-2 rounded-full bg-success inline-block" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fg1 transition-colors">TypeScript SDK GitHub</a>
              </li>
              <li>
                <a href="#" className="hover:text-fg1 transition-colors">Python Client PyPI</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-fg3 font-mono gap-4">
          <p>© {new Date().getFullYear()} SYNAPSE AI Inc. Quiet Minimalist Intelligence.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-fg1">Privacy Policy</a>
            <a href="#" className="hover:text-fg1">Terms of Service</a>
            <a href="#" className="hover:text-fg1">Security Disclosures</a>
          </div>
        </div>

      </Container>
    </footer>
  )
}
