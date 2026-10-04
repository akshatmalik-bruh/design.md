import React, { useState } from "react"
import { HelpCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { AccordionItem } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function FAQSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq" variant="default" className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="gap-1.5 px-3 py-1">
            <HelpCircle className="size-4" /> FAQ & HELP
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-base max-w-2xl">
            Everything you need to know about our micro-roasts, grind options, shipping speeds, and café locations.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="max-w-3xl mx-auto space-y-4">
          {siteConfig.faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              id={idx}
              title={faq.question}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </div>

      </Container>
    </Section>
  )
}
