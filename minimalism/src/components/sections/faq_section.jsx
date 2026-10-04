import React from "react"
import { HelpCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { AccordionItem } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function FAQSection() {
  return (
    <Section id="faq" variant="default" bordered className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-start space-y-3 mb-12 max-w-2xl">
          <Badge variant="subtle" className="gap-1.5 font-mono text-xs">
            <HelpCircle className="size-3.5 text-fg1" />
            <span>DOCUMENTATION & FAQ</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg1">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-fg2 font-normal max-w-prose">
            Clear technical answers regarding model architecture, latency bounds, and local cluster security.
          </p>
        </div>

        {/* FAQ Stack max-w-3xl */}
        <div className="max-w-3xl space-y-2">
          {siteConfig.faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              title={faq.question}
              defaultOpen={idx === 0}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </div>

      </Container>
    </Section>
  )
}
