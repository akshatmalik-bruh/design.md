import React from "react"
import { Code2, Zap, Shield, GitBranch, Database, Cpu, Sparkles } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { StaggerReveal } from "@/components/motion/stagger_reveal"
import { TextHighlight } from "@/components/motion/text_highlight"

const iconMap = {
  Code2: Code2,
  Zap: Zap,
  Shield: Shield,
  GitBranch: GitBranch,
  Database: Database,
  Cpu: Cpu
}

export function FeatureGrid() {
  return (
    <Section id="features" variant="default" bordered className="py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16 max-w-2xl">
          <Badge variant="subtle" className="gap-1.5 font-mono text-xs">
            <Sparkles className="size-3.5 text-fg1" />
            <span>CORE CAPABILITIES</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg1">
            Engineered for Production Reliability
          </h2>
          <TextHighlight className="text-sm md:text-base text-fg2 font-normal max-w-prose">
            Built from the ground up to eliminate non-deterministic output, reducing latency while preserving absolute data isolation.
          </TextHighlight>
        </div>

        {/* Staggered Feature Cards Grid */}
        <StaggerReveal stagger={0.08} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.features.map((item) => {
            const IconComponent = iconMap[item.icon] || Code2

            return (
              <div key={item.id} className="flex flex-col space-y-3 p-4 rounded-md border border-line-subtle bg-surface-1 hover:border-line transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex size-8 items-center justify-center rounded-sm border border-line bg-bg text-fg1">
                    <IconComponent className="size-4" />
                  </div>
                  <Badge variant="subtle" className="text-[10px] font-mono">
                    {item.tag}
                  </Badge>
                </div>

                <h3 className="font-medium text-base text-fg1 pt-1">
                  {item.title}
                </h3>

                <p className="text-sm text-fg2 leading-relaxed font-normal max-w-prose">
                  {item.description}
                </p>
              </div>
            )
          })}
        </StaggerReveal>

      </Container>
    </Section>
  )
}
