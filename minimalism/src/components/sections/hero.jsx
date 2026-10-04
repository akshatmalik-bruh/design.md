import React from "react"
import { ArrowRight, Terminal } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LineReveal } from "@/components/motion/line_reveal"
import { BlurReveal } from "@/components/motion/blur_reveal"

export function Hero({ onGetStarted, onTryPlayground }) {
  return (
    <Section variant="default" bordered={false} className="pt-12 md:pt-20 pb-16">
      <Container>
        <div className="flex flex-col items-start space-y-6 max-w-3xl">
          
          {/* Choreography 1: Release Badge */}
          <BlurReveal delay={0.1}>
            <Badge variant="subtle" className="gap-2 py-1 px-2.5 font-mono text-xs">
              <span className="size-2 rounded-full bg-success inline-block" />
              <span>SYNAPSE v2.4 ENGINE RELEASED</span>
            </Badge>
          </BlurReveal>

          {/* Choreography 2: Line Reveal Headline */}
          <LineReveal delay={0.25} className="text-4xl sm:text-5xl md:text-display font-medium tracking-tight leading-[1.1] text-fg1">
            Autonomous Intelligence. Zero Overhead.
          </LineReveal>

          {/* Choreography 3: Subtitle Blur Reveal */}
          <BlurReveal delay={0.4} distance={16}>
            <p className="text-base sm:text-lg text-fg2 font-normal leading-relaxed max-w-prose">
              A quiet, high-throughput AI engine designed for developers and product teams who require deterministic reasoning, sub-50ms latency, and on-premises privacy.
            </p>
          </BlurReveal>

          {/* Choreography 4: Actions */}
          <BlurReveal delay={0.55} distance={16}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <Button 
                variant="inverted" 
                size="lg"
                onClick={onGetStarted}
              >
                Get Free API Key <ArrowRight className="size-4" />
              </Button>
              <Button 
                variant="default" 
                size="lg"
                onClick={onTryPlayground}
              >
                Launch Interactive Demo
              </Button>
            </div>
          </BlurReveal>

          {/* Choreography 5: Metric Highlights */}
          <BlurReveal delay={0.7} distance={16} className="w-full">
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-line-subtle w-full text-xs font-mono text-fg2">
              <div>
                <div className="text-fg1 font-medium text-sm">38ms P99</div>
                <div>First token latency</div>
              </div>
              <div>
                <div className="text-fg1 font-medium text-sm">100% JSON</div>
                <div>Deterministic schema</div>
              </div>
              <div>
                <div className="text-fg1 font-medium text-sm">SOC2 Type II</div>
                <div>Zero data logging</div>
              </div>
              <div>
                <div className="text-fg1 font-medium text-sm">128K Context</div>
                <div>Sub-quadratic RAG</div>
              </div>
            </div>
          </BlurReveal>

        </div>

        {/* Choreography 6: Terminal Mockup Reveal */}
        <BlurReveal delay={0.85} distance={24} className="mt-16 w-full">
          <div className="w-full rounded-lg border border-line-subtle bg-surface-1 overflow-hidden font-mono text-xs text-fg1">
            <div className="flex items-center justify-between px-4 py-3 border-b border-line-subtle bg-surface-2 text-fg2">
              <div className="flex items-center gap-2">
                <Terminal className="size-4 text-fg2" />
                <span className="text-fg1 font-medium">synapse-cli v2.4.0</span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="text-success font-medium">● CONNECTED (gRPC)</span>
                <span>LATENCY: 34ms</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 overflow-x-auto bg-bg">
              <div className="text-fg3">// 1. Initialize Synapse High-Throughput Client</div>
              <div className="text-fg1">
                <span className="text-blue-600 font-medium">import</span> &#123; SynapseClient &#125; <span className="text-blue-600 font-medium">from</span> <span className="text-emerald-600">'@synapse-ai/sdk'</span>;
              </div>
              <div className="text-fg1">
                <span className="text-purple-600 font-medium">const</span> client = <span className="text-blue-600 font-medium">new</span> <span className="text-yellow-600 font-medium">SynapseClient</span>(&#123; apiKey: process.env.<span className="text-fg1 font-bold">SYNAPSE_KEY</span> &#125;);
              </div>
              <div className="pt-2 text-fg3">// 2. Execute Deterministic Tool Call with strict JSON Schema</div>
              <div className="text-fg1">
                <span className="text-purple-600 font-medium">const</span> stream = <span className="text-purple-600 font-medium">await</span> client.agents.<span className="text-yellow-600 font-medium">run</span>(&#123;
              </div>
              <div className="pl-4 text-fg2">
                model: <span className="text-emerald-600">'synapse-reasoning-v1'</span>,<br/>
                temperature: <span className="text-orange-600">0.0</span>,<br/>
                enforceSchema: <span className="text-purple-600">true</span>,<br/>
                prompt: <span className="text-emerald-600">'Refactor legacy SQL query to sub-millisecond CTE graph'</span>
              </div>
              <div className="text-fg1">&#125;);</div>

              <div className="pt-2 border-t border-line-subtle text-fg2 flex items-center justify-between text-[11px]">
                <span className="text-emerald-600 font-medium">✓ Stream completed in 38ms. 0 Schema violations detected.</span>
                <span className="text-fg3">Memory: 14.2 MB</span>
              </div>
            </div>
          </div>
        </BlurReveal>

      </Container>
    </Section>
  )
}
