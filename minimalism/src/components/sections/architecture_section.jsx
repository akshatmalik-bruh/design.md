import React from "react"
import { Layers, ArrowRight } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { StaggerReveal } from "@/components/motion/stagger_reveal"

export function ArchitectureSection() {
  return (
    <Section id="architecture" variant="subtle" bordered className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-start space-y-3 mb-16 max-w-2xl">
          <Badge variant="subtle" className="gap-1.5 font-mono text-xs">
            <Layers className="size-3.5 text-fg1" />
            <span>SYSTEM ARCHITECTURE</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg1">
            The 4-Stage Execution Pipeline
          </h2>
          <p className="text-sm md:text-base text-fg2 font-normal max-w-prose">
            Every prompt passes through an isolated 4-stage pipeline that guarantees schema correctness before streaming.
          </p>
        </div>

        {/* 4 Steps Staggered Grid */}
        <StaggerReveal stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.architectureSteps.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between p-5 rounded-md border border-line bg-bg space-y-4 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-fg1 px-2 py-0.5 rounded-sm border border-line-strong bg-surface-2">
                    {item.step}
                  </span>
                  {idx < siteConfig.architectureSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block size-4 text-fg3" />
                  )}
                </div>

                <h3 className="font-medium text-base text-fg1 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-fg2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-line-subtle text-[11px] font-mono text-fg3">
                Pipeline Stage {idx + 1} &rarr;
              </div>
            </div>
          ))}
        </StaggerReveal>

      </Container>
    </Section>
  )
}
