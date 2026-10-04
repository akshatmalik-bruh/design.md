import React from "react"
import { BarChart3, Check } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"

export function BenchmarksTable() {
  return (
    <Section id="benchmarks" variant="default" bordered className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-start space-y-3 mb-12 max-w-2xl">
          <Badge variant="subtle" className="gap-1.5 font-mono text-xs">
            <BarChart3 className="size-3.5 text-fg1" />
            <span>EMPIRICAL BENCHMARKS</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg1">
            Independent Performance Metrics
          </h2>
          <p className="text-sm md:text-base text-fg2 font-normal max-w-prose">
            Measured under standardized 128K token payload workloads on identical GPU hardware clusters.
          </p>
        </div>

        {/* Minimalist HTML Table */}
        <div className="overflow-x-auto rounded-md border border-line bg-bg">
          <table className="w-full border-collapse text-sm text-left">
            <thead>
              <tr className="border-b border-line bg-surface-1">
                <th className="py-3 px-4 text-xs font-medium text-fg2 font-mono uppercase">Model Architecture</th>
                <th className="py-3 px-4 text-xs font-medium text-fg2 font-mono uppercase text-right">P99 Latency</th>
                <th className="py-3 px-4 text-xs font-medium text-fg2 font-mono uppercase text-right">Context Window</th>
                <th className="py-3 px-4 text-xs font-medium text-fg2 font-mono uppercase text-right">Schema Accuracy</th>
                <th className="py-3 px-4 text-xs font-medium text-fg2 font-mono uppercase text-right">Cost / 1K Tokens</th>
              </tr>
            </thead>
            <tbody>
              {siteConfig.benchmarks.map((row, idx) => {
                const isSynapse = row.model.includes("Synapse")

                return (
                  <tr 
                    key={idx} 
                    className={`border-b border-line-subtle transition-colors ${
                      isSynapse ? "bg-surface-2 font-medium" : "hover:bg-surface-1"
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono text-fg1 flex items-center gap-2">
                      {isSynapse && (
                        <span className="flex size-4 items-center justify-center rounded-full bg-fg1 text-bg text-[10px]">
                          ✓
                        </span>
                      )}
                      <span>{row.model}</span>
                      {isSynapse && <Badge variant="dark" className="text-[10px] py-0 px-1.5 ml-2">Our Model</Badge>}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums font-mono text-fg1">{row.latency}</td>
                    <td className="py-3.5 px-4 text-right tabular-nums font-mono text-fg2">{row.context}</td>
                    <td className="py-3.5 px-4 text-right tabular-nums font-mono text-fg1">{row.accuracy}</td>
                    <td className="py-3.5 px-4 text-right tabular-nums font-mono text-fg2">{row.cost}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-fg3 font-mono">
          <span>* Benchmark suite evaluated on HumanEval + MBPP code reasoning tests.</span>
          <span>Updated October 2026</span>
        </div>

      </Container>
    </Section>
  )
}
